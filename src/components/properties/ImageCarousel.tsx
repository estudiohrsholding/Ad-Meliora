'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface ImageCarouselProps {
  images: string[];
  propertyId: string;
  propertyName?: string;
}

export function ImageCarousel({ images, propertyId, propertyName }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const hasMultipleImages = images.length > 1;

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const goToPrevious = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  // Fallback image if no images provided
  const displayImage = images.length > 0 ? images[currentIndex] : null;

  return (
    <div 
      ref={carouselRef}
      className="relative h-48 w-full overflow-hidden group"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Image Container - Clickable Link */}
      <Link 
        href={`/properties/${propertyId}`} 
        className="block relative h-full w-full"
        onClick={(e) => {
          // Allow navigation unless clicking on navigation controls
          const target = e.target as HTMLElement;
          if (target.closest('button')) {
            e.preventDefault();
          }
        }}
      >
        <div className="relative h-full w-full bg-gradient-to-br from-subtle-beige to-beige-light">
          {displayImage ? (
            <img
              src={displayImage}
              alt={propertyName || 'Property image'}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="text-5xl mb-2 opacity-50">🏠</div>
                <div className="text-xs opacity-70">Property View</div>
              </div>
            </div>
          )}
        </div>
      </Link>

      {/* Navigation Arrows - Only show if multiple images */}
      {hasMultipleImages && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#B8860B]/80 hover:bg-[#B8860B] text-white p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 z-20 pointer-events-auto"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#B8860B]/80 hover:bg-[#B8860B] text-white p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 z-20 pointer-events-auto"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Dots Indicator - Only show if multiple images */}
      {hasMultipleImages && images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 pointer-events-none">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => goToSlide(index, e)}
              className={`w-2 h-2 rounded-full transition-all duration-200 pointer-events-auto ${
                index === currentIndex
                  ? 'bg-[#B8860B] w-6'
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter - Only show if multiple images */}
      {hasMultipleImages && (
        <div className="absolute top-3 right-3 bg-[#B8860B]/80 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm z-20 pointer-events-none">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}


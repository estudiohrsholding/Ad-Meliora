'use client';

import { useState, useRef, useEffect } from 'react';
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


  // Ensure currentIndex is reset when images change
  useEffect(() => {
    if (images.length > 0 && currentIndex >= images.length) {
      setCurrentIndex(0);
    }
  }, [images, currentIndex]);

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
    if (images.length > 0) {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  const goToNext = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (images.length > 0) {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  const goToSlide = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  };

  // Fallback image if no images provided
  // Ensure currentIndex is within bounds and reset to 0 if out of bounds
  const safeIndex = images.length > 0 
    ? Math.max(0, Math.min(currentIndex, images.length - 1)) 
    : 0;
  
  // Get the image path and ensure it's a valid string
  const displayImage = images.length > 0 && images[safeIndex] ? images[safeIndex] : null;

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
        className="block relative h-full w-full cursor-pointer"
        onClick={(e) => {
          // Prevent navigation if clicking on navigation controls, dots, or counter
          const target = e.target as HTMLElement;
          if (
            target.closest('button') || 
            target.closest('.carousel-nav') ||
            target.closest('.carousel-dots') ||
            target.closest('.carousel-counter')
          ) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <div className="relative h-full w-full bg-gradient-to-br from-subtle-beige to-beige-light overflow-hidden">
          {displayImage ? (
            <img
              src={displayImage}
              alt={propertyName || 'Property image'}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                const parent = target.parentElement;
                if (parent) {
                  target.style.display = 'none';
                  // Show placeholder
                  if (!parent.querySelector('.image-placeholder')) {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'image-placeholder absolute inset-0 flex items-center justify-center text-gray-400';
                    placeholder.innerHTML = `
                      <div class="text-center">
                        <div class="text-5xl mb-2 opacity-50">🏠</div>
                        <div class="text-xs opacity-70">Image not available</div>
                      </div>
                    `;
                    parent.appendChild(placeholder);
                  }
                }
              }}
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="text-5xl mb-2 opacity-50">🏠</div>
                <div className="text-xs opacity-70">
                  {images.length === 0 ? 'No images available' : 'Loading image...'}
                </div>
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
            className="carousel-nav absolute left-2 top-1/2 -translate-y-1/2 bg-[#B8860B]/80 hover:bg-[#B8860B] text-white p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 z-30 pointer-events-auto"
            aria-label="Previous image"
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={goToNext}
            className="carousel-nav absolute right-2 top-1/2 -translate-y-1/2 bg-[#B8860B]/80 hover:bg-[#B8860B] text-white p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 z-30 pointer-events-auto"
            aria-label="Next image"
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Dots Indicator - Only show if multiple images */}
      {hasMultipleImages && images.length > 1 && (
        <div className="carousel-dots absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-30 pointer-events-none">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => goToSlide(index, e)}
              className={`carousel-dots w-2 h-2 rounded-full transition-all duration-200 pointer-events-auto ${
                index === currentIndex
                  ? 'bg-[#B8860B] w-6'
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to image ${index + 1}`}
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            />
          ))}
        </div>
      )}

      {/* Image Counter - Only show if multiple images */}
      {hasMultipleImages && (
        <div className="carousel-counter absolute top-3 right-3 bg-[#B8860B]/80 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm z-30 pointer-events-none">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}


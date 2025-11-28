'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect root path to /home
    router.replace('/home');
  }, [router]);

  // Show minimal loading state during redirect
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="text-gray-400 mb-4">
          <div className="w-16 h-16 mx-auto opacity-50 animate-pulse">🏠</div>
        </div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
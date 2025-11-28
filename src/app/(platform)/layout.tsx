'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings, BarChart3, Webhook, Bot, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Settings },
  ];

  const isActive = (href: string) => {
    return pathname === href || pathname?.startsWith(href + '/');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar - Management Shell */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-40 shadow-soft">
        <div className="flex flex-col h-full">
          {/* Logo/Brand */}
          <div className="p-6 border-b border-gray-200">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-admeliora-gold rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">AM</span>
              </div>
              <span className="text-gray-950 font-bold text-lg">Ad Meliora</span>
            </Link>
            <p className="text-xs text-gray-500 mt-1">Control Panel</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    active
                      ? 'bg-gradient-to-r from-admeliora-gold/20 to-admeliora-gold-light/20 text-gray-950 border border-admeliora-gold/30'
                      : 'text-gray-600 hover:text-admeliora-gold hover:bg-beige-light/50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-200">
            <Button
              variant="outline"
              className="w-full border-gray-300 text-gray-700 hover:bg-beige-light hover:text-admeliora-gold hover:border-admeliora-gold"
              asChild
            >
              <Link href="/">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Link>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen bg-white">
        {children}
      </main>
    </div>
  );
}


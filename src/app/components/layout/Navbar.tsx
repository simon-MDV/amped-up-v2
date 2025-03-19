'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, Search, User } from 'lucide-react';
import { Dialog } from '@headlessui/react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userType, setUserType] = useState<string | null>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedUserType = sessionStorage.getItem('userType');
    if (savedUserType) {
      setUserType(savedUserType);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleUserTypeSelect = (type: string) => {
    sessionStorage.setItem('userType', type);
    setUserType(type);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-gray-200">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-purple-600">AmpedUp</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          <Link
            href="/search/venues"
            className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
          >
            Find Venues
          </Link>
          <Link
            href="/search/artists"
            className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
          >
            Discover Artists
          </Link>
          <Link
            href="/search/events"
            className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
          >
            Upcoming Events
          </Link>
          <button
            onClick={() => handleUserTypeSelect('artist')}
            className={`text-sm font-medium transition-colors ${
              userType === 'artist' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
            }`}
          >
            For Artists
          </button>
          <button
            onClick={() => handleUserTypeSelect('venue')}
            className={`text-sm font-medium transition-colors ${
              userType === 'venue' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
            }`}
          >
            For Venues
          </button>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12">
          <div className="relative flex items-center">
            <Search className="absolute left-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search venues, artists, or events..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-[300px] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-600 placeholder:text-gray-400 text-sm"
            />
          </div>
        </div>

        {/* User Menu */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 p-2.5 text-gray-700 hover:shadow-md hover:border-gray-300 transition-all cursor-pointer"
            >
              <User className="h-6 w-6 cursor-pointer" />
              <div className="flex flex-col gap-1.5 cursor-pointer">
                <div className="h-[2px] w-4 bg-gray-600 rounded-full"></div>
                <div className="h-[2px] w-4 bg-gray-600 rounded-full"></div>
                <div className="h-[2px] w-4 bg-gray-600 rounded-full"></div>
              </div>
            </button>

            {/* Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                <Link
                  href="/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-purple-600">AmpedUp</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/search/venues"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                >
                  Find Venues
                </Link>
                <Link
                  href="/search/artists"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                >
                  Discover Artists
                </Link>
                <Link
                  href="/search/events"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                >
                  Upcoming Events
                </Link>
                <button
                  onClick={() => handleUserTypeSelect('artist')}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium w-full text-left ${
                    userType === 'artist' ? 'text-purple-600 bg-purple-50' : 'text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  For Artists
                </button>
                <button
                  onClick={() => handleUserTypeSelect('venue')}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium w-full text-left ${
                    userType === 'venue' ? 'text-purple-600 bg-purple-50' : 'text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  For Venues
                </button>
              </div>
              <div className="py-6">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar; 
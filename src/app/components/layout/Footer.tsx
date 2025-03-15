'use client';

import Link from 'next/link';
import { Music, Building2, Calendar, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/venue" className="text-gray-600 hover:text-purple-600 flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            <span>For Venues</span>
          </Link>
          <Link href="/artist" className="text-gray-600 hover:text-purple-600 flex items-center gap-2">
            <Music className="h-5 w-5" />
            <span>For Artists</span>
          </Link>
          <Link href="/listener" className="text-gray-600 hover:text-purple-600 flex items-center gap-2">
            <Users className="h-5 w-5" />
            <span>Find Live Music</span>
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} AmpedUp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
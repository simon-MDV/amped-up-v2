'use client';

import { useState } from 'react';
import { Search, MapPin, Music } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="relative isolate">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070"
          alt="Concert background"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
      </div>

      {/* Purple gradient overlay */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-600 to-pink-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Hero content */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Find and Book Live Music
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Connect with local venues and artists. Book performances or discover upcoming live music events near you.
          </p>

          {/* Search Section */}
          <div className="mt-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative flex-1">
                <Music className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search artists, venues, or events..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-600 placeholder:text-gray-400 text-sm bg-white/95 backdrop-blur-sm"
                />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10 pointer-events-none" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-600 placeholder:text-gray-400 text-sm bg-white/95 backdrop-blur-sm"
                />
              </div>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Discover Artists Card */}
            <Link href="/search/artists" className="relative group">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070"
                  alt="Live band performing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">DISCOVER ARTISTS</h3>
                  <p className="mt-2 text-sm text-gray-200">Find talented musicians and bands in your area</p>
                  <button className="mt-4 w-full rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-500">
                    Browse Artists
                  </button>
                </div>
              </div>
            </Link>

            {/* Explore Venues Card */}
            <Link href="/search/venues" className="relative group">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070"
                  alt="Concert venue"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">EXPLORE VENUES</h3>
                  <p className="mt-2 text-sm text-gray-200">Browse local venues looking for performers</p>
                  <button className="mt-4 w-full rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-500">
                    Find Venues
                  </button>
                </div>
              </div>
            </Link>

            {/* Upcoming Events Card */}
            <Link href="/search/events" className="relative group">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070"
                  alt="Concert crowd"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">UPCOMING EVENTS</h3>
                  <p className="mt-2 text-sm text-gray-200">Find live music events happening near you</p>
                  <button className="mt-4 w-full rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-500">
                    View Events
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 
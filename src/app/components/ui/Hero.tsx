'use client';

import { useState } from 'react';
import { Search, MapPin, Music, Calendar } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="relative isolate">
      {/* Background with gradient */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-600 to-pink-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Hero content */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Find and Book Live Music
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Connect with local venues and artists. Book performances or discover upcoming live music events near you.
          </p>

          {/* Search Section */}
          <div className="mt-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search artists, venues, or events..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-600 placeholder:text-gray-400 text-sm"
                />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-600 placeholder:text-gray-400 text-sm"
                />
              </div>
              <button className="flex-none px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative group">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
                <div className="h-full w-full object-cover object-center bg-gradient-to-r from-purple-500 to-pink-500">
                  <div className="flex h-full items-center justify-center">
                    <Music className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="mt-6 text-sm text-gray-500">DISCOVER ARTISTS</h3>
              <p className="text-base font-semibold text-gray-900">Find talented musicians and bands in your area</p>
            </div>

            <div className="relative group">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
                <div className="h-full w-full object-cover object-center bg-gradient-to-r from-blue-500 to-purple-500">
                  <div className="flex h-full items-center justify-center">
                    <MapPin className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="mt-6 text-sm text-gray-500">EXPLORE VENUES</h3>
              <p className="text-base font-semibold text-gray-900">Browse local venues looking for performers</p>
            </div>

            <div className="relative group">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
                <div className="h-full w-full object-cover object-center bg-gradient-to-r from-pink-500 to-red-500">
                  <div className="flex h-full items-center justify-center">
                    <Calendar className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="mt-6 text-sm text-gray-500">UPCOMING EVENTS</h3>
              <p className="text-base font-semibold text-gray-900">Find live music events happening near you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 
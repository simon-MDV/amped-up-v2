'use client';

import { MagnifyingGlassIcon, UserGroupIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const SAMPLE_ARTISTS = [
  {
    id: 1,
    name: 'The Midnight Jammers',
    genre: 'Jazz Fusion',
    location: 'New York, NY',
    members: '4',
    image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    upcomingEvents: [
      { date: 'Mar 25', venue: 'Blue Note Jazz Club' },
      { date: 'Apr 2', venue: 'The Jazz Corner' }
    ]
  },
  {
    id: 2,
    name: 'Electric Storm',
    genre: 'Rock',
    location: 'Los Angeles, CA',
    members: '5',
    image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    upcomingEvents: [
      { date: 'Mar 28', venue: 'The Roxy Theatre' },
      { date: 'Apr 5', venue: 'Whisky a Go Go' }
    ]
  },
  {
    id: 3,
    name: 'Luna & The Satellites',
    genre: 'Indie Pop',
    location: 'Austin, TX',
    members: '3',
    image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    upcomingEvents: [
      { date: 'Mar 30', venue: 'Stubb\'s Bar-B-Q' },
      { date: 'Apr 8', venue: 'Mohawk Austin' }
    ]
  },
];

const GENRES = ['All Genres', 'Rock', 'Jazz', 'Pop', 'Electronic', 'Hip Hop', 'Classical', 'Folk'];
const GROUP_SIZES = ['Any Size', 'Solo', 'Duo', '3-4', '5+'];

export default function ArtistsSearch() {
  const [isListener, setIsListener] = useState(false);

  useEffect(() => {
    const userType = sessionStorage.getItem('userType');
    setIsListener(userType === 'listener');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {isListener ? 'Discover Artists Near You' : 'Find Artists for Your Venue'}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {isListener 
              ? 'Follow your favorite artists and never miss their shows'
              : 'Find and book talented musicians for your next event'}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search artists..."
              className="w-full rounded-lg border-0 px-4 py-3 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-600 sm:text-sm"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          </div>
          <select className="rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:w-48">
            {GENRES.map((genre) => (
              <option key={genre}>{genre}</option>
            ))}
          </select>
          <select className="rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:w-48">
            {GROUP_SIZES.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>
        </div>

        {/* Artist Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_ARTISTS.map((artist) => (
            <div
              key={artist.id}
              className="group h-[28rem] flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl"
            >
              <div className="h-60 w-full relative overflow-hidden">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center rounded-full bg-purple-600/90 px-3 py-1 text-sm text-white">
                    {artist.genre}
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">{artist.name}</h3>
                  <div className="mt-2 flex items-center text-gray-600">
                    <UserGroupIcon className="mr-2 h-5 w-5 flex-shrink-0" />
                    <span className="line-clamp-1">{artist.members} members • {artist.location}</span>
                  </div>
                </div>
                <div className="space-y-3 pt-4">
                  {isListener ? (
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-900">Upcoming Shows</div>
                      {artist.upcomingEvents.map((event, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <CalendarDaysIcon className="mr-2 h-4 w-4 flex-shrink-0 text-purple-600" />
                          <span className="line-clamp-1">{event.date} at {event.venue}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-gray-500">Available for booking</div>
                      <div className="flex items-center text-green-600">
                        <span className="h-2 w-2 rounded-full bg-green-600 mr-1"></span>
                        Now
                      </div>
                    </div>
                  )}
                  <button className="w-full rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-700">
                    {isListener ? 'Follow Artist' : 'Book Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
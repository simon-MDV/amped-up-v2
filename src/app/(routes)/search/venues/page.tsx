'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon, MapPinIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';

const SAMPLE_VENUES = [
  {
    id: 1,
    name: 'The Blue Note',
    location: 'Downtown Music District',
    type: 'Jazz Club',
    capacity: '250',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 2,
    name: 'Electric Arena',
    location: 'Westside Entertainment Zone',
    type: 'Concert Hall',
    capacity: '1500',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 3,
    name: 'The Acoustic Lounge',
    location: 'Arts District',
    type: 'Intimate Venue',
    capacity: '100',
    image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
];

const VENUE_TYPES = ['All Types', 'Concert Hall', 'Jazz Club', 'Bar & Grill', 'Theater', 'Outdoor Venue'];
const CAPACITIES = ['Any Size', '0-100', '101-500', '501-1000', '1000+'];

export default function VenuesSearch() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Find the Perfect Venue
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover and book the best music venues in your area
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search venues..."
              className="w-full rounded-lg border-0 px-4 py-3 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-600 sm:text-sm"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          </div>
          <select className="rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:w-48">
            {VENUE_TYPES.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          <select className="rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:w-48">
            {CAPACITIES.map((capacity) => (
              <option key={capacity}>{capacity}</option>
            ))}
          </select>
        </div>

        {/* Venue Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_VENUES.map((venue) => (
            <div
              key={venue.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl"
            >
              <div className="aspect-h-9 aspect-w-16 relative">
                <Image
                  src={venue.image}
                  alt={venue.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{venue.name}</h3>
                <div className="mt-2 flex items-center text-gray-600">
                  <MapPinIcon className="mr-2 h-5 w-5" />
                  {venue.location}
                </div>
                <div className="mt-2 flex items-center text-gray-600">
                  <MusicalNoteIcon className="mr-2 h-5 w-5" />
                  {venue.type} • {venue.capacity} capacity
                </div>
                <button className="mt-4 w-full rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
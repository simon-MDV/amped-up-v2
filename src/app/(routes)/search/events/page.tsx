'use client';

import Image from 'next/image';
import { MagnifyingGlassIcon, CalendarIcon, MapPinIcon, TicketIcon } from '@heroicons/react/24/outline';

const SAMPLE_EVENTS = [
  {
    id: 1,
    name: 'Summer Jazz Festival',
    date: 'Aug 15-17, 2024',
    location: 'Central Park',
    price: '$45',
    type: 'Festival',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 2,
    name: 'Rock Night Live',
    date: 'Jul 22, 2024',
    location: 'The Electric Arena',
    price: '$25',
    type: 'Concert',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 3,
    name: 'Acoustic Sessions',
    date: 'Jun 30, 2024',
    location: 'The Blue Note',
    price: '$15',
    type: 'Live Music',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
];

const EVENT_TYPES = ['All Types', 'Concert', 'Festival', 'Live Music', 'Open Mic', 'DJ Night'];
const PRICE_RANGES = ['Any Price', 'Free', '$1-25', '$26-50', '$51-100', '$100+'];

export default function EventsSearch() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Upcoming Events
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Find and book tickets for the best live music events near you
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full rounded-lg border-0 px-4 py-3 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-600 sm:text-sm"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          </div>
          <select className="rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:w-48">
            {EVENT_TYPES.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          <select className="rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:w-48">
            {PRICE_RANGES.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
        </div>

        {/* Event Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_EVENTS.map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl"
            >
              <div className="aspect-h-9 aspect-w-16 relative">
                <Image
                  src={event.image}
                  alt={event.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4 rounded-full bg-purple-600 px-3 py-1 text-sm font-medium text-white">
                  {event.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{event.name}</h3>
                <div className="mt-2 flex items-center text-gray-600">
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  {event.date}
                </div>
                <div className="mt-2 flex items-center text-gray-600">
                  <MapPinIcon className="mr-2 h-5 w-5" />
                  {event.location}
                </div>
                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700">
                  <TicketIcon className="h-5 w-5" />
                  Get Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
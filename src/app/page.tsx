import Hero from './components/ui/Hero';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, MapPin } from 'lucide-react';

const FEATURED_EVENTS = [
  {
    id: 1,
    title: 'Jazz Night at The Blue Room',
    date: 'Mar 16',
    time: '8:00 PM',
    venue: 'The Blue Room',
    location: 'New York, NY',
    category: 'Jazz',
    image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=2070'
  },
  {
    id: 2,
    title: 'Rock Revolution Festival',
    date: 'Mar 23',
    time: '7:30 PM',
    venue: 'Soundwave Arena',
    location: 'Los Angeles, CA',
    category: 'Rock',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070'
  },
  {
    id: 3,
    title: 'Electronic Music Night',
    date: 'Mar 30',
    time: '9:00 PM',
    venue: 'The Neon Club',
    location: 'Miami, FL',
    category: 'Electronic',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      {/* Featured Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Events
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Discover upcoming performances and events in your area
            </p>
          </div>

          {/* Event Cards */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {FEATURED_EVENTS.map((event) => (
              <div
                key={event.id}
                className="group relative h-[28rem] flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl"
              >
                <div className="h-60 relative overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center rounded-full bg-purple-600/90 px-3 py-1 text-sm text-white">
                      {event.category}
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {event.title}
                    </h3>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <CalendarDays className="mr-2 h-4 w-4 text-purple-600" />
                        <span>{event.date} • {event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="mr-2 h-4 w-4 text-purple-600" />
                        <span>{event.venue} • {event.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/events/${event.id}`}
                      className="block w-full rounded-lg bg-purple-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-purple-500 transition-colors"
                    >
                      Get Tickets
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Are you a venue or artist?
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Join our platform to connect with the local music scene. Book gigs, find talent, and grow your audience.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                >
                  Get started
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <Link href="/venue" className="group flex flex-col items-start rounded-xl p-4 hover:bg-gray-50 transition-all">
                <div className="rounded-md bg-purple-600/10 p-2 ring-1 ring-purple-600/20">
                  <div className="h-6 w-6 text-purple-600" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-gray-900">For Venues</dt>
                <dd className="mt-2 leading-7 text-gray-600">
                  Find the perfect artists for your venue and manage bookings efficiently.
                </dd>
                <div className="mt-4 flex items-center text-sm font-semibold text-purple-600">
                  Learn more <span className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </div>
              </Link>
              <Link href="/artist" className="group flex flex-col items-start rounded-xl p-4 hover:bg-gray-50 transition-all">
                <div className="rounded-md bg-purple-600/10 p-2 ring-1 ring-purple-600/20">
                  <div className="h-6 w-6 text-purple-600" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-gray-900">For Artists</dt>
                <dd className="mt-2 leading-7 text-gray-600">
                  Get discovered by venues and fans. Book more gigs and grow your following.
                </dd>
                <div className="mt-4 flex items-center text-sm font-semibold text-purple-600">
                  Learn more <span className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </div>
              </Link>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}

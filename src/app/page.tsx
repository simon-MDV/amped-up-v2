import Hero from './components/ui/Hero';
import Link from 'next/link';

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

          {/* Event Cards Placeholder */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 w-full bg-gradient-to-r from-purple-500 to-pink-500" />
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-x-4">
                    <time className="text-sm leading-6 text-gray-600">Mar 16</time>
                    <p className="rounded-full bg-gray-50 px-3 py-1 text-sm leading-6 text-gray-600">
                      Live Music
                    </p>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-6 text-gray-900">
                    Jazz Night at The Blue Room
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                    Join us for an evening of smooth jazz featuring local artists and special guests.
                  </p>
                </div>
                <div className="mt-4 border-t border-gray-900/5 px-6 py-4">
                  <a href="#" className="text-sm font-semibold leading-6 text-purple-600 hover:text-purple-500">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
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

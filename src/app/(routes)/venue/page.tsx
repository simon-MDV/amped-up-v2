import { Music, Calendar, Ticket, TrendingUp } from 'lucide-react';

export default function VenuePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Book Amazing Artists for Your Venue
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find and book the perfect talent for your venue. Streamline your booking process and attract more customers with live music.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                List Your Venue
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                View Artists <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600">For Venues</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Manage Your Live Music Program
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Everything you need to run a successful live music program at your venue.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Music className="h-5 w-5 flex-none text-purple-600" />
                  Find Artists
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Browse our curated list of talented musicians and bands in your area.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Calendar className="h-5 w-5 flex-none text-purple-600" />
                  Easy Scheduling
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Manage your entertainment calendar and coordinate with artists efficiently.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Ticket className="h-5 w-5 flex-none text-purple-600" />
                  Ticket Sales
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Sell tickets online and manage event promotion all in one place.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <TrendingUp className="h-5 w-5 flex-none text-purple-600" />
                  Analytics
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Track performance metrics and optimize your entertainment program.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-purple-600 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start Booking Amazing Artists Today
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-8 text-purple-100">
              Join hundreds of venues already using AmpedUp to manage their live music programs.
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="#"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-purple-600 shadow-sm hover:bg-purple-50"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
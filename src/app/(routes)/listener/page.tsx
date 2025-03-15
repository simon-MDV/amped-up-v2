import Hero from '@/app/components/ui/Hero';

export default function ListenerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      {/* Featured Events Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Live Music Near You
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Discover amazing performances happening in your area
            </p>
          </div>

          {/* Event Grid */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
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
                    Get tickets <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 
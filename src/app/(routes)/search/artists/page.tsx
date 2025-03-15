import { MagnifyingGlassIcon, MusicalNoteIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const SAMPLE_ARTISTS = [
  {
    id: 1,
    name: 'The Midnight Jammers',
    genre: 'Jazz Fusion',
    location: 'New York, NY',
    members: '4',
    image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 2,
    name: 'Electric Storm',
    genre: 'Rock',
    location: 'Los Angeles, CA',
    members: '5',
    image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 3,
    name: 'Luna & The Satellites',
    genre: 'Indie Pop',
    location: 'Austin, TX',
    members: '3',
    image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
];

const GENRES = ['All Genres', 'Rock', 'Jazz', 'Pop', 'Electronic', 'Hip Hop', 'Classical', 'Folk'];
const GROUP_SIZES = ['Any Size', 'Solo', 'Duo', '3-4', '5+'];

export default function ArtistsSearch() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Discover Amazing Artists
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Find and book talented musicians for your next event
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
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl"
            >
              <div className="aspect-h-9 aspect-w-16 relative">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{artist.name}</h3>
                <div className="mt-2 flex items-center text-gray-600">
                  <MusicalNoteIcon className="mr-2 h-5 w-5" />
                  {artist.genre}
                </div>
                <div className="mt-2 flex items-center text-gray-600">
                  <UserGroupIcon className="mr-2 h-5 w-5" />
                  {artist.members} members • {artist.location}
                </div>
                <button className="mt-4 w-full rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
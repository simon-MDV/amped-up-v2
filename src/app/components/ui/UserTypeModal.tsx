'use client';

import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Music, Users, Building2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';

const UserTypeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    // Check if user has made a selection in current session
    const hasSelectedType = sessionStorage.getItem('userType');
    
    // Show modal on fresh page load if not logged in and no selection in current session
    if (!isLoggedIn && !hasSelectedType) {
      setIsOpen(true);
    }
  }, []); // Only runs on mount (fresh page load)

  const handleSelection = (type: 'listener' | 'artist' | 'venue') => {
    sessionStorage.setItem('userType', type);
    setIsOpen(false);
    router.push(`/${type}`);
  };

  const handleClose = () => {
    // Set default type for current session
    sessionStorage.setItem('userType', 'listener');
    setIsOpen(false);
    router.push('/listener');
  };

  if (!isOpen) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
            Welcome to AmpedUp!
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Tell us what brings you here today
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {/* Listener Option */}
            <button
              onClick={() => handleSelection('listener')}
              className="flex flex-col items-center p-6 rounded-xl border-2 border-transparent bg-gray-50 hover:border-purple-600 transition-all duration-200"
            >
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="font-semibold text-gray-900">Music Fan</h3>
              <p className="mt-2 text-sm text-gray-500 text-center">
                I'm looking for local live music
              </p>
            </button>

            {/* Artist Option */}
            <button
              onClick={() => handleSelection('artist')}
              className="flex flex-col items-center p-6 rounded-xl border-2 border-transparent bg-gray-50 hover:border-purple-600 transition-all duration-200"
            >
              <Music className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="font-semibold text-gray-900">Artist</h3>
              <p className="mt-2 text-sm text-gray-500 text-center">
                I'm an artist or band looking to perform
              </p>
            </button>

            {/* Venue Option */}
            <button
              onClick={() => handleSelection('venue')}
              className="flex flex-col items-center p-6 rounded-xl border-2 border-transparent bg-gray-50 hover:border-purple-600 transition-all duration-200"
            >
              <Building2 className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="font-semibold text-gray-900">Venue</h3>
              <p className="mt-2 text-sm text-gray-500 text-center">
                I represent a venue looking for talent
              </p>
            </button>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleClose}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Continue as guest
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default UserTypeModal; 
'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, Search, User, MapPin, Music2, Building2, Calendar as CalendarIcon, Loader2, Navigation } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "@/components/ui/calendar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format, addDays } from "date-fns"
import { DateRange } from "react-day-picker"

declare global {
  interface Window {
    google: any;
    initMap?: () => void;
  }
}

const GENRES = [
  "All Genres",
  "Rock",
  "Jazz",
  "Electronic",
  "Hip Hop",
  "Classical",
  "Blues",
  "Country",
  "Pop",
  "R&B",
  "Folk",
  "World",
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [userType, setUserType] = useState<string | null>(null)
  const [isHomePage, setIsHomePage] = useState(false)
  const [searchType, setSearchType] = useState<'events' | 'artists'>('events')
  const [location, setLocation] = useState('')
  const [genre, setGenre] = useState('All Genres')
  const [date, setDate] = useState<DateRange | undefined>()
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const autocompleteInputRef = useRef<HTMLInputElement>(null);
  const [predictions, setPredictions] = useState<Array<{ place_id: string; description: string }>>([]);
  const [isLoadingPredictions, setIsLoadingPredictions] = useState(false);
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);

  useEffect(() => {
    const savedUserType = sessionStorage.getItem('userType')
    if (savedUserType) {
      setUserType(savedUserType)
    }

    setIsHomePage(window.location.pathname === '/')

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      if (window.scrollY > 50) {
        setIsExpanded(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const loadGoogleMapsAPI = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
        
        if (!apiKey) {
          console.error('Google Maps API key is not defined');
          return;
        }

        // Check if already loaded
        if (window.google?.maps?.places) {
          console.log('Google Maps API already loaded');
          setIsGoogleMapsLoaded(true);
          return;
        }

        // Create script element
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
        script.async = true;
        script.defer = true;

        // Define the callback
        window.initMap = () => {
          console.log('Google Maps API loaded via callback');
          setIsGoogleMapsLoaded(true);
        };

        // Load the script
        document.head.appendChild(script);

      } catch (error) {
        console.error('Failed to load Google Maps API:', error);
      }
    };

    loadGoogleMapsAPI();

    // Cleanup
    return () => {
      // Remove the global callback
      delete window.initMap;
    };
  }, []);

  const handleUserTypeSelect = (type: string) => {
    sessionStorage.setItem('userType', type)
    setUserType(type)
  }

  const handleSearchBarClick = () => {
    if (isScrolled) {
      setIsExpanded(true)
    }
  }

  const isScrolledAndNotExpanded = isScrolled && !isExpanded;

  // Simplified display logic
  const displayText = {
    location: {
      default: searchType === 'events' ? "Find events near you..." : "Find artists near you...",
      scrolled: "Anywhere"
    },
    date: {
      default: "When are you going?",
      scrolled: "Anytime",
      selected: date?.to && date?.from
        ? `${format(date.from, "MMM d")} - ${format(date.to, "MMM d")}`
        : date?.from 
          ? format(date.from, "MMM d, yyyy")
          : undefined
    },
    genre: {
      default: "What genre?",
      scrolled: "Any genre",
      selected: undefined
    }
  }

  const getCurrentLocation = () => {
    setIsLoadingLocation(true);
    setLocationError(null);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
            );
            const data = await response.json();
            if (data.results[0]) {
              setLocation(data.results[0].formatted_address);
            }
          } catch (error) {
            setLocationError("Error fetching location details");
          } finally {
            setIsLoadingLocation(false);
          }
        },
        (error) => {
          setLocationError("Unable to get your location");
          setIsLoadingLocation(false);
        }
      );
    } else {
      setLocationError("Geolocation is not supported by your browser");
      setIsLoadingLocation(false);
    }
  };

  const handleLocationInput = async (value: string) => {
    setLocation(value);
    if (!value.trim() || !isGoogleMapsLoaded || !window.google?.maps?.places) {
      setPredictions([]);
      return;
    }

    try {
      setIsLoadingPredictions(true);
      const autocompleteService = new window.google.maps.places.AutocompleteService();
      
      const results = await new Promise((resolve, reject) => {
        autocompleteService.getPlacePredictions(
          {
            input: value,
            types: ['(cities)'],
            componentRestrictions: { country: 'us' }
          },
          (predictions: any, status: any) => {
            if (status === 'OK') {
              resolve(predictions);
            } else {
              reject(status);
            }
          }
        );
      });

      setPredictions(results as Array<{ place_id: string; description: string }>);
    } catch (error) {
      console.error('Error fetching predictions:', error);
    } finally {
      setIsLoadingPredictions(false);
    }
  };

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-50 bg-white border-b transition-all duration-300",
      isScrolled && "shadow-sm"
    )}>
      <nav className="mx-auto flex flex-col max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className={cn(
          "flex items-center transition-all duration-300",
          isScrolledAndNotExpanded ? "h-12" : "h-16"
        )}>
        {/* Logo */}
          <div className="flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
              <span className="font-bold text-purple-600 text-2xl">AmpedUp</span>
          </Link>
        </div>

          {/* Toggle */}
          <div className="flex-1 flex justify-center">
            <div className={cn(
              "flex items-center gap-2 bg-gray-100 p-1 rounded-full transition-all duration-300",
              isScrolledAndNotExpanded && "scale-75"
            )}>
          <button
                onClick={() => setSearchType('events')}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                  searchType === 'events' ? "bg-white shadow text-gray-900" : "text-gray-600 hover:text-gray-900"
                )}
              >
                {isScrolledAndNotExpanded ? (searchType === 'events' ? 'Events' : '') : 'Events'}
          </button>
          <button
                onClick={() => setSearchType('artists')}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                  searchType === 'artists' ? "bg-white shadow text-gray-900" : "text-gray-600 hover:text-gray-900"
                )}
              >
                {isScrolledAndNotExpanded ? (searchType === 'artists' ? 'Artists' : '') : 'Artists'}
          </button>
          </div>
        </div>

          {/* Right Section */}
          <div className="flex-1 flex items-center justify-end gap-x-2">
            <button
              onClick={() => handleUserTypeSelect('artist')}
              className="text-sm font-medium rounded-full px-3 py-1.5 transition-all duration-300 border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
            >
              <span className="flex items-center gap-1.5">
                <Music2 className="h-3.5 w-3.5" />
                List your band
              </span>
            </button>
            <button
              onClick={() => handleUserTypeSelect('venue')}
              className="text-sm font-medium rounded-full px-3 py-1.5 transition-all duration-300 border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
            >
              <span className="flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5" />
                List your venue
              </span>
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-3 rounded-full border border-gray-300 p-2 transition-all duration-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50">
                  <Menu className="h-4 w-4" />
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Link href="/login" className="flex w-full">Log in</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/signup" className="flex w-full">Sign up</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Search Bar */}
        <div className={cn(
          "flex justify-center transition-all duration-300",
          isScrolledAndNotExpanded ? "pb-2 scale-90" : "pb-4"
        )}>
          <div 
            className="flex items-center divide-x border border-gray-300 rounded-full hover:shadow-md transition-shadow duration-200"
            onClick={handleSearchBarClick}
          >
            {/* Location */}
            <div className="pl-6 pr-4 relative">
              <div className="flex items-center gap-2">
                <button
                  onClick={getCurrentLocation}
                  className="hover:text-purple-600 transition-colors"
                  disabled={isLoadingLocation}
                >
                  {isLoadingLocation ? (
                    <Loader2 className="h-4 w-4 animate-spin text-purple-600" />
                  ) : (
                    <Navigation className="h-4 w-4 text-gray-400" />
                  )}
                </button>
                <div className={cn(
                  "relative",
                  isScrolledAndNotExpanded ? "w-[100px]" : "w-[180px]"
                )}>
                  <input
                    ref={autocompleteInputRef}
                    type="text"
                    value={location}
                    onChange={(e) => handleLocationInput(e.target.value)}
                    placeholder={!isScrolled ? displayText.location.default : ""}
                    className={cn(
                      "bg-transparent border-0 outline-none text-sm focus:ring-0 transition-all duration-300 w-full h-full",
                      "placeholder:text-gray-600",
                      location ? "font-medium text-gray-900" : "text-gray-600 font-normal"
                    )}
                  />
                  {!location && isScrolled && (
                    <div className="absolute inset-0 flex items-center pointer-events-none text-sm text-gray-900 font-medium">
                      {displayText.location.scrolled}
                    </div>
                  )}
                  
                  {/* Location Predictions Dropdown */}
                  {predictions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      {predictions.map((prediction) => (
                <button
                          key={prediction.place_id}
                          className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50 text-gray-700 flex items-center gap-2"
                          onClick={() => {
                            setLocation(prediction.description);
                            setPredictions([]);
                          }}
                        >
                          <MapPin className="h-3 w-3 text-gray-400" />
                          {prediction.description}
                </button>
                      ))}
                    </div>
                  )}
                  
                  {/* Loading State */}
                  {isLoadingPredictions && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50">
                      <div className="flex justify-center">
                        <Loader2 className="h-5 w-5 animate-spin text-purple-600" />
                      </div>
                    </div>
                  )}
                  
                  {/* Error Message */}
                  {locationError && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-50">
                      <p className="text-sm text-red-500">{locationError}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Date */}
            <div className="px-4">
              <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                <PopoverTrigger asChild>
                  <button className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-gray-400" />
                    <span className={cn(
                      "text-sm text-left transition-all duration-300",
                      isScrolledAndNotExpanded ? "min-w-[100px]" : "min-w-[180px]",
                      "font-medium text-gray-900",
                      !date && !isScrolled && "text-gray-600 font-normal"
                    )}>
                      {displayText.date.selected || (isScrolled ? displayText.date.scrolled : displayText.date.default)}
                    </span>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white shadow-lg" align="center">
                  <div className="flex gap-2 p-2">
                    <div className="w-[140px] py-2 flex flex-col gap-1">
                      <h3 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Quick Select
                      </h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="justify-start text-left font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        onClick={() => {
                          setDate({
                            from: new Date(),
                            to: new Date()
                          })
                          setIsCalendarOpen(false)
                        }}
                      >
                        Today
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="justify-start text-left font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        onClick={() => {
                          const tomorrow = addDays(new Date(), 1)
                          setDate({
                            from: tomorrow,
                            to: tomorrow
                          })
                          setIsCalendarOpen(false)
                        }}
                      >
                        Tomorrow
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="justify-start text-left font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        onClick={() => {
                          const today = new Date()
                          const friday = addDays(today, ((7 + 5 - today.getDay()) % 7))
                          const sunday = addDays(friday, 2)
                          setDate({
                            from: friday,
                            to: sunday
                          })
                          setIsCalendarOpen(false)
                        }}
                      >
                        This weekend
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="justify-start text-left font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        onClick={() => {
                          const nextWeek = addDays(new Date(), 7)
                          setDate({
                            from: new Date(),
                            to: nextWeek
                          })
                          setIsCalendarOpen(false)
                        }}
                      >
                        Next 7 days
                      </Button>
                    </div>
                    <div className="border-l p-2">
                      <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={1}
                        className="rounded-md border"
                        classNames={{
                          months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                          month: "space-y-4",
                          caption: "flex justify-center pt-1 relative items-center",
                          caption_label: "text-sm font-medium text-gray-900",
                          nav: "space-x-1 flex items-center",
                          nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                          nav_button_previous: "absolute left-1",
                          nav_button_next: "absolute right-1",
                          table: "w-full border-collapse space-y-1",
                          head_row: "flex",
                          head_cell: "text-gray-500 rounded-md w-8 font-normal text-[0.8rem]",
                          row: "flex w-full mt-2",
                          cell: cn(
                            "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-gray-100",
                            "first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
                          ),
                          day: cn(
                            "h-8 w-8 p-0 font-normal aria-selected:opacity-100",
                            "hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                          ),
                          day_today: "bg-gray-50 text-gray-900 font-semibold",
                          day_selected: "bg-purple-100 text-purple-600 font-semibold hover:bg-purple-200",
                          day_range_middle: "aria-selected:bg-gray-100 aria-selected:text-gray-900",
                          day_disabled: "text-gray-400",
                          day_range_end: "aria-selected:bg-purple-100 aria-selected:text-purple-600 aria-selected:font-semibold",
                          day_range_start: "aria-selected:bg-purple-100 aria-selected:text-purple-600 aria-selected:font-semibold",
                        }}
                      />
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Genre */}
            <div className="pl-4 pr-2">
              <Popover>
                <PopoverTrigger asChild>
                  <button className="flex items-center gap-2 pr-2">
                    <span className={cn(
                      "text-sm text-left transition-all duration-300",
                      isScrolledAndNotExpanded ? "min-w-[80px]" : "min-w-[120px]",
                      "font-medium text-gray-900",
                      !isScrolled && genre === "All Genres" && "text-gray-600 font-normal"
                    )}>
                      {genre === "All Genres" ? "Any genre" : genre}
                    </span>
                    <Menu className="h-4 w-4 text-gray-400" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0 bg-white">
                  <div className="py-2">
                    {GENRES.map((g) => (
                      <button
                        key={g}
                        className={cn(
                          "w-full px-4 py-2 text-sm text-left hover:bg-gray-100",
                          genre === g ? "text-purple-600 font-medium" : "text-gray-900"
                        )}
                        onClick={() => setGenre(g)}
                      >
                        {g === "All Genres" ? "Any genre" : g}
                      </button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
              </div>

            {/* Search Button */}
            <div className="pl-2">
              <Button
                className={cn(
                  "rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300",
                  isScrolledAndNotExpanded ? "px-3" : "px-6"
                )}
                size={isScrolledAndNotExpanded ? "sm" : "lg"}
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar 
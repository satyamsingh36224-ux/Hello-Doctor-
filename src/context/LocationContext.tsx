
"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Location = 'siwan' | 'gopalganj';

interface LocationContextType {
  location: Location;
  setLocation: (location: Location) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<Location>('siwan');

  // Load saved location from localStorage if available
  useEffect(() => {
    const savedLocation = localStorage.getItem('user_location') as Location;
    if (savedLocation && (savedLocation === 'siwan' || savedLocation === 'gopalganj')) {
      setLocation(savedLocation);
    }
  }, []);

  const handleSetLocation = (loc: Location) => {
    setLocation(loc);
    localStorage.setItem('user_location', loc);
  };

  return (
    <LocationContext.Provider value={{ location, setLocation: handleSetLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};

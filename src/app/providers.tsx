'use client';
import React from 'react';
import { Next13ProgressBar } from 'next13-progressbar';
import { RGPDProvider } from '@/contexts/rgpd';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <RGPDProvider>
      <Next13ProgressBar
        height="4px"
        color="#a60a33"
        options={{
          showSpinner: true,
        }}
        showOnShallow
      />
      {children}
    </RGPDProvider>
  );
};

export default Providers;

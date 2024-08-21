import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Zoom Clone",
  description: "A zoom clone conferening app using Next.js 14, Stream, and Tailwind CSS",
  icons: {
    icon: '/icons/logo.svg'
  }
};

const RouteLayout = ({ children }: {children: ReactNode}) => {
  return (
   <main>
    <StreamVideoProvider>
      {children}
    </StreamVideoProvider>


   </main>
  )
}

export default RouteLayout

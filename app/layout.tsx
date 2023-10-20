import Header from '@/components/shared/header';
import { cn } from '@/libs/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hero Bank',
  description: 'Hero Bank',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn('bg-gray-100', inter.className)}>
        <Header />
        <main className='min-h-screen flex items-center justify-center lg:pt-20'>
          {children}
        </main>
      </body>
    </html>
  );
}

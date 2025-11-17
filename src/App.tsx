import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-[#0A1128]" lang="vi">
      <Header />
      <Hero />
      <Products />
      <Features />
      <Footer />
    </div>;
}
import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg' : 'bg-transparent'}`} style={{
    height: isScrolled ? '64px' : '80px'
  }}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="text-2xl font-bold">
            <span className="text-white">AISIN</span>
          </div>
          <div className="hidden md:block h-6 w-px bg-white/20"></div>
          <div className="hidden md:block text-sm text-white/80">
            Ắc Quy Chính Hãng
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#products" className="text-white/90 hover:text-white transition-colors">
            Sản Phẩm
          </a>
          <a href="#features" className="text-white/90 hover:text-white transition-colors">
            Tính Năng
          </a>
          <a href="#about" className="text-white/90 hover:text-white transition-colors">
            Về AISIN
          </a>
          <a href="#contact" className="text-white/90 hover:text-white transition-colors">
            Liên Hệ
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-6 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:scale-105 transition-all duration-300">
            Tư Vấn Ngay
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden glass border-t border-white/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#products" className="text-white/90 hover:text-white transition-colors">
              Sản Phẩm
            </a>
            <a href="#features" className="text-white/90 hover:text-white transition-colors">
              Tính Năng
            </a>
            <a href="#about" className="text-white/90 hover:text-white transition-colors">
              Về AISIN
            </a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors">
              Liên Hệ
            </a>
            <button className="px-6 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 w-full">
              Tư Vấn Ngay
            </button>
          </nav>
        </div>}
    </header>;
}
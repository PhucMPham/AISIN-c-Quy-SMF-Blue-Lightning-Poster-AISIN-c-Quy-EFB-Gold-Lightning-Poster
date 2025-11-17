import React from 'react';
export function LightningAnimation() {
  return <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Lightning Bolt 1 */}
      <svg className="absolute top-10 left-1/4 w-32 h-64 lightning-bolt opacity-30" viewBox="0 0 100 200" fill="none">
        <path d="M50 0 L45 60 L55 60 L40 120 L50 120 L35 200 L65 100 L50 100 L70 40 L55 40 Z" fill="url(#lightning-gradient-1)" stroke="#3B82F6" strokeWidth="1" />
        <defs>
          <linearGradient id="lightning-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Lightning Bolt 2 */}
      <svg className="absolute top-20 right-1/4 w-24 h-48 lightning-strike opacity-20" viewBox="0 0 100 200" fill="none" style={{
      animationDelay: '0.5s'
    }}>
        <path d="M50 0 L45 60 L55 60 L40 120 L50 120 L35 200 L65 100 L50 100 L70 40 L55 40 Z" fill="url(#lightning-gradient-2)" stroke="#8B5CF6" strokeWidth="1" />
        <defs>
          <linearGradient id="lightning-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Lightning Bolt 3 - Mobile */}
      <svg className="absolute bottom-20 left-1/3 w-20 h-40 lightning-bolt opacity-25 hidden sm:block" viewBox="0 0 100 200" fill="none" style={{
      animationDelay: '1s'
    }}>
        <path d="M50 0 L45 60 L55 60 L40 120 L50 120 L35 200 L65 100 L50 100 L70 40 L55 40 Z" fill="url(#lightning-gradient-3)" stroke="#06B6D4" strokeWidth="1" />
        <defs>
          <linearGradient id="lightning-gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20" style={{
      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
      filter: 'blur(60px)',
      animation: 'glowPulse 4s ease-in-out infinite'
    }} />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-15" style={{
      background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
      filter: 'blur(60px)',
      animation: 'glowPulse 4s ease-in-out infinite',
      animationDelay: '1s'
    }} />
    </div>;
}
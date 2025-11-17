import React from 'react';
import { BatteryChargingIcon, ShieldCheckIcon, ZapIcon, TrendingUpIcon } from 'lucide-react';
import { Lightning } from './Lightning';
interface ProductCardProps {
  type: 'SMF' | 'EFB' | 'AGM';
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  color: 'blue' | 'gold';
}
export function ProductCard({
  type,
  title,
  subtitle,
  description,
  features,
  image,
  color
}: ProductCardProps) {
  const colorClasses = {
    blue: {
      badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      glow: 'rgba(59, 130, 246, 0.3)',
      gradient: 'from-blue-900/50 to-purple-900/50',
      hue: 230
    },
    gold: {
      badge: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      glow: 'rgba(245, 158, 11, 0.3)',
      gradient: 'from-amber-900/50 to-orange-900/50',
      hue: 45
    }
  };
  const colors = colorClasses[color];
  return <div className="group relative">
      {/* Card */}
      <div className="glass rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105">
        {/* Image Section with Lightning */}
        <div className={`relative h-80 bg-gradient-to-br ${colors.gradient} overflow-hidden`}>
          {/* WebGL Lightning Background */}
          <div className="absolute inset-0">
            <Lightning hue={colors.hue} xOffset={0} speed={0.5} intensity={1.2} size={1.5} />
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" style={{
          background: `radial-gradient(circle at center, ${colors.glow}, transparent)`,
          filter: 'blur(40px)'
        }} />

          {/* Product Image - Remove White Background */}
          <div className="relative h-full flex items-center justify-center p-8 z-20">
            <img src={image} alt={title} className="w-full h-full object-contain animate-float" style={{
            mixBlendMode: 'lighten',
            filter: 'contrast(1.1) brightness(1.05)'
          }} />
          </div>

          {/* Type Badge */}
          <div className="absolute top-4 right-4 z-30">
            <div className={`px-4 py-2 rounded-full font-bold text-sm border ${colors.badge}`}>
              {type}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-lg text-white/60 mb-4">{subtitle}</p>
          <p className="text-white/80 mb-6 leading-relaxed">{description}</p>

          {/* Features */}
          <div className="space-y-3 mb-6">
            {features.map((feature, index) => <div key={index} className="flex items-start space-x-3">
                <div className={`mt-1 p-1 rounded-full ${colors.badge}`}>
                  <ZapIcon size={12} />
                </div>
                <span className="text-sm text-white/80">{feature}</span>
              </div>)}
          </div>

          {/* CTA Button */}
          <button className={`w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${color === 'blue' ? 'from-blue-500 to-purple-600' : 'from-amber-500 to-orange-600'} hover:shadow-xl hover:scale-105 transition-all duration-300`}>
            Xem Chi Tiết
          </button>
        </div>
      </div>
    </div>;
}
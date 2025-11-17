import React from 'react';
import { LightningAnimation } from './LightningAnimation';
import { Galaxy } from './Galaxy';
import { BatteryChargingIcon, ZapIcon } from 'lucide-react';
export function Hero() {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128] via-[#1a2332] to-[#0A1128]"></div>

      {/* Galaxy Background Effect */}
      <div className="absolute inset-0 opacity-60">
        <Galaxy hueShift={220} density={0.8} speed={0.3} glowIntensity={0.5} saturation={0.8} twinkleIntensity={0.5} rotationSpeed={0.02} mouseInteraction={true} mouseRepulsion={true} repulsionStrength={3} transparent={true} />
      </div>

      {/* Lightning Animation */}
      <LightningAnimation />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
      backgroundSize: '50px 50px'
    }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
            <ZapIcon size={16} className="text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">
              CÔNG NGHỆ TIÊN TIẾN
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{
          animationDelay: '0.1s'
        }}>
            Nguồn Năng Lượng Mới
            <br />
            <span className="text-gradient">Tự Tin Trên Mọi Hành Trình</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            Ắc quy AISIN - Công nghệ Nhật Bản, hiệu suất vượt trội, độ bền cao
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{
          animationDelay: '0.3s'
        }}>
            <a href="#products" className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center" style={{
            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)'
          }}>
              <BatteryChargingIcon size={20} />
              <span>Xem Sản Phẩm</span>
            </a>
            <a href="#features" className="px-8 py-4 rounded-xl font-semibold text-white glass hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center">
              Tìm Hiểu Thêm
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                15+
              </div>
              <div className="text-sm text-white/70">Năm Kinh Nghiệm</div>
            </div>
            <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                100K+
              </div>
              <div className="text-sm text-white/70">Khách Hàng</div>
            </div>
            <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                36
              </div>
              <div className="text-sm text-white/70">Tháng Bảo Hành</div>
            </div>
            <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                99%
              </div>
              <div className="text-sm text-white/70">Hài Lòng</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>;
}
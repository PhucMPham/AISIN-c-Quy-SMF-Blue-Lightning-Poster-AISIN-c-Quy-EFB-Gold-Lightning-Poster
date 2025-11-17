import React from 'react';
import { BatteryChargingIcon, ShieldCheckIcon, ZapIcon, ThermometerIcon, TrendingUpIcon, AwardIcon, ClockIcon, LeafIcon } from 'lucide-react';
export function Features() {
  const features = [{
    icon: ZapIcon,
    title: 'Hiệu Suất Cao',
    description: 'Nạp điện nhanh hơn 40%, khởi động mạnh mẽ trong mọi điều kiện'
  }, {
    icon: ShieldCheckIcon,
    title: 'Độ An Toàn Cao',
    description: 'Công nghệ chống rò rỉ, chống cháy nổ, bảo vệ tối đa cho xe'
  }, {
    icon: ThermometerIcon,
    title: 'Chịu Nhiệt Tốt',
    description: 'Hoạt động ổn định từ -30°C đến 60°C, phù hợp khí hậu Việt Nam'
  }, {
    icon: TrendingUpIcon,
    title: 'Tuổi Thọ Cao',
    description: 'Độ bền vượt trội, tuổi thọ lên đến 5 năm với công nghệ Nhật Bản'
  }, {
    icon: AwardIcon,
    title: 'Chất Lượng Nhật',
    description: 'Sản xuất theo tiêu chuẩn AISIN Nhật Bản, chất lượng đảm bảo'
  }, {
    icon: ClockIcon,
    title: 'Bảo Hành 36 Tháng',
    description: 'Chế độ bảo hành dài hạn, hỗ trợ kỹ thuật 24/7'
  }, {
    icon: LeafIcon,
    title: 'Thân Thiện Môi Trường',
    description: 'Công nghệ xanh, giảm phát thải, bảo vệ môi trường'
  }, {
    icon: BatteryChargingIcon,
    title: 'Miễn Bảo Dưỡng',
    description: 'Không cần bảo dưỡng định kỳ, tiết kiệm thời gian và chi phí'
  }];
  return <section id="features" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A1128]"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
      backgroundSize: '40px 40px'
    }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full glass mb-4">
            <span className="text-sm font-semibold text-blue-400">
              TÍNH NĂNG NỔI BẬT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vì Sao Chọn <span className="text-gradient">AISIN</span>?
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Công nghệ tiên tiến, chất lượng vượt trội, đáp ứng mọi nhu cầu sử
            dụng
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
          const Icon = feature.icon;
          return <div key={index} className="group glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{
            animationDelay: `${index * 0.05}s`
          }}>
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-blue-400" size={28} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>;
        })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Sẵn Sàng Nâng Cấp Xe Của Bạn?
            </h3>
            <p className="text-lg text-white/70 mb-8">
              Liên hệ ngay để được tư vấn và lựa chọn sản phẩm phù hợp nhất
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                Liên Hệ Tư Vấn
              </button>
              <button className="px-8 py-4 rounded-xl font-semibold text-white glass hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
                Tìm Đại Lý Gần Nhất
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
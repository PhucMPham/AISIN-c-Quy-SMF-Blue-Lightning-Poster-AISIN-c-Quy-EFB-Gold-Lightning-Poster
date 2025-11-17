import React from 'react';
import { ProductCard } from './ProductCard';
export function Products() {
  const products = [{
    type: 'SMF' as const,
    title: 'Ắc Quy SMF',
    subtitle: 'Ắc quy khô, miễn bảo dưỡng',
    description: 'Ắc quy ô tô AISIN SMF (Endurance Pro) được trang bị công nghệ tiên tiến, mang đến hiệu suất cao, độ an toàn và sự tiện lợi tối đa.',
    features: ['Hiệu suất nạp điện tối ưu', 'Độ an toàn cao', 'Giảm thiểu bay hơi axit', 'Ắc quy miễn bảo dưỡng'],
    image: "/z7232332708893_7bc1a63ad29c54a0e7531ea584f46870.jpg",
    color: 'blue' as const
  }, {
    type: 'EFB' as const,
    title: 'Ắc Quy EFB',
    subtitle: 'Ắc quy nước cải tiến',
    description: 'Ắc quy ô tô EFB (Endurance Pro+) được thiết kế nhằm đáp ứng nhu cầu sử dụng của các dòng xe có trang bị hệ thống Start-Stop.',
    features: ['Thiết kế chuyên biệt cho xe có hệ thống Start-Stop', 'Hỗ trợ nạp điện trong mọi điều kiện', 'Độ an toàn, ổn định', 'Đảm bảo an toàn với hệ thống điện tử hiện đại'],
    image: "/z7232332771380_d0f7b90181e031be4372fc0a278273a6.jpg",
    color: 'gold' as const
  }, {
    type: 'AGM' as const,
    title: 'Ắc Quy AGM',
    subtitle: 'Absorbent Glass Mat Battery',
    description: 'Ắc quy ô tô AGM (Supreme-X) được thiết kế để đáp ứng công nghệ xe hơi hiện đại, cung cấp nguồn điện ổn định, an toàn và bền bỉ.',
    features: ['Thiết kế chuyên biệt cho xe có hệ thống Start-Stop', 'Hỗ trợ nạp điện trong mọi điều kiện', 'Lưu trữ lâu dài không suy giảm chất lượng', 'Độ an toàn cao'],
    image: "/z7232332680948_12136b349632ef8f0665b0ba3c712edf.jpg",
    color: 'gold' as const
  }];
  return <section id="products" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#0f1a3d] to-[#0A1128]"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full glass mb-4">
            <span className="text-sm font-semibold text-blue-400">
              SẢN PHẨM NỔI BẬT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Dòng Sản Phẩm <span className="text-gradient">AISIN</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Lựa chọn hoàn hảo cho mọi loại xe với công nghệ tiên tiến từ Nhật
            Bản
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => <div key={product.type} className="animate-fade-in-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <ProductCard {...product} />
            </div>)}
        </div>
      </div>
    </section>;
}
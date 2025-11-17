import React from 'react';
import { FacebookIcon, InstagramIcon, YoutubeIcon, MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
export function Footer() {
  return <footer className="relative bg-[#050a1a] border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">AISIN</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Nhà phân phối chính thức ắc quy AISIN tại Việt Nam. Chất lượng
              Nhật Bản, tin cậy tuyệt đối.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all">
                <FacebookIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all">
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all">
                <YoutubeIcon size={18} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sản Phẩm</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Ắc Quy SMF
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Ắc Quy EFB
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Ắc Quy AGM
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Phụ Kiện
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hỗ Trợ</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Hướng Dẫn Sử Dụng
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Bảo Hành
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Tìm Đại Lý
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Câu Hỏi Thường Gặp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên Hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPinIcon size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  123 Đường ABC, Quận 1, TP.HCM
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-white/70 text-sm">1900 xxxx</span>
              </li>
              <li className="flex items-center space-x-3">
                <MailIcon size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-white/70 text-sm">info@aisin.vn</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/50 text-sm">
            © 2025 AISIN Vietnam. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Chính Sách Bảo Mật
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Điều Khoản Sử Dụng
            </a>
          </div>
        </div>
      </div>
    </footer>;
}
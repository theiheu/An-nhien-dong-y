import React, { useState } from "react";
import { motion } from "motion/react";
import {
  CheckCircle2,
  Users,
  TrendingUp,
  Award,
  BookOpen,
  ShieldCheck,
  Phone,
  MapPin,
  MessageCircle,
  ChevronRight,
  Star,
} from "lucide-react";
import logo from "./src/img/logo.png";
import spa from "./src/img/tri-lieu-co-vai-gay-dong-y-2.jpg";

// Declare fbq for Facebook Pixel
declare global {
  interface Window {
    fbq: any;
  }
}

const trackFbEvent = (eventName: string, data?: any) => {
  if (window.fbq) {
    window.fbq("track", eventName, data);
  }
};

const TikTokVideos = () => {
  const videos = [
    "https://www.tiktok.com/embed/7540966245181558023",
    "https://www.tiktok.com/embed/7518974073892818183",
    "https://www.tiktok.com/embed/7514245223766052114",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-primary text-center mb-12">
          VIDEO HƯỚNG DẪN THỰC TẾ ĐAT TRIỆU VIEW
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((src, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={src}
                className="w-full h-[500px]"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
            <img src={logo} alt="" />
          </div>

          <span className="font-display font-bold text-primary text-xl">
            An Nhiên Đông Y
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-primary transition-colors">
            Về chúng tôi
          </a>
          <a href="#benefits" className="hover:text-primary transition-colors">
            Lợi ích
          </a>
          <a
            href="#instructor"
            className="hover:text-primary transition-colors"
          >
            Giảng viên
          </a>
          <a
            href="#register"
            className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-all"
          >
            Đăng ký ngay
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://w.ladicdn.com/s1440x1440/59dc393383b3ed29424efe94/image-30-20260131031956-ewpjw.png"
          alt="Background"
          className="w-full h-full object-cover opacity-15"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-slate-100 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Khóa đào tạo online thực chiến
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl text-primary leading-tight mb-6">
              BÍ QUYẾT X3 THU NHẬP NGÀNH SPA
            </h1>
            <p className="text-xl text-slate-700 mb-8 font-medium">
              Với kỹ thuật trị liệu Đông Y thực chiến & tư duy làm chủ. Đúc kết
              gần 20 năm kinh nghiệm từ Chuyên gia.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="text-center">
                  <span className="block text-xs text-slate-400 uppercase font-bold">
                    Ưu đãi chỉ
                  </span>
                  <span className="text-4xl font-display font-black text-red-500 italic">
                    499K
                  </span>
                </div>
              </div>
              <motion.a
                href="#register"
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0px 10px 15px -3px rgba(0,0,0,0.1)",
                    "0px 20px 25px -5px rgba(251, 176, 52, 0.4)",
                    "0px 10px 15px -3px rgba(0,0,0,0.1)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="btn-gradient animate-shine text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                ĐĂNG KÝ NGAY <ChevronRight size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src={spa}
                alt="Instructor"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full -z-10 blur-2xl opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/20 rounded-full -z-10 blur-3xl opacity-40"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TargetAudience = () => {
  const audiences = [
    {
      title: "BẠN ĐANG LÀ NGƯỜI MỚI",
      desc: "Đang chán công việc lương thấp, muốn tìm một nghề bền vững - không lo thất nghiệp - thu nhập khởi điểm 8-15 triệu.",
      icon: <Users className="text-primary" size={32} />,
    },
    {
      title: "BẠN ĐANG LÀ KỸ THUẬT VIÊN SPA",
      desc: 'Muốn thoát mác "thợ mát-xa" đơn thuần, cần nâng cấp lên "Chuyên gia Trị liệu" để khách nể trọng và sẵn sàng chi tiền cao.',
      icon: <TrendingUp className="text-primary" size={32} />,
    },
    {
      title: "BẠN ĐANG LÀ CHỦ SPA / STARTUP",
      desc: 'Đau đầu vì vắng khách, cần dịch vụ "Trị liệu Đông y" để hút khách & tăng doanh thu.',
      icon: <BookOpen className="text-primary" size={32} />,
    },
  ];

  return (
    <section className="py-24 bg-slate-50" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">
            KHÓA HỌC NÀY CHÍNH XÁC LÀ DÀNH CHO BẠN, NẾU...
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-accent p-8 rounded-3xl shadow-sm border border-white/50 text-center"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-lg mb-4 text-slate-800">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-6">
            TẠI SAO CÙNG LÀM NGHỀ, CÓ NGƯỜI LƯƠNG 5 TRIỆU CÓ NGƯỜI THU NHẬP 30
            TRIỆU?
          </h2>
          <p className="text-slate-600 text-lg">
            Sự khác biệt duy nhất nằm ở TƯ DUY & PHƯƠNG PHÁP
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-slate-200 p-4 font-bold text-center">
              LỐI MÒN CŨ (THỢ LÀM THUÊ)
            </div>
            <div className="p-8 space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="text-slate-400 shrink-0" size={20} />
                <p className="text-sm text-slate-600">
                  Cách làm: Massage theo bản năng, dùng sức nhiều, khách đau đâu
                  làm đó.
                </p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="text-slate-400 shrink-0" size={20} />
                <p className="text-sm text-slate-600">
                  Kết quả: Khách không thấy đỡ, một đi không trở lại.
                </p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="text-slate-400 shrink-0" size={20} />
                <p className="text-sm text-slate-600">
                  Tương lai: Thu nhập bấp bênh, dễ bị đào thải khi có tuổi.
                </p>
              </div>
            </div>
          </div>

          <div className="border-2 border-primary rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-primary p-4 font-bold text-center text-white">
              LỐI ĐI MỚI (CHUYÊN GIA TRỊ LIỆU)
            </div>
            <div className="p-8 space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="text-primary shrink-0" size={20} />
                <p className="text-sm text-slate-700 font-medium">
                  Cách làm: Chẩn đoán bệnh qua da, dùng Kỹ thuật gốc & Dầu xoa
                  bóp độc quyền.
                </p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="text-primary shrink-0" size={20} />
                <p className="text-sm text-slate-700 font-medium">
                  Kết quả: Xử lý tận gốc rễ cơn đau, khách "nghiện" tay nghề.
                </p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="text-primary shrink-0" size={20} />
                <p className="text-sm text-slate-700 font-medium">
                  Tương lai: Tự chủ tài chính, khách hàng nể trọng.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <motion.a
            href="#register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gradient animate-shine text-white px-10 py-4 rounded-xl font-bold shadow-lg inline-block"
          >
            ĐĂNG KÝ NGAY
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "DẪN DẮT BỞI CHUYÊN GIA 17 NĂM",
      desc: "Ms. Nhung An Nhiên (Kinh nghiệm từ 2007) trực tiếp đào tạo phương pháp Trị Liệu Gốc Rễ & Lộ trình cá nhân hóa.",
      img: "https://w.ladicdn.com/s1440x1440/59dc393383b3ed29424efe94/mask-group-1-20260131040552-izde2.png",
    },
    {
      title: "CHUYỂN GIAO 3 SỔ TAY ĐỘC QUYỀN",
      desc: "Sở hữu trọn bộ quy trình (Vận hành - Đào tạo - Thương hiệu). Giúp người mới tự tin mở tiệm chỉ sau 12-24 tuần.",
      img: "https://w.ladicdn.com/s1440x1440/59dc393383b3ed29424efe94/mask-group-2-20260131040552-vkp3r.png",
    },
    {
      title: "SỞ HỮU THẢO DƯỢC GIA TRUYỀN",
      desc: "Độc quyền công thức Dầu xoa bóp An Nhiên giúp khách giảm đau nhanh, tăng hiệu quả trị liệu gấp nhiều lần.",
      img: "./src/img/dau-xoa-bopjpg.jpg",
    },
    {
      title: "PHÁP LÝ VỮNG - LỢI NHUẬN CAO",
      desc: "Cấp Chứng chỉ nghề hợp pháp. Đảm bảo mô hình kinh doanh bền vững và hiệu quả.",
      img: "https://w.ladicdn.com/s1440x1440/59dc393383b3ed29424efe94/mask-group-4-20260131040552-nd7eb.png",
    },
  ];

  return (
    <section className="py-24 bg-slate-50" id="benefits">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">
            TẠI SAO CHỌN AN NHIÊN
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-accent p-6 rounded-3xl flex flex-col md:flex-row gap-6 items-center shadow-sm border border-white"
            >
              <div className="w-40 h-40 shrink-0 rounded-2xl overflow-hidden border-4 border-white shadow-md">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-lg text-slate-800 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Instructor = () => {
  return (
    <section className="py-24 bg-white" id="instructor">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://w.ladicdn.com/s1440x1440/59dc393383b3ed29424efe94/tfz00992-1-20260131041915-n8vjz.png"
              alt="Ms. Nhung An Nhien"
              className="w-full h-auto rounded-3xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full -z-10"></div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl text-primary mb-8 leading-tight">
              NGƯỜI DẪN DẮT BẠN
              <br />
              <span className="text-slate-800">
                CHUYÊN GIA MS. NHUNG AN NHIÊN
              </span>
            </h2>

            <div className="bg-accent p-8 rounded-3xl border border-white shadow-sm space-y-6">
              <div className="flex gap-4">
                <Award className="text-primary shrink-0" size={24} />
                <p className="text-slate-700">
                  <strong>Kinh nghiệm từ 2007:</strong> Gần 20 năm thực chiến và
                  nghiên cứu sâu về Đông Y trị liệu.
                </p>
              </div>
              <div className="flex gap-4">
                <ShieldCheck className="text-primary shrink-0" size={24} />
                <p className="text-slate-700">
                  <strong>Nền tảng Y khoa:</strong> Được đào tạo bài bản tại
                  Khoa Đông Y của trường Đại học Y đầu ngành.
                </p>
              </div>
              <div className="flex gap-4">
                <Users className="text-primary shrink-0" size={24} />
                <p className="text-slate-700">
                  <strong>Founder An Nhiên Đông Y:</strong> Người chuyển giao mô
                  hình kinh doanh cho hàng trăm chủ Spa.
                </p>
              </div>
              <div className="flex gap-4">
                <BookOpen className="text-primary shrink-0" size={24} />
                <p className="text-slate-700">
                  <strong>Tác giả phương pháp:</strong> "Trị Liệu Gốc Rễ" - Xây
                  dựng lộ trình cá nhân hóa giúp xử lý bệnh lý tận gốc.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <motion.a
                href="#register"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gradient animate-shine text-white px-8 py-4 rounded-xl font-bold shadow-lg inline-block"
              >
                ĐĂNG KÝ NGAY
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">
            HỌC VIÊN NÓI GÌ VỀ CÔ NHUNG?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-end">
          <div className="bg-white p-2 rounded-3xl shadow-md">
            <img
              src="https://w.ladicdn.com/s1440x1440/59dc393383b3ed29424efe94/mask-group-5-20260131041915----lv.png"
              alt="Student"
              className="w-full h-auto rounded-2xl mb-4"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-xl border-2 border-primary relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold">
              HỌC VIÊN TIÊU BIỂU
            </div>
            <img
              src="https://w.ladicdn.com/s1440x1440/59dc393383b3ed29424efe94/mask-group-6-20260131041915-ahbkp.png"
              alt="Student"
              className="w-full h-auto rounded-2xl mb-6"
              referrerPolicy="no-referrer"
            />
            <div className="text-center">
              <h4 className="font-bold text-slate-800 mb-2">
                NHUNG TRANG - NGHỆ AN
              </h4>
              <div className="flex justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-600 italic">
                “Ban đầu sợ học online khó hiểu, nhưng Cô Nhung dạy kỹ từng ngón
                tay, góc quay sát sạt dễ học lắm.”
              </p>
            </div>
          </div>
          <div className="bg-white p-2 rounded-3xl shadow-md">
            <img
              src="https://w.ladicdn.com/s1440x1440/59dc393383b3ed29424efe94/mask-group-7-20260131041915-krhh1.png"
              alt="Student"
              className="w-full h-auto rounded-2xl mb-4"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <motion.a
            href="#register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gradient animate-shine text-white px-8 py-4 rounded-xl font-bold shadow-lg inline-block"
          >
            ĐĂNG KÝ NGAY
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const Registration = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // 1. Send data to Google Sheets
      const scriptUrl = (import.meta as any).env.VITE_GOOGLE_SHEET_WEBAPP_URL;
      if (scriptUrl) {
        await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors", // Important for Google Apps Script
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toLocaleString("vi-VN"),
            source: window.location.href,
          }),
        });
      }

      // 2. Track FB Pixel Lead event
      trackFbEvent("Lead", {
        content_name: "Registration Form",
        value: 499000,
        currency: "VND",
      });

      setStatus("success");
    } catch (error) {
      console.error("Submission error:", error);
      // Still show success to user or handle error
      setStatus("success");
    }
  };

  return (
    <section
      className="py-24 bg-primary/10 relative overflow-hidden"
      id="register"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <img
          src="https://w.ladicdn.com/s1440x1440/59dc393383b3ed29424efe94/image-28-20260131041913-gjeha.png"
          alt="Pattern"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://w.ladicdn.com/s1440x1440/59dc393383b3ed29424efe94/ea3bf7fb-65a9-4101-bd96-03dfd9386277-1-20260131041914-tfh6e.png"
              alt="Course Materials"
              className="w-full h-auto rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="bg-accent p-8 md:p-12 rounded-[40px] shadow-2xl border border-white">
            <div className="text-center mb-8">
              <div className="inline-block bg-primary text-white px-6 py-2 rounded-full font-bold mb-4 shadow-md">
                ƯU ĐÃI ĐẶC BIỆT
              </div>
              <h2 className="text-5xl font-display font-black text-red-500 italic mb-2">
                499K
              </h2>
              <p className="text-slate-600 font-medium">
                Đăng ký ngay để nhận trọn bộ kiến thức!
              </p>
            </div>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Đăng ký thành công!
                </h3>
                <p className="text-slate-600">
                  Chúng tôi sẽ liên hệ với bạn sớm nhất.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Họ và Tên"
                  required
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  required
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <motion.button
                  type="submit"
                  disabled={status === "submitting"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-gradient animate-shine text-white py-5 rounded-2xl font-bold text-xl shadow-xl disabled:opacity-70 transition-all"
                >
                  {status === "submitting" ? "ĐANG XỬ LÝ..." : "ĐĂNG KÝ NGAY"}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src="https://w.ladicdn.com/s1440x1440/59dc393383b3ed29424efe94/group-59-20260131041912-qsopr.png"
          alt="Footer BG"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-8">
            An Nhiên Đông Y
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <Phone size={20} />
              </div>
              <span className="text-lg font-medium">
                Hotline/Zalo: 039 636 3136
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <span className="text-lg font-medium">Thanh Hóa, Việt Nam</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/60 text-sm">
            © 2026 An Nhiên Đông Y. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <Users size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TargetAudience />
        <Comparison />
        <WhyChooseUs />
        <Instructor />
        <Testimonials />
        <TikTokVideos />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

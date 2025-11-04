"use client";

import { BiColor, BiSolidBriefcaseAlt2, BiSolidLike, BiSolidShoppingBag } from "react-icons/bi";
import { BsBox } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FiFileText } from "react-icons/fi";
import { SiWebpack, SiWhatsapp } from "react-icons/si";

export default function Home() {
  return (
    <div className="font-sans text-white bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-10 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(16,185,129,0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(16,185,129,0.05) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      >
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-emerald-400/20 blur-3xl rounded-full pointer-events-none"></div>

        <h1 className="relative z-10 text-5xl md:text-6xl  font-semibold mb-4 text-emerald-400 leading-tight">Zackstudio hadir untukmu 🚀</h1>
        <p className="relative z-10 text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed">Bantu kamu ngerjain, nyelesain, dan ngerapiin proyek biar hasilnya rapi, cepat, dan siap pakai.</p>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4 mb-10">
          <a
            href="https://wa.me/6281314516594?text=Halo,%20saya%20ingin%20bertanya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-emerald-500 bg-emerald-500 text-white font-medium shadow hover:bg-emerald-600 transition"
          >
            <SiWhatsapp className="w-4 h-4" />
            WhatsApp Me
          </a>

          <a href="#services" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-emerald-500 text-emerald-500 hover:bg-emerald-900/30 transition">
            <BiSolidBriefcaseAlt2 className="w-4 h-4" />
            Services
          </a>
        </div>

        <div className="relative z-10 flex flex-wrap justify-center gap-4 text-zinc-300 text-sm md:text-base mt-20">
          <span className="font-semibold text-xl text-white">50+ Happy Clients</span>
          <span className="hidden md:block">|</span>
          <span className="font-semibold text-xl text-white">35+ Project Aplikasi</span>
          <span className="hidden md:block">|</span>
          <span className="font-semibold text-xl text-white">20+ Design Systems</span>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 md:px-10 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-emerald-400">What We Do</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <CgWebsite className="w-6 h-6 text-emerald-400" />,
              title: "Fullstack Web Development",
              desc: "Pembuatan website end-to-end menggunakan Laravel, Next.js, dan .NET. Semua dibuat rapi dan efisien.",
              badge: true,
            },
            {
              icon: <BiColor className="w-6 h-6 text-emerald-400" />,
              title: "Paket Basic Web",
              desc: "Website statis menggunakan HTML, CSS, dan Javascript. Cocok untuk landing page, profil usaha, atau portofolio personal.",
            },
            {
              icon: <SiWebpack className="w-6 h-6 text-emerald-400" />,
              title: "Custom Web Dinamis",
              desc: "Website interaktif dengan fitur yang bisa bebas disesuaikan dengan kebutuhanmu.",
              badge: true,
            },
            {
              icon: <FiFileText className="w-6 h-6 text-emerald-400" />,
              title: "Document Management System",
              desc: "Sistem digital untuk dokumen lengkap dengan dashboard, notifikasi, dan status tracking.",
            },
            {
              icon: <BsBox className="w-6 h-6 text-emerald-400" />,
              title: "Inventory Management",
              desc: "Pengelolaan stok barang dan transaksi masuk-keluar dengan tampilan dashboard ringkas.",
              badge: true,
            },
            {
              icon: <BiSolidShoppingBag className="w-6 h-6 text-emerald-400" />,
              title: "Mini E-commerce",
              desc: "Platform toko online sederhana dengan fitur produk, keranjang, dan checkout.",
              badge: true,
            },
          ].map((item, i) => (
            <div key={i} className="relative p-5 rounded-2xl bg-zinc-900/50 shadow-lg hover:shadow-emerald-500/50 transition text-center border border-zinc-800 hover:-translate-y-1">
              {/* Badge di pojok kanan atas */}
              {item.badge && (
                <div className="absolute top-3 right-3 bg-white/30 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                  Most Ordered <BiSolidLike />{" "}
                </div>
              )}

              <div className="relative w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <div className="absolute inset-0 bg-linear-to-tr from-emerald-500/20 to-emerald-400/20 rounded-full blur-md"></div>
                <div className="relative">{item.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-emerald-400">{item.title}</h3>
              <p className="text-zinc-300 text-md leading-relaxed max-w-xs mx-auto">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Zackstudio Section */}
      <section id="why-choose-us" className="py-16 px-4 md:px-10 max-w-6xl mx-auto mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-emerald-400">Why Choose Zackstudio?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            {
              emoji: "🛠️",
              title: "Free Maintenance 14 Hari",
              desc: "Dukungan penuh selama 14 hari untuk perbaikan kecil atau update ringan tanpa biaya tambahan.",
            },
            {
              emoji: "💰",
              title: "Harga Terjangkau",
              desc: "Harga ramah di kantong mahasiswa tapi tetap rapi dan profesional ✨",
            },
            {
              emoji: "⚙️",
              title: "Support Instalasi",
              desc: "Bantuan sampai websitemu go live tanpa bingung pasang hosting/lokal server.",
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-zinc-900/50 shadow-lg hover:shadow-emerald-500/50 transition border border-zinc-800 hover:-translate-y-1">
              <span className="text-4xl">{item.emoji}</span>
              <h3 className="text-xl font-semibold text-emerald-400">{item.title}</h3>
              <p className="text-zinc-300 text-md leading-relaxed max-w-xs mx-auto">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-10 mt-16 text-center border-t border-zinc-800">© {new Date().getFullYear()} Zackstudio. All rights reserved.</footer>
    </div>
  );
}

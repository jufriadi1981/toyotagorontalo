import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import salesPhoto from "./assets/hero.png";
import hasjratLogo from "./assets/hasjrat.png";
import agya from "./assets/agya.png";
import calya from "./assets/calya.png";
import avanza from "./assets/avanza.png";
import veloz from "./assets/veloz.png";
import raize from "./assets/raize.png";
import rush from "./assets/rush.png";
import zenix from "./assets/zenix.png";
import rangga from "./assets/rangga.png";
import aftersalesLogo from "./assets/aftersales.png";
import tradeinLogo from "./assets/tradein.png";
import toyotaLogo from "./assets/logo.png";
import testi1 from "./assets/testi1.png";
import testi2 from "./assets/testi2.png";
import testi3 from "./assets/testi3.png";
import testi4 from "./assets/testi4.png";
import testi5 from "./assets/testi5.png";
import testi6 from "./assets/testi6.png";
import tradein from "./assets/tradein.png";
import se from "./assets/se.png";
import servis from "./assets/servis.png";
import setia from "./assets/setia.png";
import testdrive from "./assets/testdrive.png";


export default function LandingPage() {
  const [selectedSimulasi, setSelectedSimulasi] = useState(null);
  const [selectedTenor, setSelectedTenor] = useState(60);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showTestimonials, setShowTestimonials] = useState(false);
  const [selectedTesti, setSelectedTesti] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadUnit, setLeadUnit] = useState("");
  const currentDate = new Date();

  const monthYear = currentDate.toLocaleDateString("id-ID", {
  month: "long",
  year: "numeric",
});

  const heroSlides = [
  tradein,
  testdrive,
  servis,
  setia,
  se,
];
const testimonials = [
    {
      image: testi1,
      name: "Bapak Andi",
      unit: "Pembelian Avanza",
      text: "Pelayanan sangat ramah dan proses kredit sangat cepat.",
    },
    {
      image: testi2,
      name: "Ibu Rina",
      unit: "Pembelian Raize",
      text: "Sales responsif dan unit langsung ready. Sangat puas.",
    },
    {
      image: testi3,
      name: "Pak Fajar",
      unit: "Pembelian Zenix Hybrid",
      text: "Penjelasan detail dan pelayanan sangat profesional.",
    },
  {
  image: testi4,
  name: "Customer 4",
  unit: "Serah Terima Unit Toyota",
  text: "Pelayanan ramah dan profesional.",
},
{
  image: testi5,
  name: "Customer 5",
  unit: "Serah Terima Unit Toyota",
  text: "Unit diterima dengan baik.",
},
{
  image: testi6,
  name: "Customer 6",
  unit: "Serah Terima Unit Toyota",
  text: "Rekomendasi sales Toyota terbaik.",
},
  ];
  

  const cars = [
  {
    name: "Agya",
    image: agya,
    desc: "City Car Modern untuk Mobilitas Harian",
    price: "Rp 209.100.000",
    dp: "Rp 10.000.000",

    tenor12: "Rp 17.300.000",
    tenor24: "Rp 9.620.000",
    tenor36: "Rp 6.980.000",
    tenor48: "Rp 5.720.000",
    tenor60: "Rp 5.105.000",
  },

  {
    name: "Calya",
    image: calya,
    desc: "MPV Keluarga Irit dan Nyaman",
    price: "Rp 207.000.000",
    dp: "Rp 10.000.000",

    tenor12: "Rp 17.133.000",
    tenor24: "Rp 9.513.000",
    tenor36: "Rp 6.898.000",
    tenor48: "Rp 5.651.000",
    tenor60: "Rp 5.053.000",
  },

  {
    name: "Avanza",
    image: avanza,
    desc: "Mobil Keluarga Favorit Indonesia",
    price: "Rp 290.500.000",
    dp: "Rp 15.000.000",

    tenor12: "Rp 23.887.000",
    tenor24: "Rp 13.147.000",
    tenor36: "Rp 9.502.000",
    tenor48: "Rp 7.767.000",
    tenor60: "Rp 6.923.000",
  },

  {
  name: "Veloz HV",
  image: veloz,
  desc: "MPV Premium dengan Teknologi Hybrid",
  price: "Rp 333.000.000",
  dp: "Rp 31.800.000",

  tenor12: "Rp 27.650.000",
  tenor24: "Rp 15.180.000",
  tenor36: "Rp 10.980.000",
  tenor48: "Rp 8.960.000",
  tenor60: "Rp 8.006.000",
},

  {
     name: "Raize",
  image: raize,
  desc: "SUV Compact Modern dan Stylish",
  price: "Rp 291.200.000",
  dp: "Rp 15.000.000",

  tenor12: "Rp 23.950.000",
  tenor24: "Rp 13.180.000",
  tenor36: "Rp 9.520.000",
  tenor48: "Rp 7.780.000",
  tenor60: "Rp 6.923.000",
  },

  {
    name: "Rush",
  image: rush,
  desc: "SUV Tangguh untuk Keluarga Aktif",
  price: "Rp 341.400.000",
  dp: "Rp 17.700.000",

  tenor12: "Rp 28.200.000",
  tenor24: "Rp 15.500.000",
  tenor36: "Rp 11.200.000",
  tenor48: "Rp 9.150.000",
  tenor60: "Rp 8.169.000",
  },

{
  name: "Zenix HV",
  image: zenix,
  desc: "Hybrid Premium dengan Teknologi Masa Depan",
  price: "Rp 534.400.000",
  dp: "Rp 59.000.000",

  tenor12: "Rp 44.200.000",
  tenor24: "Rp 24.300.000",
  tenor36: "Rp 17.550.000",
  tenor48: "Rp 14.300.000",
  tenor60: "Rp 11.963.000",
},

{
  name: "Hilux Rangga",
  image: rangga,
  desc: "Partner Bisnis Andal untuk Berbagai Usaha",
  price: "Rp 236.500.000",
  dp: "Rp 24.000.000",

  tenor12: "Rp 19.550.000",
  tenor24: "Rp 10.750.000",
  tenor36: "Rp 7.780.000",
  tenor48: "Rp 6.360.000",
  tenor60: "Rp 5.989.000",
},
];
  useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) =>
      prev === heroSlides.length - 1 ? 0 : prev + 1
    );
  }, 5000);

  return () => clearInterval(timer);
}, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10 shadow-2xl">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-[70px]">

    {/* Logo Toyota */}
    <div>
      <img
        src={toyotaLogo}
        alt="Toyota"
        className="h-14 md:h-16 object-contain"
      />
    </div>

    {/* Menu */}
    <nav className="hidden lg:flex gap-10 text-lg font-semibold">
      <a href="#" className="text-white hover:text-red-500 transition">
        Beranda
      </a>

      <a href="#unit" className="text-gray-300 hover:text-red-500 transition">
        Unit Toyota
      </a>

      <a href="#promo" className="text-gray-300 hover:text-red-500 transition">
        Promo
      </a>

      <a href="#layanan" className="text-gray-300 hover:text-red-500 transition">
        Layanan
      </a>

      <button
        onClick={() => {
          setShowTestimonials(true);

          setTimeout(() => {
            document
              .getElementById("testimoni")
              ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
          }, 100);
        }}
        className="text-gray-300 hover:text-red-500 transition"
      >
        Testimoni
      </button>

      <a href="#kontak" className="text-gray-300 hover:text-red-500 transition">
        Kontak
      </a>
    </nav>

    {/* Logo Hasjrat */}
    <div>
      <img
        src={hasjratLogo}
        alt="Hasjrat Toyota"
        className="h-14 md:h-16 object-contain"
      />
    </div>

  </div>
</header>

      {/* Hero */}
      <section className="relative min-h-[85vh] pt-24 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(220,38,38,0.35),transparent_40%),linear-gradient(to_right,_#000000,_#120000,_#000000)]"></div>
<div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-20 items-center max-w-7xl mx-auto relative z-10 px-5 md:px-10">
  <div>
    <div className="max-w-[620px]"></div>
    
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 px-5 py-2 rounded-full text-white text-sm font-bold shadow-lg mb-6">
        🎁 PROMO SPESIAL TOYOTA {monthYear.toUpperCase()}
        </div>
<h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
  Promo Toyota
  <span className="block text-red-500">
    Gorontalo
  </span>
</h1>

<div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full font-semibold mb-4">
  {monthYear}
</div>

<p className="text-2xl md:text-2xl font-bold text-red-400 mb-6 leading-relaxed">
  DP Mulai 10% • Trade In • Kredit Mudah
</p>

 <p className="mt-4 text-base md:text-lg text-gray-300 leading-relaxed max-w-lg">
  Dapatkan penawaran terbaik Toyota untuk wilayah Gorontalo
  dengan promo menarik, konsultasi kredit gratis, dan pelayanan
  cepat dari Sales Executive Toyota.
</p>

<div className="flex flex-col gap-4 md:grid md:grid-cols-2 max-w-lg">

  <div className="flex items-center gap-3 text-lg">
    <span>✅</span>
    <span>Konsultasi Kredit Gratis</span>
  </div>

  <div className="flex items-center gap-3 text-lg">
    <span>✅</span>
    <span>Trade In Semua Merek</span>
  </div>

  <div className="flex items-center gap-3 text-lg">
    <span>✅</span>
    <span>Unit Ready Stock</span>
  </div>

</div>        


<p className="mt-4 text-lg text-green-400 font-semibold">
  🛡️ Gratis Asuransi 2 Tahun*
</p>

  <div className="mt-6 grid grid-cols-4 border border-white/10 rounded-2xl overflow-hidden max-w-lg bg-black/20 backdrop-blur-md">

  <div className="text-center p-4 border-r border-white/10">
    <div className="text-xl">⭐</div>
    <p className="text-xs mt-2">Dealer Resmi</p>
  </div>

  <div className="text-center p-4 border-r border-white/10">
    <div className="text-xl">🚗</div>
    <p className="text-xs mt-2">Ready Stock</p>
  </div>

  <div className="text-center p-4 border-r border-white/10">
    <div className="text-xl">⚡</div>
    <p className="text-xs mt-2">Respon Cepat</p>
  </div>

  <div className="text-center p-4">
    <div className="text-xl">🏆</div>
    <p className="text-xs mt-2">Melayani Gorontalo</p>
  </div>

</div>

<div className="mt-6 flex items-center gap-3">
  <div className="text-yellow-300 text-xl">
    ⭐ ⭐ ⭐ ⭐ ⭐
  </div>

  <div>
    <div className="font-bold">
      4.9 / 5 Rating Pelanggan
    </div>

    <div className="text-base text-gray-400">
      Dipercaya ratusan customer Toyota Gorontalo
    </div>
  </div>
</div>
<div className="mt-4 flex gap-8 text-center">
  <div>
    <div className="text-2xl font-black text-red-500">90.000+</div>
    <div className="text-xs text-gray-400">Unit Terjual</div>
  </div>

  <div>
    <div className="text-2xl font-black text-red-500">4.9</div>
    <div className="text-xs text-gray-400">Google Rating</div>
  </div>

  <div>
    <div className="text-2xl font-black text-red-500">24 Jam</div>
    <div className="text-xs text-gray-400">Respon WA</div>
  </div>
</div>
            <div className="mt-10 flex flex-col md:flex-row gap-4">
              <button
  onClick={() =>
    window.open(
      `https://wa.me/6282340002917?text=${encodeURIComponent(
        "Halo Pak Hayatul, saya melihat website Toyota Gorontalo dan ingin mendapatkan informasi promo, stok unit, serta simulasi kredit terbaru."
      )}`,
      "_blank"
    )
  }
  className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 px-8 py-4 rounded-2xl font-bold"
>
  Chat WhatsApp
</button>

          <a
            href="#unit"
            className="border border-white/20 px-8 py-4 rounded-2xl font-bold hover:border-red-500 inline-block"
>
            Lihat Promo
          </a>
            </div>
          </div>         
            
            <div className="hidden lg:flex items-center justify-end relative">
            <div className="absolute w-[500px] h-[500px] bg-red-600/20 blur-[120px] rounded-full"></div>
            <div className="relative flex justify-center items-center"></div>
            <img
            src={heroSlides[currentSlide]}
            alt="Promo Toyota"
            className="w-full max-w-[520px] object-contain hover:scale-105 transition duration-500 drop-shadow-[0_0_60px_rgba(220,38,38,0.45)]"
            />
          </div>
        </div>
      </section>

      {/* Benefit */}
      <section id="layanan" className="px-6 md:px-16 py-28 bg-black">
      <div className="max-w-7xl mx-auto"></div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

  <div className="bg-black/60 border border-red-500/20 rounded-3xl p-6 text-center hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-300">
    <div className="text-5xl mb-4">🛡️</div>
    <h3 className="text-xl font-bold text-white mb-2">
      Harga Terbaik
    </h3>
    <p className="text-gray-400 text-sm">
      Penawaran kompetitif dengan promo menarik setiap bulan.
    </p>
  </div>

  <div className="bg-black/60 border border-red-500/20 rounded-3xl p-6 text-center hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-300">
    <div className="text-5xl mb-4">🤝</div>
    <h3 className="text-xl font-bold text-white mb-2">
      Proses Mudah
    </h3>
    <p className="text-gray-400 text-sm">
      Pengajuan kredit cepat dan transparan.
    </p>
  </div>

  <div className="bg-black/60 border border-red-500/20 rounded-3xl p-6 text-center hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-300">
    <div className="text-5xl mb-4">✅</div>
    <h3 className="text-xl font-bold text-white mb-2">
      Unit Terjamin
    </h3>
    <p className="text-gray-400 text-sm">
      Unit Toyota asli dengan garansi resmi.
    </p>
  </div>

  <div className="bg-black/60 border border-red-500/20 rounded-3xl p-6 text-center hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-300">
    <div className="text-5xl mb-4">🔧</div>
    <h3 className="text-xl font-bold text-white mb-2">
      After Sales
    </h3>
    <p className="text-gray-400 text-sm">
      Dukungan servis dan suku cadang resmi Toyota.
    </p>
  </div>

  <div className="bg-black/60 border border-red-500/20 rounded-3xl p-6 text-center hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-300">
    <div className="text-5xl mb-4">🚗</div>
    <h3 className="text-xl font-bold text-white mb-2">
      Trade In
    </h3>
    <p className="text-gray-400 text-sm">
      Tukar tambah kendaraan lama dengan mudah.
    </p>
  </div>

</div>
</section>

      {/* Product */}
      <div id="promo"></div>
      <section className="px-6 md:px-16 py-3 bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl md:text-5xl font-black mb-6">
      🔥 PROMO TOYOTA
      GORONTALO {monthYear.toUpperCase()}
    </h2>

    <div className="grid md:grid-cols-4 gap-6 mb-12">

      <div className="bg-white text-red-700 rounded-2xl py-3 px-6 font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all duration-300">
        ✓ DP Mulai 10%
      </div>

      <div className="bg-white text-red-700 rounded-2xl py-3 px-6 font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all duration-300">        ✓ Program Proteksi
      </div>

      <div className="bg-white text-red-700 rounded-2xl py-3 px-6 font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all duration-300">
        ✓ Trade In Semua Merek
      </div>

      <div className="bg-white text-red-700 rounded-2xl py-3 px-6 font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all duration-300">
        ✓ Konsultasi Kredit Gratis
      </div>

    </div>

   <button
  onClick={() =>
    window.open(
      "https://wa.me/6282340002917",
      "_blank"
    )
  }
  className="bg-gradient-to-r from-black to-gray-900 text-white px-12 py-5 rounded-2xl font-black shadow-[0_15px_35px_rgba(0,0,0,0.35)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:scale-105 transition-all duration-300"
>
  <span className="flex items-center justify-center gap-2">
    <FaWhatsapp className="text-green-400 text-xl" />
    WhatsApp Penawaran Terbaik
  </span>
</button>

    <div className="mt-6 flex justify-center gap-8 text-white">
  <div>⭐ 4.9/5 Rating</div>
  <div>🚗 90.000+ Unit Terjual</div>
  <div>⚡ Respon WhatsApp Cepat</div>
</div>

  </div>
</section>
            <section id="unit" className="px-6 md:px-16 py-14 bg-white">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-black text-black mb-4">
            Toyota Pilihan Terbaik
          </h2>

          <p className="text-gray-500 text-lg">
            Pilihan unit Toyota terbaik untuk keluarga dan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cars.map((car) => (
            <div
              key={car.name}
              className="bg-white rounded-[36px] shadow-[0_15px_50px_rgba(0,0,0,0.08)] p-5 border border-gray-100 hover:-translate-y-3 hover:shadow-[0_35px_80px_rgba(220,38,38,0.18)] transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative h-40 md:h-64 bg-gray-100 rounded-[24px] overflow-hidden mb-6">

 <img
  src={car.image}
  alt={car.name}
  className="w-full h-full object-contain p-0 md:p-6 hover:scale-125 transition-all duration-700"
 />

  {["Agya","Calya","Hilux Rangga"].includes(car.name) && (
  <div className="absolute top-3 left-3 bg-gradient-to-r from-red-700 to-red-500 text-white px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase shadow-lg">
    Promo {monthYear}
  </div>
)}

{["Avanza","Veloz HV","Raize","Rush","Zenix HV"].includes(car.name) && (
  <div className="absolute top-3 left-3 bg-gradient-to-r from-emerald-700 to-emerald-500 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-lg">
    Program Proteksi
  </div>
)}

</div>

              <h3 className="text-3xl font-black text-black mb-2">
              {car.name}
              </h3>
              
              <p className="text-gray-500 mb-6 min-h-[56px]">
              {car.desc}
              </p>

              <div className="flex gap-3 mt-5">

  <button
  onClick={() => {
    setSelectedTenor(60);
    setSelectedCar(car);
  }}
  className="bg-black text-white flex-1 py-4 rounded-2xl font-bold hover:bg-gray-800 transition"
>
  Lihat Detail
</button>

  <button
  onClick={() => {
    setSelectedTenor(60);
    setSelectedSimulasi(car);
  }}
  className="flex-1 bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-xl font-bold"
>
  💳 Simulasi
</button>

</div>
            </div>
          ))}
        </div>
      </section>

{/* Form Minat Pembelian */}
<section className="py-20 px-6 md:px-16 bg-gradient-to-b from-[#120000] to-black">
<div className="max-w-3xl mx-auto">

  <div className="text-center mb-10">
    <h2 className="text-5xl font-black mb-4">
      Chat WhatsApp Sekarang
    </h2>

    <p className="text-gray-400">
      Dapatkan promo terbaik, simulasi kredit, dan informasi ketersediaan unit Toyota.
    </p>
  </div>

  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">

    <div className="space-y-5">

      <input
        type="text"
        placeholder="Nama Lengkap"
        value={leadName}
        onChange={(e) => setLeadName(e.target.value)}
        className="w-full p-4 rounded-xl bg-black/40 border border-white/10"
      />

      <input
        type="text"
        placeholder="Nomor WhatsApp"
        value={leadPhone}
        onChange={(e) => setLeadPhone(e.target.value)}
        className="w-full p-4 rounded-xl bg-black/40 border border-white/10"
      />

      <select
        value={leadUnit}
        onChange={(e) => setLeadUnit(e.target.value)}
        className="w-full p-4 rounded-xl bg-black/40 border border-white/10"
      >
        <option value="">Pilih Unit Toyota</option>
        <option>Agya</option>
        <option>Calya</option>
        <option>Avanza</option>
        <option>Veloz HV</option>
        <option>Raize</option>
        <option>Rush</option>
        <option>Zenix HV</option>
        <option>Hilux Rangga</option>
      </select>
<div className="grid md:grid-cols-3 gap-4 text-center">
  <div className="bg-green-500/10 p-4 rounded-xl">
    🔥 Promo Terbaru
  </div>

  <div className="bg-blue-500/10 p-4 rounded-xl">
    💳 DP & Cicilan Ringan
  </div>

  <div className="bg-yellow-500/10 p-4 rounded-xl">
    🚗 Unit Ready Stock
  </div>
</div>
      <button
  onClick={() => {

    if (!leadName) {
      alert("Nama lengkap wajib diisi");
      return;
    }

    if (!leadPhone) {
      alert("Nomor WhatsApp wajib diisi");
      return;
    }

    if (!leadUnit) {
      alert("Silakan pilih unit Toyota");
      return;
    }

    const message = `Halo Pak Hayatul,

Nama : ${leadName}
No HP : ${leadPhone}
Unit : ${leadUnit}

Saya tertarik dengan promo Toyota dan ingin mendapatkan penawaran terbaik.`;

          window.open(
            `https://wa.me/6282340002917?text=${encodeURIComponent(message)}`,
            "_blank"
          );
        }}
        className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-bold text-white"
      >
        Kirim ke WhatsApp
      </button>

    </div>

  </div>

</div>

</section>

{/* Lokasi Showroom */}
<section id="kontak" className="py-20 px-6 md:px-16 bg-black">
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-10">
      <h2 className="text-5xl font-black mb-4">
        Lokasi Showroom
      </h2>

      <p className="text-gray-400">
        Kunjungi Showroom Hasjrat Toyota Gorontalo
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

      <iframe
        src="https://maps.google.com/maps?q=Hasjrat%20Toyota%20Gorontalo&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="rounded-2xl"
      ></iframe>

      <div className="mt-6 text-center">

        <p className="text-gray-300 mb-2">
  📍 Jl. Ahmad A. Wahab, Pentadio Barat
</p>

<p className="text-gray-300 mb-2">
  Telaga Biru, Kabupaten Gorontalo, Gorontalo 96181
</p>

<p className="text-gray-300 mb-2">
  🕒 Senin - Sabtu : 08.00 - 17.00
</p>

<p className="text-gray-300 mb-6">
  ☎️ Sales Hotline : 082340002917
</p>

        <a
          href="https://maps.google.com/?q=J2C5+XHX,+Jl.+Ahmad+A.+Wahab,+Pentadio+Barat,+Telaga+Biru,+Gorontalo"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-[0_0_25px_rgba(220,38,38,0.35)] px-8 py-4 rounded-xl font-bold text-white transition-all duration-300"
        >
          🧭 Petunjuk Arah ke Showroom
        </a>

      </div>

    </div>

  </div>
</section>
{selectedSimulasi && (

  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">

    <div className="bg-white rounded-[40px] max-w-lg w-full p-8 relative text-black shadow-[0_25px_80px_rgba(0,0,0,0.4)]">

      <button
  onClick={() => setSelectedSimulasi(null)}
  className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl font-bold text-black hover:bg-red-600 hover:text-white transition"
>
  ×
</button>

      <img
        src={selectedSimulasi.image}
        alt={selectedSimulasi.name}
        className="w-full h-56 object-contain mb-4"
      />

      <h2 className="text-3xl font-black text-center mb-2">
        {selectedSimulasi.name}
      </h2>

      <p className="text-center text-gray-500 mb-6">
      Simulasi Kredit Toyota
      </p>

      <div className="space-y-3 mb-6">

        <div className="bg-red-50 border border-red-100 p-4 rounded-2xl">
          <p className="text-xs text-gray-500">
            Harga OTR
          </p>
          <p className="text-xl font-black text-red-600">
            {selectedSimulasi.price}
          </p>
        </div>

        <div className="bg-gray-50 border p-4 rounded-2xl">
          <p className="text-xs text-gray-500">
            UM Setor Konsumen
          </p>
          <p className="text-xl font-black">
            {selectedSimulasi.dp}
          </p>
        </div>

<div className="mb-4">
  <p className="text-xs text-gray-500 mb-2">
    Pilih Tenor
  </p>

  <div className="grid grid-cols-5 gap-2">
  <button
  onClick={() => setSelectedTenor(12)}
  className={`p-2 rounded-xl text-sm font-bold ${
    selectedTenor === 12
      ? "bg-red-600 text-white"
      : "bg-gray-100 text-black"
  }`}
>
  12
</button>

<button
  onClick={() => setSelectedTenor(24)}
  className={`p-2 rounded-xl text-sm font-bold ${
    selectedTenor === 24
      ? "bg-red-600 text-white"
      : "bg-gray-100 text-black"
  }`}
>
  24
</button>

<button
  onClick={() => setSelectedTenor(36)}
  className={`p-2 rounded-xl text-sm font-bold ${
    selectedTenor === 36
      ? "bg-red-600 text-white"
      : "bg-gray-100 text-black"
  }`}
>
  36
</button>

<button
  onClick={() => setSelectedTenor(48)}
  className={`p-2 rounded-xl text-sm font-bold ${
    selectedTenor === 48
      ? "bg-red-600 text-white"
      : "bg-gray-100 text-black"
  }`}
>
  48
</button>

<button
  onClick={() => setSelectedTenor(60)}
  className={`p-2 rounded-xl text-sm font-bold ${
    selectedTenor === 60
      ? "bg-red-600 text-white"
      : "bg-gray-100 text-black"
  }`}
>
  60
</button>

  </div>

</div>
        <div className="bg-gray-50 border p-4 rounded-2xl">
          <p className="text-xs text-gray-500">
            Angsuran {selectedTenor} Bulan
          </p>
          <p className="text-xl font-black">
            {selectedTenor === 12 && selectedSimulasi.tenor12}
            {selectedTenor === 24 && selectedSimulasi.tenor24}
            {selectedTenor === 36 && selectedSimulasi.tenor36}
            {selectedTenor === 48 && selectedSimulasi.tenor48}
            {selectedTenor === 60 && selectedSimulasi.tenor60}
          </p>
        </div>

      </div>

      <button
        onClick={() =>
          window.open(
            `https://wa.me/6282340002917?text=Halo Pak Hayatul, saya ingin simulasi kredit Toyota ${selectedSimulasi.name}`,
            "_blank"
          )
        }
        className="w-full bg-green-500 text-white py-4 rounded-2xl font-bold hover:bg-green-600"
      >
        📲 Minta Simulasi Lengkap
      </button>

    </div>

  </div>
)}

      {showTestimonials && (
      <section id="testimoni" className="py-24 px-6 md:px-16 bg-gradient-to-b from-black to-[#120000]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              Testimoni Customer
            </h2>

            <p className="text-gray-400 text-lg">
              Kepuasan customer adalah prioritas utama pelayanan kami.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 hover:-translate-y-2 hover:border-red-500/40 transition duration-500"
              >
                <div className="flex justify-center mb-6">
                  <img
                    src={item.image}
                    alt="Testimoni Customer"
                    onClick={() => setSelectedTesti(item.image)}
                    className="w-full h-72 rounded-3xl object-cover cursor-pointer hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="text-center">
                  <div className="h-4"></div>

 <h3 className="mt-4 text-xl font-black text-white">
  Serah Terima Unit Toyota
</h3>

<p className="text-red-400 mt-2">
  Customer Toyota Gorontalo
</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

{/* Popup Foto Testimoni */}
{selectedTesti && (
  <div
    className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-6"
    onClick={() => setSelectedTesti(null)}
  >
  <button
  className="absolute top-6 right-6 text-white text-5xl font-bold"
  onClick={() => setSelectedTesti(null)}
>
  ×
</button>

    <img
      src={selectedTesti}
      alt="Testimoni"
      className="max-w-6xl max-h-[90vh] rounded-3xl shadow-2xl animate-pulse"
    />
  </div>
)}
    {/* Floating Sales Card */}
{/* Floating Sales Card */}

<div

onClick={() => {
  console.log("WA Klik - Hero Banner");
  console.log("WA Klik - Floating");
  console.log("WA Klik - Test Drive");
  console.log("WA Klik - Cek Promo");
  console.log("WA Klik - Simulasi");
  console.log("WA Klik - Form Leads");

  window.open(
    `https://wa.me/6282340002917?...`,
    "_blank"
  );
}}
  className="hidden md:block fixed bottom-4 right-4 md:bottom-10 md:right-6 z-50 cursor-pointer hover:scale-105 transition-all duration-300"
  onClick={() =>
    window.open(
      `https://wa.me/6282340002917?text=${encodeURIComponent(
        "Halo Pak Hayatul, saya melihat website Toyota Gorontalo dan ingin mendapatkan informasi promo, stok unit serta simulasi kredit terbaru."
      )}`,
      "_blank"
    )
  }
>
  <div className="bg-black/80 backdrop-blur-lg border border-red-500/30 rounded-xl p-3 shadow-2xl w-32 md:w-40">
    <div className="flex flex-col items-center text-center">

      <img
        src={salesPhoto}
        alt="Hayatul Kirom"
        className="w-20 h-28 object-cover rounded-lg border border-red-500"
      />
      <h4 className="font-bold text-white">
        Hayatul Kirom
      </h4>
      <p className="text-gray-400 text-sm">
        Sales Executive Toyota
      </p>
      <div className="mt-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">
        WhatsApp
      </div>
      <p className="text-green-400 text-xs mt-1 animate-pulse">
        🟢 Online Sekarang
      </p>
    </div>
  </div>
</div>

<footer className="py-8 text-center text-gray-500 border-t border-white/10 bg-black">
  © 2026 Hayatul Kirom - Sales Executive Toyota Gorontalo
</footer>

      {selectedCar && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">

    <div className="bg-white rounded-3xl max-w-md w-full pt-14 pb-6 px-6 relative">

   <button
    onClick={() => setSelectedCar(null)}
    className="absolute top-3 right-3 z-[9999] w-10 h-10 bg-red-600 text-white rounded-full shadow-lg flex items-center justify-center text-2xl font-bold"
    >
      ×
  </button>

      <img
        src={selectedCar.image}
        alt={selectedCar.name}
        className="w-full h-52 object-contain mb-4"
      />

      <h2 className="text-3xl font-black mb-2 text-black">
        {selectedCar.name}
      </h2>

      <p className="text-gray-600 mb-5">
        {selectedCar.desc}
      </p>

      <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
      🟢 Ready Stock
      </div>

      <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-5">
      Promo Toyota {monthYear}
      </div>

      <div className="space-y-3 mb-6">

  <div className="bg-red-50 border border-red-100 p-4 rounded-2xl">
    <p className="text-xs text-gray-500">
      Harga OTR Mulai
    </p>
    <p className="text-xl font-black text-red-600">
      {selectedCar.price}
    </p>
  </div>

  <div className="bg-gray-50 border p-4 rounded-2xl">
    <p className="text-xs text-gray-500">
      UM Setor Konsumen
    </p>
    <p className="text-xl font-black text-black">
      {selectedCar.dp}
    </p>
  </div>

  <div className="mb-4">
  <p className="text-xs text-gray-500 mb-2">
    Pilih Tenor
  </p>

  <div className="grid grid-cols-5 gap-2">

    <button
      onClick={() => setSelectedTenor(12)}
      className={`p-2 rounded-xl text-sm font-bold ${
        selectedTenor === 12
          ? "bg-red-600 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      12
    </button>

    <button
      onClick={() => setSelectedTenor(24)}
      className={`p-2 rounded-xl text-sm font-bold ${
        selectedTenor === 24
          ? "bg-red-600 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      24
    </button>

    <button
      onClick={() => setSelectedTenor(36)}
      className={`p-2 rounded-xl text-sm font-bold ${
        selectedTenor === 36
          ? "bg-red-600 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      36
    </button>

    <button
      onClick={() => setSelectedTenor(48)}
      className={`p-2 rounded-xl text-sm font-bold ${
        selectedTenor === 48
          ? "bg-red-600 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      48
    </button>

    <button
      onClick={() => setSelectedTenor(60)}
      className={`p-2 rounded-xl text-sm font-bold ${
        selectedTenor === 60
          ? "bg-red-600 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      60
    </button>

  </div>
</div>

  <div className="bg-gray-50 border p-4 rounded-2xl">
    <p className="text-xs text-gray-500">
      Angsuran {selectedTenor} Bulan
    </p>
    <p className="text-xl font-black text-black">
       {selectedTenor === 12 && selectedCar.tenor12}
       {selectedTenor === 24 && selectedCar.tenor24}
       {selectedTenor === 36 && selectedCar.tenor36}
       {selectedTenor === 48 && selectedCar.tenor48}
       {selectedTenor === 60 && selectedCar.tenor60}
</p>
  </div>

</div>
      <div className="grid grid grid-cols-1 md:grid-cols-2">

  <button
    onClick={() =>
      window.open(
        `https://wa.me/6282340002917?text=Halo Pak Hayatul, saya ingin booking test drive Toyota ${selectedCar.name}`,
        "_blank"
      )
    }
    className="bg-black text-white py-4 rounded-2xl font-bold hover:bg-gray-800"
  >
    🚗 Test Drive
  </button>

  <button
    onClick={() =>
      window.open(
        `https://wa.me/6282340002917?text=Halo Pak Hayatul, saya tertarik dengan Toyota ${selectedCar.name}`,
        "_blank"
      )
    }
    className="bg-green-500 text-white py-4 rounded-2xl font-bold hover:bg-green-600"
  >
    📲 Cek Promo
  </button>

</div>

      <p className="text-xs text-gray-500 text-center mb-4">
      *Harga dan angsuran dapat berubah sesuai program leasing dan persetujuan kredit.
      </p>

    </div>

  </div>
)}
    </div>
  );
}

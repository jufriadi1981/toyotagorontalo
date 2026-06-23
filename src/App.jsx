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
import yarisCross from "./assets/products/Yaris-Cross.png";
import reborn from "./assets/products/innova-reborn.png";
import fortuner from "./assets/products/Fortuner.png";
import hiluxDc from "./assets/products/Hilux-Dc.png";
import slider01 from "./assets/banners/slider-01.jpeg";
import slider02 from "./assets/banners/slider-02.jpeg";
import slider03 from "./assets/banners/slider-03.jpeg";
import slider04 from "./assets/banners/slider-04.jpeg";


// HAYATUL KIROM
import hayatulPhoto from "./assets/sales/hayatul-kirom/hayatul-kirom.jpeg";
import hayatul01 from "./assets/sales/hayatul-kirom/dec-hayatul-01.jpeg";
import hayatul02 from "./assets/sales/hayatul-kirom/dec-hayatul-02.jpeg";
import hayatul03 from "./assets/sales/hayatul-kirom/dec-hayatul-03.jpeg";
import hayatul04 from "./assets/sales/hayatul-kirom/dec-hayatul-04.jpeg";
import hayatul05 from "./assets/sales/hayatul-kirom/dec-hayatul-05.jpeg";
import hayatul06 from "./assets/sales/hayatul-kirom/dec-hayatul-06.jpeg";

// NOVITA HUSIN
import novitaPhoto from "./assets/sales/novita-husin/novita-husin.jpeg";
import novita01 from "./assets/sales/novita-husin/dec-novita-01.jpeg";
import novita02 from "./assets/sales/novita-husin/dec-novita-02.jpeg";
import novita03 from "./assets/sales/novita-husin/dec-novita-03.jpeg";
import novita04 from "./assets/sales/novita-husin/dec-novita-04.jpeg";
import novita05 from "./assets/sales/novita-husin/dec-novita-05.jpeg";
import novita06 from "./assets/sales/novita-husin/dec-novita-06.jpeg";

// IRWAN LATEDU
import irwanPhoto from "./assets/sales/irwan-latedu/irwan-latedu.jpeg";
import irwan01 from "./assets/sales/irwan-latedu/dec-irwan-01.jpeg";
import irwan02 from "./assets/sales/irwan-latedu/dec-irwan-02.jpeg";
import irwan03 from "./assets/sales/irwan-latedu/dec-irwan-03.jpeg";
import irwan04 from "./assets/sales/irwan-latedu/dec-irwan-04.jpeg";
import irwan05 from "./assets/sales/irwan-latedu/dec-irwan-05.jpeg";
import irwan06 from "./assets/sales/irwan-latedu/dec-irwan-06.jpeg";

// DAVID DWIYAHYA
import davidPhoto from "./assets/sales/david-dwiyahya/david-dwiyahya.jpeg";
import david01 from "./assets/sales/david-dwiyahya/dec-david-01.jpeg";
import david02 from "./assets/sales/david-dwiyahya/dec-david-02.jpeg";
import david03 from "./assets/sales/david-dwiyahya/dec-david-03.jpeg";
import david04 from "./assets/sales/david-dwiyahya/dec-david-04.jpeg";
import david05 from "./assets/sales/david-dwiyahya/dec-david-05.jpeg";
import david06 from "./assets/sales/david-dwiyahya/dec-david-06.jpeg";

// REFLIYANTO JUSUF
import refliyantoPhoto from "./assets/sales/refliyanto-jusuf/refliyanto-jusuf.jpeg";
import refliyanto01 from "./assets/sales/refliyanto-jusuf/dec-refliyanto-01.jpeg";
import refliyanto02 from "./assets/sales/refliyanto-jusuf/dec-refliyanto-02.jpeg";
import refliyanto03 from "./assets/sales/refliyanto-jusuf/dec-refliyanto-03.jpeg";
import refliyanto04 from "./assets/sales/refliyanto-jusuf/dec-refliyanto-04.jpeg";
import refliyanto05 from "./assets/sales/refliyanto-jusuf/dec-refliyanto-05.jpeg";
import refliyanto06 from "./assets/sales/refliyanto-jusuf/dec-refliyanto-06.jpeg";

// DEFCHI ISMAIL
import defchiPhoto from "./assets/sales/defchi-ismail/defchi-ismail.jpeg";
import defchi01 from "./assets/sales/defchi-ismail/dec-defchi-01.jpeg";
import defchi02 from "./assets/sales/defchi-ismail/dec-defchi-02.jpeg";
import defchi03 from "./assets/sales/defchi-ismail/dec-defchi-03.jpeg";
import defchi04 from "./assets/sales/defchi-ismail/dec-defchi-04.jpeg";
import defchi05 from "./assets/sales/defchi-ismail/dec-defchi-05.jpeg";
import defchi06 from "./assets/sales/defchi-ismail/dec-defchi-06.jpeg";

export default function LandingPage() {
  const [selectedSimulasi, setSelectedSimulasi] = useState(null);
  const [selectedTenor, setSelectedTenor] = useState(60);  
  const [selectedCar, setSelectedCar] = useState(null);
  const [showPriceList, setShowPriceList] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(false);
  const [selectedTesti, setSelectedTesti] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadUnit, setLeadUnit] = useState("");
  const currentDate = new Date();
  const monthYear = currentDate.toLocaleDateString("id-ID", {
  month: "long",
  year: "numeric",
});

  const heroSlides = [
  slider01,
  slider02,
  slider03,
  slider04,
];

const salesConfig = {
  hayatul: {
    nama: "Hayatul Kirom, A.Md",
    jabatan: "Sales Executive",
    wa: "6282340002917",
    photo: hayatulPhoto,
  },

  novita: {
    nama: "Novita Husin, S.KM",
    jabatan: "Counter Sales",
    wa: "6281243416272",
    photo: novitaPhoto,
  },

  irwan: {
    nama: "Irwan Latedu, S.Sos",
    jabatan: "Sales Executive",
    wa: "6281328108397",
    photo: irwanPhoto,
  },

  david: {
    nama: "David Dwiyahya M. Tuna, S.P",
    jabatan: "Sales Executive",
    wa: "6282259594051",
    photo: davidPhoto,
  },

  refliyanto: {
    nama: "Refliyanto Jusuf, S.Pd",
    jabatan: "Sales Executive",
    wa: "6285246236072",
    photo: refliyantoPhoto,
  },

  defchi: {
    nama: "Defchi Ismail, S.SI",
    jabatan: "Sales Executive",
    wa: "6285240014449",
    photo: defchiPhoto,
  },
};

const testimonialsConfig = {
  hayatul: [
    { image: hayatul01, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: hayatul02, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: hayatul03, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: hayatul04, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: hayatul05, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: hayatul06, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
  ],

  novita: [
    { image: novita01, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: novita02, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: novita03, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: novita04, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: novita05, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: novita06, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
  ],

  irwan: [
    { image: irwan01, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: irwan02, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: irwan03, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: irwan04, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: irwan05, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: irwan06, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
  ],

  david: [
    { image: david01, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: david02, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: david03, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: david04, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: david05, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: david06, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
  ],

  refliyanto: [
    { image: refliyanto01, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: refliyanto02, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: refliyanto03, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: refliyanto04, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: refliyanto05, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: refliyanto06, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
  ],

  defchi: [
    { image: defchi01, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: defchi02, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: defchi03, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: defchi04, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: defchi05, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
    { image: defchi06, name: "Customer Toyota", unit: "Serah Terima Unit Toyota" },
  ],
};

const hostname = window.location.hostname;
const currentUrl = window.location.origin;

useEffect(() => {
  console.log("Hostname:", hostname);
  console.log("Current URL:", currentUrl);
}, []);

let currentSales = salesConfig.hayatul;
let testimonials = testimonialsConfig.hayatul;

if (hostname.includes("gorontalotoyota.net")) {
  currentSales = salesConfig.novita;
  testimonials = testimonialsConfig.novita;
}
if (hostname.includes("gorontalotoyota.id")) {
  currentSales = salesConfig.irwan;
  testimonials = testimonialsConfig.irwan;
}

if (hostname.includes("toyota-gorontalo.com")) {
  currentSales = salesConfig.david;
  testimonials = testimonialsConfig.david;
}

if (hostname.includes("toyotagorontalo.id")) {
  currentSales = salesConfig.refliyanto;
  testimonials = testimonialsConfig.refliyanto;
}

if (hostname.includes("toyotagorontalo.com")) {
  currentSales = salesConfig.defchi;
  testimonials = testimonialsConfig.defchi;
}
  const cars = [
  
  {
    name: "All New Agya",
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
    name: "All New Calya",
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
    name: "All New Avanza",
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
  name: "Veloz HEV",
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
     name: "All New Raize",
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
    name: "All New Rush",
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
  name: "Zenix HEV",
  image: zenix,
  desc: "Hybrid Premium dengan Teknologi Masa Depan",
  price: "Rp 493.300.000",
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
{
  name: "Yaris Cross Hev",
  desc: "SUV Hybrid Stylish dan Irit untuk Keluarga Aktif",
  image: yarisCross,
  price: "Rp 410.600.000",
  dp: "Rp 40.100.000",
  tenor12: "31.819.000",
  tenor24: "17.441.000",
  tenor36: "12.682.000",
  tenor48: "10.395.000",
  tenor60: "9.230.000",
},

{
  name: "Innova Reborn",
  desc: "Legenda Diesel Toyota yang Nyaman dan Bertenaga",
  image: reborn,
  price: "Rp 472.700.000",
  dp: "Rp 49.500.000",
  tenor12: "36.647.000",
  tenor24: "20.102.000",
  tenor36: "14.625.000",
  tenor48: "11.989.000",
  tenor60: "10.648.000",
},

{
  name: "Fortuner 2.8",
  desc: "SUV Premium yang Siap Menaklukkan Setiap Perjalanan",
  image: fortuner,
  price: "Rp 648.300.000",
  dp: "Rp 70.800.000",
  tenor12: "50.209.000",
  tenor24: "27.323.000",
  tenor36: "19.777.000",
  tenor48: "16.149.000",
  tenor60: "14.281.000",
},

{
  name: "Hilux Double Cabin",
  desc: "Tangguh di Proyek, Nyaman untuk Aktivitas Harian",
  image: hiluxDc,
  price: "Rp 511.800.000",
  dp: "Rp 60.300.000",
  tenor12: "40.150.000",
  tenor24: "22.089.000",
  tenor36: "16.107.000",
  tenor48: "13.227.000",
  tenor60: "11.760.000",
},
];

const carVariants = {
  "All New Agya": [
    { type: "AGYA 1.2 E M/T", price: "Rp 209.100.000" },
    { type: "AGYA 1.2 G M/T", price: "Rp 217.400.000" },
    { type: "AGYA 1.2 G CVT", price: "Rp 236.100.000" },
    { type: "AGYA 1.2 G M/T LUX", price: "Rp 225.200.000" },
    { type: "AGYA STYLIX 1.2 G CVT", price: "Rp 240.700.000" },
  ],
"All New Calya": [
  { type: "CALYA 1.2 E STD M/T", price: "Rp 207.000.000" },
  { type: "CALYA 1.2 E M/T", price: "Rp 209.300.000" },
  { type: "CALYA 1.2 G M/T", price: "Rp 215.500.000" },
  { type: "CALYA 1.2 G A/T", price: "Rp 230.800.000" },
  { type: "CALYA 1.2 G M/T LUX", price: "Rp 218.500.000" },
  { type: "CALYA 1.2 G A/T LUX", price: "Rp 233.800.000" },
],

"All New Avanza": [
  { type: "AVANZA 1.3 E M/T", price: "Rp 290.500.000" },
  { type: "AVANZA 1.3 E CVT", price: "Rp 305.900.000" },
  { type: "AVANZA 1.5 G M/T", price: "Rp 315.900.000" },
  { type: "AVANZA 1.5 G CVT", price: "Rp 331.600.000" },
],

"Veloz HEV": [
  { type: "VELOZ 1.5 V HV CVT Non Premium", price: "Rp 333.000.000" },
  { type: "VELOZ 1.5 V HV CVT Premium", price: "Rp 334.500.000" },
  { type: "VELOZ 1.5 Q HV CVT Non Premium", price: "Rp 348.000.000" },
  { type: "VELOZ 1.5 Q HV CVT Premium", price: "Rp 349.500.000" },
],

"All New Rush": [
  { type: "RUSH 1.5 G M/T", price: "Rp 341.400.000" },
  { type: "RUSH 1.5 G A/T", price: "Rp 353.000.000" },
  { type: "RUSH 1.5 S M/T GR SPORT", price: "Rp 357.700.000" },
  { type: "RUSH 1.5 S A/T GR SPORT", price: "Rp 369.900.000" },
],

"All New Raize": [
  { type: "RAIZE 1.2 G M/T", price: "Rp 291.200.000" },
  { type: "RAIZE 1.2 G CVT", price: "Rp 307.500.000" },
  { type: "RAIZE 1.0T G M/T", price: "Rp 312.100.000" },
  { type: "RAIZE 1.0T G CVT", price: "Rp 327.900.000" },
  { type: "RAIZE 1.0T GR SPORT CVT", price: "Rp 342.700.000" },
  { type: "RAIZE 1.0T GR SPORT CVT TWO TONE", price: "Rp 345.400.000" },
  { type: "RAIZE 1.0T GR SPORT CVT TSS", price: "Rp 369.800.000" },
],
"Yaris Cross Hev": [
  { type: "YARIS CROSS 1.5 G HV CVT", price: "Rp 452.800.000" },
  { type: "YARIS CROSS 1.5 G HV CVT Premium", price: "Rp 455.500.000" },
  { type: "YARIS CROSS 1.5 G HV CVT Dual Tone", price: "Rp 457.100.000" },
  { type: "YARIS CROSS 1.5 G HV CVT Dual Tone Premium", price: "Rp 458.000.000" },
  { type: "YARIS CROSS 1.5 S HV CVT TSS", price: "Rp 502.900.000" },
  { type: "YARIS CROSS 1.5 S HV CVT TSS Premium", price: "Rp 504.200.000" },
  { type: "YARIS CROSS 1.5 S HV CVT TSS Dual Tone", price: "Rp 506.900.000" },
  { type: "YARIS CROSS 1.5 S HV CVT TSS Dual Tone Premium", price: "Rp 508.000.000" },
  { type: "YARIS CROSS 1.5 S HV CVT TSS GR Package", price: "Rp 512.400.000" },
  { type: "YARIS CROSS 1.5 S HV CVT TSS GR Package Premium", price: "Rp 514.900.000" },
  { type: "YARIS CROSS 1.5 S HV CVT TSS GR Package Dual Tone", price: "Rp 516.400.000" },
  { type: "YARIS CROSS 1.5 S HV CVT TSS GR Package Dual Tone Premium", price: "Rp 517.400.000" },
],
"Innova Reborn": [
  { type: "INNOVA 2.4 G M/T DIESEL", price: "Rp 472.700.000" },
  { type: "INNOVA 2.4 G A/T DIESEL", price: "Rp 495.900.000" },
],
"Zenix HEV": [
  { type: "INNOVA ZENIX 2.0 G CVT", price: "Rp 493.300.000" },
  { type: "INNOVA ZENIX 2.0 G CVT Premium", price: "Rp 496.300.000" },
  { type: "INNOVA ZENIX 2.0 V CVT", price: "Rp 542.900.000" },
  { type: "INNOVA ZENIX 2.0 V CVT Premium", price: "Rp 545.900.000" },
  { type: "INNOVA ZENIX 2.0 G HV CVT", price: "Rp 534.400.000" },
  { type: "INNOVA ZENIX 2.0 G HV CVT Premium", price: "Rp 537.400.000" },
  { type: "INNOVA ZENIX 2.0 V HV CVT MODELLISTA", price: "Rp 612.500.000" },
  { type: "INNOVA ZENIX 2.0 V HV CVT MODELLISTA Premium", price: "Rp 615.400.000" },
  { type: "INNOVA ZENIX 2.0 Q HV CVT TSS MODELLISTA", price: "Rp 695.800.000" },
  { type: "INNOVA ZENIX 2.0 Q HV CVT TSS MODELLISTA Premium", price: "Rp 698.700.000" },
],
"Fortuner 2.8": [
  { type: "FORTUNER 2.4 G 4x2 M/T", price: "Rp 648.300.000" },
  { type: "FORTUNER 2.4 G 4x2 A/T", price: "Rp 667.700.000" },
  { type: "FORTUNER 2.7 SRZ GR PARTS AERO 4x2 A/T", price: "Rp 704.000.000" },
  { type: "FORTUNER 2.7 SRZ GR PARTS AERO Premium", price: "Rp 707.100.000" },
  { type: "FORTUNER 2.7 SRZ GR PARTS AERO Two Tone", price: "Rp 709.200.000" },
  { type: "FORTUNER 2.8 VRZ 4x2 A/T", price: "Rp 723.200.000" },
  { type: "FORTUNER 2.8 VRZ TSS 4x2 A/T", price: "Rp 738.500.000" },
  { type: "FORTUNER 2.8 VRZ GR PARTS TSS", price: "Rp 749.700.000" },
  { type: "FORTUNER 2.8 VRZ GR PARTS TSS Premium", price: "Rp 752.900.000" },
  { type: "FORTUNER 2.8 VRZ GR PARTS TSS Two Tone", price: "Rp 755.100.000" },
  { type: "FORTUNER 2.8 VRZ 4x4 A/T", price: "Rp 839.400.000" },
  { type: "FORTUNER 2.8 VRZ 4x4 GR SPORT TSS", price: "Rp 870.200.000" },
  { type: "FORTUNER 2.8 VRZ 4x4 GR SPORT TSS Two Tone", price: "Rp 875.200.000" },
],
"Hilux Rangga": [
  { type: "RANGGA 2.0 STANDARD M/T", price: "Rp 236.500.000" },
  { type: "RANGGA 2.0 STANDARD M/T 3 WAY", price: "Rp 237.600.000" },
  { type: "RANGGA 2.0 HIGH M/T", price: "Rp 262.900.000" },
  { type: "RANGGA 2.4 DSL STANDARD M/T", price: "Rp 294.600.000" },
  { type: "RANGGA 2.4 DSL STANDARD M/T 3 WAY", price: "Rp 296.400.000" },
  { type: "RANGGA 2.4 DSL HIGH M/T", price: "Rp 333.400.000" },
  { type: "RANGGA 2.4 DSL HIGH A/T", price: "Rp 355.600.000" },
],

 "Hilux Double Cabin": [
  { type: "HILUX D-CAB 2.4 E (4x4) DSL M/T", price: "Rp 511.800.000" },
  { type: "HILUX D-CAB 2.4 G (4x4) DSL M/T", price: "Rp 547.500.000" },
  { type: "HILUX D-CAB 2.4 V (4x4) DSL A/T", price: "Rp 606.300.000" },
],

};
  useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) =>
      prev === heroSlides.length - 1 ? 0 : prev + 1
    );
  }, 5000);

  return () => clearInterval(timer);
}, []);

useEffect(() => {
  document.title = `Promo Toyota Gorontalo | ${currentSales.nama}`;

  const description =
    `Promo Toyota Gorontalo bersama ${currentSales.nama}. DP ringan, kredit mudah, trade in dan promo Toyota terbaru di Gorontalo.`;

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  }

  const ogTitle = document.querySelector(
  'meta[property="og:title"]'
);

if (ogTitle) {
  ogTitle.setAttribute(
    "content",
    `Promo Toyota Gorontalo | ${currentSales.nama}`
  );
}

const ogDescription = document.querySelector(
  'meta[property="og:description"]'
);

if (ogDescription) {
  ogDescription.setAttribute(
    "content",
    description
  );
}

const schema = document.querySelector(
  'script[type="application/ld+json"]'
);

if (schema) {
  const data = JSON.parse(schema.textContent);

  data.url = window.location.origin;
  data.image = `${window.location.origin}/logo.png`;

  schema.textContent = JSON.stringify(data);
}

  let canonical = document.querySelector(
    'link[rel="canonical"]'
  );

  if (canonical) {
    canonical.setAttribute(
      "href",
      `https://${window.location.hostname}/`
    );
  }

const ogUrl = document.querySelector(
  'meta[property="og:url"]'
);

if (ogUrl) {
  ogUrl.setAttribute(
    "content",
    window.location.origin + "/"
  );
}

}, [currentSales]);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-[80px]">

   {/* Logo Hasjrat */}
<div className="flex items-center">
  <img
    src={hasjratLogo}
    alt="Hasjrat Toyota"
    className="h-7 md:h-10 object-contain"
  />
</div>

    {/* Menu */}
    <button
  className="lg:hidden text-black text-4xl font-bold"
  onClick={() => setMobileMenu(!mobileMenu)}
>
  ☰
</button>
      <nav className="hidden lg:flex items-center gap-8 text-base font-semibold">
      <a
    href="#"
  onClick={(e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
  className="text-black hover:text-red-500 transition"
>
  Beranda

</a>
    <button
  onClick={() => {
    document
      .getElementById("unit")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }}
  className="text-gray-800 hover:text-red-500 transition whitespace-nowrap"
>
  Unit Toyota
</button>

<button
  onClick={() => {
    document
      .getElementById("promo")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }}
  className="text-gray-800 hover:text-red-500 transition"
>
  Lihat Promo
</button>

      <a href="#layanan" className="text-gray-800 hover:text-red-500 transition">
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
        className="text-gray-800 hover:text-red-500 transition"
      >
        Testimoni
      </button>

      <a href="#kontak" className="text-gray-800 hover:text-red-500 transition">
        Kontak
      </a>
    </nav>

{mobileMenu && (
  <div className="absolute top-full left-0 w-full bg-black/95 text-white lg:hidden z-[9999]">
    <button
  onClick={() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMobileMenu(false);
  }}
  className="block w-full text-left px-6 py-3 border-b border-gray-700"
>
  Beranda
</button>

    <button
  onClick={() => {
    document.getElementById("unit")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileMenu(false);
  }}
  className="block w-full text-left px-6 py-3 border-b border-gray-700"
>
  Unit Toyota
</button>

   <button
  onClick={() => {
    document.getElementById("promo")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileMenu(false);
  }}
  className="block w-full text-left px-6 py-3 border-b border-gray-700"
>
  Promo
</button>

    <button
  onClick={() => {
    document.getElementById("layanan")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileMenu(false);
  }}
  className="block w-full text-left px-6 py-3 border-b border-gray-700"
>
  Layanan
</button>

<button
  onClick={() => {
    setMobileMenu(false);

    setTimeout(() => {
      document
        .getElementById("kontak")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  }}
  className="block w-full text-left px-6 py-3"
>
  Kontak
</button>

   <button
  onClick={() => {
    setShowTestimonials(true);

    setTimeout(() => {
      document
        .getElementById("testimoni")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 200);

    setMobileMenu(false);
  }}
  className="block w-full text-left px-6 py-3 border-b border-gray-700"
>
  Testimoni
</button>

  </div>
)}

  </div>
</header>

      {/* Hero */}
      <section className="relative min-h-[85vh] pt-24 md:pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(220,38,38,0.35),transparent_40%),linear-gradient(to_right,_#000000,_#120000,_#000000)]"></div>
<div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-20 items-center max-w-7xl mx-auto relative z-10 px-5 md:px-10">
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

<p className="text-xl md:text-2xl font-bold text-red-400 mb-6 leading-tight">
  DP Mulai 10% • Trade In • Kredit Mudah
</p>

 <p className="mt-4 text-base md:text-lg text-gray-300 leading-relaxed max-w-lg">
  Dapatkan penawaran terbaik Toyota untuk wilayah Gorontalo
  dengan promo menarik, konsultasi kredit gratis, dan pelayanan
  cepat dari Sales Executive Toyota.
</p>

<div className="flex flex-col gap-4 pb-6 md:grid md:grid-cols-2 max-w-lg">

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
  🛡️ Promo Proteksi Kendaraan
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

  onClick={() => {
    if (typeof gtag !== "undefined") {
      gtag("event", "whatsapp_click", {
        event_category: "Lead",
        event_label: currentSales.nama,
        sales_name: currentSales.nama,
        sales_phone: currentSales.wa,
        website: window.location.hostname
      });
    }

    window.open(
      `https://wa.me/${currentSales.wa}?text=${encodeURIComponent(`
Halo Kak ${currentSales.nama},

Saya menghubungi dari website ${window.location.hostname}

Saya tertarik dengan:
• Promo Toyota terbaru
• Stok unit tersedia
• Simulasi kredit

Mohon informasi lebih lanjut. Terima kasih.
`)}`,
      "_blank"
    );
  }}

  className="bg-gradient-to-r from-black to-gray-900 text-white px-12 py-5 rounded-2xl ..."
>
  Chat WhatsApp
</button>

         <a
  href="#promo"
  className="
    flex
    items-center
    justify-center
    border border-gray-600
    px-6 py-3
    rounded-xl
    text-center
  "
>
  Lihat Promo
</a>
            </div>
          </div>         
            
            <div className="block lg:flex items-center justify-end relative">
            <div className="absolute w-[500px] h-[500px] bg-red-600/20 blur-[120px] rounded-full"></div>
            <div className="relative flex justify-center items-center"></div>
            <img
              src={heroSlides[currentSlide]}
              alt="Promo Toyota"
              className="w-full max-w-[320px] md:max-w-[520px] mx-auto object-contain hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

  <div className="bg-black/60 border border-red-500/20 rounded-3xl p-4 text-center">
    <div className="text-4xl mb-3">⭐</div>
    <h3 className="text-base font-bold text-white">Dealer Resmi</h3>
    <p className="text-gray-400 text-sm mt-2">
      Transaksi aman & terpercaya
    </p>
  </div>

  <div className="bg-black/60 border border-red-500/20 rounded-3xl p-4 text-center">
    <div className="text-4xl mb-3">🚗</div>
    <h3 className="text-base font-bold text-white">Ready Stock</h3>
    <p className="text-gray-400 text-sm mt-2">
      Unit tersedia setiap hari
    </p>
  </div>

  <div className="bg-black/60 border border-red-500/20 rounded-3xl p-4 text-center">
    <div className="text-4xl mb-3">⚡</div>
    <h3 className="text-base font-bold text-white">Fast Response</h3>
    <p className="text-gray-400 text-sm mt-2">
      Respon WhatsApp cepat
    </p>
  </div>

  <div className="bg-black/60 border border-red-500/20 rounded-3xl p-4 text-center">
    <div className="text-4xl mb-3">💰</div>
    <h3 className="text-base font-bold text-white">DP Mulai 10%</h3>
    <p className="text-gray-400 text-sm mt-2">
      Kredit ringan & fleksibel
    </p>
  </div>

  <div className="bg-black/60 border border-red-500/20 rounded-3xl p-4 text-center">
    <div className="text-4xl mb-3">🔄</div>
    <h3 className="ttext-base font-bold text-white">Trade In</h3>
    <p className="text-gray-400 text-sm mt-2">
      Semua merek diterima
    </p>
  </div>

</div>

      {/* Product */}      
  <section
    id="promo"
    className="scroll-mt-24 px-6 md:px-16 py-3 bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white"
  >
    <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl md:text-5xl font-black mb-6">
      PROMO TOYOTA
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

  onClick={() => {
  if (typeof gtag !== "undefined") {
    gtag("event", "whatsapp_click", {
      event_category: "Lead",
      event_label: currentSales.nama,
      sales_name: currentSales.nama,
      sales_phone: currentSales.wa,
      website: window.location.hostname
    });
  }
    window.open(
      `https://wa.me/${currentSales.wa}?text=${encodeURIComponent(`
Halo Kak ${currentSales.nama},

Saya menghubungi dari website:
${window.location.hostname}

Saya tertarik dengan:
• Promo Toyota terbaru
• Simulasi Kredit
• Stok Unit Toyota

Mohon informasi lebih lanjut.

Terima kasih.
`)}`,
      "_blank"
    );
  }}
  className="bg-gradient-to-r from-black to-gray-900 text-white px-12 py-5 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all"
>
  <span className="flex items-center justify-center gap-2">
    <FaWhatsapp className="text-green-400 text-xl" />
    WhatsApp Penawaran Terbaik
  </span>
</button>

  </div>
</section>
          <section id="unit" className="scroll-mt-24 px-6 md:px-16 py-14 bg-white">
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
  className="w-full h-40 md:h-64 object-contain hover:scale-105 transition-all duration-500"
 />

  {["All New Agya",
  "All New Calya",
  "Hilux Rangga",
  "Yaris Cross Hev",
  "Hilux Double Cabin"].includes(car.name) && (
  <div className="absolute bottom-2 left-2 md:top-3 md:left-3 md:bottom-auto bg-gradient-to-r from-red-700 to-red-500 text-white px-2 py-1 md:px-3 rounded-full text-[10px] md:text-[11px] font-semibold shadow-lg">
    Promo {monthYear}
  </div>
)}

{["All New Avanza","Veloz HEV","All new Raize","All New Rush","Zenix HEV"].includes(car.name) && (
  <div className="absolute bottom-2 left-2 md:top-3 md:left-3 md:bottom-auto bg-gradient-to-r from-emerald-700 to-emerald-500 text-white px-2 py-1 md:px-3 rounded-full text-[10px] md:text-[11px] font-semibold shadow-lg">
    Program Proteksi
  </div>
)}

{["Fortuner 2.8","Innova Reborn"].includes(car.name) && (
  <div className="absolute bottom-2 left-2 md:top-3 md:left-3 md:bottom-auto bg-green-600 text-white px-2 py-1 md:px-3 rounded-full text-[10px] md:text-[11px] font-semibold shadow-lg">
    Cashback 3 Bulan
  </div>
)}

</div>

<h3 className="text-3xl font-black text-black mb-2">
  {car.name}
</h3>

<p className="text-gray-500 mb-6 min-h-[56px]">
  {car.desc}
</p>

<div className="mb-5">
  <p className="text-red-600 text-2xl font-black">
    {car.price}
  </p>

  <p className="text-green-600 font-bold">
    DP Mulai {car.dp}
  </p>
</div>

<div className="flex gap-3 mt-5">

  <button
  onClick={() => {
  setSelectedSimulasi(null);
  setSelectedCar(car);
  }}
  className="bg-black text-white flex-1 py-4 rounded-2xl font-bold hover:bg-gray-800 transition"
>
  Lihat Detail
</button>

<button
  onClick={() => {
    setSelectedCar(null);
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
    <h2 className="text-3xl md:text-5xl font-black mb-4">
    Dapatkan Penawaran Toyota Terbaik
    </h2>

    <p className="text-gray-400 text-sm md:text-base">
    Isi data di bawah ini dan Sales Executive Toyota akan menghubungi Anda melalui WhatsApp.
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

  {cars.map((car) => (
    <option key={car.name} value={car.name}>
      {car.name}
    </option>
  ))}
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

    const message = `Halo Kak ${currentSales.nama},

Nama : ${leadName}
No HP : ${leadPhone}
Unit : ${leadUnit}

Saya tertarik dengan promo Toyota dan ingin mendapatkan penawaran terbaik.`;

if (typeof gtag !== "undefined") {
  gtag("event", "lead_submit", {
    event_category: "Lead",
    event_label: leadUnit,
    sales_name: currentSales.nama,
    sales_phone: currentSales.wa,
    customer_name: leadName,
    website: window.location.hostname
  });
}

setTimeout(() => {
  window.open(
    `https://wa.me/${currentSales.wa}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}, 1000);
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

<section id="layanan" className="py-20 px-6 md:px-16 bg-[#120000]">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-4xl md:text-5xl font-black mb-10">
      Layanan Toyota Gorontalo
    </h2>

    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-white/5 rounded-3xl p-6">
        🚗
        <h3 className="font-bold mt-3">Test Drive</h3>
      </div>

      <div className="bg-white/5 rounded-3xl p-6">
        🔄
        <h3 className="font-bold mt-3">Trade In</h3>
      </div>

      <div className="bg-white/5 rounded-3xl p-6">
        💳
        <h3 className="font-bold mt-3">Simulasi Kredit</h3>
      </div>

      <div className="bg-white/5 rounded-3xl p-6">
        🛠️
        <h3 className="font-bold mt-3">After Sales</h3>
      </div>

    </div>

  </div>
</section>

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
      src="https://maps.google.com/maps?q=Jl.%20Ahmad%20A.%20Wahab,%20Pentadio%20Barat,%20Telaga%20Biru,%20Kabupaten%20Gorontalo,%20Gorontalo&t=&z=17&ie=UTF8&iwloc=&output=embed"
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
  ☎️ Sales Hotline : {currentSales.wa}
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

    <div className="bg-white rounded-[30px] w-full max-w-[95vw] md:max-w-lg max-h-[90vh] overflow-y-auto p-4 md:p-8 relative text-black shadow-[0_25px_80px_rgba(0,0,0,0.4)]">

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

      <h2 className="text-xl md:text-3xl font-black text-center mb-2">
        {selectedSimulasi.name}
      </h2>

      <p className="text-center text-gray-500 mb-6">
      Simulasi Kredit Toyota
      </p>

      <div className="space-y-2 mb-4">

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

  <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
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
       onClick={() => {

        if (typeof gtag !== "undefined") {
        gtag("event", "simulasi_click");
       }

          window.open(
            `https://wa.me/${currentSales.wa}?text=Halo Kak ${currentSales.nama}, saya ingin simulasi kredit Toyota ${selectedSimulasi.name}`,
            "_blank"
          )
        }}
        
        className="w-full bg-green-500 text-white py-4 rounded-2xl font-bold hover:bg-green-600"
      >
        📲 Minta Simulasi Lengkap
      </button>

    </div>

  </div>
)}

{selectedCar && (

  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">

    <div className="bg-white rounded-[40px] max-w-lg w-full p-8 relative text-black shadow-[0_25px_80px_rgba(0,0,0,0.4)]">

      <button
        onClick={() => setSelectedCar(null)}
        className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-red-600 text-white shadow-lg flex items-center justify-center text-2xl font-bold"
      >
        ×
      </button>

      <img
         src={selectedCar.image}
         alt={selectedCar.name}
        className="w-full h-56 object-contain mb-4"
      />

      <h2 className="text-xl md:text-3xl font-black text-center mb-2">
        {selectedCar.name}
      </h2>
      
      <p className="text-center text-red-600 font-bold">
      {selectedCar.name}
      </p>
      
      <p className="text-center text-gray-500 mb-6">
        Detail Toyota
      </p>

      <button
        onClick={() => {

       if (typeof gtag !== "undefined") {
       gtag("event", "penawaran_click");
      }

      window.open(
      `https://wa.me/${currentSales.wa}?text=Halo Kak ${currentSales.nama}, saya ingin informasi lengkap Toyota ${selectedCar.name}`,
      "_blank"
      );
      }}
        className="w-full mt-5 bg-green-500 text-white py-4 rounded-2xl font-bold hover:bg-green-600"
      >
        📲 Minta Penawaran
      </button>
    </div>
    </div>
  )}

      {showTestimonials && (
      <section id="testimoni" className="mt-10 pt-24 pb-24 px-6 md:px-16 bg-gradient-to-b from-black to-[#120000]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              Dokumentasi Serah Terima Unit
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
                    className="w-full aspect-[4/3] object-cover rounded-3xl object-cover cursor-pointer hover:scale-105 transition duration-300"
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
  className="hidden md:block fixed bottom-4 right-4 md:bottom-10 md:right-6 z-50 cursor-pointer hover:scale-105 transition-all duration-300"
  onClick={() => {

  if (typeof gtag !== "undefined") {
    gtag("event", "whatsapp_floating");
  }

  window.open(
    `https://wa.me/${currentSales.wa}?text=${encodeURIComponent(
      `Halo Kak ${currentSales.nama},

Saya melihat website ${window.location.hostname}

Saya ingin mendapatkan informasi:
• Promo Toyota terbaru
• Stok unit tersedia
• Simulasi kredit

Mohon bantuannya. Terima kasih.`
    )}`,
    "_blank"
  )
}}
>
  <div className="bg-black/80 backdrop-blur-lg border border-red-500/30 rounded-xl p-3 shadow-2xl w-32 md:w-40">
    <div className="flex flex-col items-center text-center">

      <img
        src={currentSales.photo}
        alt={currentSales.nama}
        className="w-20 h-28 object-cover rounded-lg border border-red-500"
      />
      <h4 className="font-medium text-white text-[11px] mt-2 text-center leading-tight">
      {currentSales.nama}
      </h4>
      <p className="text-gray-400 text-sm">
        {currentSales.jabatan}
      </p>

      <div className="flex items-center justify-center gap-2">
  <span className="relative flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
  </span>

  <span className="text-green-400 text-xs font-semibold">
    Online
  </span>

</div>
</div>
  </div>
</div>

{/* Floating Sales Mobile */}
<div
  className="md:hidden fixed bottom-4 right-3 z-50 cursor-pointer"
  onClick={() => {

  if (typeof gtag !== "undefined") {
    gtag("event", "whatsapp_mobile");
  }

  window.open(
    `https://wa.me/${currentSales.wa}`,
    "_blank"
  );

}}
>
  <div className="bg-black/90 border border-red-500/20 rounded-xl p-2 shadow-xl w-24">

    <div className="flex justify-center">
      <img
        src={currentSales.photo}
        alt={currentSales.nama}
        className="w-14 h-16 object-cover rounded-lg border border-red-500"
      />
    </div>

    <h4 className="font text-white text-xs mt-2 text-center leading-tight">
      {currentSales.nama}
    </h4>

    <div className="flex items-center justify-center gap-1 mt-1">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>

      <span className="text-green-400 text-xs font-semibold">
        Online
      </span>
    </div>

  </div>
</div>

<footer className="py-8 text-center text-gray-500 border-t border-white/10 bg-black">
  © 2026 {currentSales.nama} - {currentSales.jabatan} Gorontalo
</footer>


      {selectedCar && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">

    <div className="bg-white rounded-3xl max-w-sm w-full max-h-[90vh] overflow-y-auto pt-10 pb-4 px-4 relative">

   <button
    onClick={() => setSelectedCar(null)}
    className="absolute top-4 right-4 z-[9999] w-10 h-10 bg-red-600 text-white rounded-full shadow-lg flex items-center justify-center text-2xl font-bold"
    >
      ✕
  </button>

      <img
        src={selectedCar.image}
        alt={selectedCar.name}
         className="w-full h-56 object-contain mb-4"
      />

      <h2 className="text-xl font-bold mb-1 text-black">
        {selectedCar.name}
      </h2>

      <p className="text-gray-600 mb-5">
        {selectedCar.desc}
      </p>

     <div className="inline-block bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-bold mb-3">
    🟢 Ready Stock
     </div>

     <div className="inline-block bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
    Promo Toyota {monthYear}
    </div>

      <div className="space-y-2 mb-4">

     <div className="bg-red-50 border border-red-100 px-4 py-2 rounded-xl">
     <p className="text-[10px] text-gray-500">
        Harga OTR Mulai
     </p>

     <p className="text-xl font-bold text-red-600 leading-tight">
     {selectedCar.price}
     </p>

</div>
  
<div className="border rounded-xl overflow-hidden">
  
  <div className="grid grid-cols-[2fr_1fr] bg-green-500 text-white text-xs font-bold">
    <div className="p-2">TYPE</div>
    <div className="p-2 text-right">OTR</div>
  </div>
  {carVariants[selectedCar.name]?.map((item, index) => (
  <div
    key={index}
    className="grid grid-cols-[2fr_1fr] border-t text-xs"
  >
    <div className="p-2 text-black">
  {item.type}
</div>

<div className="p-2 text-right text-black font-semibold">
  {item.price}
</div>
  </div>
))}

</div>

</div>
      <div className="grid grid-cols-2 gap-3">

  <button
    onClick={() =>
      window.open(
        `https://wa.me/${currentSales.wa}?text=Halo Kak ${currentSales.nama}, saya ingin booking test drive Toyota ${selectedCar.name}`,
        "_blank"
      )
    }
    className="bg-black text-white py-2 rounded-xl text-sm font-semibold hover:bg-gray-800"
  >
    🚗 Test Drive
  </button>

  <button
    onClick={() =>
      window.open(
        `https://wa.me/${currentSales.wa}?text=Halo Kak ${currentSales.nama}, saya tertarik dengan Toyota ${selectedCar.name}`,
        "_blank"
      )
    }

    className="bg-green-500 text-white py-2 rounded-xl text-sm font-semibold hover:bg-green-600"
  >
    📲 Minta Penawaran
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
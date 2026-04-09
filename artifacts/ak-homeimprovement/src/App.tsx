import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, MapPin, Clock, Star, Menu, X, ChevronRight, CheckCircle2, Shield, Wrench, Paintbrush, Hammer, Zap, Droplets, Mail, Facebook } from "lucide-react";
import { SiFacebook } from "react-icons/si";

const queryClient = new QueryClient();

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1600&q=85",
    label: "Modern Home Renovations"
  },
  {
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1600&q=85",
    label: "Painting · Flooring · Remodeling · Epoxy · Drywall"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85",
    label: "Beautiful Interiors"
  },
  {
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1600&q=85",
    label: "Quality Flooring"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const services = [
  {
    title: "Interior & Exterior Painting",
    icon: Paintbrush,
    desc: "Professional painting services to refresh and protect your home inside and out.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80"
  },
  {
    title: "Vinyl Flooring & Baseboards",
    icon: Hammer,
    desc: "Flawless installation of modern flooring and trim for a polished finish.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
  },
  {
    title: "Bathroom Remodeling",
    icon: Droplets,
    desc: "Complete renovations tailored to transform your bathroom into a personal oasis.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80"
  },
  {
    title: "Drywall & Mold Removal",
    icon: Shield,
    desc: "Expert drywall repair, replacement, and safe certified mold remediation.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
  },
  {
    title: "Epoxy Garage Floors",
    icon: Zap,
    desc: "Durable, seamless epoxy coatings that are easy to clean and built to last.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80"
  },
  {
    title: "General Home Improvement",
    icon: Wrench,
    desc: "Fence installation, TV mounting, blinds, storm damage repair, and much more.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
  }
];

const reviews = [
  { text: "Right price, hard workers, nice people. Highly recommend for any home project.", author: "Google Reviewer", initials: "GR" },
  { text: "Their attention to detail and quality of work were exceptional. Could not be more satisfied.", author: "Zulfiya H.", initials: "ZH" },
  { text: "Arman and his team were the best. They completed an entire flooring job in basically one day. Trust the 5 star reviews!", author: "Jihoon Kim", initials: "JK" },
  { text: "Ron was very responsive — booked an appointment same day. Punctual, neat, clean and quick service.", author: "Patricia Neils", initials: "PN" },
  { text: "Ron and his professional guys were outstanding. My interior painting project turned out beautifully.", author: "Beverly Johnson", initials: "BJ" },
  { text: "Super great company. Ron was super friendly and his team was very polite. Great price and service.", author: "Bilal Jalal", initials: "BJ" }
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white border-b border-slate-200"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center shadow">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900">
              AK <span className="text-orange-500">Home Improvement</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+18325777053"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md transition-all duration-200"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-1 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-semibold text-slate-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+18325777053" className="mt-2 flex items-center justify-center gap-2 bg-orange-500 text-white font-bold px-5 py-3 rounded-lg text-sm">
              <Phone className="w-4 h-4" /> Call +1 832-577-7053
            </a>
          </div>
        )}
      </nav>
    </>
  );
}

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" className="flex flex-col min-h-screen font-sans bg-white text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative h-[88vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Slideshow background images */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, idx) => (
            <img
              key={idx}
              src={slide.image}
              alt={slide.label}
              className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
              style={{ opacity: idx === currentSlide ? 1 : 0 }}
            />
          ))}
          {/* Gradient overlay — always on top of images */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/88 via-slate-900/65 to-slate-900/35 z-10" />
        </div>

        <div className="container relative z-20 mx-auto px-4 flex flex-col items-start text-left text-white max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 px-4 py-1.5 rounded-full mb-6 text-sm font-semibold"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current text-orange-400" />)}
            </div>
            5.0 Stars · 59 Google Reviews
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.05]"
          >
            Sugar Land's<br />
            <span className="text-orange-400">Trusted Home</span><br />
            Improvement Pros
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-200 mb-10 max-w-xl leading-relaxed"
          >
            Painting, flooring, remodeling, drywall, epoxy floors, and more. We show up on time, do exceptional work, and leave your home spotless.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:+18325777053"
              className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-base shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <Phone className="w-5 h-5" /> Get a Free Estimate
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-base hover:-translate-y-0.5 transition-all duration-200"
            >
              View Our Services <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Slide dots + label + arrows — pinned to bottom of hero */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center gap-3">
          {/* Current slide label */}
          <p className="text-white/60 text-xs font-medium tracking-widest uppercase">
            {heroSlides[currentSlide].label}
          </p>

          {/* Dots row with prev/next arrows */}
          <div className="flex items-center gap-4">
            {/* Prev */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-orange-500 border border-white/20 flex items-center justify-center text-white transition-all duration-200"
              aria-label="Previous slide"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: idx === currentSlide ? "28px" : "8px",
                    height: "8px",
                    backgroundColor: idx === currentSlide ? "rgb(249 115 22)" : "rgba(255,255,255,0.45)"
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-orange-500 border border-white/20 flex items-center justify-center text-white transition-all duration-200"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="w-48 h-0.5 bg-white/20 rounded-full overflow-hidden">
            <div
              key={currentSlide}
              className="h-full bg-orange-500 rounded-full"
              style={{ animation: "heroProgress 5s linear forwards" }}
            />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes heroProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      {/* ── Stats Bar ── */}
      <section className="bg-[#0f1c2e] text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "5.0", label: "Google Star Rating", sub: "Perfect Score" },
              { value: "59+", label: "Verified Reviews", sub: "All 5 Stars" },
              { value: "6+", label: "Years Serving", sub: "Sugar Land, TX" },
              { value: "100%", label: "Client Satisfaction", sub: "Guaranteed" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center py-2">
                <span className="text-4xl font-black text-orange-400 mb-1">{stat.value}</span>
                <span className="font-semibold text-white text-sm">{stat.label}</span>
                <span className="text-slate-400 text-xs mt-0.5">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-14"
          >
            <span className="inline-block text-orange-500 font-bold text-sm uppercase tracking-widest mb-3">What We Do</span>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Our Services</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
              From minor repairs to complete remodels — skilled craftsmanship for every corner of your home.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group cursor-default">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 bg-slate-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/10 group-hover:from-slate-900/85 group-hover:via-slate-900/35 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center mb-3 shadow group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="mt-12 text-center"
          >
            <p className="text-slate-500 mb-6 text-sm">
              Also available: Blind Installation · Scaffolding Rental · Game Room Finishing · Storm Damage Repair
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-bold px-7 py-3 rounded-xl transition-all duration-200"
            >
              Discuss Your Project <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section id="reviews" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-14"
          >
            <span className="inline-block text-orange-500 font-bold text-sm uppercase tracking-widest mb-3">Testimonials</span>
            <h2 className="text-4xl font-black text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base">
              We've built our reputation on hard work and exceptional results. See what your neighbors have to say.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reviews.map((review, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="h-full">
                <div className="h-full bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-orange-200 transition-all duration-300 flex flex-col">
                  <div className="flex text-orange-400 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-700 leading-relaxed flex-grow text-sm">"{review.text}"</p>
                  <div className="mt-5 flex items-center gap-3 pt-4 border-t border-slate-200">
                    <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {review.initials}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{review.author}</p>
                      <p className="text-xs text-slate-400">Verified Google Review</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── About / Why Us ── */}
      <section id="about" className="py-24 bg-[#0f1c2e] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <span className="inline-block text-orange-400 font-bold text-sm uppercase tracking-widest mb-3">Why Choose Us</span>
              <h2 className="text-4xl font-black mb-6 leading-tight">The AK Home Improvement Difference</h2>
              <p className="text-slate-300 text-base leading-relaxed mb-10">
                When you hire us, you get a dedicated team that treats your home with the utmost respect. No cut corners, no hidden fees — just outstanding craftsmanship backed by 59 five-star reviews.
              </p>
              <div className="space-y-5">
                {[
                  { title: "Punctual & Professional", desc: "We show up when we say we will, and clean up when we're done." },
                  { title: "Transparent Pricing", desc: "Fair quotes, clear estimates, and absolutely no surprise charges." },
                  { title: "Exceptional Attention to Detail", desc: "From baseboards to full remodels, quality is never compromised." },
                  { title: "Same-Day Availability", desc: "Flexible scheduling — we work around your timeline." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/30 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-0.5">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center shadow-xl rotate-6 z-10">
                <div className="text-white text-center leading-tight">
                  <div className="text-2xl font-black">5.0</div>
                  <div className="text-xs font-semibold">Stars</div>
                </div>
              </div>
              <div className="bg-white text-slate-900 p-8 md:p-10 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-black mb-2 text-slate-900">Ready to upgrade your home?</h3>
                <p className="text-slate-500 text-sm mb-8">Contact us today for a free consultation. Same-day appointments may be available!</p>

                <div className="space-y-4 mb-8">
                  <a href="tel:+18325777053" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-orange-200 transition-all group">
                    <div className="w-9 h-9 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Phone</p>
                      <p className="font-bold text-slate-900 text-sm">+1 832-577-7053</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-9 h-9 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Address</p>
                      <p className="font-bold text-slate-900 text-sm">225 Matlage Way #1772, Sugar Land, TX</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-9 h-9 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Hours</p>
                      <p className="font-bold text-slate-900 text-sm">Mon–Sat: 7 AM – 8 PM · Sun: Closed</p>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+18325777053"
                  className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl text-sm shadow-lg transition-all duration-200"
                >
                  <Phone className="w-4 h-4" /> Call Now for a Free Quote
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-14"
          >
            <span className="inline-block text-orange-500 font-bold text-sm uppercase tracking-widest mb-3">Get In Touch</span>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-500 max-w-lg mx-auto text-base">
              Have a project in mind? Call us or reach out via Facebook — we respond fast and same-day quotes are often available.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              {
                icon: Phone,
                title: "Call or Text",
                value: "+1 832-577-7053",
                sub: "Available Mon–Sat, 7 AM – 8 PM",
                href: "tel:+18325777053"
              },
              {
                icon: Mail,
                title: "Email Us",
                value: "armanhomeimprovement",
                sub: "@gmail.com",
                href: "mailto:armanhomeimprovement@gmail.com"
              },
              {
                icon: MapPin,
                title: "Our Location",
                value: "Sugar Land, TX 77487",
                sub: "225 Matlage Way #1772",
                href: "https://maps.google.com/?q=225+Matlage+Way+%231772+Sugar+Land+TX+77487"
              },
              {
                icon: Facebook,
                title: "Facebook",
                value: "AK Home Improvement",
                sub: "Message us on Facebook",
                href: "https://www.facebook.com/p/AkHomeImprovement-LLC-100066768828574/"
              }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <a
                  href={item.href}
                  target={idx !== 0 ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center p-8 bg-white border border-slate-200 rounded-2xl hover:border-orange-300 hover:shadow-lg group transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.title}</p>
                  <p className="font-black text-slate-900 text-base mb-1">{item.value}</p>
                  <p className="text-slate-500 text-sm">{item.sub}</p>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="py-16 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Let's build something great together.</h2>
          <p className="text-orange-100 mb-8 text-base">Licensed, insured, and ready to transform your home.</p>
          <a
            href="tel:+18325777053"
            className="inline-flex items-center gap-2 bg-white text-orange-600 hover:text-orange-700 font-black px-10 py-4 rounded-xl text-base shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            <Phone className="w-5 h-5" /> Call +1 832-577-7053
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#0a1422] text-slate-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-black text-white">
                  AK <span className="text-orange-400">Home Improvement</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-sm mb-5">
                Professional, reliable, and high-quality home improvement services in Sugar Land, Texas. Rated 5.0 stars with 59 verified reviews.
              </p>
              <a
                href="https://www.facebook.com/p/AkHomeImprovement-LLC-100066768828574/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-orange-500 text-slate-300 hover:text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
              >
                <SiFacebook className="w-4 h-4" /> Follow on Facebook
              </a>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm hover:text-orange-400 transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Contact</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="tel:+18325777053" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-orange-400" /> +1 832-577-7053
                  </a>
                </li>
                <li>
                  <a href="mailto:armanhomeimprovement@gmail.com" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-orange-400" /> armanhomeimprovement@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-orange-400 mt-0.5 shrink-0" /> 225 Matlage Way #1772, Sugar Land, TX 77487
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-orange-400" /> Mon–Sat: 7 AM – 8 PM
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
            <p>&copy; {new Date().getFullYear()} AK Home Improvement LLC. All rights reserved.</p>
            <p>Sugar Land, Texas</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

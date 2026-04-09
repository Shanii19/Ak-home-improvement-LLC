import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, Star, Facebook, ChevronRight, CheckCircle2, Shield, Wrench, Paintbrush, Hammer, Zap, Droplets } from "lucide-react";
import { SiFacebook } from "react-icons/si";

const queryClient = new QueryClient();

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const services = [
  {
    title: "Interior & Exterior Painting",
    icon: Paintbrush,
    desc: "Professional painting services to refresh and protect your home.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80"
  },
  {
    title: "Vinyl Flooring & Baseboards",
    icon: Hammer,
    desc: "Flawless installation of modern flooring and trim.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
  },
  {
    title: "Bathroom Remodeling",
    icon: Droplets,
    desc: "Complete renovations to create your perfect oasis.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80"
  },
  {
    title: "Drywall & Mold Removal",
    icon: Shield,
    desc: "Expert repair, replacement, and safe mold remediation.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
  },
  {
    title: "Epoxy Garage Floors",
    icon: Zap,
    desc: "Durable, easy-to-clean coatings for your garage.",
    image: "https://images.unsplash.com/photo-1558618047-f9c2b9d1c59e?w=800&q=80"
  },
  {
    title: "General Home Improvement",
    icon: Wrench,
    desc: "From fence installation to TV mounting, we do it all.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
  }
];

const reviews = [
  { text: "Right price, hard workers, nice people.", author: "Google Reviewer" },
  { text: "Their attention to detail and quality of work were exceptional.", author: "Zulfiya H." },
  { text: "Arman and his team were the best. I wanted a bunch of work done including replacing the flooring before I moved into my new house... Trust the 5 star reviews!", author: "Jihoon Kim" },
  { text: "Ron was very responsive. Was able to book an appointment same day. Very courteous and respectful. Punctual and neat work. Clean and quick service.", author: "Patricia Neils" },
  { text: "Ron and his professional guys were outstanding. I was very impressed with how my interior painting project turned out.", author: "Beverly Johnson" },
  { text: "It's not good, it's supper great company. If you are looking for good service great price. This is it!!", author: "Bilal Jalal" }
];

function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4 text-sm hidden md:flex justify-between items-center z-50 relative">
        <div className="flex items-center gap-6 container mx-auto">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>225 Matlage Way #1772, Sugar Land, TX 77487</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>Mon–Sat 7 AM–8 PM</span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <a href="https://www.facebook.com/p/AkHomeImprovement-LLC-100066768828574/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <SiFacebook className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-2 font-bold text-primary">
              <Phone className="w-4 h-4" />
              <span>+1 832-577-7053</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-40 py-4 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-extrabold tracking-tight text-secondary">
            AK <span className="text-primary">Home Improvement</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 font-medium">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
          </div>
          <Button className="font-bold text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all" size="lg" asChild>
            <a href="tel:+18325777053">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply z-10" />
          <img 
            src="/hero-bg.jpg" 
            alt="Professional Home Renovation" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 flex flex-col items-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/50 text-white px-4 py-2 rounded-full mb-8"
          >
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="font-semibold text-sm">5.0 Stars (59 Google Reviews)</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight"
          >
            Top-Rated Home Improvement in <span className="text-primary">Sugar Land</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl font-light"
          >
            We show up on time, do exceptional work, and leave your place spotless. Your trusted local experts for all renovations and repairs.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-xl hover:-translate-y-1 transition-all" asChild>
              <a href="tel:+18325777053">Get a Free Estimate</a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md shadow-xl hover:-translate-y-1 transition-all" asChild>
              <a href="#services">Our Services</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
            <div className="flex flex-col items-center pt-4 md:pt-0">
              <span className="text-4xl font-extrabold mb-2">5.0</span>
              <div className="flex text-white mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="text-primary-foreground/90 font-medium">59 Verified Google Reviews</span>
            </div>
            <div className="flex flex-col items-center pt-4 md:pt-0">
              <CheckCircle2 className="w-10 h-10 mb-3" />
              <span className="text-xl font-bold mb-1">Licensed & Insured</span>
              <span className="text-primary-foreground/90 font-medium">Professional & Reliable</span>
            </div>
            <div className="flex flex-col items-center pt-4 md:pt-0">
              <MapPin className="w-10 h-10 mb-3" />
              <span className="text-xl font-bold mb-1">Local Experts</span>
              <span className="text-primary-foreground/90 font-medium">Proudly serving Sugar Land, TX</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-secondary mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From minor repairs to complete remodels, our skilled team delivers high-quality craftsmanship for every corner of your home.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group cursor-default">
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Background Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark overlay — lightens on hover to reveal image more */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/60 to-secondary/20 group-hover:from-secondary/90 group-hover:via-secondary/40 group-hover:to-transparent transition-all duration-500" />
                  {/* Orange accent bar on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-extrabold text-white mb-2 drop-shadow">{service.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="mt-16 text-center"
          >
            <p className="text-lg text-muted-foreground mb-6 font-medium">
              Also offering: Blind Installation, Scaffolding Rental, Game Room Finishing & Storm Damage Repair.
            </p>
            <Button size="lg" variant="outline" className="font-bold border-2 hover:bg-secondary hover:text-white" asChild>
              <a href="tel:+18325777053">Discuss Your Project</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-secondary mb-4">Don't Just Take Our Word For It</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've built our reputation on hard work, honesty, and incredible results. See what your neighbors have to say.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reviews.map((review, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="h-full">
                <Card className="h-full bg-muted/40 border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex text-primary mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-secondary/80 italic flex-grow text-lg">"{review.text}"</p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                        {review.author.charAt(0)}
                      </div>
                      <span className="font-bold text-secondary">{review.author}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process / Why Us Section */}
      <section id="about" className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-4xl font-extrabold mb-6 leading-tight">The AK Home Improvement Difference</h2>
              <p className="text-xl text-white/80 mb-8 font-light">
                When you hire us, you're getting a dedicated team that treats your home with the utmost respect. No cut corners, no hidden fees, just outstanding craftsmanship.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Punctual & Professional", desc: "We show up when we say we will, and we clean up when we're done." },
                  { title: "Transparent Pricing", desc: "Right price, clear estimates, and absolutely no surprise charges." },
                  { title: "Exceptional Detail", desc: "From baseboards to full remodels, our attention to detail is unmatched." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-white text-secondary p-8 md:p-12 rounded-3xl shadow-2xl relative"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-xl rotate-12">
                <span className="text-white font-black text-center leading-tight">5.0<br/>Stars</span>
              </div>
              <h3 className="text-3xl font-extrabold mb-6">Ready to upgrade your home?</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today for a free consultation. Same-day appointments may be available!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-lg font-bold">
                  <Phone className="text-primary w-6 h-6" />
                  <a href="tel:+18325777053" className="hover:text-primary transition-colors">+1 832-577-7053</a>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <MapPin className="text-primary w-6 h-6" />
                  <span>225 Matlage Way #1772<br/>Sugar Land, TX 77487</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <Clock className="text-primary w-6 h-6" />
                  <span>Mon–Sat: 7 AM – 8 PM<br/>Sun: Closed</span>
                </div>
              </div>
              
              <Button size="lg" className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-lg" asChild>
                <a href="tel:+18325777053">Call Now for a Quote</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Let's build something great together.</h2>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-bold text-primary bg-white hover:bg-white/90 shadow-xl hover:-translate-y-1 transition-all" asChild>
            <a href="tel:+18325777053">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 832-577-7053
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white/60 py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-extrabold text-white mb-4">AK <span className="text-primary">Home Improvement</span></h3>
              <p className="mb-6 max-w-md">Professional, reliable, and high-quality home improvement services in Sugar Land, Texas.</p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/p/AkHomeImprovement-LLC-100066768828574/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <SiFacebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#reviews" className="hover:text-primary transition-colors">Reviews</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="hover:text-white transition-colors"><a href="tel:+18325777053">+1 832-577-7053</a></li>
                <li>Sugar Land, TX 77487</li>
                <li>Mon–Sat: 7 AM – 8 PM</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} AK Home Improvement LLC. All rights reserved.</p>
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

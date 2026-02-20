import { motion } from "motion/react";
import { 
  Globe, 
  MapPin, 
  Users, 
  Plane, 
  Bus, 
  Hotel, 
  Instagram, 
  Twitter, 
  Send,
  ChevronRight
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// --- Components ---

const Nav = () => (
  <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
    <div className="flex items-center gap-2 text-white">
      <Globe size={20} className="text-emerald-500" />
      <span className="font-bold tracking-[0.2em] text-sm">PAKISTAN TOURS</span>
    </div>
    <div className="hidden md:flex items-center gap-12 text-gray-300 text-xs font-semibold tracking-widest uppercase">
      <a href="#about" className="hover:text-white transition-colors">About</a>
      <a href="#included" className="hover:text-white transition-colors">Included</a>
      <a href="#contacts" className="hover:text-white transition-colors">Contacts</a>
    </div>
    <button className="px-8 py-2 border border-white/30 rounded-full text-white text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-all">
      BOOK
    </button>
  </nav>
);

const Hero = () => {
  const cards = [
    { label: "Northern Peaks", desc: "Karakoram Range", img: "https://images.unsplash.com/photo-1677621632981-e4978a762b03" },
    { label: "Gilgit-Baltistan", desc: "Skardu Valley", img: "https://images.unsplash.com/photo-1606023760842-7cf9bc8e0564" },
    { label: "15 Days", desc: "Full Expedition", img: "https://images.unsplash.com/photo-1710623994944-5c667bf5bff1" },
    { label: "Camp Life", desc: "Under the stars", img: "https://images.unsplash.com/photo-1645102136899-0b6728bfe2b2" },
    { label: "Lahore", desc: "Heritage Sites", img: "https://images.unsplash.com/photo-1708722018661-8e19a8b2db6e" },
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-32">
      {/* Background Image - Person Trekking */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1645102136899-0b6728bfe2b2" 
          alt="Trekking in Pakistan Mountains"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      </div>

      {/* Giant Text */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 z-0 text-center w-full">
        <h1 className="text-[15vw] font-black text-white/[0.05] leading-none select-none tracking-tighter uppercase font-serif">
          NORTHERN
        </h1>
        <h1 className="text-[12vw] font-black text-white/[0.1] leading-none select-none tracking-tighter uppercase font-serif -mt-8">
          PAKISTAN
        </h1>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col justify-end min-h-[75vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-12 pb-16">
          {/* Left: Info Cards */}
          <div className="lg:col-span-9 flex flex-wrap gap-4">
            {cards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="w-32 h-48 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10"
              >
                <ImageWithFallback src={card.img} alt={card.label} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20" />
                <div className="absolute bottom-4 left-3 right-3">
                  <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-tighter leading-none mb-1">{card.label}</p>
                  <p className="text-[10px] text-white/80 leading-tight uppercase font-medium">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Expedition Callout */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end">
            <div className="relative mb-8 text-right">
              <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Seasonal Expedition</p>
              <h2 className="text-3xl text-white font-light font-serif mb-6 leading-tight">Beyond the <br/><span className="italic text-emerald-500 font-normal">Karakoram</span></h2>
              <button className="bg-white text-black px-12 py-3 rounded-md font-bold text-xs tracking-[0.2em] uppercase hover:bg-emerald-500 hover:text-white transition-all shadow-2xl">
                JOIN TREK
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Socials Floating */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 text-white/40">
        <Instagram size={18} className="hover:text-emerald-500 cursor-pointer" />
        <Twitter size={18} className="hover:text-emerald-500 cursor-pointer" />
        <Send size={18} className="hover:text-emerald-500 cursor-pointer" />
      </div>
    </section>
  );
};

const AboutSection = () => {
  const timeline = [
    { days: "Days 1-3", title: "Islamabad & Margalla", desc: "Acclimatize in the capital with lush trail hikes and modern culture.", images: ["https://images.unsplash.com/photo-1771476831133-dc01506de3c5", "https://images.unsplash.com/photo-1611821427154-edd4d40d7ea5"] },
    { days: "Days 4-10", title: "The High North", desc: "Trek through Hunza and Skardu. Experience the raw beauty of the Karakoram peaks.", images: ["https://images.unsplash.com/photo-1606023760842-7cf9bc8e0564", "https://images.unsplash.com/photo-1645102136899-0b6728bfe2b2"] },
    { days: "Days 11-15", title: "Lahore Heritage", desc: "Descend to the plains for a sensory explosion of history and world-class food.", images: ["https://images.unsplash.com/photo-1599079027267-7d0cea474b07", "https://images.unsplash.com/photo-1708722018661-8e19a8b2db6e"] },
  ];

  return (
    <section id="about" className="bg-[#0a0a0a] py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-8 mb-20">
          <div className="h-px bg-white/20 flex-1" />
          <h2 className="text-4xl md:text-5xl font-light text-white uppercase tracking-[0.2em] font-serif text-center">The Expedition</h2>
          <div className="h-px bg-white/20 flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed uppercase tracking-wider">
              We've curated a high-altitude journey through the <span className="text-emerald-500 font-bold">Karakoram</span> range, combined with the soul-stirring heritage of <span className="text-emerald-500 font-bold">Punjab</span>.
            </p>
            <div className="pt-20">
              <p className="text-gray-400 max-w-sm text-sm leading-relaxed uppercase tracking-wider">
                This isn't just a tour; it's a trekking expedition. From high-altitude base camps to the bustling narrow streets of Walled City Lahore, we show you <span className="text-emerald-500">the real Pakistan</span>.
              </p>
            </div>
          </div>

          <div className="relative pl-8">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-[2.5px] w-px bg-white/10" />

            <div className="space-y-32">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute top-2 -left-[30.5px] w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="min-w-[120px]">
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">{item.days}</p>
                      <h3 className="text-white font-bold text-lg uppercase tracking-widest">{item.title}</h3>
                    </div>
                    <div className="flex gap-4">
                      {item.images.map((img, i) => (
                        <div key={i} className={`w-32 h-24 rounded-lg overflow-hidden border border-white/5 ${i === 1 ? 'mt-8' : ''}`}>
                          <ImageWithFallback src={img} alt={item.title} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IncludedSection = () => {
  const items = [
    { icon: <Users size={24} />, title: "Guides", desc: "2 awesome local guides who know everything about Pakistan!" },
    { icon: <Plane size={24} />, title: "Flights", desc: "Internal routes: Islamabad — Skardu — Lahore included." },
    { icon: <Bus size={24} />, title: "Transfers", desc: "Comfortable 4x4 jeeps for northern trails and private cars." },
    { icon: <Hotel size={24} />, title: "Hotels", desc: "Premium accommodation with local breakfast included." },
  ];

  return (
    <section id="included" className="bg-[#0a0a0a] py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-8 mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-white uppercase tracking-[0.2em] font-serif whitespace-nowrap">What's Included</h2>
          <div className="h-px bg-white/20 flex-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <div key={idx} className="p-8 border border-white/10 rounded-2xl group hover:bg-white/[0.02] transition-colors h-full">
              <div className="text-emerald-500 mb-8">{item.icon}</div>
              <h3 className="text-white font-bold text-lg uppercase tracking-widest mb-4">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-widest">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FooterSection = () => {
  return (
    <section id="contacts" className="relative pt-32 bg-black min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1599079027267-7d0cea474b07" 
          alt="Badshahi Mosque"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="max-w-md bg-white/[0.05] backdrop-blur-xl p-12 rounded-3xl border border-white/10 mb-32">
          <h3 className="text-2xl text-white font-light mb-2 font-serif">Want to join us,</h3>
          <h3 className="text-2xl text-white font-light mb-8 font-serif italic">but still have questions?</h3>
          
          <form className="space-y-6">
            <div className="space-y-1">
              <p className="text-[10px] text-white/40 uppercase tracking-widest">Leave a request</p>
              <input type="text" placeholder="Your name" className="w-full bg-transparent border-b border-white/20 py-2 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
            <input type="text" placeholder="Phone number" className="w-full bg-transparent border-b border-white/20 py-2 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500 transition-colors" />
            <textarea placeholder="Comment" rows={2} className="w-full bg-transparent border-b border-white/20 py-2 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500 transition-colors" />
            
            <button className="w-full bg-white text-black py-4 font-bold text-xs tracking-[0.3em] uppercase hover:bg-emerald-500 hover:text-white transition-all">
              SEND
            </button>
          </form>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between py-12 border-t border-white/10 gap-8">
          <div className="flex items-center gap-2 text-white">
            <Globe size={16} className="text-emerald-500" />
            <span className="font-bold tracking-[0.2em] text-xs uppercase">PAKISTAN TOURS</span>
          </div>
          <div className="flex items-center gap-12 text-white/40 text-[10px] font-semibold tracking-widest uppercase">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#included" className="hover:text-white transition-colors">Included</a>
            <a href="#contacts" className="hover:text-white transition-colors">Contacts</a>
          </div>
          <div className="flex gap-4 text-white/40">
            <Instagram size={16} className="hover:text-white cursor-pointer" />
            <Twitter size={16} className="hover:text-white cursor-pointer" />
            <Send size={16} className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function LandingPage() {
  return (
    <div className="bg-black min-h-screen selection:bg-emerald-500 selection:text-white font-sans">
      <Nav />
      <Hero />
      <AboutSection />
      <IncludedSection />
      <FooterSection />
    </div>
  );
}

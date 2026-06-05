import { TabType } from "../types";
import { Phone, Mail, MapPin, Car, Shield, CircleHelp } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: TabType) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleNavClick = (tabId: TabType) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="epic-ride-footer"
      className="relative z-10 border-t border-white/10 bg-[#050B18] px-4 py-16 sm:px-6 lg:px-8 text-slate-300"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Brand Info Column */}
          <div className="col-span-1 space-y-4">
            <div 
              className="flex cursor-pointer items-center space-x-3 text-[#C5A021]" 
              onClick={() => handleNavClick("home")}
            >
              <div className="w-10 h-10 bg-[#C5A021] flex items-center justify-center rounded-sm shadow-md">
                <span className="text-[#050B18] font-black text-xl">ER</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-base font-extrabold tracking-tighter text-white uppercase">
                  Epic Ride
                </span>
                <span className="text-[10px] font-bold tracking-widest text-[#C5A021] uppercase font-mono">
                  &amp; Transport
                </span>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              Texas premium limousine rentals, taxi rides, airport transfers, and private charter bus connections. Reliable. Safe. Elegant.
            </p>
            
            <div className="flex items-center space-x-2 text-[10px] text-slate-500 font-mono">
              <Shield className="h-3.5 w-3.5 text-[#C5A021]" />
              <span>Licensed &amp; Fully Insured Carrier</span>
            </div>
          </div>

          {/* Page Links Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A021] mb-4 font-mono">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick("home")} className="hover:text-white transition-colors uppercase font-mono text-gray-400 font-semibold">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("about")} className="hover:text-white transition-colors uppercase font-mono text-gray-400 font-semibold">
                  About Our Crew
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("booking")} className="hover:text-white transition-colors uppercase font-mono text-gray-400 font-semibold">
                  Online Booking
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("fleet")} className="hover:text-white transition-colors uppercase font-mono text-gray-400 font-semibold">
                  Explore Fleet
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("testimonials")} className="hover:text-white transition-colors uppercase font-mono text-gray-400 font-semibold">
                  Customer Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A021] mb-4 font-mono">
              Services
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-white transition-colors">
                  Taxi Cab Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-white transition-colors">
                  Luxury Limousine Rentals
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-white transition-colors">
                  Airport Transfers (TX)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-white transition-colors">
                  Charter Bus Rentals
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-white transition-colors">
                  Corporate &amp; Group Tours
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A021] mb-1 font-mono">
              Main Dispatch
            </h3>
            <ul className="space-y-2 text-xs font-mono text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-3.5 w-3.5 text-[#C5A021]" />
                <a href="tel:4099510839" className="hover:text-white transition-colors">
                  (409) 951-0839
                </a>
              </li>
              <li className="flex items-baseline space-x-2">
                <Mail className="h-3.5 w-3.5 text-[#C5A021] translate-y-0.5" />
                <a
                  href="mailto:epicrideandtransport@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  epicrideandtransport@gmail.com
                </a>
              </li>
              <li className="flex items-baseline space-x-2">
                <MapPin className="h-3.5 w-3.5 text-[#C5A021] translate-y-0.5" />
                <span>Texas, USA Coverage Area</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Legal Panel */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 font-mono space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <span>&copy; {new Date().getFullYear()} Epic Ride and Transport LLC. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <button className="hover:text-[#C5A021]">Privacy Policy</button>
            <span className="hidden md:inline">|</span>
            <button className="hover:text-[#C5A021]">Terms of Service</button>
          </div>

          {/* Mandatory User Naming Credit Link */}
          <div className="text-center md:text-right">
            Developed by <a href="https://iwebnext.com" target="_blank" rel="noreferrer" className="text-[#C5A021] hover:text-amber-400 underline underline-offset-4 decoration-[#C5A021]/20">iWebNext</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

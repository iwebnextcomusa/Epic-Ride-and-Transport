import { useState } from "react";
import { TabType } from "../types";
import { Phone, Menu, X, Car } from "lucide-react";

interface NavBarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onOpenBooking: () => void;
}

export default function NavBar({ activeTab, setActiveTab, onOpenBooking }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: TabType; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "fleet", label: "Our Fleet" },
    { id: "booking", label: "Book a Ride" },
    { id: "about", label: "About Us" },
    { id: "testimonials", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (tabId: TabType) => {
    setActiveTab(tabId);
    setIsOpen(false);
    // Smooth scroll to top of viewport upon changing tabs
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      id="epic-ride-navbar"
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050B18]/90 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Brand styling */}
          <div 
            onClick={() => handleNavClick("home")}
            className="flex cursor-pointer items-center space-x-3 text-[#C5A021]"
          >
            <div className="w-10 h-10 bg-[#C5A021] flex items-center justify-center rounded-sm shadow-md">
              <span className="text-[#050B18] font-black text-xl">ER</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-lg font-extrabold tracking-tighter text-white uppercase sm:text-xl">
                Epic Ride
              </span>
              <span className="text-[10px] font-bold tracking-widest text-[#C5A021] uppercase font-mono">
                &amp; Transport
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm border ${
                  activeTab === item.id
                    ? "bg-[#C5A021]/10 text-[#C5A021] border-[#C5A021]/30"
                    : "text-gray-300 hover:text-white hover:bg-white/5 border-transparent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Quick Contact & Call to Action (Desktop) */}
          <div className="hidden lg:flex lg:items-center lg:space-x-5">
            <div className="text-right mr-4 font-sans">
              <p className="text-[9px] uppercase tracking-wider text-gray-400">Available 24/7</p>
              <a
                href="tel:4099510839"
                className="text-[#C5A021] font-mono font-bold tracking-wide hover:brightness-110"
              >
                (409) 951-0839
              </a>
            </div>
            <button
              onClick={onOpenBooking}
              className="bg-white text-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-200 hover:bg-[#C5A021] hover:text-[#050B18]"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-3">
            <a
              href="tel:4099510839"
              className="flex items-center justify-center h-10 w-10 rounded-sm bg-white/5 border border-white/10 text-[#C5A021]"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center h-10 w-10 rounded-sm bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#050B18]/95 backdrop-blur-lg transition-all duration-300">
          <div className="space-y-1.5 px-3 py-4 sm:px-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest rounded-sm transition-colors ${
                  activeTab === item.id
                    ? "bg-[#C5A021]/15 text-[#C5A021] border-l-2 border-[#C5A021]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 pb-2 border-t border-white/10">
              <a
                href="tel:4099510839"
                className="flex items-center space-x-3 px-4 py-3 text-base font-bold text-[#C5A021]"
              >
                <Phone className="h-5 w-5 text-[#C5A021]" />
                <span className="font-mono text-lg tracking-wide">(409) 951-0839</span>
              </a>
              <div className="px-4 mt-3">
                <button
                  onClick={() => {
                    handleNavClick("booking");
                    onOpenBooking();
                  }}
                  className="w-full text-center bg-[#C5A021] py-3 rounded-sm text-xs font-bold text-[#050B18] uppercase tracking-widest transition-colors hover:bg-amber-400"
                >
                  Book Instant Ride
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

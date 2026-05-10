import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/#services',
    dropdown: [
      { name: 'Company Formation', href: '/#services' },
      { name: 'Business Consultancy', href: '/#services' },
      { name: 'PRO Services', href: '/#services' },
      { name: 'Audit & Taxation', href: '/#services' },
      { name: 'Financial Services', href: '/#services' },
      { name: 'Global Business Setup', href: '/#services' }
    ]
  },
  { 
    name: 'Business Center', 
    href: '/business-center',
    dropdown: [
      { name: 'Premium Office', href: '/business-center/premium-office' },
      { name: 'Dedicated Office', href: '/business-center/dedicated-office' },
      { name: 'Flexi Desk', href: '/business-center/flexi-desk' },
      { name: 'Virtual Office', href: '/business-center/virtual-office' },
      { name: 'Conference Room', href: '/business-center/conference-room' },
      { name: 'Coworking Space', href: '/business-center/coworking-space' },
      { name: 'Meeting Rooms', href: '/business-center/meeting-rooms' }
    ]
  },
  { name: 'About Us', href: '/#about' },
  { name: 'Process', href: '/#process' },
  { name: 'Blogs', href: '/#blog' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we are on a dark background (Hero) or white (other pages)
  const isTransparentPage = location.pathname === '/' || location.pathname === '/business-center';
  const headerBgStyle = isScrolled 
    ? 'bg-white shadow-md py-3' 
    : (isTransparentPage ? 'bg-transparent py-5' : 'bg-brand-navy py-3 shadow-md');

  const textColorStyle = isScrolled 
    ? 'text-brand-navy hover:text-brand-gold' 
    : (isTransparentPage ? 'text-white/90 hover:text-white' : 'text-white/90 hover:text-white');

  const logoTextColorStyle = isScrolled 
    ? 'text-brand-navy' 
    : (isTransparentPage ? 'text-white' : 'text-white');

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgStyle}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className={`w-10 h-10 rounded-sm flex items-center justify-center overflow-hidden bg-brand-navy`}>
            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
          </div>
          <span className={`font-display font-black text-2xl uppercase tracking-tighter ${logoTextColorStyle}`}>
            Ghulam <span className="text-brand-gold">Business Center</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a 
                href={link.href}
                className={`font-semibold text-xs uppercase tracking-wider transition-colors flex items-center gap-1 ${
                  isScrolled ? 'text-brand-navy hover:text-brand-gold' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} />}
              </a>
              
              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-4 w-64 bg-white shadow-xl rounded-xl border border-slate-100 overflow-hidden"
                    >
                      <div className="py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-6 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4 ml-8">
          <Link to="/#contact" className="bg-brand-gold hover:bg-brand-gold/90 text-white px-7 py-3 rounded-full font-bold text-[11px] uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-gold/20 flex items-center gap-2">
            Book Free Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white bg-brand-navy/20 p-2 rounded-lg"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className={isScrolled ? 'text-brand-navy' : 'text-white'} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-navy flex flex-col p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-white font-display font-bold text-2xl">GHULAM BUSINESS CENTER</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={32} />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col space-y-2">
                  <Link 
                    to={link.href}
                    onClick={() => !link.dropdown && setMobileMenuOpen(false)}
                    className="text-3xl font-display font-light text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 flex flex-col space-y-2 pt-2">
                      {link.dropdown.map(item => (
                        <Link 
                          key={item.name} 
                          to={item.href} 
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-white/40 text-lg hover:text-brand-gold transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-auto">
              <button className="w-full bg-brand-gold text-white py-4 rounded-xl font-bold text-lg">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

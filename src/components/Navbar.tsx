import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Cómo trabajo', href: '#como-trabajo' },
    { name: 'Preguntas frecuentes', href: '#faq' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: isScrolled ? 'rgba(250, 248, 245, 0.92)' : 'var(--bg-main)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          paddingTop: isScrolled ? '14px' : '22px',
          paddingBottom: isScrolled ? '14px' : '22px',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo / Brand */}
          <a href="#inicio" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              Pilar Vivas
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--accent)',
                marginTop: '2px',
              }}
            >
              Psicóloga General Sanitaria
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'none', gap: '32px', alignItems: 'center' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  padding: '4px 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Pedir Cita & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={onOpenBooking}
              className="btn btn-primary"
              style={{ padding: '10px 22px', fontSize: '0.875rem' }}
            >
              <Calendar size={16} />
              <span>Pedir cita</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-surface)',
                color: 'var(--text-primary)',
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            backgroundColor: 'var(--bg-main)',
            display: 'flex',
            flexDirection: 'column',
            padding: '100px 24px 40px',
            animation: 'fadeIn 0.25s ease-out forwards',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: 1 }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '16px',
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn btn-accent"
              style={{ width: '100%', padding: '16px' }}
            >
              <Calendar size={18} />
              <span>Pedir cita</span>
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              Psicoterapia 100% Online
            </p>
          </div>
        </div>
      )}

      {/* CSS Media Query for Header */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

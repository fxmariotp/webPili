import { Mail, Phone, MapPin, Shield, Share2, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-on-dark)',
        paddingTop: '80px',
        paddingBottom: '40px',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      <div className="container">
        {/* Footer Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            marginBottom: '64px',
          }}
        >
          {/* Column 1: Brand & Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.6rem',
                fontWeight: 600,
                color: '#ffffff',
              }}
            >
              Dra. Pilar
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--accent-light)',
              }}
            >
              Psicología Clínica & Psicoterapia
            </span>
            <p style={{ fontSize: '0.875rem', color: '#B0B8B3', lineHeight: 1.6, marginTop: '8px' }}>
              Consulta privada de psicología sanitaria orientada al tratamiento individualizado de la ansiedad, el estrés y los procesos de cambio.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: '#8E9992', marginTop: '4px' }}>
              <Shield size={14} color="var(--accent-light)" />
              <span>Colegiada Nº M-38492 — Colegio Oficial de la Psicología</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4
              style={{
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '20px',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Navegación
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Sobre mí', href: '#sobre-mi' },
                { name: 'Servicios', href: '#servicios' },
                { name: 'Cómo trabajo', href: '#como-trabajo' },
                { name: 'Preguntas frecuentes', href: '#faq' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    style={{ fontSize: '0.875rem', color: '#B0B8B3', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#B0B8B3')}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div>
            <h4
              style={{
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '20px',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Contacto y Ubicación
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.875rem', color: '#B0B8B3' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={18} color="var(--accent-light)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Calle Velázquez, Madrid (Barrio de Salamanca) & Consulta Online</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="var(--accent-light)" style={{ flexShrink: 0 }} />
                <a href="mailto:consulta@drapilarpsicologia.es" style={{ color: '#B0B8B3' }}>
                  consulta@drapilarpsicologia.es
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} color="var(--accent-light)" style={{ flexShrink: 0 }} />
                <span>+34 600 000 000</span>
              </div>
            </div>
          </div>

          {/* Column 4: Redes & Horario */}
          <div>
            <h4
              style={{
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '20px',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Horario de Atención
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#B0B8B3', lineHeight: 1.6, marginBottom: '20px' }}>
              Lunes a Viernes: 09:00 - 20:00 h<br />
              Cita previa requerida
            </p>

            <h4
              style={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '12px',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Redes Sociales
            </h4>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="#instagram"
                aria-label="Instagram"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}
              >
                <Share2 size={18} />
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}
              >
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.8125rem',
            color: '#8E9992',
          }}
        >
          <p>© {currentYear} Dra. Pilar — Todos los derechos reservados.</p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="#aviso-legal" style={{ color: '#8E9992' }}>
              Aviso legal
            </a>
            <a href="#privacidad" style={{ color: '#8E9992' }}>
              Política de privacidad
            </a>
            <a href="#cookies" style={{ color: '#8E9992' }}>
              Política de cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

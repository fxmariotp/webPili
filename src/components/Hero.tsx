import React from 'react';
import { ArrowRight, Calendar, ShieldCheck, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="inicio" className="section" style={{ paddingTop: '40px', paddingBottom: '90px' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Content Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {/* Eyebrow Label */}
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              <span>PSICOLOGÍA CLÍNICA Y PSICOTERAPIA SANITARIA</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.8vw, 4.1rem)',
                fontWeight: 500,
                color: 'var(--text-primary)',
                lineHeight: 1.12,
                letterSpacing: '-0.015em',
                marginBottom: '24px',
              }}
            >
              Un espacio seguro para comprender lo que sientes y avanzar con calma.
            </h1>

            {/* Subheading / Paragraph */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.225rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '36px',
                maxWidth: '570px',
              }}
            >
              Acompañamiento terapéutico individualizado en Madrid y consulta Online. 
              Un proceso respetuoso y confidencial, diseñado para ayudarte a clarificar tus emociones 
              y recuperar el equilibrio a tu propio ritmo.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                width: '100%',
                marginBottom: '40px',
              }}
            >
              <button
                onClick={onOpenBooking}
                className="btn btn-primary"
                style={{ padding: '16px 32px', fontSize: '1rem' }}
              >
                <Calendar size={18} />
                <span>Pedir cita</span>
              </button>

              <a
                href="#como-trabajo"
                className="btn btn-secondary"
                style={{ padding: '16px 28px', fontSize: '1rem' }}
              >
                <span>Conoce mi forma de trabajar</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '24px',
                paddingTop: '24px',
                borderTop: '1px solid var(--border-subtle)',
                width: '100%',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <ShieldCheck size={16} color="var(--accent)" />
                <span>Colegiada Oficial Sanitaria</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <MapPin size={16} color="var(--accent)" />
                <span>Presencial en Madrid & Online</span>
              </div>
            </div>
          </div>

          {/* Editorial Portrait Column */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* Background Decorative Accent Layer */}
            <div
              style={{
                position: 'absolute',
                top: '-16px',
                right: '-16px',
                bottom: '16px',
                left: '16px',
                backgroundColor: 'var(--bg-surface)',
                borderRadius: 'var(--radius-lg)',
                zIndex: 0,
              }}
            />

            {/* Image Frame */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: '520px',
                height: 'auto',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-surface)',
              }}
            >
              <img
                src="/hero-portrait.png"
                alt="Retrato profesional de la Dra. Pilar en su consulta privada"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  maxHeight: '620px',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 64px !important;
          }
        }
      `}</style>
    </section>
  );
};

import { Calendar, ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="section section-bg-surface" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="container">
        <div
          style={{
            backgroundColor: 'var(--bg-main)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            padding: '64px 32px',
            textAlign: 'center',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Accent Backdrop Blob */}
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '600px',
              height: '300px',
              backgroundColor: 'var(--bg-accent-subtle)',
              borderRadius: '50%',
              filter: 'blur(60px)',
              opacity: 0.6,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px', margin: '0 auto' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="eyebrow-dot"></span>
              <span>TU ESPACIO DE BIENESTAR</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: 500,
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              Dar el primer paso puede ser más sencillo de lo que parece.
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '36px',
              }}
            >
              Si quieres empezar tu proceso terapéutico o deseas solventar cualquier duda sobre cómo 
              podemos trabajar juntos/as, estaré encantada de atenderte.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenBooking}
                className="btn btn-primary"
                style={{ padding: '16px 36px', fontSize: '1rem' }}
              >
                <Calendar size={18} />
                <span>Pedir cita</span>
              </button>

              <a
                href="#servicios"
                className="btn btn-secondary"
                style={{ padding: '16px 28px', fontSize: '1rem' }}
              >
                <span>Ver áreas de consulta</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

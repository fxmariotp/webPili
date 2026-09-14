import { Award, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const credentials = [
    'Psicóloga General Sanitaria — Colegiada Nº M-38492',
    'Licenciada en Psicología por la Universidad Complutense de Madrid',
    'Máster en Psicoterapia Integradora y Humanista',
    'Formación continuada en Trauma, Apego y Regulación Emocional',
  ];

  return (
    <section id="sobre-mi" className="section section-bg-surface">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '56px',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Portrait Column */}
          <div style={{ position: 'relative', width: '100%' }}>
            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-main)',
                maxWidth: '520px',
                margin: '0 auto',
              }}
            >
              <img
                src="/about-portrait.png"
                alt="Dra. Pilar en su espacio de psicoterapia"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '600px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </div>

          {/* Bio & Philosophy Content Column */}
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              <span>SOBRE MÍ Y MI FILOSOFÍA</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                color: 'var(--text-primary)',
                lineHeight: 1.18,
                marginBottom: '24px',
              }}
            >
              "Entiendo la psicoterapia como un diálogo humano, riguroso y sin juicios."
            </h2>

            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '20px',
              }}
            >
              Hola, soy la Dra. Pilar. Llevo más de una década acompañando a personas en sus procesos de 
              crecimiento emocional, resolución de conflictos internos y superación de la ansiedad.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              Mi enfoque combina el rigor de la psicología científica con una mirada cálida e individualizada. 
              No creo en soluciones enlatadas ni en recetas genéricas: cada persona requiere un ritmo y una estructura propia 
              para sentirse verdaderamente escuchada y sostenida.
            </p>

            {/* Credentials Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-main)',
                padding: '28px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                marginBottom: '36px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Award size={20} color="var(--accent)" />
                <span>Acreditación Profesional & Titulación</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {credentials.map((cred, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} color="var(--accent)" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onOpenBooking}
              className="btn btn-primary"
              style={{ padding: '14px 28px' }}
            >
              <span>Conoce disponibilidad para primera sesión</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
            gap: 64px !important;
          }
        }
      `}</style>
    </section>
  );
};

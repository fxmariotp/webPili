import { Award, CheckCircle2, Layers } from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const credentials = [
    'Psicóloga General Sanitaria — Colegiada AN-13401',
    'Grado en Psicología — Universidad de Huelva',
    'Máster en Psicología General Sanitaria — Universidad Isabel I',
    'Formación en Terapia Sistémica Familiar',
    'Experiencia en Clínica Oryzon y centro especializado en Trastornos de la Conducta Alimentaria (TCA)',
  ];

  const approaches = [
    { title: 'Herramientas Cognitivo-Conductuales', desc: 'Para identificar patrones de pensamiento y conducta que generan malestar.' },
    { title: 'Enfoque Sistémico y Familiar', desc: 'Para comprender los vínculos, la comunicación y el contexto relacional.' },
    { title: 'Terapias de Tercera Generación', desc: 'Para promover la aceptación, la flexibilidad cognitiva y la gestión emocional.' },
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
                backgroundColor: '#ffffff',
                maxWidth: '460px',
                aspectRatio: '4 / 5',
                margin: '0 auto',
              }}
            >
              <img
                src="/pilar-vivas.jpg"
                alt="Fotografía oficial de Pilar Vivas, Psicóloga General Sanitaria"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  display: 'block',
                }}
              />
            </div>
          </div>

          {/* Bio & Philosophy Content Column */}
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              <span>SOBRE MÍ Y MI ENFOQUE</span>
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
              "Un enfoque integrador adaptado a tu historia y tus necesidades únicas."
            </h2>

            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '20px',
              }}
            >
              Hola, soy <strong>Pilar Vivas</strong>, Psicóloga General Sanitaria (Colegiada AN-13401). 
              Acompaño a adolescentes y adultos a través de sesiones online, con la máxima cercanía y rigor terapéutico.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '28px',
              }}
            >
              Entiendo la psicoterapia como un proceso colaborativo y cercano donde no existen soluciones idénticas para personas distintas. 
              Mi práctica profesional se fundamenta en un <strong>enfoque integrador</strong>, seleccionando las estrategias 
              más adecuadas para cada caso sin perder nunca la calidez humana y el respeto por tus tiempos.
            </p>

            {/* Integrative Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                marginBottom: '32px',
              }}
            >
              {approaches.map((app, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-main)',
                    padding: '18px 20px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <Layers size={16} color="var(--accent)" />
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>{app.title}</span>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{app.desc}</p>
                </div>
              ))}
            </div>

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
                <span>Formación & Experiencia Profesional</span>
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
              <span>Consultar disponibilidad para cita</span>
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

import React from 'react';

export const HowIWork: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Primera conversación',
      subtitle: 'Toma de contacto y valoración inicial',
      description:
        'Conectamos para conocer brevemente tu situación, resolver cualquier duda inicial y valorar si mi forma de trabajar encaja con lo que estás buscando.',
    },
    {
      number: '02',
      title: 'Comprender lo que necesitas',
      subtitle: 'Evaluación y encuadre del proceso',
      description:
        'En las primeras sesiones exploramos en profundidad tu historia, los factores que mantienen la dificultad y trazamos unos objetivos claros y realistas.',
    },
    {
      number: '03',
      title: 'Trabajar hacia el cambio',
      subtitle: 'Sesiones de tratamiento y consolidación',
      description:
        'Desarrollamos herramientas prácticas y espacios de elaboración emocional en sesiones regulares, evaluando periódicamente tus progresos y tu bienestar.',
    },
  ];

  return (
    <section id="como-trabajo" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '64px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            <span>EL PROCESO TERAPÉUTICO</span>
          </div>
          <h2 className="section-title">Cómo trabajamos paso a paso</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Transparencia y claridad desde el primer día para reducir la incertidumbre y hacer que dar el primer paso sea lo más cómodo posible.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--bg-surface)',
                padding: '40px 32px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {/* Large Number Header */}
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '3.5rem',
                  fontWeight: 400,
                  color: 'var(--accent)',
                  lineHeight: 1,
                  opacity: 0.85,
                }}
              >
                {step.number}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  lineHeight: 1.2,
                }}
              >
                {step.title}
              </h3>

              <div
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--accent-light)',
                }}
              >
                {step.subtitle}
              </div>

              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

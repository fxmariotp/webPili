export const HowIWork: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Nos conocemos',
      subtitle: 'Primer contacto y consulta inicial',
      description:
        'Un primer encuentro para hablar con tranquilidad sobre tu motivo de consulta, resolver tus dudas sobre la terapia y valorar la adaptación del proceso.',
    },
    {
      number: '02',
      title: 'Entendemos qué necesitas',
      subtitle: 'Exploración y encuadre compartido',
      description:
        'Dedicamos las primeras sesiones a comprender en profundidad tu situación, los factores que influyen en tu malestar y establecer juntos los objetivos del trabajo.',
    },
    {
      number: '03',
      title: 'Trabajamos hacia el cambio',
      subtitle: 'Acompañamiento y herramientas',
      description:
        'Desarrollamos de forma colaborativa recursos prácticos e integradores en sesiones regulares, avanzando de forma sostenida y respetando siempre tus ritmos.',
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

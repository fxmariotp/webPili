import { ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onOpenBooking: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const servicesList = [
    {
      number: '01',
      title: 'Ansiedad, estrés y regulación emocional',
      tagline: 'Adolescentes y Adultos',
      description:
        'Comprensión de los mecanismos de la ansiedad y el estrés. Trabajo enfocado en identificar desencadenantes y desarrollar estrategias prácticas de autorregulación emocional.',
    },
    {
      number: '02',
      title: 'Autoestima y autoconocimiento',
      tagline: 'Crecimiento personal',
      description:
        'Construcción de una relación más amable y compasiva contigo mismo/a, fortaleciendo la autovalía personal y clarificando tus valores y necesidades esenciales.',
    },
    {
      number: '03',
      title: 'Relaciones personales y familiares',
      tagline: 'Perspectiva sistémica',
      description:
        'Abordaje de las dinámicas relacionales y vinculares, patrones de comunicación, resolución de conflictos y aprendizaje en la comunicación de límites saludables.',
    },
    {
      number: '04',
      title: 'Trastornos de la conducta alimentaria',
      tagline: 'Atención especializada',
      description:
        'Acompañamiento terapéutico orientado a comprender y sanar el malestar en la relación con la comida, la percepción de la imagen corporal y la vivencia emocional.',
    },
    {
      number: '05',
      title: 'Psicoterapia para adolescentes y adultos',
      tagline: 'Proceso individualizado',
      description:
        'Espacio de escucha y trabajo terapéutico adaptado a los retos específicos de cada etapa del desarrollo vital en un entorno de máxima confidencialidad.',
    },
  ];

  return (
    <section id="servicios" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '56px' }}>
          <div className="eyebrow">
            <span className="eyebrow-dot"></span>
            <span>ÁREAS DE ACOMPAÑAMIENTO</span>
          </div>
          <h2 className="section-title">Servicios de terapia especializada</h2>
          <p className="section-subtitle">
            Cada proceso terapéutico es único. Las intervenciones se diseñan a medida partiendo de la evidencia clínica y respetando tu singularidad.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
          }}
        >
          {servicesList.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--bg-surface)',
                padding: '36px 32px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                transition: 'all var(--transition-normal)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)';
                e.currentTarget.style.borderColor = 'var(--accent-light)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-surface)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--accent)',
                    }}
                  >
                    {service.number}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--text-muted)',
                      backgroundColor: 'var(--bg-main)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {service.tagline}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.65rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '16px',
                    lineHeight: 1.2,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '32px',
                  }}
                >
                  {service.description}
                </p>
              </div>

              {/* Card Bottom CTA Link */}
              <button
                onClick={onOpenBooking}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  padding: 0,
                  alignSelf: 'flex-start',
                }}
              >
                <span>Consultar disponibilidad</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

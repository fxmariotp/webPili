import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const placeholders = [
    {
      context: "Proceso de Terapia Individual (Ansiedad)",
      quote:
        "«[Espacio reservado para testimonio real de paciente] — En este apartado se incorporarán testimonios anónimos de pacientes reales previa autorización expresa, respetando estrictamente el secreto profesional y la confidencialidad.»",
      patient: "Paciente A.M.",
      modalidad: "Sesiones presenciales en Madrid",
    },
    {
      context: "Acompañamiento en Transición Vital",
      quote:
        "«[Espacio reservado para testimonio real de paciente] — Experiencia enfocada en la claridad emocional, la construcción de límites y la adquisición de herramientas de regulación personal.»",
      patient: "Paciente C.R.",
      modalidad: "Consulta Online",
    },
    {
      context: "Gestión Emocional y Autoestima",
      quote:
        "«[Espacio reservado para testimonio real de paciente] — Valoraciones relativas al trato cercano, el rigor clínico y la sensación de seguridad transmitida durante todo el tratamiento.»",
      patient: "Paciente M.S.",
      modalidad: "Sesiones presenciales en Madrid",
    },
  ];

  return (
    <section className="section section-bg-surface">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '56px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            <span>TESTIMONIOS Y EXPERIENCIAS</span>
          </div>
          <h2 className="section-title">La experiencia de quienes han hecho el proceso</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            La privacidad y el secreto profesional son la máxima prioridad. Los siguientes recuadros corresponden a la estructura donde se integrarán las valoraciones verificadas.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {placeholders.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--bg-main)',
                padding: '32px 28px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <Quote size={24} color="var(--accent-light)" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {item.context}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.0625rem',
                    fontStyle: 'italic',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '24px',
                  }}
                >
                  {item.quote}
                </p>
              </div>

              <div
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {item.patient}
                </span>
                <span style={{ fontSize: '0.78125rem', color: 'var(--text-muted)' }}>
                  {item.modalidad}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

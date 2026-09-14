import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  onOpenBooking: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Cómo es la primera sesión?',
      answer:
        'La primera sesión es una toma de contacto tranquila y confidencial. Exploraremos los motivos por los que acudes a consulta, qué necesitas resolver y cómo me coordino para ayudarte. También es el momento idóneo para resolver cualquier duda sobre el proceso sin ningún tipo de compromiso.',
    },
    {
      question: '¿Las sesiones son online o presenciales?',
      answer:
        'Ofrezco ambas modalidades. Las sesiones presenciales se realizan en mi consulta privada en Madrid (zona céntrica y bien comunicada). Las sesiones online se llevan a cabo mediante videollamada cifrada de alta seguridad con la misma eficacia terapéutica.',
    },
    {
      question: '¿Cuánto dura una sesión?',
      answer:
        'Cada sesión individual tiene una duración aproximada de 50 a 60 minutos. Este tiempo garantiza un espacio profundo para hablar, reflexionar y asentar las pautas trabajadas.',
    },
    {
      question: '¿Cuál es el precio?',
      answer:
        'Las tarifas y condiciones de la consulta se informan detalladamente de forma previa a la reserva. Para consultar los honorarios actualizados de la sesión presencial u online, puedes solicitar información directa haciendo clic en "Pedir cita".',
    },
    {
      question: '¿Con qué frecuencia se realizan las sesiones?',
      answer:
        'Al inicio del proceso suele recomendarse una frecuencia semanal para consolidar el encuadre y los avances. A medida que se logran los objetivos planteados, las sesiones se distancian progresivamente a quincenales o mensuales hasta el alta.',
    },
    {
      question: '¿Cómo puedo pedir cita?',
      answer:
        'Puedes solicitar cita a través del botón "Pedir cita" disponible en esta web, rellenando el formulario de contacto breve o escribiendo por correo electrónico/WhatsApp. Responderé a tu propuesta en un plazo máximo de 24-48 horas laborables.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '56px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            <span>RESOLVIENDO DUDAS</span>
          </div>
          <h2 className="section-title">Preguntas frecuentes</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Respuestas a las cuestiones más comunes sobre el funcionamiento de las sesiones, tarifas y reserva de citas.
          </p>
        </div>

        {/* Accordion Container */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderRadius: 'var(--radius-md)',
                  border: isOpen ? '1px solid var(--accent-light)' : '1px solid var(--border-color)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    textAlign: 'left',
                    background: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.question}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--accent)' : 'var(--bg-main)',
                      color: isOpen ? '#ffffff' : 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 28px 24px 28px',
                      animation: 'fadeIn 0.3s ease-out forwards',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '0.96875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.65,
                        borderTop: '1px solid var(--border-subtle)',
                        paddingTop: '16px',
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra help box */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)' }}>
            ¿Tienes alguna otra duda que no aparezca aquí?{' '}
            <button
              onClick={onOpenBooking}
              style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'underline' }}
            >
              Consúltame directamente sin compromiso
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

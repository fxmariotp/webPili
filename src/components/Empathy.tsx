import React from 'react';
import { Compass, Brain, Heart, RefreshCw } from 'lucide-react';

export const Empathy: React.FC = () => {
  const situations = [
    {
      icon: <Brain size={24} color="var(--accent)" />,
      title: "Ansiedad y sobrepensamiento constante",
      description:
        "Sientes la mente saturada por dudas, preocupación por el futuro o una tensión física que no desaparece aunque intentes descansar.",
    },
    {
      icon: <RefreshCw size={24} color="var(--accent)" />,
      title: "Sensación de estancamiento vital",
      description:
        "Notas que estás atrapado/a en patrones repetitivos, falta de claridad respecto a lo que deseas o dificultad para tomar decisiones importantes.",
    },
    {
      icon: <Heart size={24} color="var(--accent)" />,
      title: "Desgaste emocional y alta exigencia",
      description:
        "Priorizas siempre las necesidades ajenas, te cuesta poner límites o sientes un nivel de autoexigencia agotador en tu día a día.",
    },
    {
      icon: <Compass size={24} color="var(--accent)" />,
      title: "Transiciones o cambios difíciles",
      description:
        "Enfrentas una ruptura, duelo, cambio profesional o momento de incertidumbre donde necesitas reordenar tus recursos internos.",
    },
  ];

  return (
    <section className="section section-bg-surface">
      <div className="container">
        {/* Section Header */}
        <div style={{ textTransform: 'none', textAlign: 'center', marginBottom: '56px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            <span>¿CÓMO TE SIENTES?</span>
          </div>
          <h2 className="section-title">Quizá últimamente...</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Buscar apoyo terapéutico es un acto de valentía y responsabilidad hacia ti mismo/a. 
            Muchas personas llegan a consulta experimentando vivencias similares a estas:
          </p>
        </div>

        {/* Empathy Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {situations.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--bg-main)',
                padding: '36px 28px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-accent-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  lineHeight: 1.25,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Reassuring Banner */}
        <div
          style={{
            marginTop: '48px',
            textAlign: 'center',
            padding: '24px 32px',
            backgroundColor: 'var(--bg-accent-subtle)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(72, 99, 84, 0.15)',
          }}
        >
          <p style={{ color: 'var(--accent)', fontWeight: 500, fontSize: '1rem' }}>
            No tienes que pasar por esto a solas. La psicoterapia proporciona herramientas para comprender la raíz de lo que vives.
          </p>
        </div>
      </div>
    </section>
  );
};

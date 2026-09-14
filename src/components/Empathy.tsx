import { Activity, ShieldAlert, Heart, Users, Compass } from 'lucide-react';

export const Empathy: React.FC = () => {
  const situations = [
    {
      icon: <Activity size={24} color="var(--accent)" />,
      title: "Ansiedad o estrés constante",
      description:
        "Sientes que la preocupación constante, la sobrecarga mental o la tensión física te impiden disfrutar con tranquilidad de tu día a día.",
    },
    {
      icon: <ShieldAlert size={24} color="var(--accent)" />,
      title: "Dificultad en la regulación emocional",
      description:
        "Experimentas emociones intensas o desbordantes que te resulta complicado gestionar, afectando a tu bienestar o a tus relaciones.",
    },
    {
      icon: <Heart size={24} color="var(--accent)" />,
      title: "Inseguridad y baja autoestima",
      description:
        "Te notas desconectado/a de ti mismo/a, con elevados niveles de autoexigencia o dudas frecuentes sobre tu propia valía personal.",
    },
    {
      icon: <Users size={24} color="var(--accent)" />,
      title: "Conflictos en tus relaciones",
      description:
        "Atraviesas momentos complejos en el ámbito familiar, de pareja o personal, con dificultades para comunicar lo que necesitas o poner límites.",
    },
    {
      icon: <Compass size={24} color="var(--accent)" />,
      title: "Preocupaciones sobre la conducta alimentaria",
      description:
        "Notas una relación conflictiva con la comida, la imagen corporal o patrones de alimentación que te generan malestar emocional.",
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

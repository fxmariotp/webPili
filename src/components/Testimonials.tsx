import { useState, useEffect, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, CheckCircle2, ExternalLink } from 'lucide-react';

interface Review {
  author: string;
  date: string;
  quote: string;
}

const reviews: Review[] = [
  {
    author: 'Claudia García',
    date: '7 de julio de 2026',
    quote: 'Excelente profesional, muy agradable y cercana, una de las mejores profesionales con las que he tratado.',
  },
  {
    author: 'M.A.',
    date: '8 de julio de 2026',
    quote: 'Siendo algo escéptico con los procesos terapéuticos, encontré en Pilar a una profesional que realmente te escucha y te comprende. Desde la primera sesión sentí que estaba en buenas manos.',
  },
  {
    author: 'LM',
    date: '12 de agosto de 2026',
    quote: 'Pilar es encantadora, da gusto hablar con ella. Transmite muchísima confianza.',
  },
  {
    author: 'Ana',
    date: '18 de junio de 2026',
    quote: 'Me gusta muchísimo desde la primera consulta, para mí es una magnífica profesional. Estoy encantada con Pilar.',
  },
  {
    author: 'V',
    date: '23 de julio de 2026',
    quote: 'Agradable, cercana y profesional. Creo que conseguiré muy buenos resultados con ella.',
  },
  {
    author: 'MR',
    date: '3 de julio de 2026',
    quote: 'Es una gran profesional destacando principalmente su saber escuchar.',
  },
  {
    author: 'María',
    date: '7 de julio de 2026',
    quote: 'Las sesiones me están resultando de mucha utilidad.',
  },
  {
    author: 'MCA',
    date: '16 de julio de 2026',
    quote: 'Mi hijo ha estado cómodo en la sesión y ha salido muy satisfecho.',
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const changeSlide = (newIndex: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 200);
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
    changeSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
    changeSlide(newIndex);
  };

  const handleDotClick = (index: number) => {
    if (index !== currentIndex) {
      changeSlide(index);
    }
  };

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  const currentReview = reviews[currentIndex];
  const initialLetter = currentReview.author.charAt(0).toUpperCase();

  return (
    <section id="opiniones" className="section section-bg-surface" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot"></span>
            <span>OPINIONES DE PACIENTES</span>
          </div>
          <h2 className="section-title">La experiencia en consulta</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 20px' }}>
            Valoraciones reales y verificadas de personas que han realizado su proceso terapéutico.
          </p>

          {/* Badge Doctoralia */}
          <a
            href="https://www.doctoralia.es/pilar-vivas/psicologo/sevilla"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              backgroundColor: 'var(--bg-main)',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--border-color)',
              fontSize: '0.84375rem',
              color: 'var(--text-secondary)',
              transition: 'all var(--transition-fast)',
              boxShadow: 'var(--shadow-sm)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#E5A83B" color="#E5A83B" />
              ))}
            </div>
            <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>5.0</span>
            <span style={{ color: 'var(--text-muted)' }}>·</span>
            <span>Opiniones verificadas en <strong>Doctoralia</strong></span>
            <ExternalLink size={13} color="var(--text-muted)" />
          </a>
        </div>

        {/* Carousel Card */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            position: 'relative',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            style={{
              backgroundColor: 'var(--bg-main)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
              padding: 'clamp(32px, 5vw, 56px) clamp(24px, 5vw, 64px)',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '340px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Top Row: Quote Icon & Stars */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '28px',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-accent-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Quote size={22} color="var(--accent)" />
              </div>

              <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={17} fill="#E5A83B" color="#E5A83B" />
                ))}
              </div>
            </div>

            {/* Testimonial Quote with smooth transition */}
            <div
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? 'translateY(6px)' : 'translateY(0)',
                transition: 'opacity 0.22s ease, transform 0.22s ease',
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                marginBottom: '32px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.2rem, 2.3vw, 1.55rem)',
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  lineHeight: 1.6,
                }}
              >
                «{currentReview.quote}»
              </p>
            </div>

            {/* Patient Info Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '20px',
                flexWrap: 'wrap',
                gap: '16px',
                opacity: isAnimating ? 0 : 1,
                transition: 'opacity 0.22s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--accent)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {initialLetter}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
                      {currentReview.author}
                    </span>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '3px',
                        fontSize: '0.71875rem',
                        color: 'var(--accent)',
                        fontWeight: 600,
                        backgroundColor: 'var(--bg-accent-subtle)',
                        padding: '2px 7px',
                        borderRadius: 'var(--radius-pill)',
                      }}
                    >
                      <CheckCircle2 size={11} color="var(--accent)" />
                      <span>Cita verificada</span>
                    </span>
                  </div>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    {currentReview.date}
                  </span>
                </div>
              </div>

              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                Opinión {currentIndex + 1} de {reviews.length}
              </div>
            </div>
          </div>

          {/* Navigation Controls Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              marginTop: '28px',
            }}
          >
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              aria-label="Opinión anterior"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                transition: 'all var(--transition-fast)',
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--text-primary)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-main)';
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots Indicators */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Ir a la opinión ${index + 1}`}
                  style={{
                    width: index === currentIndex ? '24px' : '8px',
                    height: '8px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: index === currentIndex ? 'var(--accent)' : 'var(--border-color)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Siguiente opinión"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                transition: 'all var(--transition-fast)',
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--text-primary)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-main)';
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

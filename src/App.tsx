import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Empathy } from './components/Empathy';
import { Services } from './components/Services';
import { About } from './components/About';
import { HowIWork } from './components/HowIWork';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onOpenBooking={handleOpenBooking} />

      <main style={{ flex: 1 }}>
        <Hero onOpenBooking={handleOpenBooking} />
        <Empathy />
        <Services onOpenBooking={handleOpenBooking} />
        <About onOpenBooking={handleOpenBooking} />
        <HowIWork />
        <Testimonials />
        <FAQ onOpenBooking={handleOpenBooking} />
        <FinalCTA onOpenBooking={handleOpenBooking} />
      </main>

      <Footer />

      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}

export default App;

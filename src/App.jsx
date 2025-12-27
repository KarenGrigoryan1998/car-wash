import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import WhyUs from './components/WhyUs';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContactButtons from './components/FloatingContactButtons';

function App() {
  return (
    <div className="min-h-screen bg-dark-400">
      <Header />
      <FloatingContactButtons />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <WhyUs />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

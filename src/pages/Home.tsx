import Nav from '../sections/Nav';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Cast from '../sections/Cast';
import ScriptReader from '../sections/ScriptReader';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B10] text-zinc-100">
      <Nav />
      <main>
        <Hero />
        <About />
        <Cast />
        <ScriptReader />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

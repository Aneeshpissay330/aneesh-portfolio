import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-[#FFA500] selection:text-[#FFFFFF]">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#FFA500] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App;
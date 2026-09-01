import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Pricing from "./components/sections/Pricing";
import Projects from "./components/sections/Projects";
import Process from "./components/sections/Process";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <About />

        <Services />

        <Pricing />

        <Projects />

        <Process />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
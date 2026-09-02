import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import BasicWebsites from "./components/sections/BasicWebsites";
import AdvancedWebsites from "./components/sections/AdvancedWebsites";
import Pricing from "./components/sections/Pricing";
import Projects from "./components/sections/Projects";
import Process from "./components/sections/Process";
import WhyWorkWithMe from "./components/sections/WhyWorkWithMe";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content">

        <Hero />

        <About />

        <Services />

        <BasicWebsites />

        <AdvancedWebsites />

        <Pricing />

        <Process />

        <Projects />

        <WhyWorkWithMe />

        <Contact />

      </main>

      <Footer />
    </>
  );
}

export default App;
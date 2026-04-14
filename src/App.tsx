import React from "react";
import "./index.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";

const App: React.FC = () => {
  return (
    /* The selection:bg-accent/20 adds that tech-heavy highlight feel */
    <div className="min-h-screen bg-app-bg text-text-primary font-sans antialiased selection:bg-accent/20">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-10">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

/* Updated Divider: Thinner, darker, with a subtle glow for infrastructure vibe */
const Divider = () => (
  <div className="my-16 md:my-24 relative">
    <div className="h-px bg-border-subtle w-full" />
    <div className="absolute top-0 left-0 h-px w-24 bg-accent shadow-[0_0_8px_#3b82f6]" />
  </div>
);

export default App;

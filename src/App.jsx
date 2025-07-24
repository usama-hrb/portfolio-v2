import Particles from "./components/0-particles/Particles";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-skillsStack/SkillsStack";
import Footer from "./components/5-footer/Footer";

function App() {
  return (
    <>
    <div className="container">
      <Header />
      {/* <div className="divider" /> */}
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
    </div>
    {/* <Particles id="particles"/> */}
    </>
  );
}

export default App;

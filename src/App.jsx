import Particles from "./components/0-particles/Particles";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import SkillsStack from "./components/4-skillsStack/SkillsStack";
import ContactMe from "./components/5-contact-me/ContactMe"
import Footer from "./components/6-footer/Footer"
import { useEffect, useState } from "react";

function App() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) sethideUp(true);
      else sethideUp(false)
    })
  }, []);

  const [hideUp, sethideUp] = useState(false);

  const scrollUp = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
    <div className="container">
      <Header />
      {/* <div className="divider" /> */}
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <SkillsStack />
      <div className="divider" />
      <ContactMe />
            <div className="divider last" />
      <Footer />
      
    </div>
    {hideUp && <div onClick={() => scrollUp()} className="scroll-up">
        <ion-icon name="chevron-up"></ion-icon>
      </div>}
    <Particles id="particles"/>
    </>
  );
}

export default App;

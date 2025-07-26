import Particles from "./components/0-particles/Particles";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import SkillsStack from "./components/4-skillsStack/SkillsStack";
import ContactMe from "./components/5-contact-me/ContactMe"

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
      <SkillsStack />
      <div className="divider" />
      <ContactMe />
    </div>
    {/* <Particles id="particles"/> */}
    </>
  );
}

export default App;

import { useRef, useEffect } from "react";
import "./SkillsStack.css";
import SkillsData from "../data/SkillsData";

function SkillBuilder({ logo, dis }) {
  return (
    <div className="card flex">
      <img width={30} height={30} src={logo} alt={dis} />
      <h3 className="logo">{dis}</h3>
    </div>
  );
}

export default function SkillsStack() {

  return (
    <div className="skills-slider">
      <h2>Skills Stack</h2>
      <div className="slider-track">
        {SkillsData.map((skill, i) => (
          <SkillBuilder key={i} {...skill} />
        ))}
      </div>
    </div>
  );
}

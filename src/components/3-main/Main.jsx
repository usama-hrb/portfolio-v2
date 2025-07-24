import "./Main.css";
import ProjectList from "../projectsCard/ProjectsCard";
import { useState } from "react";
import Pagination from "../pagination/Pagination";

export default function Main() {
  const [isactive, setIsActive] = useState("All Projects");
  const clickActive = (types) => {
    setIsActive(types);
  };

  return (
    <main id="projects" className="flex">
      <div className="flex left-section">
        <button
          onClick={() => clickActive("All Projects")}
          className={isactive === "All Projects" ? "active" : ""}
        >
          All Projects
        </button>
        <button
          onClick={() => clickActive("HTML && CSS")}
          className={isactive === "HTML && CSS" ? "active" : ""}
        >
          HTML && CSS
        </button>
        <button
          onClick={() => clickActive("Javascript")}
          className={isactive === "Javascript" ? "active" : ""}
        >
          Javascript
        </button>
        <button
          onClick={() => clickActive("React & MUI")}
          className={isactive === "React & MUI" ? "active" : ""}
        >
          React & MUI
        </button>
        <button
          onClick={() => clickActive("Node & Express")}
          className={isactive === "Node & Express" ? "active" : ""}
        >
          Node & Express
        </button>
        <button
          onClick={() => clickActive("Figma Designs")}
          className={isactive === "Figma Designs" ? "active" : ""}
        >
          Figma Designs
        </button>
      </div>
      <div className="right-section">
        <ProjectList flag={isactive}/>
      </div>
    </main>
  );
}

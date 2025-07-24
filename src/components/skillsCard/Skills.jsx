import "./Skills.css";
import { useRef, useEffect } from "react";
import SkillsData from "../data/SkillsData";

function SkillBuilder({logo, dis}) {
    return (
        <div className="card flex">
            <img width={30} src={logo} alt={dis} />
            <h3 className="logo">{dis}</h3>
        </div>
    );
}

// export default function Skills() {
//   return (
//     <section className="slider-wrapper">
//       <div className="slider-track">
//         <div className="holder flex">
//           {SkillsData.concat(SkillsData).map((skill, i) => (
//             <SkillBuilder key={i} {...skill} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




export default function Skills() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let pos = 0;
    let animationFrameId;
    let isPaused = false;

    const scroll = () => {
      if (!isPaused) {
        pos -= 1; // scroll speed
        if (Math.abs(pos) >= track.scrollWidth / 2) {
          pos = 0;
        }
        track.style.transform = `translateX(${pos}px)`;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    track.addEventListener("mouseenter", () => (isPaused = true));
    track.addEventListener("mouseleave", () => (isPaused = false));

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const allSkills = [...SkillsData, ...SkillsData]; // duplicate for loop

  return (
    <div className="skills-slider">
      <div className="slider-track" ref={trackRef}>
        {allSkills.map((skill, i) => (
          <SkillBuilder key={i} {...skill} />
        ))}
      </div>
    </div>
  );
}

import "./Hero.css";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState, useEffect } from "react";

// import "/style.css"

export default function Hero() {
  const [typing] = useTypewriter({
    words: [
      " I'm Oussama",
      " I do Design.",
      " I write Code.",
      " I craft UI.",
      " I shape UX.",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section id="about" className="hero flex">
      <div className="all flex">
        <div className="sections flex">
          <div className="left-section">
            <span className="flex profile-pic">
              <img draggable="false" src="./me.png" alt="my profile" />
            </span>
            <div className="hero-title flex">
              <h1 className="hide-hello hello">
                Hello!
              </h1>
              <h1 className="hi hello">
                Hi!
              </h1>
              <h1 className="oussama">
                <span className="typing">{typing}</span>
                {/* <span> */}
                <Cursor />
                {/* </span> */}
              </h1>
            </div>
            <div className="role-title flex">
              <hr className="line" />
              <h2 className="role">
                Junior <span className="front-end">Front-end</span> Developer
              </h2>
            </div>
            <p className="paragraph">
              <span className="p-oussama">I’m Oussama,</span> a passionate
              software developer and creative mind based in Morocco. I’m
              constantly building and exploring new tech that brings ideas to
              life. From <span className="p-front">Front-end</span> design to
              low-level code, I love crafting clean, powerful digital
              experiences that make a real impact.
            </p>
            <div className="icons flex">
              <Link
                className="icon icon-twitter"
                to="https://x.com"
                target="_blank"
              ></Link>
              <Link
                className="icon icon-instagram"
                to="https://instagram.com"
                target="_blank"
              ></Link>
              <Link
                className="icon icon-github"
                to="https://github.com/usama-hrb"
                target="_blank"
              ></Link>
              <Link
                className="icon icon-linkedin"
                to="https://linkedin.com"
                target="_blank"
              ></Link>
              <Link className="flex" href="https://figma.com" target="_blank">
                <ion-icon className="icon" name="logo-figma" />
              </Link>
            </div>
          </div>
        </div>
        <div className="gif">
          <img src="./scrollDown.gif" alt="scroll" />
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [showModel, setshowModel] = useState(false);

  const [theme, settheme] = useState(
    localStorage.getItem("currTheme") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  });

  return (
    <header className="flex">
      <div></div>
      <nav>
        <ul className="flex">
          <li>
            <a href="#about" className="active">
              About
            </a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills Stack</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="mode-menu flex">
        <button className="menu flex" onClick={() => setshowModel(true)}>
          <ion-icon name="menu" />
        </button>
        <button
          onClick={() => {
            localStorage.setItem(
              "currTheme",
              theme === "dark" ? "light" : "dark"
            );
            settheme(localStorage.getItem("currTheme"));
          }}
          className="mode flex"
        >
          {theme === "light" ? (
            <ion-icon name="moon" />
          ) : (
            <ion-icon name="sunny" />
          )}
        </button>
      </div>

      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                onClick={() => {
                  setshowModel(false);
                }}
              >
                <ion-icon className="close" name="close" />
              </button>
            </li>
            <li>
              <a
                onClick={() => {
                  setshowModel(false);
                }}
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setshowModel(false);
                }}
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setshowModel(false);
                }}
                href="#skills"
              >
                Skills Stack
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setshowModel(false);
                }}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

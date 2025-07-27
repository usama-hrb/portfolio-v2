import "./Footer.css";

export default function Footer() {

    const sroll = (() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="footer-container flex">
      <div className="copyright">
        <p>
          © 2025 by{" "}
          <a target="_blank" href="https://github.com/usama-hrb">
            usama-hrb
          </a>
        </p>
      </div>
      <div className="footer-icons flex">
        <a className="icon icon-twitter" to="https://x.com" target="_blank"></a>
        <a
          className="icon icon-instagram"
          to="https://instagram.com"
          target="_blank"
        ></a>
        <a
          className="icon icon-github"
          to="https://github.com/usama-hrb"
          target="_blank"
        ></a>
        <a
          className="icon icon-linkedin"
          to="https://linkedin.com"
          target="_blank"
        ></a>
        <a className="flex" href="https://figma.com" target="_blank">
          <ion-icon className="icon" name="logo-figma" />
        </a>
      </div>

    </section>
  );
}

import "./Preparing.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Preparing() {
  const [typing] = useTypewriter({
    words: ["A new project is cooking!"],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <div className="preparing flex">
        <img width={300} src="./cooking.gif" alt="cooking" />
      <p>{typing}<Cursor /></p>
      
    </div>
  );
}

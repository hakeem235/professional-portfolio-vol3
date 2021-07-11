import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import ahmed from "../../assets/ahmed.png"
import down from "../../assets/down.png"


export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
        <img src={ahmed} alt=""/>
        </div>
      </div>
      <div className="right">
      <div className="textContainer">
        <h2>Hi There, I'm</h2>
          <h1>Ahmed Hakeem</h1>
          <h3>
            Freelancer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={down} alt=""/>
        </a>
      </div>
    </div>
  );
}

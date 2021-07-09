import "./navbar.scss";
import {GitHub, Mail, Description, PhoneIphone} from "@material-ui/icons";
import cv from "../../assets/ahmed-cv.pdf";

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"navbar " + (menuOpen && "active")}> 
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Hakeem's</a>
                    <div className="itemContainer">
                        <GitHub className="icon"/>
                        <a href="https://github.com/hakeem235"><span>GitHub</span></a>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <a href="mailto:hakeemkoo@gmail.com"><span>Email</span></a>
                    </div>
                    <div className="itemContainer">
                        <PhoneIphone className="icon"/>
                        <a href="tel:+966590279090"><span>Call Me</span></a>
                    </div>
                    <div className="itemContainer">
                        <Description className="icon"/>
                        <a href={cv}><span>Resume</span></a>
                    </div>
                </div>
                  
                <div className="right">
                    <div className="hamburger" onClick ={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { FontParagraph, FontTitle } from "../../styles/typograph"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { StyledAboutMeSection } from "./styled";
import LAX from "./../../assets/LAX.jpeg";


export const AboutMeSection = () => {
    return (
        <StyledAboutMeSection id="home">
            <div>
                <div className="picParagraph">
                    <img src={LAX} />
                    <FontParagraph>Hello, my name is Lennon!</FontParagraph>
                </div>
                <FontTitle>I <span>love</span> creating and <span>developing</span> projects</FontTitle>
                <FontParagraph>Portfolio Under Construction: I'm working hard to showcase a selection of my best projects. Soon, you'll be able to view all of my work here. Thank you for your patience and stay tuned for updates!</FontParagraph>
                <button><a href="https://github.com/LennonXimenes" target="_blank">See Projects</a></button>
            </div>
            <div className="techs">
                <FontTitle>Technologies</FontTitle>
                <ul>
                    <li>
                        <FaHtml5 size={50} color="grey" />
                    </li>
                    <li>
                        <FaCss3Alt size={50} color="grey" />
                    </li>
                    <li>
                        <IoLogoJavascript size={50} color="grey" />
                    </li>
                    <li>
                        <FaNode size={50} color="grey" />
                    </li>
                    <li>
                        <FaReact size={50} color="grey" />
                    </li>
                </ul>
            </div>
        </StyledAboutMeSection>
    )
}
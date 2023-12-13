import { FontParagraph, FontTitle } from "../../styles/typograph"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { StyledAboutMeSection } from "./styled";

export const AboutMeSection = () => {
    return (
        <StyledAboutMeSection id="home">
            <div>
                <div className="picParagraph">
                    <img src="src\assets\LAX.jpeg" />
                    <FontParagraph>Hello, my name is Lennon!</FontParagraph>
                </div>
                <FontTitle>I <span>love</span> creating and <span>developing</span> projects</FontTitle>
                <FontParagraph>Discover here in this environment, created especially for you, all my projects and technologies</FontParagraph>
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
import { StyledFooter } from "./styled"
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FontParagraph, FontTitle } from "../../styles/typograph";

export const Footer = () => {
    return (
        <StyledFooter id="dm">
            <div className="boxPicParagraphFooter">
                <img src="src\assets\LAX.jpeg" />
                <div className="boxTitleParagraphFooter">
                    <FontTitle>Thank you!</FontTitle>
                    <FontParagraph>Follow me on my social networks and let's talk</FontParagraph>
                </div>
            </div>

            <div className="boxSocialNetwork">
                <ul>
                    <li>
                        <a href="https://github.com/LennonXimenes" target="_blank" className="linkIcon"><AiFillGithub size={35} color="white" /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/lennon-ximenes/" target="_blank" className="linkIcon"><AiOutlineLinkedin size={35} color="white" /></a>
                    </li>
                </ul>
            </div>
        </StyledFooter>
    )
}
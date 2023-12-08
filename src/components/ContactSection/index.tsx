import { FontParagraph, FontTitle } from "../../styles/typograph"
import { StyledContactSection } from "./styled"
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";

export const ContactSection = () => {
    return (
        <StyledContactSection>
            <div className="titleParagraphContact">
                <FontTitle>Let's set up a conversation and <span>develop our creativity</span> together?</FontTitle>
                <FontParagraph>Advertise your brand organically within Dribbble’s design inspiration feed.</FontParagraph>
            </div>
            <ul className="myContacts">
                <li>
                    <FaWhatsapp size={35} color="#623CEA" />
                    <div>
                        <FontTitle>Phone</FontTitle>
                        <FontParagraph>+5524992470744</FontParagraph>
                    </div>
                </li>

                <li>
                    <MdOutlineEmail size={35} color="#623CEA" />
                    <div>
                        <FontTitle>E-mail</FontTitle>
                        <FontParagraph>lennon_ximenes@hotmail.com</FontParagraph>
                    </div>
                </li>

                <li>
                    <FaLinkedinIn size={35} color="#623CEA" />
                    <div>
                        <FontTitle>LinkedIn</FontTitle>
                        <FontParagraph><a href="https://www.linkedin.com/in/lennon-ximenes/" target="_blank">Lennon Ximenes</a> </FontParagraph>
                    </div>
                </li>

            </ul>

        </StyledContactSection>
    )
}
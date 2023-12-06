import { FontParagraph, FontTitle } from "../../styles/typograph"
import { StyledContactSection } from "./styled"

export const ContactSection = () => {
    return (
        <StyledContactSection>
            <div className="titleParagraphContact">
                <FontTitle>Let's set up a conversation and <span>develop our creativity</span> together?</FontTitle>
                <FontParagraph>Advertise your brand organically within Dribbble’s design inspiration feed.</FontParagraph>
            </div>

        </StyledContactSection>
    )
}
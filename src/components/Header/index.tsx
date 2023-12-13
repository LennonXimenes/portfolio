import { FontA, FontTitle } from "../../styles/typograph";
import { StyledHeader, StyledMenu } from "./styled";
// import { RiMenuAddFill } from "react-icons/ri";

export const Header = () => {
    return (
        <StyledHeader>
            <div>
                <FontTitle>Lennon Ximenes</FontTitle>
            </div>

            <StyledMenu>
                {/* <button>
                    <RiMenuAddFill size={30} color="white" />
                </button> */}
                <ul>
                    <li><FontA href="#home">Home</FontA></li>
                    <li><FontA href="#projects">Projects</FontA></li>
                    <li><FontA href="#contacts">Contacts</FontA></li>
                    <li><FontA href="#dm">Digital Media</FontA></li>
                </ul>
            </StyledMenu>
        </StyledHeader>
    );
};
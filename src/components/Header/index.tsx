import { useState, useEffect, useRef } from "react";
import { FontA, FontTitle } from "../../styles/typograph";
import { StyledHeader, StyledMenu } from "./styled";
import { CiMenuBurger } from "react-icons/ci";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const menuRef = useRef(null);

    const handleResize = () => {
        if (window.innerWidth <= 767) {
            setIsOpen(false);
            setShowButton(true);
        } else {
            setIsOpen(true);
            setShowButton(false);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        
        document.addEventListener("click", handleOutsideClick);
        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleOutsideClick = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    return (
        <StyledHeader>
            <div>
                <FontTitle>Lennon Ximenes</FontTitle>
            </div>

            <StyledMenu ref={menuRef} isOpen={isOpen}>
                {showButton && (
                    <button onClick={toggleMenu}>
                        <CiMenuBurger size={30} color="white" />
                    </button>
                )}

                <ul>
                    <li>
                        <FontA href="#home">Home</FontA>
                    </li>
                    <li>
                        <FontA href="#projects">Projects</FontA>
                    </li>
                    <li>
                        <FontA href="#contacts">Contacts</FontA>
                    </li>
                    <li>
                        <FontA href="#dm">Digital Media</FontA>
                    </li>
                </ul>
            </StyledMenu>
        </StyledHeader>
    );
};

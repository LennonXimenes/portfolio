import styled from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    height: 4.375rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-black);
    border-bottom: .1575rem solid var(--color-white);

    div {
        h1 {
            color: var(--color-white);
        }
    }
`;

export const StyledMenu = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    button {
        display: none;
    }

    ul {
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        li {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            padding: 0.5rem;

            a {
                color: var(--color--grey-1);

                &:hover,
                &:focus {
                    color: var(--color-white);
                }
            }
        }
    }

    @media (max-width: 767px) {
        button {
            display: block;
            position: fixed;
        }

        ul {
            position: absolute;
            top: 4.375rem;
            width: 10rem;

            display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
            flex-direction: column;
            
            margin-right: 4.5rem;
            padding-top: 1rem;
            padding-bottom: 1rem;
            padding-left: 0.5rem;
            
            border: .0625rem solid var(--color--grey-2);
            background-color: var(--color-black);
        }
    }
`
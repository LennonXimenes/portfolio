import styled from "styled-components";

export const StyledHeader = styled.header`
    height: 4.375rem;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;

    background-color: var(--color-black);

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

    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        li {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;

            padding-left: 1rem;

            a {
                color: var(--color--grey-1);

                &:hover,
                &:focus {
                    color: var(--color-white);
                }
            }
        }
    }

`
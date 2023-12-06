import styled from "styled-components";

export const StyledFooter = styled.footer`
    height: 10.625rem;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;

    background-color: var(--color-black);

    .boxPicParagraphFooter {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        img {
            height: 4.5rem;
            width: 4.5rem;
    
            border-radius: 100px;
        }

        .boxTitleParagraphFooter {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            padding-left: 1rem;
           
            h1 {
            color: var(--color-white);
        }

            p {
                color: var(--color--grey-1);
                padding-top: 1.5rem;
            }
        }
    }

    .boxSocialNetwork {

        ul {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            li {
                padding-left: 1rem;
                
                a {

                }
            }
        }

    }

`
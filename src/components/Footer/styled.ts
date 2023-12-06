import styled from "styled-components";

export const StyledFooter = styled.footer`
    height: 21rem;
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-around;
    align-items: center;

    background-color: var(--color-black);

    .boxPicParagraphFooter {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
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

            padding-top: 2rem;
           
            h1 {
            color: var(--color-white);
            text-align: center;
        }

            p {
                color: var(--color--grey-1);
                padding-top: 1rem;

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

    @media (min-width: 359px){
        display: flex;
        flex-direction: column;
        justify-content:space-around;
        align-items: center;

            .boxPicParagraphFooter {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }

    }

    @media (min-width: 768px){
        height: 12rem;
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

            .boxPicParagraphFooter {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;

                .boxTitleParagraphFooter {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;

                    padding-left: 1rem;

                    padding-bottom: 2rem;
                
                h1 {
                    color: var(--color-white);
                    text-align: left;
                }

                p {
                    color: var(--color--grey-1);
                    
                }
            }
        }

    }

`
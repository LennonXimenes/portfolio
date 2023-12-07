import styled from "styled-components";

export const StyledContactSection = styled.section`
    height: auto;
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-around;
    align-items: center;

    padding-top: 3rem;
    padding-bottom: 3rem;

    .titleParagraphContact {
        height: auto;
        width: fit-content;

        display: flex;
        flex-direction: column;

        h1 {
            width: 100%;
            text-align: center;

            span {
                color: var(--color-primary);
            }
        }

        p {
            width: 100%;
            text-align: center;

            padding-top: 2rem;
            padding-bottom: 2rem;
        }
    }

    .myContacts {

        li {
            display: flex;
            flex-direction: row;

            padding-bottom: 2rem;

            div {
                display: flex;
                flex-direction: column;
                justify-content: space-around;

                padding-left: 1rem;

                h1 {
                    text-align: left;
                }

                p {

                    a {
                        text-decoration: none;
                        color: var(--color--grey-1);
                    }
                }
            }
        }
    }

`
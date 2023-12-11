import styled from "styled-components";

export const StyledContactSection = styled.section`
    height: auto;
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    padding-top: 5em;
    padding-bottom: 3rem;

    .titleParagraphContact {
        height: auto;
        width: fit-content;

        display: flex;
        flex-direction: column;

        padding: 0.5rem;

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

    @media (min-width: 768px){

    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    padding-top: 5em;
    padding-bottom: 3rem;

    .titleParagraphContact {
        height: auto;
        width: 55%;

        display: flex;
        flex-direction: column;

        padding: 0.5rem;

        h1 {
            width: 100%;
            text-align: left;

            span {
                color: var(--color-primary);
            }
        }

        p {
            width: 100%;
            text-align: left;

            padding-top: 2rem;
            padding-bottom: 2rem;
        }
    }

    .myContacts {
        height: auto;
        width: 30%;

        li {
            display: flex;
            flex-direction: row;

            padding-bottom: 2rem;
        }
    }
}

@media (min-width: 1024px){
    .titleParagraphContact {
        height: auto;
        width: 45%;

        display: flex;
        flex-direction: column;

        padding: 0.5rem;

        h1 {
            width: 100%;
            text-align: left;

            span {
                color: var(--color-primary);
            }
        }

        p {
            width: 100%;
            text-align: left;

            padding-top: 2rem;
            padding-bottom: 2rem;
        }
    }

    .myContacts {
        height: auto;
        width: 25%;

        li {
            display: flex;
            flex-direction: row;

            padding-bottom: 2rem;
        }
    }
}

@media (min-width: 1440px){
    .titleParagraphContact {
        height: auto;
        width: 43%;

        display: flex;
        flex-direction: column;

        padding: 0.5rem;

        h1 {
            width: 100%;
            text-align: left;

            span {
                color: var(--color-primary);
            }
        }

        p {
            width: 100%;
            text-align: left;

            padding-top: 2rem;
            padding-bottom: 2rem;
        }
    }

    .myContacts {
        height: auto;
        width: 20%;

        li {
            display: flex;
            flex-direction: row;

            padding-bottom: 2rem;
        }
    }
}

`
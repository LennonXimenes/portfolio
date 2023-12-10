import styled from "styled-components";

export const StyledProjectSection = styled.section`
    height: auto;
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    padding-top: 5em;
    padding-bottom: 5rem;

    background-color: var(--color-black);

    .titleParagraphProject{
        height: auto;
        width: 95%;

        display: flex;
        flex-direction: column;
        justify-content: space-around;

        h1 {
            padding-bottom: 1.5rem;
        }
        P {
            padding-bottom: 2.5rem;

            span {
                color: var(--color-primary);
        }
        }
    }

    ul {
        height: auto;
        width: 95%;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        li {
            height: 14.375rem;
            width: 30rem;

            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: space-around;

            padding-top: 1.5rem;
            padding-bottom: 1.5rem;

            h1 {

            }
            label{

                span{
                    border: .0625rem solid var(--color--grey-3);
                    border-radius: .25rem;
                    background-color: var(--color--grey-3)
                }
            }

            p {
                width: 100%;
            }

            a {
                    display: flex;
                    justify-content: start;
                    align-items: center;
    
                    padding-right: 2rem;

                    font-size: .8125rem;
                    color: var(--color--grey-1)
                }            
        }
    }

`
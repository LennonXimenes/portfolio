import styled from "styled-components";

export const StyledAboutMeSection = styled.section`
    height: auto;
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: left;

    padding-top: 7rem;
    padding-bottom: 5rem;

    border-bottom: .1875rem solid var(--color-primary);

    div {
        height: auto;
        width: 95%;

        .picParagraph{
            height: fit-content;
            width: 100%;
    
            display: flex;
            flex-direction: row;
            align-items: center;
            
            padding-bottom: 2rem;
    
            img {
                height: 4.5rem;
                width: 4.5rem;
        
                border-radius: 100px;
            }
    
            p {
                padding-left: 1.5rem;
            }
        }
    
        h1 {
    
            font-size: 2rem;
            span {
                color: var(--color-primary)
            }
        }
    
        p {
            padding-top: 3rem;
            padding-bottom: 2rem;
        }
    
        button {
            height: 1.25rem;
            width:  8rem;
    
            display: flex;
            justify-content: center;
            align-items: center;
    
            padding: 1rem;
    
            border: .0625rem solid var(--color-primary);
            background-color: var(--color-primary);
            border-radius: .3125rem;
            a {
                color: var(--color-white);
            }
        }
    }

    .techs{
        height: auto;
        width: 95%;

        display: flex;
        flex-direction: column;
        align-items: left;

        padding-top: 3rem;


        h1 {
            font-size: 1rem;
        }

        ul {
            height: auto;
            width: 100%;

            display: flex;
            flex-direction: row;
            align-items: left;

            padding-top: 1rem;

            li {
                padding-left: 0.5rem;;
            }
        }
    }

    @media (min-width: 768px){
        div {
            height: auto;
            width: 90%;
        }

        .techs{
            height: auto;
            width: 90%;
        }
    }

    @media (min-width: 1010px){
        div {
            height: auto;
            width: 80%;
        }

        .techs{
            height: auto;
            width: 80%;
        }
    }

    @media (min-width: 1363px){
        div {
            height: auto;
            width: 75%;
        }

        .techs{
            height: auto;
            width: 75%;
        }
    }
    
`
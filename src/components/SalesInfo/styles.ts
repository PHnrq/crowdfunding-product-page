import styled from "styled-components";

export const Container = styled.section`
    max-width: 320px;
    margin: 75px auto 1.6rem;
    padding: 3.2rem 2rem 3.8rem;
    
    background-color: #FFFFFF;
    border-radius: .5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
        font-size: 3.2rem;
        font-weight: 700;
        color: var(--black);
    }

    span{
        margin-top: .8rem;
        margin-bottom: 2.4rem;

        font-size: 1.4rem;
        font-weight: 500;
        color: var(--dark-gray);
    }

    div:not(.progressBar){
        margin-bottom: 2.4rem;
        width: 8rem;
        height: .1rem;
        background-color: #D9D9D9;
    }

    .progressBar{
        width: 278px;
        height: 1.2rem;
        border-radius: 5rem;
        background-color: #D9D9D9;

        div{
            width: 218px;
            height: 1.2rem;
            border-radius: 5rem;
            background-color: var(--moderate-cyan);
        }
    }
`;
import styled from "styled-components";

export const Container = styled.div`
    max-width: 27.7rem;
    margin: 0 auto;
    padding: 2.2rem;

    border: 1px solid var(--dark-gray);
    border-radius: .5rem;

    h3{
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--black);
        
        margin-bottom: .8rem;
    }

    >span{

        font-size: 1.4rem;
        font-weight: 500;
        color: var(--moderate-cyan);
    }

    p{ 
        display: flex;
        align-items: center;
        gap: .8rem;

        span{
            font-size: 3.2rem;
            font-weight: 700;
            color: var(--black);
        }
    }

    button{
        background-color: var(--moderate-cyan);
        border-radius: 5rem;

        width: 15.8rem;
        height: 4.9rem;
        margin-top: 3.2rem;

        font-size: 1.4rem;
        font-weight: 700;
        color: #FFFFFF;
    }
`;

export const DisabledContent = styled.div`
    max-width: 27.7rem;
    margin: 0 auto;
    padding: 2.2rem;
    opacity: 0.5;

    border: 1px solid var(--dark-gray);
    border-radius: .5rem;

    h3{
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--black);
        
        margin-bottom: .8rem;
    }

    >span{

        font-size: 1.4rem;
        font-weight: 500;
        color: var(--moderate-cyan);
    }

    p{ 
        display: flex;
        align-items: center;
        gap: .8rem;

        span{
            font-size: 3.2rem;
            font-weight: 700;
            color: var(--black);
        }
    }

    button{
        background-color: var(--dark-gray);
        border-radius: 5rem;

        width: 15.8rem;
        height: 4.9rem;
        margin-top: 3.2rem;

        font-size: 1.4rem;
        font-weight: 700;
        color: #FFFFFF;
    }

`;
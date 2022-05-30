import styled from 'styled-components';

export const Container = styled.section`
    position: relative;
    width: 32rem;
    height: 28.3rem;
    margin: -5.5rem auto;
    padding-inline: 2.4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;

    background-color: #FFFFFF;
    border-radius: .5rem;

    > img{
        position: absolute;
        top: -2.8rem;
    }

    h1{ 
        max-width: 19.2rem;
        font-size: 2rem;
        font-weight: 700;

        text-align: center;

        color: var(--black);
    }

    p{ 
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.5rem;

        text-align: center;

        color: var(--dark-gray);
    }

    div{
        display: flex;
        gap: 1.2rem;
        align-items: center;

        button{
            width: 21rem;
            height: 6.2rem;
    
            background-color: var(--moderate-cyan);
            border-radius: 5rem;
    
            font-size: 1.6rem;
            font-weight: 700;
            color: #FFFFFF;

            transition: background-color .2s ease-in-out;

            &:hover{
                cursor: pointer;
                background-color: var(--dark-cyan);
            }
        }

        img{
            width: 5.6rem;
            height: 5.6rem;

            transition: opacity .2s ease-in-out;

            &:hover{
                cursor: pointer;
                opacity: 0.8;
            }
        }
    }

`;
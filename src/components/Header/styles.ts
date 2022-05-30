import styled from "styled-components";

import backgroundImg from "../../assets/images/image-hero-mobile.jpg";

export const Container = styled.header`
    height: 300px;

    background-image: url(${backgroundImg});
    background-size: cover;
    
    >div{
        padding: 3.2rem 2.4rem;
        
        div{
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
        }
    }
    
    .showMenu{
        position: relative;
        z-index: 2;
        height: 100vh;
       
        background: linear-gradient(180deg, #070707 0%, rgba(217, 217, 217, 0) 100%);

        nav{
            position: relative;
            z-index: 2;
            max-width: 325px;
            padding: 2.2rem 0;
            margin: 3.6rem auto;
    
            background-color: #FFFFFF;
            border-radius: 1rem;
            
            display: flex;
            flex-direction: column;
            gap: 2.4rem;
    
            a{ 
                margin: 0 2.4rem;
    
                font-size: 1.8rem;
                font-weight: 500;
                color: #000000;
            }
    
            div{
                width: 100%;
                height: .1rem;
                background-color: #d9d9d9;
            }
        }

    }

`;
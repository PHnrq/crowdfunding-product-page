import styled from "styled-components";

export const Container = styled.div`
    
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%);
    
    >div{
        max-width: 327px;
        margin: 12rem auto;
        padding: 3.2rem 2.4rem;

        border-radius: 1rem;
        background: #fff;


        #headerModal{
            display: flex;
            justify-content: space-between;
            align-items: center;

            h3{ 
                font-size: 1.8rem;
                font-weight: 700;
                color: #000;
            }

            img{
                width: 16px;
                height: 16px;
            }
        }

        p{
            margin-top: 2.6rem;
            
            font-size: 1.4rem;
            font-weight: 500;
            line-height: 2.3rem;
            color: var(--dark-gray);
        }

        fieldset{
            margin-top: 2.4rem;

            >div{
                padding: 3.2rem 2.4rem;
                margin-bottom: 2.6rem;

                border: 1px solid #d9d9d9;
                border-radius: 0.5rem;

                div{
                    display: flex;
                    align-items: center;
                    gap: .8rem;

                    input{
                        width: 2.5rem;
                        height: 2.5rem;
                    }
                }

                label{
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: var(--black);
    
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    gap: .8rem;

                    span{
                        font-size: 1.4rem;
                        font-weight: 500;
                        color: var(--moderate-cyan);
                    }

                }

                .productAmount{
                    display: flex;
                    align-items: center;
                    gap: .8rem;

                    p{
                        font-size: 1.8rem;
                        font-weight: 700;
                        color: var(--black);
                    }

                    span{
                        font-size: 1.4rem;
                        font-weight: 500;
                        color: var(--dark-gray);
                    }
                }
            }

        }
    }
`;
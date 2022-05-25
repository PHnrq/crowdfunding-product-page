import styled from "styled-components";

import backgroundImg from "../../assets/images/image-hero-mobile.jpg";

export const Container = styled.header`
    width: 100vw;
    height: 300px;
    padding: 3.2rem 2.4rem;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    background-image: url(${backgroundImg});
    background-size: cover;
`;
import { Container } from "./styles";

import logoImg from "../../assets/images/logo.svg";
import iconHamburgerImg from "../../assets/images/icon-hamburger.svg";

export function Header(){
    return(
        <Container >
            <img src={logoImg} alt="Crowdfunding" />
            <nav>
                <img src={iconHamburgerImg} alt="Menu" />
            </nav>
        </Container>
    )
}
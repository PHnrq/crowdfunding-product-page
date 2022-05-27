import { Container } from "./styles";

import logoImg from "../../assets/images/logo.svg";
import iconHamburgerImg from "../../assets/images/icon-hamburger.svg";

export function Header(){
    return(
        <Container >
            <div>
                <div>
                    <img src={logoImg} alt="Crowdfunding" />
                    <img src={iconHamburgerImg} alt="Menu" />
                </div>
                <nav>
                    <a href="/">About</a>
                    <div></div>
                    <a href="/">Discover</a>
                    <div></div>
                    <a href="/">Get Started</a>
                </nav>
            </div>
        </Container>
    )
}
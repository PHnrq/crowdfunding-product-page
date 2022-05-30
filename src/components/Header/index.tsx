import { Container } from "./styles";
import { useState } from "react";

import logoImg from "../../assets/images/logo.svg";
import iconHamburgerImg from "../../assets/images/icon-hamburger.svg";
import iconCloseImg from "../../assets/images/icon-close-menu.svg";

export function Header(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <Container >
            <div id="menu">
                <div>
                    <img src={logoImg} alt="Crowdfunding" />
                    <img 
                        src={isOpen? iconCloseImg : iconHamburgerImg} 
                        alt="Menu" 
                        onClick={() => {
                            const menu = document.querySelector('#menu');
                            menu?.classList.toggle('showMenu');
                            setIsOpen(!isOpen);
                        }}
                    />
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
import { Container } from "./styles";

import mastercfaftLogo from "../../assets/images/logo-mastercraft.svg";
import iconBookmark from "../../assets/images/icon-bookmark.svg";

export function CtaCard(){
    return(
        <Container>
            <img src={mastercfaftLogo} alt="Logo Mastercraft" />
            <h1>
                Mastercraft Bamboo Monitor Riser
            </h1>
            <p>
                A beautifully handcrafted monitor stand to reduce neck and eye strain.
            </p>

            <div>
                <button>
                    Back this project
                </button>
                <img src={iconBookmark} alt="Bookmark"/>   
            </div>
        </Container>
    )
}
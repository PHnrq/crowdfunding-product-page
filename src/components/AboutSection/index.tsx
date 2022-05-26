import { ProductCard } from "../ProductCard";
import { Container } from "./styles";

export function AboutSection(){
    return (
        <Container>
            <h2>
                About this project
            </h2>
            <p>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
            </p>
            <p>
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>

            <ProductCard 
                productName="Bamboo Stand"
                productPrice={25}
                productDescription="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
                productAmount={101}
            />
            <ProductCard 
                productName="Black Edition Stand"
                productPrice={75}
                productDescription="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                productAmount={64}
            />
            <ProductCard 
                productName="Mahogany Special Edition"
                productPrice={200}
                productDescription=" You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                productAmount={0}
            />
        </Container>
    )
}
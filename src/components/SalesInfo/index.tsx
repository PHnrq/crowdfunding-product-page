import { Container } from "./styles";

export function SalesInfo(){
    return(
        <Container>
            <h2>$89,914</h2>
            <span>of $100,000 backed</span>
            <div></div>

            <h2>5,007</h2>
            <span>total backers</span>
            <div></div>

            <h2>56</h2>
            <span>days left</span>
            <div className="progressBar">
                <div>
                    
                </div>
            </div>
        </Container>
    )
}
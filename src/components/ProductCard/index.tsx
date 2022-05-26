import { useState } from "react";
import { Container, DisabledContent } from "./styles";

interface ProductCardProps {
    productName: string;
    productPrice: number;
    productDescription: string;
    productAmount: number;
}

export function ProductCard({productName, productPrice, productDescription, productAmount}: ProductCardProps) {

    return ( productAmount > 0 ? (
        <Container>
            <h3>
                {productName as string}
            </h3>
            <span>
                Pledge ${productPrice} or more
            </span>
            <p>
                {productDescription}
            </p>

            <p>
                <span>{productAmount}</span> left
            </p>
            <button
                type="button"
                disabled={productAmount === 0}
            >
                Select Reward
            </button>
        </Container>

        ) : (
            <DisabledContent>
                <h3>
                    {productName as string}
                </h3>
                <span>
                    Pledge ${productPrice} or more
                </span>
                <p>
                    {productDescription}
                </p>

                <p>
                    <span>{productAmount}</span> left
                </p>
                <button
                    type="button"
                    disabled
                >
                    Out of Stock
                </button>
            </DisabledContent>
        )
    )
}
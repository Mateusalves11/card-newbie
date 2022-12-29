export type CardProps = {
    data: CardArrayProps[];
}

export type CardArrayProps = {
    card: CardDataProps[];
}

export type CardDataProps = {
    category: string;
    title: string;
    description: string;
    price: string;
    prevPrice: string;
    pathImageDesktop: string;
    pathImageMobile: string;
}
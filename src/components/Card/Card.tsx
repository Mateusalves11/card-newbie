import * as S from './Card.styles';
import { ImageCard } from './ImageCard';
import { InformationCard } from './InformationCard';
import { CardProps } from './Card.types';

export function Card({ data }: CardProps) {
    return (
        <>
            {data.map((item) => item.card.map((items) => (
                <S.Card>
                    <ImageCard imgDesktop={items.pathImageDesktop} imgMobile={items.pathImageMobile} />
                    <InformationCard category={items.category} title={items.title} description={items.description} price={items.price} prevPrice={items.prevPrice} />
                </S.Card>
            )))}
        </>
    );
}

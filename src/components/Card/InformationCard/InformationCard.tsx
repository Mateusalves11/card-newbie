import * as S from './InformationCard.styles';
import { InformationCardProps } from './InformationCard.types';

export function InformationCard({category, title, description, price, prevPrice}: InformationCardProps) {
    return (
        <div>
            <S.InformationCard>
                <S.PaddingBox>
                    <S.Category>{category}</S.Category>
                    <S.Title>{title}</S.Title>
                    <S.Description>{description}</S.Description>
                    <S.PriceBox>
                        <S.Price>{price}</S.Price>
                        <S.PrevPrice>{prevPrice}</S.PrevPrice>
                    </S.PriceBox>
                    <S.Button><S.CartIcon/>Add to Cart</S.Button>
                </S.PaddingBox>
            </S.InformationCard>
        </div>
    );
}

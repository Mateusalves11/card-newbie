import * as S from './InformationCard.styles';

export function InformationCard() {
    return (
        <div>
            <S.InformationCard>
                <S.PaddingBox>
                    <S.Category>PERFUME</S.Category>
                    <S.Title>Gabrielle Essence Eau de Parfum</S.Title>
                    <S.Description>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</S.Description>
                    <S.PriceBox>
                        <S.Price>$149.99</S.Price>
                        <S.PrevPrice>$169.99</S.PrevPrice>
                    </S.PriceBox>
                    <S.Button><S.CartIcon/>Add to Cart</S.Button>
                </S.PaddingBox>
            </S.InformationCard>
        </div>
    );
}

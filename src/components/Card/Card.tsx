import * as S from './Card.styles';
import { ImageCard } from './ImageCard';
import { InformationCard } from './InformationCard';

export function Card() {
    return ( 
        <S.Card>
            <ImageCard />
            <InformationCard />
        </S.Card>
     );
}

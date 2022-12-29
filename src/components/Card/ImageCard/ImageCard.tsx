import { useWindowSize } from 'react-use';

import * as S from './ImageCard.styles';
const ImageDesk = require('assets/CardAssets/image-product-desktop.jpg');
const ImageMob = require('assets/CardAssets/image-product-mobile.jpg');


export function ImageCard() {
    const { width } = useWindowSize();

    return (
            <S.ImageCard src={width < 768 ? ImageMob : ImageDesk} alt="random" />
    );
}

import { useWindowSize } from 'react-use';

import { ImageCardProps } from './ImageCard.types';

import * as S from './ImageCard.styles';

export function ImageCard({ imgDesktop, imgMobile }: ImageCardProps) {
    const { width } = useWindowSize();

    const imageDesk = require(`assets/${imgDesktop}`);
    const imageMob = require(`assets/${imgMobile}`);

    return (
        <S.ImageCard src={width < 840 ? imageMob : imageDesk} alt="random" />
    );
}

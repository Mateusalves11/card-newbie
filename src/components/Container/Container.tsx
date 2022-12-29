import * as S from './Container.styles'

export function Container({ children }: any) {
    return (
        <S.Container>
            {children}
        </S.Container>
    );
}
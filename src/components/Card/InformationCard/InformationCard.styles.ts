import styled from 'styled-components';
import { AiOutlineShoppingCart } from '@react-icons/all-files/ai/AiOutlineShoppingCart';

export const InformationCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: hsl(0, 0%, 100%);
    border-radius: 0px 14px 14px 0px;
    font-family: 'Montserrat', sans-serif;
    @media (max-width: 840px) {
        border-radius: 0px 0px 14px 14px;
    }
`
export const PaddingBox = styled.div`
    padding: 10px 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
`

export const Category = styled.p`
    color:  hsl(228, 12%, 48%);
    letter-spacing: 6px;
    font-size: 18px;
`

export const Title = styled.h1`
    font-size: 45px;
    font-family: 'Fraunces', serif;
    line-height: 48px;
    margin: 0;
`

export const Description = styled.p`
    color: hsl(228, 12%, 48%);
    font-size: 20px;
    line-height: 28px;
`
export const PriceBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:24px;
`

export const Price = styled.h1`
    font-family: 'Fraunces', serif;
    color: hsl(158, 36%, 37%);
    font-size: 40px;
`

export const PrevPrice = styled.p`
    color: hsl(228, 12%, 48%);
    text-decoration: line-through;
`

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color:hsl(158, 36%, 37%);
    color: hsl(0, 0%, 100%);
    cursor: pointer;
    font-size:19px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-bottom: 10px;
    &:hover{
        background-color: hsl(212, 21%, 14%);
    }
`
export const CartIcon = styled(AiOutlineShoppingCart)`
    width: 20px;
    height: 20px;
    margin: 0px;
`
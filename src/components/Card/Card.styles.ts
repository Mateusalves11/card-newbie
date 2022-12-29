import styled from "styled-components";

export const Card = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
    border-radius: 4px;
    max-width: 800px;
    display: grid;
    margin:0;
    padding: 0;
    grid-template-columns: 50% 50%;
    border-radius: 14px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    @media (max-width: 840px) {
        grid-template-columns: 100%;
    }
`
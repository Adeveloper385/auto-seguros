import React from 'react'
import styled from '@emotion/styled'

const HeaderContainer = styled.header`
    background-color: #00838F;
    padding: 0.8rem;
    font-weight: bold;
    color: #ffffff;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: sans-serif;
    text-align: center;
`

export function Header(){
    return(
        <HeaderContainer>
            <Title>Cotizador de Seguros</Title>
        </HeaderContainer>
    )
}

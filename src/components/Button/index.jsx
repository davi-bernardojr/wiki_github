import React from 'react'
import { ButtonContainer } from "./styles"

export const Buton = ({onclick}) => {
     return (
    <>
        <ButtonContainer onClick={onclick}>
            Buscar
        </ButtonContainer>
    </>
    )
}
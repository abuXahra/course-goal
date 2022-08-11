import React from 'react'
import { ButtonStyled } from '../../style/Button.styl'

function Button(props) {
    return <ButtonStyled>{props.text}</ButtonStyled>

}

export default Button
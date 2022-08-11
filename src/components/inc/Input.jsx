import React from 'react'
import { InputStyled } from '../../style/Input.Style'

function Input(props) {
    return <InputStyled style={props.style} type={props.type} value={props.value} onChange={props.inputHandler} />

}
export default Input
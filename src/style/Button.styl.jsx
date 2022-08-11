import styled from "styled-components";

export const ButtonStyled = styled.button`
    padding: 10px 20px;
    background-color: purple;
    border: none;
    color: white;
    cursor: pointer;
    margin: 5px 0;
    border-radius: 100px;
   

    :hover{
        background-color: white;
        border: 1px solid purple;
        color: purple;
        border-radius: 100px;
    }

    @media (max-width:768px) {
        width: 100%;
    }
`


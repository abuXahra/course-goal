import styled from "styled-components";

export const NewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    height: auto;

    @media (max-width:768px) {
        width: 80%;
    }
`

export const FormControl = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;

    label{
        font-size: 25px;
        color: ${({ invalid }) => invalid ? "red" : "black"};
    }

    input{
    width: 100%;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid ${({ invalid }) => invalid ? "red" : "purple"};
    background: ${({ invalid }) => invalid ? "salmon" : "transparent"};
    border-radius: 100px;

    :focus{
        outline: none;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

}
/* 
    h3{
        margin: 10px 0;
    } */
`


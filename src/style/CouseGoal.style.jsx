import styled from "styled-components";




export const CousesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    p{
        text-align: center;
        padding: 50px;
        background: gray;
        border-radius: 10px;
        color: white;
        opacity: 0.5;
    }
`
export const CourseStyled = styled.div`
    width: 100%;
    padding: 15px 20px;
    background-color: purple;
    border-radius: 100px;
    margin-bottom: 10px;
    color: white;
    text-decoration: ${({ isDone }) => isDone ? "line-through" : "none"} ;
    cursor: pointer;
display: flex;
justify-content: space-between;
`
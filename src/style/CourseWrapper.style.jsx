import styled from "styled-components";


export const CourseWrapper = styled.div`
    box-sizing: border-box;
    height: 100vh; 
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px){
        justify-content: flex-start;
    align-items: center;
    margin-top: 40px;
    }
`
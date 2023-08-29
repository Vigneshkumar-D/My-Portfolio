import styled from "styled-components";

export const ProjectsMainContainer = styled.div`
display: flex;
flex-direction: column;
// padding-top: 3%;
width: 100%;
`
export const ProjectsMainTopContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 68px;
    height: 95vh;
    background-image: url('https://res.cloudinary.com/da7ik4khq/image/upload/v1692372220/Portfolio/html-css-collage-concept-with-person_1_o8rail.jpg');
    background-size: cover;
`
export const ProjectsMainHeading = styled.h1`
    color: #ffffff;
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 38px;
    border: 2px solid #ffffff;
    padding: 10px;
    border-radius: 10px;
    width: 240px;
    text-align: center;
    &:hover{
        color: #A020F0;
        // background-color: #ffffff;
        cursor: pointer;
        border: 2px solid #A020F0;
    }
`

export const ProjectsMainBottomContainer = styled.div`
display: flex;
flex-direction: column;
padding-top: 2%;
padding-left: 7%;
padding-right: 7%;

`


import styled from "styled-components";

export const AboutMeMainContainer = styled.div`
display: flex;
flex-direction: column;
// padding-top: 3%;
width: 100%;
`
export const AboutMeMainTopContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 68px;
    height: 95vh;
    background-image: url('https://res.cloudinary.com/da7ik4khq/image/upload/v1691857729/Portfolio/About%20Me/html-system-website-concept_1_axj1hs.jpg');
    background-size: cover;
`
export const AboutMeMainTitle = styled.h1`
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
export const AboutMeMainBottomController = styled.div`
display: flex;
flex-direction: column;
padding-top: 5%;
padding-left: 8%;
padding-right: 8%;

`
export const AboutMeMainBottomSubController = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 450px;
// border: 2px solid #A020F0;
box-shadow: 0px 3px 7px 3px #e2e8f0;
margin-bottom: 5%;
border-radius: 8px;
`
export const Image = styled.img`
height: 450px;
width: 50%;
border-radius: 8px;
`

export const DescriptionContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
// align-items: center;
padding-left: 5%;
padding-right: 5%;
height: 400px;
`
export const Heading = styled.h1`
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 0px;
    text-align: left;
    margin-top: 0px;
    padding-bottom: 3%;
    color: #A020F0;
`
export const Description = styled.p`
    font-family: "Helvetica Neue", Arial, sans-serif;
    // font-family: "Roboto";
    font-size: 20px;
    line-height: 25px;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 0px;
    // padding-left: 2%;
`

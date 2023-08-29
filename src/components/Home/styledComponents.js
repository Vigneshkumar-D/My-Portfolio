import styled from "styled-components";

export const HomeContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    // padding-left: 7%;
    // padding-right: 7%;
    flex-grow: 1;
`
export const HomeSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    width: 100%;
    padding-left: 7%;
    padding-right: 7%;
    padding-top: 5%;
    box-sizing: border-box;
`
export const NameAndImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 10%;
`

export const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 45%;
`
export const WelcomeTitle = styled.h1`
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 45px;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 0px;
    color: #A020F0;
    // line-height: 25px;
    padding-bottom: 5%;
`
export const Designation = styled.p`
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 0px;
    // line-height: 20px;
    padding-bottom: 5%;
`
export const DesignationDescription = styled.p`
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 0px;
    line-height: 23px;
    padding-bottom: 7%;
`
export const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    // justify-content: space-around;
    // align-items: center;
    width: 50%;
`
export const ProfilePicture =  styled.img`
    height: 100%;
    width: 100%;
    // padding-left: 4%;
`
export const ViewProjectButton = styled.button`
    background-color: transparent;
    border: none;
    margin-top: 5%;
    height-auto;
    // width: 220px;
`
export const Anchor = styled.a`
    text-decoration: none;
    font-family: "Helvetica Neue", Arial, sans-serif;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #A020F0;
    border: 2px solid #A020F0;
    background-color: #D7A1F940;
    border-radius: 7px;
    padding: 10px;
    min-width: 160px;
    cursor: pointer;
    &:hover{
        background-color: #A020F0;
        color: #ffffff;
    }
`

export const ExperienceAndProjectsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    border-radius: 70px;
    padding-left: 4%;
    padding-right: 4%;
    padding-top: 1%;
    padding-bottom: 1%;
    box-shadow: 0px 3px 7px 3px #e2e8f0;
    margin-top: 5%;
    align-self: center;
    // margin-left: 6%;
    
`
export const ExperienceContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 33%;
border-right: 1px solid violet;
`
export const ExperienceSubContainer = styled.div`
display: flex;
flex-direction: column;
padding-left: 15px;
`
export const TotalProjectsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 33%;
border-right: 1px solid violet;
`
export const TotalProjectsSubContainer = styled.div`
display: flex;
flex-direction: column;
padding-left: 15px;
`   
export const ExpAndProTitle = styled.h1`
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-bottom: 1.5%;
    text-align: left;
`
export const ExpAndProDes = styled.h1`
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 0px;
    margin-top: 0px;
    color: #A020F0;
    padding-bottom: 1.5%;
    text-align: left;
`
export const ProjectsImage = styled.img`
height: 100px;
width: 100px;
`
export const ExperienceImage = styled.img`
height: 100px;
width: 100px;
`
export const AvailabilityContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 33%;
`
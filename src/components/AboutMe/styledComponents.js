import styled from "styled-components";

export const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 7%;
    width: 100%;
`
export const AboutMeHeading = styled.h1`
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 0px;
    text-align: center;
`
export const AboutMeSubContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0px 3px 7px 3px #e2e8f0;
    background-color: #D7A1F940;
    height: 550px;
    border-radius: 8px;
    // margin-bottom: 5%;
    // padding: 2%;
`
export const AboutMeLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
    box-sizing: border-box;
    padding-left: 5%;
    padding-right: 1%
`
export const AboutMeRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

export const Name = styled.h1`
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-bottom: 2%;
    color: #A020F0;
`
export const RoleMainContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
flex-wrap: wrap;
padding-top: 5%;
`
export const RoleContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 50%;
height: 50px;
`
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-item: center;
    width: 80%;
    padding-top: 4%;
    `
export const ShowMoreButton = styled.button`
    text-decoration: none;
    font-family: "Helvetica Neue", Arial, sans-serif;
    text-align: ;
    font-size: 16px;
    font-weight: 500;
    color: #A020F0;
    border: 1px solid #A020F0;
    background-color: #D7A1F940;
    border-radius: 7px;
    padding: 10px;
    width: 160px;
    cursor: pointer;
    &:hover{
        background-color: #A020F0;
        color: #ffffff;
    }
`
export const TickImage = styled.img`
height: 30px;
width: 34px;
border-radius: 50px;
`
export const Role = styled.h1`
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-left: 5px;
`
export const TechImage = styled.img`
    height: 550px;
    width: 100%;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`
export const ViewProjectButton = styled.button`
    text-decoration: none;
    font-family: "Helvetica Neue", Arial, sans-serif;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: #A020F0;
    border: 1px solid #A020F0;
    background-color: #D7A1F940;
    border-radius: 7px;
    padding: 10px;
    width: 165px;
    cursor: pointer;
    &:hover{
        background-color: #A020F0;
        color: #ffffff;
    }
`

export const  TopicContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 7%;
`
export const HorizontalLine  = styled.hr`
    // flex-grow: 1;
    height: 2px;
    width: 20%;
    background-color: #A020F0;
    margin: 10px 10px;
`
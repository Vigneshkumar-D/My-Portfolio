import styled from "styled-components";

export const  ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 7%;
    // padding-bottom: 5%;
    width: 100%;
    height: auto;
    // border: 3px solid #A020F0;

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
export const ProjectsHeader = styled.h1`
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 0px;
    text-align: center;
    // padding-bottom: 7%;
`
export const  ProjectsTopSubContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 550px;
    background-color: #D7A1F940;
    border-radius: 8px;
    // border: 1px solid #A020F0;
    // padding-bottom: 5%;
    
`
export const  ProjectsLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    box-sizing: border-box;
    padding-left: 5%;
    // border: 1px solid #A020F0;
    border-right: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`
export const CreativeWorkTitle = styled.h1`
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-bottom: 5%;
    text-align: left:
`
export const CreativeWorkDes = styled.p`
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 0px;
    line-height: 25px;
    padding-bottom: 5%;
    text-align: left:
`

export const Span = styled.span`
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-bottom: 2%;
    color: #A020F0;
`
export const ProjectsRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 550px;
`
export const ProjectImage = styled.img`
height: 550px;
width: 100%;
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;
`
export const ProjectBottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 5%;
    height: 550px;
    border-radius: 8px;
    background-color: #A020F0;
    // background-color: #B34DF3;
`
export const ProjectBottomSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-left: 3%;
    height: 30%;
`
export const RecentWorkTitle = styled.h1`
font-family: "Helvetica Neue", Arial, sans-serif;
font-size: 27px;
font-weight: 600;
color: #ffffff;
text-align: center;
padding-bottom: 7%;
`
export const ShowMoreButton = styled.a`
    text-decoration: none;
    font-family: "Helvetica Neue", Arial, sans-serif;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid #ffffff;
    background-color: #B34DF3;
    background-color: #A020F0;
    color: #ffffff;
    border-radius: 7px;
    padding: 10px;
    width: 150px;
    cursor: pointer;
    margin-top: 5%;
    &:hover{
        background-color: #ffffff;
        color: #B34DF3;
    }
`
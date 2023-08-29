import styled from "styled-components";

export const  ProjectItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // height: 300px;
    cursor: pointer;
    padding-left:2%;
`
export const  ProjectItemsLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const  ProjectItemsRightContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`
export const ProjectTitle = styled.h1`
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-top: 7%;
    color: #ffffff;
`
export const ProjectDes = styled.p`
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 0px;
    line-height: 20px;
    padding-bottom: 5%;
    text-align: left:
`
export const ProjectImg = styled.img`
    width: 97%;
    height: 350px;
    border-radius: 5px;
`

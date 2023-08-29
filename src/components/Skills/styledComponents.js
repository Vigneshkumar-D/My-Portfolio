import styled from "styled-components";

export const SkillsContainer = styled.div`
 display: flex;
 flex-direction: column; 
 width: 100%;
 padding-top: 7%;
 padding-bottom: 5%;
`
export const SkillSubContaiiner = styled.div`
display: flex;
 flex-direction: column; 
 width: 100%;  
 border: 1px solid #A020F0;
 border-radius: 8px; 
`
export const FrontEndContainer = styled.div`
display: flex;
 flex-direction: column; 
 width: 88%;
 align-self: center;
 padding-bottom: 3%;
 padding-top: 2%;
`
export const FrontEndSubContainer = styled.div`
 display: flex;
 flex-direction: row; 
 justify-content: space-between;
 padding-top: 2%;

`
export const FrontEndSkilsContainer = styled.div`
display: flex;
flex-direction: column; 
justify-content: space-around;
align-items: center;
height: 130px;
width: 130px;
padding: 3%;
// border: 1px solid red;
// box-sizing: content-box;
// background-color: #2C3227;
border-radius: 8px;
box-shadow: 0px 3px 7px 3px #e2e8f0;
margin-top: 0%;
margin-bootm: 0%;
cursor: pointer;
&:hover {
    transform: translateY(-10px);
    transition: 0.5s;
  }
`
export const BackEndContainer = styled.div`
display: flex;
 flex-direction: column; 
 width: 88%;
 align-self: center;
 padding-bottom: 3%;
`
export const BackEndSubContainer = styled.div`
    display: flex;
    flex-direction: row; 
    // justify-content: space-around;
    justify-content: space-between;
    padding-top: 2%;
`

export const BackEndSkilsContainer = styled.div`
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
height: 130px;
width: 130px;
padding: 3%;
// border: 2px solid #A020F0;
// background-color: #A020F0;
border-radius: 8px;
box-shadow: 0px 3px 7px 3px #e2e8f0;
&:hover {
    transform: translateY(-10px);
    transition: 0.5s;
  }
  cursor: pointer;
`
export const OtherSkillsContainer = styled.div`
display: flex;
flex-direction: column;
width: 88%;
 align-self: center;
 padding-bottom: 3%;
`

export const DatabaseContainer = styled.div`
display: flex;
flex-direction: column; 
width: 88%;
 align-self: center;
 padding-bottom: 3%;
`
export const ProgrammingLanguage = styled.div`
display: flex;
 flex-direction: column; 
 width: 88%;
 align-self: center;
 padding-bottom: 3%;
`
export const OtherSkillsSubContainer = styled.div`
display: flex;
flex-direction: column; 
justify-content: space-around;
align-items: center;
height: 130px;
width: 130px;
padding: 3%;
margin-right: 4%;
// background-color: #2C3227;
border-radius: 8px;
box-shadow: 0px 3px 7px 3px #e2e8f0;
margin-top: 0%;
margin-bottom: 0%;
cursor: pointer;
&:hover {
    transform: translateY(-10px);
    transition: 0.5s;
  }
`
export const FrontEndTitle = styled.h1`
font-size: 30px;
font-family: "Helvetica Neue", Arial, sans-serif;
`
export const SkillName = styled.h1`
font-size: 20px;
line-height: 20px;
// color:#ffffff;
margin-bottom: 0px;
font-family: "Helvetica Neue", Arial, sans-serif;
`
export const BackEndTitle = styled.h1`
font-size: 30px;
font-family: "Helvetica Neue", Arial, sans-serif;
    
`
export const OtherSkillsTitle = styled.h1`
font-size: 30px;
font-family: "Helvetica Neue", Arial, sans-serif;

`
export const SkillImage = styled.img`
    height: 100px;
    width: 100px;
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
export const SkillTitle = styled.h1`
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 0px;
    text-align: center;
    // padding-bottom: 7%;
`
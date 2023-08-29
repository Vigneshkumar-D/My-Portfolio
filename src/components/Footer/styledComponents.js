import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #000000;
    padding: 2% 2%;
    // background-color: #A020F090;
    padding-left: 7%;
    padding-right: 7%;
    width: 100%;
    color: #ffffff;
    max-height: 350px;
    box-sizing: border-box;
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-height: 300px;
  justify-content: space-between;
  background-color: #000000;
  margin: 0;
  padding: 2% 0% 2% 0;
  margin-right: 0px;
  border-radius: 8px 8px 0px 0px;
  box-sizing: border-box;
  margin-bottom: 0px;
`

export const ContactInfo = styled.div`
  box-sizing: border-box;
  padding-left: 2%;
  padding: 0 2% 0 0;
  // color: #000000;
  min-width: 25%;
`
export const FooterLogo = styled.div`
box-sizing: border-box;
  padding: 2%;
  min-width: 15%;
  padding: 0 2% 0 0;
`
export const SocialLinks = styled.div`
box-sizing: border-box;
  padding: 2%;
  min-width: 23%;
  // color: #000000;
  padding: 0 2% 0 0;
`

export const QuickLinks = styled.div`
display: flex;
flex-direction: column;
box-sizing: border-box;
  padding: 2%;
  min-width: 25%;
  // color: #000000;
  padding: 0 2% 0 0;
`

export const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 0px 0px 8px 8px;
  background-color: #222;
  // color: #ffffff;
`
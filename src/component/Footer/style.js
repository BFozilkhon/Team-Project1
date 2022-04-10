import styled from "styled-components";
import { ReactComponent as footerIcon } from "../../assets/icons/logo-footer.svg";
import { ReactComponent as send } from "../../assets/icons/send.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as circle } from "../../assets/icons/circle.svg";
import { ReactComponent as twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as m } from "../../assets/icons/m.svg";
import { ReactComponent as figma } from "../../assets/icons/figma.svg";

export const Container = styled.div`
  max-width: 1920px;
  display: flex;
  background: #121624;
  flex: 1;
  padding: 100px 50px 0 50px;
  @media  (max-width: 1000px) {flex-direction:column;}
`

export const FooterIcon = styled(footerIcon)`
width: 200px;
`
export const Card = styled.div`
width: 100%;
padding: 1%;
flex: ${({ a }) => a && '1'};
flex: ${({ b }) => b && '0.9'};
flex: ${({ c }) => c && '0.7'};
`
Card.A = styled.div`
display: flex;
flex: 1;
margin-top: 30px;
font-family: 'Rubik';
font-weight: 400;
font-size: 16px;
line-height: 28px;
color: #FFFFFF;
@media  (max-width: 1335px) {font-size: 12px}
`
Card.B = styled.div`
width: 100%;
font-family: 'Rubik';
font-weight: 400;
font-size: 25px;
line-height: 28px;
color: #FFFFFF;
`
Card.Container = styled.div`
display: flex;
margin: ${({ a }) => a && '0 50px'};
justify-content: space-around;
`

Card.Input = styled.div`
width: 100%;
height: 40px;
display: flex;
margin-right: 100px;
background: #191D2A;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
input{
  width: 100%;
  height: 40px;
  border: none;
  padding: 0 10px;
  color: #fff;
  outline: none;
  background: transparent;
  font-size: 20px;
}
`
Card.Category = styled.div`
width: 50%;
display: block;
color: white;

align-item: center;
padding: 5px;
`
Card.Category.Item = styled.p`
margin: 15px  0 0 10px;
cursor: pointer;
`

export const Input = styled.input`
width: 70%;
padding: .8rem;
background: #191D2A;
border-radius: 10px;
outline: none;
border: none;
color:white
 `

export const Btn = styled.div`
background: #D8D8D880;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 40px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
img{
  width: 35px;
  height: 35px;
}
`

export const Instagram = styled(instagram)`
cursor: pointer;
width: 30px;
margin: 0 12px 0 0;
`
export const Circle = styled(circle)`
cursor: pointer;
width: 30px;
margin: 0 12px;
`
export const Twitter = styled(twitter)`
cursor: pointer;
width: 30px;
margin: 4px 12px 0px 12px;
`
export const M = styled(m)`
cursor: pointer;
width: 30px;
margin: 4px 12px 0px 12px;

`
export const Figma = styled(figma)`
cursor: pointer;
width: 16px;
margin: 2px 12px 0px 12px;
`
export const UnderFooter = styled.div`
width: 100%;
height: 50px;
background: #121624;
color: white;
padding: 15px 50px;
align-items: center;
display: flex;  
@media  (max-width: 1335px) {font-size: 12px}

`
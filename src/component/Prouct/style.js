import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow-right.svg";
import { ReactComponent as arrowmini } from "../../assets/icons/arrow.svg";

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  padding: 0 2%;
  @media screen and (max-width: 1000px)  { padding: 0 5%}
`

export const Name = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0 40px 0;
  justify-content: space-between;
  @media screen and (max-width: 767px)  { flex-direction: column; text-align: center;  justify-content: center;}
`
Name.Title = styled.div`
  font-family: 'Orbitron';
  font-size: 48px;
  color: #FFFFFF;
  @media screen and (max-width: 767px)  {font-size: 42px;margin:0}

`
Name.Next = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: end;
  cursor: pointer;
  font-family: 'Orbitron';
  font-weight: 400;
  font-size: 24px;
  line-height: 136.02%;
  color: #CBD5E0;
`

export const Produc = styled.div`
display: flex;
justify-content: space-between;
@media screen and (max-width: 1000px)  {flex-direction: column}
`
Produc.Card = styled.div`
width: 100%;
margin: 0 10px;
`
Produc.Name = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
font-family: 'Orbitron';
margin-bottom: 22px;
font-size: 36px;
line-height: 136.02%;
color: #FFFFFF;
@media screen and (max-width: 1336px)  {font-size: 30px;}
@media screen and (max-width: 1150px)  {font-size: 25px;}
@media screen and (max-width: 1000px)  {font-size: 30px; margin-bottom: 0px}
`
Produc.Text = styled.div`
font-family: 'Inter';
font-style: normal;
font-size: 20px;
line-height: 136.02%;
display: flex;
align-items: flex-end;
color: #CBD5E0;
flex-grow: 0;
margin-bottom: 30px;
@media screen and (max-width: 1336px)  {font-size: 14px;}
@media screen and (max-width: 1150px)  {font-size: 12px;}
@media screen and (max-width: 1000px)  {font-size: 20px;}
`

export const LearnMore = styled.div`
display: flex;
padding: 40px 0;
flex-direction: column;
align-items: center;
`
LearnMore.Text = styled.div`
font-family: 'Inter';
font-weight: 400;
font-size: 24px;
text-align: center;
margin: 0 20%;
color: #FFFFFF;
@media screen and (max-width: 1000px)  {font-size: 24px; margin: 5%}
`
LearnMore.Btn = styled.div`
width: 200px;
height: 49px;
margin: 20px 0 70px 0;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
padding: 12px 48px;
background: #4C6FFF;
transition: all .5s;
:hover{
  background: #fff;
}
`

export const Arrow = styled(arrow)`
width: 30px;
height: 30px;
margin-right: 25px;
cursor: pointer;
`

export const ArrowMini = styled(arrowmini)`
width: 20px;
height: 20px;
margin: 0 0 0 25px;
cursor: pointer;
`
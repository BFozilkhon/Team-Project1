import styled from "styled-components";
import { ReactComponent as arrowmini } from "../../assets/icons/arrow.svg";

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 120px 0 30px 0;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  @media screen and (max-width: 767px) {}

`
export const Name = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 40px 0;
  padding: 0 2%;
  justify-content: space-between;
  @media screen and (max-width: 767px)  {flex-direction: column; justify-content: center; }
`
Name.Title = styled.div`
  font-family: 'Orbitron';
  font-size: 48px;
  line-height: 136.02%;
  color: #FFFFFF;
  @media screen and (max-width: 767px)  { width: 100%; text-align: center;  justify-content: center; align-items: center}
`
Name.Next = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  font-family: 'Orbitron';
  font-weight: 400;
  font-size: 24px;
  line-height: 136.02%;
  color: #CBD5E0;
  cursor: pointer;
  @media screen and (max-width: 767px)  { width: 100%; text-align: center;  justify-content: center; align-items: center}
`
export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`
export const Card = styled.div`
  width: 273px;
  height: 320px;
  margin: 10px 2% 60px 2%;
  padding: 35px, 40px, 35px, 40px;
  border-radius: 12px;
.coaaps{background-repeat: no-repeat; background-size: contain;}
`
Card.Img = styled.div`
  width: 100%;
  height: 143px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 3px solid #6495ED;
  background:  radial-gradient(90.16% 143.01% at 15.32% 21.04%, 
    rgba(224, 249, 255, 0.2) 0%, 
    rgba(110, 191, 244, 0.0447917) 64.58%, 
    rgba(70, 144, 213, 0) 100%);
  background-blend-mode: overlay;
  background-size: contain;
  border-radius: 12px;
  :hover{
    background:  radial-gradient(90.56% 143.01% at 15.32% 21.04%, 
    rgba(224, 249, 255, 0.2) 20%, 
    rgba(110, 191, 244, 0.0447917) 74.58%, 
    rgba(70, 144, 213, 0) 90%);
  }
`
Card.Name = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  margin: 19px 0 3px 0;
  text-align: center;
  color: #EAEEF6;
`

Card.Title = styled.div`
  width: 261px;
  height: 23px;
  left: 0px;
  top: 28px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  color: #718096;

`
Card.Text = styled.div`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  margin: 16px 0;
  font-feature-settings: 'salt' on;
  color: #A6B7D4;
`
export const ArrowMini = styled(arrowmini)`
  width: 20px;
  height: 20px;
  margin: 0 0 0 25px;
`
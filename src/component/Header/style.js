import styled from "styled-components";
import opener from "../../assets/imgs/opener.png";
import background from '../../assets/imgs/background.png'
export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  max-height: 1200px;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 80px;
  background: url(${background});
`;
//sign
export const Sign = styled.div`
  width: 100%;
  height: 80px;
  z-index: 99999;
  display: ${({ click }) => click ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  background: #4C6FFF;
  @media screen and (max-width: 1366px)  { height: 40px}
  @media screen and (max-width: 767px)  { position: fixed; height: 35px}
`
Sign.Text = styled.div`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 24px;
  color: #FFFFFF;
  @media screen and (max-width: 1366px)  { font-size: 18px}
  @media screen and (max-width: 767px)  { font-size: 12px}
  @media screen and (max-width: 430px)  { font-size: 8px}

`
Sign.Btn = styled.div`
  width: 80px;
  height: 35px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins';
  font-weight: 0;
  color: #fff;
  border: 1px solid #fff;
  font-size: 16px;
  cursor: pointer;
  @media screen and (max-width: 1366px)  { font-size: 12px; width: 60px; height: 25px;}
  @media screen and (max-width: 767px)  { font-size: 10px; margin-left: 10px; height: 20px}
  @media screen and (max-width: 430px)  { font-size: 7px; width: 45px; margin-left: 5px}
`

//header
export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px)  {flex-direction: column}
  @media screen and (max-width: 767px)  {margin-top: 120px;}
`
Header.Card = styled.div`
  width: 100%;
  padding: 2%;
  display: flex;
  justify-content: center;
  flex-direction: ${({ img }) => !img && 'column'};
  justify-content: ${({ img }) => img && 'center'};
  flex: 1;
  img{width: 100%; margin:20%; border-radius: 33px;}

`
export const Img = styled.div`
width: 100%;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 33px;
background-repeat: no-repeat;
background-size: contain;
background: url(${opener});
img{
  width: 100px;
}
@media screen and (max-width: 1200px)  {height: 300px;}
@media screen and (max-width: 1200px)  {height: 250px;}
@media screen and (max-width: 1000px)  {display: none}
 
`

Header.Card.Name = styled.div`
  font-family: 'Orbitron';
  font-weight: 800;
  font-size: 88px;
  color: #fff;
  text-shadow: 3px 2px 7px #000000;
  @media screen and (max-width: 1500px)  {font-size: 60px}
  @media screen and (max-width: 1366px)  {font-size: 50px}
  @media screen and (max-width: 1180px)  {font-size: 40px}
  @media screen and (max-width: 571px)  {font-size: 30px}
`
Header.Card.Desc = styled.div`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 30px;
  color: #FFFFFF;
  margin: 25px 0 60px 0;
  @media screen and (max-width: 1500px)  {font-size: 25px}
  @media screen and (max-width: 1366px)  {font-size: 20px; margin: 25px 0 40px 0}
  @media screen and (max-width: 1180px)  {font-size: 17px; margin: 25px 0 30px 0;}
`
//title
export const Title = styled.div`
  width: 100%;
  margin: 15px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`
Title.Card = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-right: 20px;
  background: #8F2FFF;
`
Title.Title = styled.div`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 24px;
  color: #E4ECF7;
  @media screen and (max-width: 1500px)  {font-size: 22px}
  @media screen and (max-width: 1366px)  {font-size: 16px}
  @media screen and (max-width: 1180px)  {font-size: 12px}
`
Title.Btn = styled.div`
  width: 164px;
  height: 50px;
  display: flex;
  justify-content: center;
  border: ${({ left }) => left ? '1px solid #4C6FFF' : ' 1px solid #fff'};
  background: ${({ left }) => left ? '#4C6FFF' : ' transparent'};
  align-items: center;
  font-family: 'Poppins';
  font-size: 17px;
  margin-right: 30px;
  text-transform: uppercase;
  color: #FFFFFF;
  cursor: pointer;
  transition: all .5s;
  :hover{background: #fff; color: #4C6FFF; border: 1px solid #fff}
  @media screen and (max-width: 1336px)  {width: 130px; height: 30px; font-size: 12px;}
`

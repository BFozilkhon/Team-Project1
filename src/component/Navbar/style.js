import styled from "styled-components";
import background from '../../assets/imgs/background.png'
import { ReactComponent as logo } from "../../assets/icons/logo.svg";

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  max-height: 1200px;
  background-size: cover;
  background-repeat: no-repeat;
  background: url(${background});
`;
export const Sign = styled.div`
width: 100%;
height: 80px;
z-index: 99999;
display: flex;
justify-content: center;
align-items: center;
background: #4C6FFF;
@media screen and (max-width: 1336px)  { height: 60px}
@media screen and (max-width: 767px)  { position: fixed;}
`
Sign.Text = styled.div`
font-family: 'Inter';
font-weight: 600;
font-size: 24px;
color: #FFFFFF;
@media screen and (max-width: 1336px)  { font-size: 18px}
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
@media screen and (max-width: 1336px)  { font-size: 12px; width: 60px}
@media screen and (max-width: 767px)  { font-size: 10px; margin-left: 10px; height: 25px}
@media screen and (max-width: 430px)  { font-size: 7px; width: 45px; margin-left: 5px}
`


export const Nav = styled.div`
  width: 100%;
  /* position: fixed; */
  display: flex;
  justify-content: space-between;
  max-width: 1920px;
  padding: 0 2%;
  backdrop-filter: blur(8px);
  margin: auto;
  margin-top: 80px;
@media screen and (max-width: 1336px)  { margin-top: 30px;}
@media screen and (max-width: 767px)  { padding-top: 60px; position: fixed;}
`;

export const Logo = styled(logo)`
@media screen and (max-width: 1336px)  {width: 340px;}
@media screen and (max-width: 1000px)  {width: 280px;}
@media screen and (max-width: 767px)  {width: 220px;}
`
export const NavItems = styled.div`
  width: 100%;
  display: flex;
  flex: ${({ logo }) => logo ? '1' : '1.3'} ;
  align-items: center;
  justify-content: ${({ logo }) => logo ? 'strt' : 'space-between'} ;
`;

NavItems.Text = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
@media screen and (max-width: 1336px)  { font-size: 15px}
@media screen and (max-width: 1000px)  { font-size: 12px}
@media screen and (max-width: 767px)  {display: none}


`;

NavItems.Btn = styled.div`
  border: 2px solid #f5f5f5;
  width: 163px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  color: #ffffff;
  cursor: pointer;
  :hover {background-color: white;color: #4c6fff;}
  :active {transform: scale(0.99);}
@media screen and (max-width: 1336px)  {width: 140px; height: 45px; font-size: 13px}
@media screen and (max-width: 1100px)  {width: 100px; height: 38px; font-size: 10px}
@media screen and (max-width: 767px)  {display: none}
`;

export const Header = styled.div`
width: 100%;
margin-top: 130px;
background: rgba(1.1.1..5);
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 1000px)  {flex-direction: column}
@media screen and (max-width: 1000px)  {margin-top: 230px;}
`
Header.Card = styled.div`
width: 100%;
padding: 2%;
display: flex;
justify-content: center;
flex-direction: ${({ img }) => !img && 'column'};
justify-content: ${({ img }) => img && 'center'};
flex: 1;
img{width: 100%; margin:20%; border-radius: 33px;
}
@media screen and (max-width: 1500px)  {img{height: 300px}}
@media screen and (max-width: 1335px)  {img{height: 260px;}}
@media screen and (max-width: 1180px)  { img{height: 230px; margin: 0}};
@media screen and (max-width: 1000px)  { display: ${({ img }) => img && 'none'};}
`

Header.Card.Name = styled.div`
font-family: 'Orbitron';
font-style: normal;
font-weight: 800;
font-size: 88px;
color: #fff;
text-shadow: 3px 2px 7px #000000;
@media screen and (max-width: 1500px)  {font-size: 60px}
@media screen and (max-width: 1335px)  {font-size: 50px}
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
@media screen and (max-width: 1336px)  {font-size: 20px; margin: 25px 0 40px 0}
@media screen and (max-width: 1180px)  {font-size: 17px; margin: 25px 0 30px 0;}
`
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
@media screen and (max-width: 1336px)  {font-size: 16px}
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

export const Sidebar = styled.div`
position: fixed;
width: 70%;
height: 100vh;
background: #0a0822;
display: none;
z-index: 999;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (max-width: 767px)  {display: flex}
`
Sidebar.Text = styled.div`
color: #fff;
font-size: 30px;
line-height: 60px;
`
export const Bar = styled.div`
  width: 25px;
  height: 23px;
  margin: 18px;
  display: none;
@media  (max-width: 767px) {display: block}
`
export const Bars = styled.div`
  width: 25px;
  height: 2.4px;
  float: left;
  border-radius: 3px;
  transform: ${({ a }) => a && 'rotate(45deg) translate(5px, 8px)'};
  transform: ${({ c }) => c && 'rotate(-45deg) translate(5px, -8px)'};
  width: ${({ b }) => b && '0px'};
  margin: 3.5px;
  background: ${({ color }) => color ? '#111' : '#fff'} ;
  transition: all .3s;
`
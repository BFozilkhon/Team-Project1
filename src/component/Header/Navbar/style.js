import styled from "styled-components";
import { ReactComponent as logo } from "../../../assets/icons/logo.svg";

//navbar
export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1920px;
  padding:  2%;
  backdrop-filter: blur(8px);
  margin: auto;
  @media screen and (max-width: 1366px)  { margin-top: 0px;}
  @media screen and (max-width: 767px)  {  margin-top: ${({ click }) => click ? '0' : '35px'}; position: fixed; background: #0a0822; }
`;
//navitems
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
  font-size: 20px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  :hover{ color: grey}
  @media screen and (max-width: 1366px)  { font-size: 15px}
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
@media screen and (max-width: 1366px)  {width: 140px; height: 45px; font-size: 13px}
@media screen and (max-width: 1100px)  {width: 100px; height: 38px; font-size: 10px}
@media screen and (max-width: 767px)  {display: none}
`;

export const Bar = styled.div`
  width: 25px;
  height: 23px;
  margin: 10px 10px 15px 10px;
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

export const Logo = styled(logo)`
  @media screen and (max-width: 1366px)  {width: 340px;}
  @media screen and (max-width: 1000px)  {width: 280px;}
  @media screen and (max-width: 767px)  {width: 220px;   margin-bottom: ${({ click }) => click ? '0px' : '5px;'};}
`
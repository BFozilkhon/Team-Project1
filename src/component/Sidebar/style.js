import styled from "styled-components"

import { ReactComponent as home } from '../../assets/icons/home.svg'
import { ReactComponent as dev } from '../../assets/icons/dev.svg'
import { ReactComponent as creator } from '../../assets/icons/creator.svg'
import { ReactComponent as system } from '../../assets/icons/system.svg'
import { ReactComponent as about } from '../../assets/icons/about.svg'
import { ReactComponent as res } from '../../assets/icons/res.svg'
import { ReactComponent as login } from '../../assets/icons/login.svg'

export const Sidebar = styled.div`
  position: fixed;
  width: 70%;
  margin-top:  65px;
  height: 100vh;
  padding: 0px 50px 0 30px;
  background: linear-gradient(153deg, rgba(255,255,255,1) 0%, rgba(57,53,97,1) 0%, rgba(10,8,34,1) 37%, rgba(10,8,34,1) 100%);;
  display: none;
  z-index: 999;
  flex-direction: column;
  box-shadow: 0px 12px 10px #111;
  @media screen and (max-width: 767px)  {display: flex}
`
Sidebar.Text = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  font-size: 25px;
  line-height: 40px;
  margin: 5px 0;
  border-bottom: 1px solid grey;
`
Sidebar.Nav = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0 30px 0;
`
Sidebar.Img = styled.div`
 width: 70px;
 height: 70px;
 border-radius: 50%;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 50px;
 color: #fff;
 padding: 20px;
 background: #4C6FFF;
 img{
   width: 70px;
   height: 70px;
   border-radius: 50%;
 }
`
Sidebar.User = styled.div`
margin-left: 20px;
`
Sidebar.User.Name = styled.div`
  color: #fff;
  font-size: 25px;
`
Sidebar.User.Text = styled.div`
  color: grey;
  font-size: 15px;
`

export const Home = styled(home)`
width: 30px;
height: 30px;
margin-right: 15px;
`
export const Dev = styled(dev)`
width: 30px;
height: 30px;
margin-right: 15px;
`
export const Creator = styled(creator)`
width: 30px;
height: 30px;
margin-right: 15px;
`
export const System = styled(system)`
width: 30px;
height: 30px;
margin-right: 15px;
`
export const About = styled(about)`
width: 30px;
height: 30px;
margin-right: 15px;
`
export const Resour = styled(res)`
width: 30px;
height: 30px;
margin-right: 15px;
fill: #fff;
`
export const Login = styled(login)`
width: 30px;
height: 30px;
margin-right: 15px;
fill: #fff;
`
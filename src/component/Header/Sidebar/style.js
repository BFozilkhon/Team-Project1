import styled from "styled-components"

import { ReactComponent as home } from '../../../assets/icons/home.svg'
import { ReactComponent as dev } from '../../../assets/icons/dev.svg'
import { ReactComponent as creator } from '../../../assets/icons/creator.svg'
import { ReactComponent as system } from '../../../assets/icons/system.svg'
import { ReactComponent as about } from '../../../assets/icons/about.svg'
import { ReactComponent as res } from '../../../assets/icons/res.svg'

export const Sidebar = styled.div`
  position: fixed;
  width: 70%;
  margin-top: ${({ cl }) => cl ? '64px' : '100px'} ;
  height: 100vh;
  padding: 0px 50px 0 30px;
  background: #0a0822;
  display: none;
  z-index: 999;
  flex-direction: column;
  box-shadow: 0px 12px 10px #111;
  @media screen and (max-width: 767px)  {display: flex}
`
Sidebar.Text = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
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
margin: 0 5px 0px 0;
`
export const Dev = styled(dev)`
width: 30px;
height: 30px;
margin: 0 5px 5px 0;
`
export const Creator = styled(creator)`
width: 30px;
height: 30px;
margin: 0 5px 5px 0;
`
export const System = styled(system)`
width: 30px;
height: 30px;
margin: 0 5px 10px 0;
`
export const About = styled(about)`
width: 30px;
height: 30px;
margin: 0 5px 10px 0;
`
export const Resour = styled(res)`
width: 30px;
height: 30px;
margin: 0 5px 5px 0;
fill: #fff;
`
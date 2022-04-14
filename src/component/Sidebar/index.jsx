import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Pro } from '../../context/isopen'
import { ImageViewer } from 'antd-mobile'
import wb from '../../assets/imgs/wb.jpg'
import './navbar.css'
import { Sidebar, Home, Dev, Creator, System, About, Resour, Login } from './style'
const Sid = () => {
  const [visible, setVisible] = useState(false)
  const [isOpen, setIsopen] = useContext(Pro)
  const [click] = useState(false)
  return (
    <Sidebar cl={click} click={isOpen} className={`sidebar ${isOpen === true ? 'active' : ''}`}>
      <Sidebar.Nav>
        <Sidebar.Img onClick={() => { setVisible(true) }}><img src={wb} /></Sidebar.Img>
        <Sidebar.User>
          <Sidebar.User.Name>Muhammad</Sidebar.User.Name>
          <Sidebar.User.Text>web brain</Sidebar.User.Text>
        </Sidebar.User>
      </Sidebar.Nav>

      <Sidebar.Text href="#" onClick={() => setIsopen(!isOpen)}><Home />Home</Sidebar.Text>
      <Sidebar.Text href="#developer" onClick={() => setIsopen(!isOpen)}><Dev />Devoloper</Sidebar.Text>
      <Sidebar.Text href="#ecosystem" onClick={() => setIsopen(!isOpen)}><System />Ecosystem</Sidebar.Text>
      <Sidebar.Text href="#about" onClick={() => setIsopen(!isOpen)}><About />About us</Sidebar.Text>
      <Sidebar.Text href="#recourses" onClick={() => setIsopen(!isOpen)}><Resour />Resources</Sidebar.Text>
      <Link to={"/white-paper"}>   <Sidebar.Text href="#" onClick={() => setIsopen(!isOpen)}><Login />Sign Up</Sidebar.Text></Link>
      <ImageViewer image={wb} visible={visible} onClose={() => { setVisible(false) }} />
    </Sidebar>
  )
}

export default Sid

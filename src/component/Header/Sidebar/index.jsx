import React from 'react'
import './navbar.css'
import { Sidebar, Home, Dev, Creator, System, About, Resour } from './style'
const Sid = ({ isOpen, setIsopen, click }) => {
  return (
    <Sidebar cl={click} click={isOpen} className={`sidebar ${isOpen === true ? 'active' : ''}`}>
      <Sidebar.Nav>
        <Sidebar.Img>M</Sidebar.Img>
        <Sidebar.User>
          <Sidebar.User.Name>Muhammad</Sidebar.User.Name>
          <Sidebar.User.Text>web brain</Sidebar.User.Text>
        </Sidebar.User>
      </Sidebar.Nav>

      <Sidebar.Text onClick={() => setIsopen(!isOpen)}><Home />Home</Sidebar.Text>
      <Sidebar.Text onClick={() => setIsopen(!isOpen)}><Dev />Devoloper</Sidebar.Text>
      <Sidebar.Text onClick={() => setIsopen(!isOpen)}><Creator />Creator</Sidebar.Text>
      <Sidebar.Text onClick={() => setIsopen(!isOpen)}><System />Ecosystem</Sidebar.Text>
      <Sidebar.Text onClick={() => setIsopen(!isOpen)}><About />About us</Sidebar.Text>
      <Sidebar.Text onClick={() => setIsopen(!isOpen)}><Resour />Resources</Sidebar.Text>
    </Sidebar>
  )
}

export default Sid

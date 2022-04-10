import React, { useState } from "react";
import opener from '../../assets/imgs/opener.png'
import { Link } from "react-router-dom";
import './navbar.css'
import { Container, Sign, Nav, Logo, NavItems, Header, Title, Sidebar, Bar, Bars } from "./style";

export const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <Container>
      <Sign>
        <Sign.Text>Be a early member of Creator Console to join the revolution</Sign.Text>
        <Sign.Btn>SIGN UP</Sign.Btn>
      </Sign>
      <Nav>
        <Sidebar click={isOpen} className={`sidebar ${isOpen === true ? 'active' : ''}`}>
          <Sidebar.Text>Home</Sidebar.Text>
          <Sidebar.Text>Developer</Sidebar.Text>
          <Sidebar.Text>Creator</Sidebar.Text>
          <Sidebar.Text>Ecosystem</Sidebar.Text>
          <Sidebar.Text>About us</Sidebar.Text>
          <Sidebar.Text>Resources</Sidebar.Text>
        </Sidebar>

        <NavItems logo><Logo /></NavItems>
        <NavItems>
          <NavItems.Text>Home</NavItems.Text>
          <NavItems.Text>Developer</NavItems.Text>
          <NavItems.Text>Creator</NavItems.Text>
          <NavItems.Text>Ecosystem</NavItems.Text>
          <NavItems.Text>About us</NavItems.Text>
          <NavItems.Text>Resources</NavItems.Text>
          <Link to={"/white-paper"}>
            <NavItems.Btn>Whitepaper</NavItems.Btn>
          </Link>
        </NavItems>
        <Bar onClick={() => setIsopen(!isOpen)}>
          <Bars a={isOpen} />
          <Bars b={isOpen} />
          <Bars c={isOpen} />
        </Bar>
      </Nav >

      <Header>

        <Header.Card>
          <Header.Card.Name>Creativity Decentralised</Header.Card.Name>
          <Header.Card.Desc>First Decentralized Create To Earn Economy</Header.Card.Desc>
          <Title> <Title.Card></Title.Card><Title.Title>Decentralized Creations</Title.Title> </Title>
          <Title> <Title.Card></Title.Card><Title.Title>Suite of API's and smart contracts.</Title.Title> </Title>
          <Title><Title.Card></Title.Card><Title.Title>The CREATE REVOLUTION</Title.Title> </Title>
          <Title btn><Title.Btn left>Buy CR8 Token</Title.Btn> <Title.Btn>join community</Title.Btn></Title>
        </Header.Card>


        <Header.Card img>
          <img src={opener} alt="" />
        </Header.Card>
      </Header>

    </Container>
  );
};
export default Navbar;

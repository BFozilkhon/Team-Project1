import React, { useState } from "react";
import opener from '../../assets/imgs/opener.png'
import Sidebars from "./Sidebar";
import Navbars from "./Navbar";
import { Container, Sign, Header, Title } from "./style";

export const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [click, setClick] = useState(false);
  return (
    <Container>
      <Sign click={click}>
        <Sign.Text>Be a early member of Creator Console to join the revolution</Sign.Text>
        <Sign.Btn onClick={() => setClick(!click)}>SIGN UP</Sign.Btn>
      </Sign>

      <Sidebars isOpen={isOpen} setIsopen={setIsopen} click={click} setClick={setClick} />
      <Navbars isOpen={isOpen} setIsopen={setIsopen} click={click} setClick={setClick} />

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

    </Container >
  );
};
export default Navbar;

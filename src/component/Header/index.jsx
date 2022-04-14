import React, { useState } from "react";
import opener from "../../assets/imgs/yotubes.png";
import { Container, Img, Header, Title } from "./style";

export const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [click, setClick] = useState(false);
  return (
    <Container id="">


      <Header>
        <Header.Card>
          <Header.Card.Name>Creativity Decentralised</Header.Card.Name>
          <Header.Card.Desc>
            First Decentralized Create To Earn Economy
          </Header.Card.Desc>
          <Title>
            {" "}
            <Title.Card></Title.Card>
            <Title.Title>Decentralized Creations</Title.Title>{" "}
          </Title>
          <Title>
            {" "}
            <Title.Card></Title.Card>
            <Title.Title>Suite of API's and smart contracts.</Title.Title>{" "}
          </Title>
          <Title>
            <Title.Card></Title.Card>
            <Title.Title>The CREATE REVOLUTION</Title.Title>{" "}
          </Title>
          <Title btn>
            <Title.Btn left>Buy CR8 Token</Title.Btn>{" "}
            <Title.Btn>join community</Title.Btn>
          </Title>
        </Header.Card>

        <Header.Card img>
          <Img ><img src={opener} alt="" /></Img>
        </Header.Card>
      </Header>
    </Container>
  );
};
export default Navbar;

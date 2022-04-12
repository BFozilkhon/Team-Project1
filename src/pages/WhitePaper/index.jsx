import React from "react";
import { data } from "../../mock/whitepaperCard";
import Footer from "../../component/Footer";
import Group from "../../assets/imgs/Group.png";
import {
  Container,
  Wrapper,
  Card,
  Header,
  BgImg,
  CardWrapper,
  // UpArrow,
} from "./style";
import Navbars from "../../component/Header/Navbar";
export const WhitePaper = () => {
  return (
    <Container>
      <Navbars/>
      <Header>
        <Container.Title>FOR CREATORS</Container.Title>
        <Wrapper>
          {data.map((value) => {
            return (
              <Card>
                <BgImg src={Group} />
                <Card.Title>{value.title}</Card.Title>
                <CardWrapper>
                  <CardWrapper.Text>{value.text}</CardWrapper.Text>
                  {/* <UpArrow /> */}
                </CardWrapper>
              </Card>
            );
          })}
        </Wrapper>
      </Header>
      <Footer />
    </Container>
  );
};

export default WhitePaper;

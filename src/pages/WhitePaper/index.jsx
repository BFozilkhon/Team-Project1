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
} from "./style";
import Navbars from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";
export const WhitePaper = () => {
  return (
    <Container>
      <Container.Body>
        <Navbars />
        <Sidebar />
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
      </Container.Body>
    </Container>
  );
};

export default WhitePaper;

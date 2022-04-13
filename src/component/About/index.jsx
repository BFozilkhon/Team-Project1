import React from "react";
import aboutpng from "../../assets/imgs/about.png";
import { Container, Left, Right } from "./style";
const About = () => {
  return (
    <Container id="developer">
      <Left>
        <Container.Title>
          What is <span style={{ color: "#4C6FFF" }}> Create Protocol</span>
        </Container.Title>
        <Left.Text>
          Create Protocol is a completely decentralised ecosystem, structured
          around creators and artists, which has multiple decentralised
          applications (DApps) built on top of it. All these DApps are governed
          and powered by the create governance token - $CR8.
          <br />
          <br /> Using the Create platform and the suite of APIs along with it,
          the community has the freedom of extending these applications in the
          way they like - which is the revolution that Create Protocol plans to
          bring about.
        </Left.Text>
      </Left>
      <Right>
        <Right.Img src={aboutpng} />
      </Right>
    </Container>
  );
};

export default About;

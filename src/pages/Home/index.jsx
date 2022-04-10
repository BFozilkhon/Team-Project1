import React from "react";
import Coapps from "../../component/Coapps";
import Prouct from "../../component/Prouct";
import Account from "../../component/Account";
import Partners from "../../component/Partners";
import Navbar from "../../component/Navbar";
import About from "../../component/About";
import { Container } from "./style";
export const Home = () => {
  return (
    <Container>
      <Navbar />
      <About />
      <Coapps />
      <Prouct />
      <Account />
      <Partners />
    </Container>
  );
};

export default Home;

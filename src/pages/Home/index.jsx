import React from "react";
import Coapps from "../../component/Coapps";
import Prouct from "../../component/Prouct";
import Account from "../../component/Account";
import Partners from "../../component/Partners";
import Navbar from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";
import Header from "../../component/Header";
import { Container } from "./style";
import Footer from "../../component/Footer";
export const Home = () => {
  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Header />
      <Coapps />
      <Prouct />
      <Account />
      <Partners />
      <Footer />
    </Container>
  );
};

export default Home;

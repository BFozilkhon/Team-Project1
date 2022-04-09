import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";

export const Container = styled.div`
  width: 100%;
  padding: 0 2%;
  max-width: 1920px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding-top: 80px;
`;

export const Logo = styled(logo)``;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  width: 52%;
  justify-content: space-between;
`;

NavItems.Text = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
`;

NavItems.Btn = styled.div`
  border: 2px solid #f5f5f5;
  width: 163px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15.6724px;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background-color: white;
    color: #4c6fff;
  }
  :active {
    transform: scale(0.99);
  }
`;

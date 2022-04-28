import React from "react";
import { account } from "../../mock/acount";
import { Container, Wrapper, Produc } from "./style";
const Products = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper.Left active>
          <Wrapper.Name>Create an account &choose a path</Wrapper.Name>
          <Wrapper.Text>
            The best way to stake your claim in the ecosystem is by creating an
            account (wallet). Then, choose the first step in your journey.
          </Wrapper.Text>
        </Wrapper.Left>

        <Wrapper.Left>
          <Produc>
            {account.map((v, i) => {
              return (
                <Produc.Card key={v.id}>
                  <img src={v.imgs} className="account-img" alt="img" />
                  <Produc.Name a={i % 1 === 0} b={i % 2 === 0} c={i % 3 === 0}>
                    {v.header}
                  </Produc.Name>
                  <Produc.Text>{v.text}</Produc.Text>
                  <Produc.Btn>{v.btn}</Produc.Btn>
                </Produc.Card>
              );
            })}
          </Produc>
        </Wrapper.Left>
      </Wrapper>
    </Container>
  );
};

export default Products;

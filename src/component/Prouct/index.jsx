import React from 'react'
import { product } from '../../mock/product'
import { Container, Produc, Name, Arrow, ArrowMini, LearnMore } from './style'
const Products = () => {
  return (
    <Container id='ecosystem'>
      <Name><Name.Title>Product by CP</Name.Title><Name.Next>learn more <ArrowMini /></Name.Next></Name>

      <Produc>
        {product.map((v) => {
          return <Produc.Card key={v.id}>
            <Produc.Name>{v.header}<Arrow /></Produc.Name>
            <Produc.Text>{v.text}</Produc.Text>
          </Produc.Card>
        })}
      </Produc>

      <LearnMore>
        <LearnMore.Text>
          The entire ecosystem of CREATE PROTOCOL is a spiderweb: interlinked
          DApps that power each other, where the Protocol is the engine.
        </LearnMore.Text>
        <a href="https://my-portfolie.netlify.app/"><LearnMore.Btn>Learn More</LearnMore.Btn></a>
      </LearnMore>

    </Container>
  )
}

export default Products

import React from 'react'
import { data } from '../../mock/card'
import { Container, Cards, Card, Name, ArrowMini } from './style'
const Coapps = () => {
  return (
    <Container>
      <Name><Name.Title>COapps Ecosystem</Name.Title><Name.Next>learn more<ArrowMini /> </Name.Next></Name>
      <Cards>
        {data.map((v) => {
          return <Card>
            <Card.Img>
              <img src={v.url} alt="coapps" className='coaaps' />
            </Card.Img>
            <Card.Name>{v.headerBlack}</Card.Name>
            <Card.Title>{v.headerLight}</Card.Title>
            <Card.Text>{v.text}</Card.Text>
          </Card>
        })}
      </Cards>
    </Container>
  )
}

export default Coapps

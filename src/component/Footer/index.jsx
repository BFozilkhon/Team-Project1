import { Container, Card, Input, Btn, FooterIcon, Instagram, Twitter, Figma, Circle, M, UnderFooter} from "./style";

export const Footer =() =>{
    return(
        <>
        <Container>
        <Card>
            <Card.Container>
                <Card.A>
                    <FooterIcon />
                </Card.A>
                <Card.A>
                    A revolutionary creator platform structured upon a create-to-earn
                    (C2E) economy that integrates NFT's further into the metaverse and
                    blockchain.
                </Card.A>
            </Card.Container>
            <Card.B>Join Create community</Card.B>
            <Card.A><Instagram/><Circle /> <Twitter/> <M/><Figma/>
            </Card.A>
        </Card>


        <Card>
             <Card.Container>
             <Card.Category>
                   <Card.B>Quick Links</Card.B>
                   <Card.Category.Item>Home</Card.Category.Item>
                   <Card.Category.Item>Products</Card.Category.Item>
                   <Card.Category.Item>About</Card.Category.Item>
                   <Card.Category.Item>Features</Card.Category.Item>
                   <Card.Category.Item>Contact</Card.Category.Item>

               </Card.Category>
        
               <Card.Category>
                   <Card.B>Recourses</Card.B>
                   <Card.Category.Item>Home</Card.Category.Item>
                   <Card.Category.Item>Products</Card.Category.Item>
                   <Card.Category.Item>About</Card.Category.Item>
                   <Card.Category.Item>Features</Card.Category.Item>
                   <Card.Category.Item>Contact</Card.Category.Item>

               </Card.Category>
             </Card.Container>
        </Card>


        <Card>

            <Card.B>Get the latest updates</Card.B>

            <Card.A>
                    Don’t miss to subscribe to our new feeds, kindly fill the form below.
                </Card.A>

            <Card.Container>

            <Input/><Btn/>
            </Card.Container>
        </Card>
    </Container>

    <UnderFooter>
    Copyright © 2021, All Right Reserved CreateProtocol
    </UnderFooter>
        </>
    )
}
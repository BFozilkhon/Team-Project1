import styled from 'styled-components'

export const Container = styled.div`
width:100%;
display: flex;
align-items: center;
height:fit-content;
display:flex ;
flex-direction:column;
@media screen and (max-width: 767px){padding:0 ;margin:0 ;width:100% ;}
`
Container.Body = styled.div`
max-width: 1920px ;
background: #28272E;
`

Container.Title = styled.h1`
font-family: 'Orbitron';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 136.02%;
margin:0;
padding:0;
color: #FFFFFF;
margin-top:5% ;
@media screen and (max-width: 767px){
  font-size:28px ;
}
`
export const Wrapper = styled.div`
display:flex;
width:100% ;
align-items:center;
justify-content: space-between;
/* border: 1px solid white; */
justify-content:space-between ;
@media screen and (max-width: 767px){
  width:100% ;
  display:flex ;
  flex-direction:column ;
  /* padding:10px 0px ; */
  justify-content:center ;
}
`
export const Card = styled.div`
width:46%;
height:fit-content;
cursor: pointer;
margin-bottom:10% ;
@media screen and (max-width: 767px){
  width:95% ;
  margin-top:12px !important ;

}

background-color:#0a0822 ;
/* background-image: linear-gradient(to top , #28272E 30% , #E5E5E5, rgb(148, 50, 115) 40%); */
border: 1px solid whitesmoke;
  border: 2px solid #47ad9a;
  border-radius:15px ;
  margin:30px 0px 0px 40px ;
  @media screen and (max-width: 767px){
    margin:0 ;
  }
  
  `
export const BgImg = styled.img`
width:50%;
height:30%;
`
Card.Title = styled.h1`
font-family: 'Orbitron';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 136.02%;
color: #FFFFFF;
margin-top:12%;
margin-left:5% ;
@media screen and (max-width: 767px){
  font-size:25px ;
}
`
export const CardWrapper = styled.div`
display:flex ;
margin: 5% 5% 5% 5%;
align-items:flex-end ;
`
CardWrapper.Text = styled.p`
/* font-family: 'Orbitron'; */
width:72% ;
font-size:18px ;
font-style: normal;
font-weight: 400;
color: #FFFFFF;
@media screen and (max-width: 767px){
  font-size:14px;
  width:80% ;
}
`

// export const UpArrow = styled(ArrowUpRight)`
// width:35px;
// height:35px;
// color: white;
// margin-left:auto ;
// `
export const Header = styled.div`
padding: 60px 2% 0 2% ;
`
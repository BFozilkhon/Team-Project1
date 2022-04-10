import styled from 'styled-components'

export const Container = styled.div`
width:100%;
height:729px;
max-width: 1920px ;
/* padding:0px 210px 0px 153px; */
color: white;
background-color:white ;
background:  radial-gradient(90.16% 143.01% at 15.32% 21.04%, 
    rgba(224, 249, 255, 0.2) 0%, 
    rgba(110, 191, 244, 0.0447917) 64.58%, 
    rgba(70, 144, 213, 0) 100%);
    padding:0 2% ;
  /* background-blend-mode: overlay;
  background-size: contain; */
display:flex;
@media screen and (max-width: 767px){
    display:flex ;
    flex-direction:column ;
    width:100%;
    height:fit-content ;
    padding:25px 0px;
}
`
export const Left = styled.div`
display:flex;
@media screen and (max-width: 767px){
    width:100% ;
}
width:48%;
flex-direction:column;
justify-content:center ;
`
export const Right=styled.div`
display:flex;
width:50% ;
justify-content:center ;
align-items:center ;
@media screen and (max-width: 767px){
    display:flex;
    justify-content:center;
    align-items:center ;
}

`
Left.Text = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 136.52%;
color: #FFFFFF;
margin-top:35px ;
@media screen and (max-width: 767px){
    font-size:16px;
}
`

Container.Title = styled.h1`
font-family: 'Orbitron';
font-style: normal;
font-weight: 400;
font-size: 48px;
line-height: 60px;
text-transform: uppercase;
margin:0;
padding:0 ;

color: #FFFFFF;
`
Right.Img= styled.img`
width:500px;
height:480px ;
@media screen and (max-width: 767px){
    width:330px;
    height:310px ;
    margin-left:130px;
    margin-top:20px;
}
 
`
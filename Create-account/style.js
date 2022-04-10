import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  padding: 0 2%;
  .account-img{width: 90px; height: 90px; margin-bottom: 37px;}
  @media screen and (max-width: 1700px)  {.account-img{ width: 70px;height: 70px;}}
  @media screen and (max-width: 1500px)  {.account-img{ width: 50px;height: 50px;}}
  @media screen and (max-width: 1000px)  {.account-img{ margin: 40px 0 20px 0; width: 150px;height: 150px; } padding: 7%}
  @media screen and (max-width: 767px)  { padding: 0}
`

export const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 1000px)  { flex-direction: column;}
`
Wrapper.Left = styled.div`
  flex: ${({ active }) => active ? '1.5' : '3'};
  @media screen and (max-width: 767px)  { flex-direction: column; text-align: center;}
`
Wrapper.Name = styled.div`
  font-family: 'Orbitron';
  font-weight: 0;
  font-size: 48px;
  line-height: 136.02%;
  color: #FFF;
  @media screen and (max-width: 1700px)  {font-size: 40px}
  @media screen and (max-width: 1500px)  {font-size: 30px}
  @media screen and (max-width: 1000px)  {font-size: 48px; text-align: center}
`
Wrapper.Text = styled.div`
  font-family: 'Inter';
  font-weight: 0;
  font-size: 18px;
  margin-right: 50%;
  color: #FFFFFF;
  @media screen and (max-width: 1700px)  {font-size: 14px}
  @media screen and (max-width: 1500px)  {font-size: 12px}
  @media screen and (max-width: 1000px)  {font-size: 24px; margin: 20px 0 60px 0; text-align: center; padding: 0 5%}
`

export const Produc = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1000px)  {flex-direction: column}
`
Produc.Card = styled.div`
  width: 100%;
  display: flex; 
  flex-direction: column;
  @media screen and (max-width: 767px)  { align-items: center;}
`
Produc.Img = styled.div`
  width: 35px;
  height: 35px;
  margin-bottom: 20px;
`
Produc.Name = styled.div`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 18px;
  color: #EAEEF6;
  @media screen and (max-width: 1700px)  {font-size: 20px;}
  @media screen and (max-width: 1500px)  {font-size: 16px;}
  @media screen and (max-width: 1000px)  {
  font-size: 25px; 
  margin-left:${({ a }) => a && '50px'}; 
  margin-left:${({ b }) => b && '30px'} ;
  margin-left:${({ c }) => c && '50px'} ;
  }
  @media screen and (max-width: 767px)  {margin: 0}

`
Produc.Text = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-size: 20px;
  line-height: 136.02%;
  display: flex;
  align-items: flex-end;
  color: #CBD5E0;
  flex-grow: 0;
  margin-bottom: 30px;
  @media screen and (max-width: 1700px)  {font-size: 16px;}
  @media screen and (max-width: 1500px)  {font-size: 12px;}
  @media screen and (max-width: 1000px)  {font-size: 20px; margin-right: 10%}
  @media screen and (max-width: 767px)  {margin: 5%}
`
Produc.Btn = styled.div`
  width: 350px;
  height: 49px;
  margin: 30px 0 60px 0;
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  color: #fff;
  margin: 0 2px;
  margin-top: auto;
  cursor: pointer;
  :hover{
  background:  
    radial-gradient(90.16% 143.01% at 15.32% 21.04%, 
    rgba(224, 249, 255, 0.2) 0%, 
    rgba(110, 191, 244, 0.0447917) 64.58%, 
    rgba(70, 144, 213, 0) 100%);
  }
  @media screen and (max-width: 1500px)  {width: 200px; font-size: 12px; }
  @media screen and (max-width: 1000px)  {width: 350px; font-size: 20px; margin-bottom: 50px}
  @media screen and (max-width: 767px)  {width: 200px; font-size: 12px; margin-bottom: 70px}
`

import React from 'react'
import { Sign } from './Header/style'
const SignUp = () => {
  return (
    <Sign click={click}>
      <Sign.Text>
        Be a early member of Creator Console to join the revolution
      </Sign.Text>
      <Sign.Btn onClick={() => setClick(!click)}>SIGN UP</Sign.Btn>
    </Sign>
  )
}

export default SignUp

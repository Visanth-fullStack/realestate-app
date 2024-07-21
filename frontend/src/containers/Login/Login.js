import React from 'react'
import SignUpSignIn from '../../components/SignUpSignIn/SignUpSignIn'
import { Container, Picture } from './Login.styled'

const LoginContainer = () => {
  return (
    <Container>
        <Picture src='https://growmarketing.netlify.app/images/login-1.png'/>
        <SignUpSignIn/>
    </Container>
  )
}

export default LoginContainer
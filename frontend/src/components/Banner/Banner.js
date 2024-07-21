import React from 'react'
import { Button, Container, HouseImage, LeftSection, Logo, RightSection, Subtitle, Title } from './Banner.styled'
import { FaHome } from 'react-icons/fa'
import heroBanner from '../../assets/images/hero-banner.png'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()
  return (
    <Container>
      <LeftSection>
        <Logo>
          <FaHome style={{ marginRight: '10px' }} />
          Real Estate Agency
        </Logo>
        <Title>Find Your Dream House By Us</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod tempor incididunt ut labore.
        </Subtitle>
        <Button onClick={() => navigate('/signup')}>Register With Us</Button>
      </LeftSection>
      <RightSection>
        <HouseImage src={heroBanner} alt="Dream House" />
      </RightSection>
    </Container>
  )
}

export default Banner
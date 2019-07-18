import React from 'react'
import illustrations from '../../assets/images/illustration-mockups.svg'

import { Container, TextBox, Image } from './styled'

import { Text, Title } from '../../components/Text'

export default function MainContent() {
  return (
    <Container>
      <Image src={illustrations} alt="Mockup illustrations" />
      <TextBox>
        <Title bold>Build The Community Your Fans Will Love</Title>
        <Text>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connnections with your users as you
          engage in genuiune discussion.
        </Text>
      </TextBox>
    </Container>
  )
}

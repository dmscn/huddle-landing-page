import React from 'react'
import illustrations from '../../assets/images/illustration-mockups.svg'

import { Container, TextBox, Image, DinamicBox } from './styled'

import { Text, Title } from '../../components/Text'
import Box from '../../components/Box'

export default function MainContent() {
  return (
    <Container>
      <DinamicBox>
        <Image src={illustrations} alt="Mockup illustrations" />
      </DinamicBox>
      <DinamicBox>
        <TextBox>
          <Title bold>Build The Community Your Fans Will Love</Title>
          <Text>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connnections with your users as
            you engage in genuiune discussion.
          </Text>
        </TextBox>
      </DinamicBox>
    </Container>
  )
}

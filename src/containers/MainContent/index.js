import React from 'react'
import illustrations from '../../assets/images/illustration-mockups.svg'

import { Container, Image } from './styled'
import DescriptionBox from '../DescriptionBox'

export default function MainContent() {
  return (
    <Container>
      <Image src={illustrations} alt="Mockup illustrations" />
      <DescriptionBox />
    </Container>
  )
}

import React from 'react'
import illustrations from '../../assets/images/illustration-mockups.svg'

import { Wrapper, Image } from './styled'

export default function MainContent() {
  return (
    <Wrapper>
      <Image src={illustrations} alt="Mockup illustrations" />
    </Wrapper>
  )
}

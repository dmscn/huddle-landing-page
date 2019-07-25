import React from 'react'
import { Text, Title } from '../../components/Text'
import Button from '../../components/Button'

import { TextBox } from './styled'

export default function DescriptionBox() {
  return (
    <TextBox>
      <Title bold>Build The Community Your Fans Will Love</Title>
      <Text>
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connnections with your users as you engage
        in genuiune discussion.
      </Text>
      <Button>Register</Button>
    </TextBox>
  )
}

import React from 'react'
import Breackpoint from 'react-socks'

import Box from '../../components/Box'
import Button from '../../components/Button'
import { Text, Title } from '../../components/Text'

function TextContent({ center }) {
  return (
    <>
      <Title bold center={center}>
        Build The Community Your Fans Will Love
      </Title>
      <Text center={center}>
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connnections with your users as you engage
        in genuiune discussion.
      </Text>
      <Box align={center && 'center'}>
        <Button>Register</Button>
      </Box>
    </>
  )
}

export default function DescriptionBox() {
  return (
    <>
      <Breackpoint medium down>
        <Box column align="center">
          <TextContent center />
        </Box>
      </Breackpoint>

      <Breackpoint large up>
        <Box column align="flex-start">
          <TextContent />
        </Box>
      </Breackpoint>
    </>
  )
}

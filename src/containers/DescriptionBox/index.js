import React from 'react'
import Breackpoint from 'react-socks'

import Box from '../../components/Box'
import Button from '../../components/Button'
import * as Typography from '../../components/Typography'

const STR_TITLE = 'Build The Community Your Fans Will Love'
const STR_MESSAGE = `Huddle re-imagines the way we build communities. You have a voice, but
so does your audience. Create connnections with your users as you engage
in genuiune discussion.`
const STR_BUTTON = 'Register'

function TextContent({ center }) {
  return (
    <>
      <Typography.Title bold center={center}>
        {STR_TITLE}
      </Typography.Title>

      <Typography.Body center={center}>{STR_MESSAGE}</Typography.Body>

      <Box align={center && 'center'}>
        <Button>{STR_BUTTON}</Button>
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

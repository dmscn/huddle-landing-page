import React from 'react'
import illustrations from '../../assets/images/illustration-mockups.svg'
import Breackpoint from 'react-socks'

import Box from '../../components/Box'
import DescriptionBox from '../DescriptionBox'

const PageContent = ({ row }) => (
  <>
    <Box full marginRight={row && '2rem'}>
      <img src={illustrations} alt="Mockup illustrations" width="100%" />
    </Box>
    <Box full marginLeft={row && '2rem'}>
      <DescriptionBox />
    </Box>
  </>
)

export default function MainContent() {
  return (
    <Box full>
      <Breackpoint medium down>
        <Box full column justify="space-around">
          <PageContent />
        </Box>
      </Breackpoint>

      <Breackpoint large up>
        <Box full margin="2rem">
          <PageContent row />
        </Box>
      </Breackpoint>
    </Box>
  )
}

import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  flex: ${props => props.flexSize};
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  justify-content: center;
`

export default Box

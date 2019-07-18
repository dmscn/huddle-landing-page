import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
`

export default Box

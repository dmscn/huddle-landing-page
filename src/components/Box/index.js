import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  flex: ${props => props.flexSize};
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  justify-content: ${props => props.align || 'center'};
  align-items: ${props => props.alignVertical || 'center'};
`

export default Box

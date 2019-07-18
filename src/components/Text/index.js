import styled from 'styled-components'

const Text = styled.p`
  font-size: 25px;
  color: white;
`

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 45px;
  font-weight: ${props => (props.bold ? '700' : '400')};
  color: white;
`

export { Text, Title }

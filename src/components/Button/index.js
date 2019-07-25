import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  justify-content: center;
  min-width: 200px;
  padding: 1em;
  font-size: 1em;
  letter-spacing: 1.4;
  font-family: 'Poppins';
  background-color: white;
  color: ${props => props.theme.violet};
  border: 0;
  border-radius: 45px;
  box-shadow: 5px 5px 20px #28282880;
  cursor: pointer;
  outline: none;

  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
    outline: none;
  }
`
export default Button

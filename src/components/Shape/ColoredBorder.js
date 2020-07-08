import styled from 'styled-components/macro';

const ColoredBorder = styled.div`
  align-items: center;
  background: ${props => props.color};
  border-radius: 50%;
  box-shadow: inset 0px -10px 5px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 16rem;
  width: 16rem;
`;

export default ColoredBorder;

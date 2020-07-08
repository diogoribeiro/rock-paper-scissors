import styled from 'styled-components/macro';

const SelectionCopy = styled.span`
  color: hsl(0, 0%, 100%);
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
    margin-top: 0;
  }
`;

export default SelectionCopy;

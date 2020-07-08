import styled from 'styled-components/macro';

const Selection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export default Selection;

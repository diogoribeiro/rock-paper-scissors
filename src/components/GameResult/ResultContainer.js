import styled from 'styled-components/macro';

const ResultContainer = styled.div`
  display: ${({ desktop }) => (desktop ? 'none' : 'flex')};
  flex-direction: column;

  @media (min-width: 768px) {
    display: ${({ desktop }) => (desktop ? 'flex' : 'none')};
    flex-direction: column;
  }
`;

export default ResultContainer;

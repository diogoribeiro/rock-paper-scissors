import styled from 'styled-components/macro';

import selectorBg from 'assets/bg-triangle.svg';

const SelectorContainer = styled.div`
  background: ${() => `url(${selectorBg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 32rem 24rem;
  height: 24rem;
  padding: 5rem;
  position: relative;
  width: 32rem;

  @media (min-width: 768px) {
    height: 42rem;
    width: 55rem;
  }
`;

export default SelectorContainer;

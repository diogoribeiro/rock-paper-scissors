import styled from 'styled-components/macro';
import Shape from 'components/Shape';

const ResultShape = styled(Shape)`
  box-shadow: ${({ winner }) =>
    winner
      ? `0px 0px 5px 20px rgba(255, 255, 255, 0.05),
        0px 0px 5px 60px rgba(255, 255, 255, 0.05),
        0px 0px 5px 100px rgba(255, 255, 255, 0.05)`
      : 'none'};
  z-index: ${({ winner }) => (winner ? -1 : 'auto')};

  @media (min-width: 600px) {
    box-shadow: ${({ winner }) =>
      winner
        ? `0px 0px 5px 40px rgba(255, 255, 255, 0.05),
          0px 0px 5px 100px rgba(255, 255, 255, 0.05),
          0px 0px 5px 180px rgba(255, 255, 255, 0.05)`
        : 'none'};
  }

  @media (min-width: 600px) and (max-width: 991px) {
    height: 24rem;
    width: 24rem;
  }

  @media (min-width: 991px) {
    height: 32rem;
    width: 32rem;
  }
`;

export default ResultShape;

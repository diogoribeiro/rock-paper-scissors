import styled from 'styled-components/macro';

import Shape from 'components/Shape';

const ShapeIcon = styled(Shape) `
  position: absolute;

  @media (min-width: 768px) {
    height: 25rem;
    width: 25rem;
  }
`;

export default ShapeIcon;
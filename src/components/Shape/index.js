import React from 'react';
import PropTypes from 'prop-types';

import ColoredBorder from 'components/Shape/ColoredBorder';
import InnerCircle from 'components/Shape/InnerCircle';
import ShapeImage from 'components/Shape/ShapeImage';

import { shape } from 'utils/propTypes';

function Shape({ className, shape, onClick }) {
  const { icon, mainColor, type } = shape;

  return (
    <ColoredBorder className={className} color={mainColor} onClick={() => onClick(shape)}>
      <InnerCircle>
        <ShapeImage src={icon} alt={type} />
      </InnerCircle>
    </ColoredBorder>
  );
}

Shape.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  shape: shape.isRequired,
};

Shape.defaultProps = {
  className: undefined,
};

export default Shape;

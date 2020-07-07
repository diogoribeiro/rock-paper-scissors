import React from 'react';

import ColoredBorder from 'components/Shape/ColoredBorder';
import InnerCircle from 'components/Shape/InnerCircle';
import ShapeImage from 'components/Shape/ShapeImage';

function Shape({ className, shape, onClick }) {
  const {
    icon,
    mainColor,
    type,
  } = shape;

  return (
    <ColoredBorder className={className} color={mainColor} onClick={() => onClick(shape)}>
      <InnerCircle>
        <ShapeImage src={icon} alt={type} />
      </InnerCircle>
    </ColoredBorder>
  );
}

export default Shape;

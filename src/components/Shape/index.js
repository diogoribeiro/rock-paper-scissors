import React from 'react';

function Shape({ shape }) {
  const {
    icon,
    mainColor,
    resultAgainsOponents,
    type,
  } = shape;

  return (
    <div>
      <img src={icon} alt={type} />
      <span>{ type }</span>
      <span>{ mainColor }</span>
    </div>
  );
}

export default Shape;

import React from 'react';
import { connect } from 'react-redux'

import Shape from 'components/Shape';

function mapStateToProps(state) {
  return {
    shapes: state.shapes,
  };
}

function Game({ shapes }) {
  if (!shapes) return 'Loading...';

  const toRender = Object.keys(shapes).map((shapeName) => {
    const shape = shapes[shapeName];

    return <Shape key={shape.type} shape={shape} />;
  });

  return (
    <div>
      { toRender }
    </div>
  );
}

export default connect(mapStateToProps)(Game);

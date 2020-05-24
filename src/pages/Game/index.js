import React from 'react';
import { connect } from 'react-redux'

import ShapeSelector from 'components/ShapeSelector';

function mapStateToProps(state) {
  return {
    shapes: state.shapes,
  };
}

function Game({ shapes }) {
  if (!shapes) return 'Loading...';

  return (
    <div>
      <ShapeSelector shapes={shapes} onClick={ console.log }/>
    </div>
  );
}

export default connect(mapStateToProps)(Game);

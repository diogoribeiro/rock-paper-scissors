import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/macro';

const BoardContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
  max-height: 1000px;
`;

function Board({ children }) {
  return <BoardContainer>{children}</BoardContainer>;
}

Board.propTypes = {
  children: PropTypes.node,
};

Board.defaultProps = {
  children: undefined,
};

export default Board;

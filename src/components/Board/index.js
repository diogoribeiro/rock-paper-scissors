import React from 'react';
import styled from 'styled-components/macro';

const BoardContainer = styled.div `
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


function Board({ children }) {
  return (
    <BoardContainer>
      { children }
    </BoardContainer>
  );
}

export default Board;

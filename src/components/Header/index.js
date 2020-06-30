import React from 'react';
import styled from 'styled-components/macro';

const HeaderContainer = styled.div `
  align-items: center;
  border: 2px solid hsl(217, 16%, 45%);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  width: 500px;
  padding: 1.5rem 2rem;
`;

const GameTitle = styled.div `
  color: hsl(0, 0%, 100%);
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  font-weight: bold;
  line-height: 0.8;
`;

const ScoreContainer = styled.div `
  align-items: center;
  background: hsl(0, 0%, 100%);
  border-radius: 5px;
  color: hsl(229, 25%, 31%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0;
  width: 12rem;
`;

const ScoreTitle = styled.span `
  font-weight: 2rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
`;

const Score = styled.span `
  font-size: 5rem;
  font-weight: bold;
`;


function Board({ score = 0 }) {
  return (
    <HeaderContainer>
      <GameTitle>
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </GameTitle>
      <ScoreContainer>
        <ScoreTitle>SCORE</ScoreTitle>
        <Score>{score}</Score>
      </ScoreContainer>
    </HeaderContainer>
  );
}

export default Board;

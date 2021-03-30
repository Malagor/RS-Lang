import styled, { css, keyframes } from 'styled-components/macro';
import {
  COLOR_LAYOUT_BACKGROUND,
  COLOR_LAYOUT_BLUE,
  COLOR_LAYOUT_ORANGE,
  COLOR_LAYOUT_WHITE,
  COLOR_LAYOUT_YELLOW,
} from 'appConstants/colors';
import { Breakpoints } from '@material-ui/core/styles/createBreakpoints';

const rightKeyframes = keyframes`
  0% {
    outline: none;
  }
  50% {
    outline: 10px solid ${COLOR_LAYOUT_BACKGROUND};
  }
  100% {
    outline: none;
  }
`;

const wrongKeyframes = keyframes`
  0% {
    outline: none;
  }
  50% {
    outline: 10px solid ${COLOR_LAYOUT_ORANGE};
  }
  100% {
    outline: none;
  }
`;

const rightAnimation = (animationTime: number) => css`
  ${rightKeyframes} ${animationTime / 3000}s linear 3 alternate;
`;

const wrongAnimation = (animationTime: number) => css`
  ${wrongKeyframes} ${animationTime / 3000}s linear 3 alternate;
`;

const chooseAnimation = (
  id: string,
  rightId: string,
  wrongId: string,
  animationTime: number
) => {
  if (id === rightId) {
    return rightAnimation(animationTime);
  }
  if (id === wrongId) {
    return wrongAnimation(animationTime);
  }
  return 'none';
};

export const GameContainer = styled.div<{ breakpoints: Breakpoints }>`
  position: relative;
  display: grid;
  grid-gap: 20px;
  align-content: center;
  justify-content: stretch;
  min-height: calc(100vh - 84px);
  padding: 20px;
  background: linear-gradient(180deg, #5b3085 0%, #b7498a 100%);

  ${(props) => props.breakpoints.down('xs')} {
    min-height: calc(100vh - 76px);
  }
`;

export const Dashboard = styled.div`
  display: grid;
  grid-template-columns: auto 100px auto;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  color: ${COLOR_LAYOUT_BACKGROUND};
`;

export const AnswerStats = styled.p<{ breakpoints: Breakpoints }>`
  margin: 0;
  padding: 0;
  font-size: 24px;
  line-height: 24px;

  ${(props) => props.breakpoints.down('sm')} {
    font-size: 22px;
    line-height: 22px;
  }

  ${(props) => props.breakpoints.down('xs')} {
    font-size: 20px;
    line-height: 20px;
  }
`;

export const WrongWord = styled.span`
  color: ${COLOR_LAYOUT_ORANGE};
`;

export const RightWord = styled.span`
  color: ${COLOR_LAYOUT_YELLOW};
`;

export const InitialCountdownContainer = styled.div<{ gameIsStarted: boolean }>`
  z-index: 10;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${({ gameIsStarted }) => (gameIsStarted ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #5b3085 0%, #b7498a 100%);
`;

export const CountdownContainer = styled.div<{
  gameIsStarted: boolean;
  breakpoints: Breakpoints;
}>`
  grid-column: 2;
  display: ${({ gameIsStarted }) => (gameIsStarted ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  ${(props) => props.breakpoints.down('sm')} {
    div {
      font-size: 28px;
    }
  }

  ${(props) => props.breakpoints.down('xs')} {
    div {
      font-size: 22px;
    }
  }
`;

export const GameField = styled.div<{ breakpoints: Breakpoints }>`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, auto);
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;

  ${(props) => props.breakpoints.down('md')} {
    grid-template-columns: repeat(3, 200px);
  }

  ${(props) => props.breakpoints.down('sm')} {
    grid-template-columns: repeat(3, 160px);
  }

  ${(props) => props.breakpoints.down('xs')} {
    grid-gap: 10px;
    grid-template-columns: repeat(2, 140px);
  }
`;

export const WordImageContainer = styled.div<{
  number: number;
}>`
  position: relative;

  &::before {
    content: '${({ number }) => number.toString()}';
    position: absolute;
    bottom: 12px;
    left: 8px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    background-color: ${COLOR_LAYOUT_BLUE};
    color: ${COLOR_LAYOUT_WHITE};
    border-radius: 50%;
  }
`;

export const WordImage = styled.img<{
  id: string;
  rightId: string;
  wrongId: string;
  animationTime: number;
}>`
  max-width: 100%;
  max-height: 19vh;
  overflow: hidden;
  animation: ${({ id, rightId, wrongId, animationTime }) =>
    chooseAnimation(id, rightId, wrongId, animationTime)};
`;

export const QuizWordContainer = styled.div<{ breakpoints: Breakpoints }>`
  grid-row: 2;
  grid-column: 2;
  color: ${COLOR_LAYOUT_BACKGROUND};
  font-size: 2rem;

  ${(props) => props.breakpoints.down('sm')} {
    font-size: 1.6rem;
  }

  ${(props) => props.breakpoints.down('xs')} {
    grid-row: 3;
    grid-column: 1 / span 2;
  }
`;

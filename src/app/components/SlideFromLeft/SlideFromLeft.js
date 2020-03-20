import React from 'react';
import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  0% {
    transform: translateX(-50%);
    opacity: 0;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;
const Animate = styled.main`animation: ${appear} 0.5s linear;`;

const SlideFromLeft = ({ children }) => {
	return <Animate>{children}</Animate>;
};

export default SlideFromLeft;

import * as React from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
	speed?: string;
	height?: string;
}

const AnimateGradient = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;

const Speed = (props: Props) => props.speed || '15s';

const BackgroundWrapper = styled.div<Props>`
	height: ${props => props.height || '500px' };
  width: 100%;

	background: -ms-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background: -moz-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background: -o-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background: -webkit-linear-gradient(
		-45deg,
		#ee7752,
		#e73c7e,
		#23a6d5,
		#23d5ab
	);
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;

	-webkit-animation: ${AnimateGradient} ${Speed} ease infinite;
	-ms-animation: ${AnimateGradient} ${Speed} ease infinite;
	-moz-animation: ${AnimateGradient} ${Speed} ease infinite;
	-o-animation: ${AnimateGradient} ${Speed} ease infinite;
	animation: ${AnimateGradient} ${Speed} ease infinite;
`;

const AnimatedBackground = (props: Props) => {
	return <BackgroundWrapper height={props.height} speed={props.speed} />;
};

export default AnimatedBackground;

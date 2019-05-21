import * as React from 'react';
import styled, { keyframes, css } from 'styled-components';
import PropTypes from 'prop-types';

interface Props {
	isMobile?: boolean;
}

const AnimateGradient = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;

const SplashWrapper = styled.h1<Props>`
	font-family: AmaticSC, sans-serif;
	font-size: 6rem;
	font-weight: 300;
	text-align: center;

	background: -ms-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background: -moz-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background: -o-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background: -webkit-linear-gradient( -45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;

	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;

	-webkit-animation: ${AnimateGradient} 5s ease infinite;
	-ms-animation: ${AnimateGradient} 5s ease infinite;
	-moz-animation: ${AnimateGradient} 5s ease infinite;
	-o-animation: ${AnimateGradient} 5s ease infinite;
	animation: ${AnimateGradient} 5s ease infinite;
	${props => props.isMobile &&
		css`
			font-size: 4rem;
		`}
`;

const Splash = (props: Props) => {
	const { isMobile } = props;
	console.log(isMobile);
	return (
		<>
			<SplashWrapper isMobile={isMobile}>My name is Gemma, I make things. I&#39;m a Web Dev by day and a DIY
      electronics and wearables enthusiast by night.</SplashWrapper>
		</>
	);
};

Splash.propTypes = {
	isMobile: PropTypes.bool
};

export default Splash;

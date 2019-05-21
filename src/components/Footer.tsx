import * as React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
	background: -webkit-linear-gradient(
		-45deg,
		#ee7752,
		#e73c7e,
		#23a6d5,
		#23d5ab
	);
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	text-align: center;
	color: white;
	padding: 0;
`;

const Footer = () => {
	return (
		<FooterWrapper>
			<p>Handcrafted by me with &#9829; and React in 2019</p>
		</FooterWrapper>
	);
};

export default Footer;

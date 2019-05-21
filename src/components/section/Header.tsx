import * as React from 'react';
import styled from 'styled-components';

interface Props {
	title: string;
	icon: string;
}
const SectionHeaderWrapper = styled.div`
	display: grid;
`;

const Row = styled.h3`
	margin: 0;
	font-weight: 300;
	font-size: 3rem;
	font-family: AmaticSC, sans-serif;
	&:after {
		content: ' ';
		display: block;
		border-bottom: 1px solid;
	}
`;

const Icon = styled.img`
	padding: 0 15px 0 0;
	width: 25px;
`;

const SectionHeader = (props: Props) => {
	const { title, icon } = props;
	return (
		<SectionHeaderWrapper>
			<Row>
				<Icon src={icon} alt="title icon" />
				{title}
			</Row>
		</SectionHeaderWrapper>
	);
};

export default SectionHeader;
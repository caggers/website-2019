import * as React from 'react';
import styled from 'styled-components';
import { DataProps } from '../util/interfaces';

interface Props {
	data: DataProps;
}

const Wrapper = styled.div`
	margin: auto;
	display: grid;
	grid-template-rows: 1.3fr 1fr 1fr;
	list-style-type: none;
`;

const Icon = styled.img`
	height: 50px;
	width: 50px;
	margin: 0 auto;
`;

const Header = styled.h3`
	font-family: AmaticSC, sans-serif;
	font-size: 2rem;
	margin: 0 auto;
`;

const Text = styled.p`
	margin: 0 auto;
`;

const SubTitle = styled.h4`
	font-family: AmaticSC, sans-serif;
	font-size: 1.75rem;
	color: #6a86fe;
`;

const SkillsColumn = (props: Props) => {
	const { title, icon, subtitle, text, skills } = props.data;

	return (
		<Wrapper>
			<Icon src={icon} />
			<Header>{title} </Header>
			<Text>{text}</Text>
			<SubTitle>{subtitle}</SubTitle>
			{skills.map((item, i) => (
				<li key={i}>{item}</li>
			))}
		</Wrapper>
	);
};

export default SkillsColumn;

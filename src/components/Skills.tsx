import * as React from 'react';
import styled, { css } from 'styled-components';

import SkillsColumn from './SkillsColumn';
import { skillsArray } from '../util/data';

interface Props {
	isMobile: boolean;
}

const SkillsWidget = styled.div<Props>`
	background-color: white;
	border-radius: 10px;
	border: 0.5px solid #dcdcdc;
	display: grid;
	grid-gap: 2.5%;
	grid-auto-columns: 1fr 1fr 1fr;
	padding: 10% 5%;

	${props =>
		props.isMobile &&
		css`
			padding-bottom: 75%;
		`}
`;

const SkillsHeader = styled.h2`
	font-family: AmaticSC, sans-serif;
	color: white;
	margin: 5% auto;
	font-size: 3rem;
`;

const SkillsSectionOne = styled.div<Props>`
	grid-column: 1 / 1;
	grid-row: 1 / 1;
	${props =>
		props.isMobile &&
		css`
			grid-column: 1 / 1;
			grid-row: 1 / 1;
		`}
`;

const SkillsSectionTwo = styled.div<Props>`
	grid-column: 2 / 2;
	grid-row: 1 / 1;
	${props =>
		props.isMobile &&
		css`
			grid-column: 1 / 1;
			grid-row: 2 / 2;
			border-top: 0.5px solid #dcdcdc;
		`}
`;

const SkillsSectionThree = styled.div<Props>`
	grid-column: 3 / 3;
	grid-row: 1 / 1;
	${props =>
		props.isMobile &&
		css`
			grid-column: 1 / 1;
			grid-row: 3 / 3;
			border-top: 0.5px solid #dcdcdc;
		`}
`;

const Skills = (props: Props) => {
	const { isMobile } = props;

	return (
		<>
			<SkillsHeader className="skills-header">So What Do I Do?</SkillsHeader>
			<SkillsWidget className="skills-widget" isMobile={isMobile}>
				<SkillsSectionOne className="skills-section-one" isMobile={isMobile}>
					<SkillsColumn data={skillsArray[0]} />
				</SkillsSectionOne>
				<SkillsSectionTwo className="skills-section-two" isMobile={isMobile}>
					<SkillsColumn data={skillsArray[1]} />
				</SkillsSectionTwo>
				<SkillsSectionThree
					className="skills-section-three"
					isMobile={isMobile}
				>
					<SkillsColumn data={skillsArray[2]} />
				</SkillsSectionThree>
			</SkillsWidget>
		</>
	);
};

export default Skills;

import * as React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { profilePic } from '../images';
import Header from './section/Header';

interface DataProps {
	title: string;
	subtitle?: string;
	text: string | Array<string>;
	icon: string;
	blogs?: Array<string>;
	isListing?: boolean;
	fullSize?: boolean;
}

interface Props {
	isMobile?: boolean;
	data?: DataProps;
}

const ProfileWrapper = styled.div`
	display: grid;
	grid-gap: 25px;
`;

const ProfilePic = styled.img<Props>`
	width: 250px;
	grid-column: 1 / 1;
	grid-row: 1 / 4;
	${props =>
		props.isMobile &&
		css`
			grid-column: 1 / 1;
			grid-row: 1 / 2;
			width: 60%;
			margin: auto;
		`}
`;
const ProfileTitle = styled.div<Props>`
	grid-column: 2 / 6;
	grid-row: 1 / 1;
	text-align: left;

	${props =>
		props.isMobile &&
		css`
			grid-column: 1 / 1;
			grid-row: 3 / 4;
		`}
`;

const ProfileContent = styled.div<Props>`
	grid-column: 2 / 6;
	grid-row: 2 / 4;
	text-align: left;

	${props =>
		props.isMobile &&
		css`
			grid-column: 1 / 1;
			grid-row: 5 / 6;
		`}
`;

const Subtitle = styled.div`
	padding-top: 15px;
`;

const Profile = (props: Props) => {
	const { title, subtitle, icon, text } = props.data;
	const { isMobile } = props;

	return (
		<ProfileWrapper>
			<ProfilePic isMobile={isMobile} src={profilePic} alt="profile picture" />
			<ProfileTitle isMobile={isMobile}>
				<Header title={title} icon={icon} />
				<Subtitle>{subtitle}</Subtitle>
			</ProfileTitle>
			<ProfileContent isMobile={isMobile}>
				{text}
			</ProfileContent>
		</ProfileWrapper>
	);
};

Profile.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		subtitle: PropTypes.string,
		text: PropTypes.string,
		icon: PropTypes.string,
		blogs: PropTypes.arrayOf(PropTypes.string)
	}),
	isMobile: PropTypes.bool
};

export default Profile;

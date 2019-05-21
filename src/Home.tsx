import * as React from 'react';
import styled from 'styled-components';

import { sectionsArray } from './util/data';
import { useWindowSize } from './hooks/Window';

import {
	AnimatedBG,
  Experience,
  Footer,
	Profile,
	Skills,
	Social,
	Splash
} from './components';

const AppWrapper = styled.div`
	text-align: center;
	display: grid;
	grid-gap: 25px;
`;

const SplashWrapper = styled.div`
	grid-column: 1 / 1;
	grid-row: 1 / 1;
	width: 80%;
	margin: 5rem auto;
`;

const ProfileWrapper = styled.div`
	grid-column: 1 / 1;
	grid-row: 2 / 2;
	width: 80%;
	margin: auto;
`;

const ExperienceWrapper = styled.div`
	grid-column: 1 / 1;
	grid-row: 3 / 3;
	padding-top: 5%;
	width: 80%;
	margin: auto;
`;

const AnimationWrapper = styled.div`
	grid-column: 1 / 1;
	grid-row: 4 / 4;
`;

const SkillsWrapper = styled.div`
	grid-column: 1 / 1;
	grid-row: 4 / 5;
	width: 80%;
	margin: auto;
`;

const SocialWrapper = styled.div`
	grid-column: 1 / 1;
	grid-row: 5 / 5;
`;

const Home = () => {
	const window = useWindowSize();
	const [isMobile, setIsMobile] = React.useState();

	React.useEffect(() => {
		setIsMobile(window.width <= 780);
	}, [window.width]);

	return (
		<AppWrapper>
			<SplashWrapper>
				<Splash isMobile={isMobile} />
			</SplashWrapper>
			<ProfileWrapper>
				<Profile data={sectionsArray[0]} isMobile={isMobile} />
			</ProfileWrapper>
			<ExperienceWrapper>
				<Experience data={sectionsArray[1]} isMobile={isMobile} />
			</ExperienceWrapper>
			<AnimationWrapper>
				<AnimatedBG />
			</AnimationWrapper>
			<SkillsWrapper>
				<Skills isMobile={isMobile} />
			</SkillsWrapper>
			<SocialWrapper>
				<Social />
			</SocialWrapper>
      <Footer />
		</AppWrapper>
	);
};

export default Home;

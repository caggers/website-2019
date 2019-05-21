import * as React from 'react';
import { useWindowSize } from '../hooks/Window';
import styled from 'styled-components';
import { sectionsArray } from '../util/data';

import Splash from './Splash';
import Profile from './Profile';


const AppWrapper = styled.div`
	text-align: center;
	display: grid;
	grid-gap: 25px;
  width: 80%;
  margin: auto;
`;

const SplashWrapper = styled.div`
	grid-column: 1 / 1;
	grid-row: 1 / 1;
	margin: 5rem 0;
`;

const ProfileWrapper = styled.div`
  grid-column: 1 / 1;
  grid-row: 2 / 2;
  width: 80%;
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
		</AppWrapper>
	);
};

export default Home;

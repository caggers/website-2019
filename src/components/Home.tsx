import * as React from 'react';
import { useWindowSize } from '../hooks/Window';
import Splash from './Splash'

const Home= () => {
	const window = useWindowSize();
	const [ isMobile, setIsMobile ] = React.useState();

	React.useEffect(() => {
		setIsMobile(window.width <= 780 )
	}, [window.width])

	return <div><Splash isMobile={isMobile} /></div>;
};

export default Home;

import * as React from 'react';
import styled from 'styled-components';
import {linkedin, twitter, github} from '../images/icon';

const SocialIcon = styled.img`
  height: 25px;
  width: 25px;
  padding: 20px;
  margin: 0 25px;
  background: #6A86FE;
  border-radius: 5px;
  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`

const Social = () => (
  <>
    <a href="https://twitter.com/caggers">
      <SocialIcon src={twitter} />
    </a>
    <a href="https://github.com/caggers">
      <SocialIcon src={github}/>
    </a>
    <a href="https://www.linkedin.com/in/gemmacagney/">
      <SocialIcon src={linkedin}/>
    </a>
  </>
);
   
export default Social;

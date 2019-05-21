import * as React from 'react';
import styled, {css} from 'styled-components';

import SectionHeader from './section/Header';
import { coderDojo } from '../images'
import { blogsArray } from '../util/data';
import { DataProps } from '../util/interfaces'

interface Props {
  isMobile?: boolean,
  title?: string,
  icon?: string,
  text?: string | Array<string>
  data?: DataProps;
}

const ExperienceWrapper = styled.div`
  display: grid;
  grid-gap: 20px 20px;
  text-align: left;
`

const ExperienceTitle = styled.div<Props>`
  grid-column: 1 / 3;
  grid-row: 1 / 1;
  
  ${props => props.isMobile && css`
    grid-column: 1 / 1;
    grid-row: 1 / 2;
  `}
`

const ExperienceContent = styled.div<Props>`
  grid-column: 1 / 3;
  grid-row: 2 / 4;
  
  ${props => props.isMobile && css`
    grid-column: 1 / 1;
    grid-row: 3 / 4;
  `}
`

const CoderDojoImg = styled.img`
  width: 75%;
  grid-column: 1 / 3;
  grid-row: 5 / 6;
  margin: auto;
`

const ExperienceBlogs = styled.div`
  li {
    list-style: none;
    text-decoration: none;
    font-family: Josefin Slab;
    padding-top: 5px;
    a, a:active, a:hover, a:visited {
      color: #6A86FE;
    }
    a:active, a:hover {
      color: #B721FF;
    }
  }
`

const Experience = ( props: Props ) => {
  const { title, icon, text } = props.data;
  const {  isMobile } = props;
  return (
    <ExperienceWrapper>
      <ExperienceTitle isMobile={isMobile}>
        <SectionHeader 
          title={title} 
          icon={icon}
        />
      </ExperienceTitle>
      <ExperienceContent isMobile={isMobile}>
        {text.map((item: string, i:number) =>
          <p key={i}>{item}</p>
        )}
        <ExperienceBlogs>
          {blogsArray.map((item, i) => 
            <li key={i}>
              <a href={item.href}>{item.title}</a>
            </li>
          )}
        </ExperienceBlogs>
      </ExperienceContent>
      <CoderDojoImg 
        src={coderDojo} 
        alt="Me on stage" 
      />
    </ExperienceWrapper>
  );
}

export default Experience
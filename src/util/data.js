/* eslint-disable */
import { spaceman, telescope, rocket, twinkle, halfmoon, ufo } from '../images/icon/index';

const profile = {
  title: 'Profile',
  subtitle: 'Front End Software Developer looking for new opportunities in Vancouver, Canada. My area of expertise lies in Javascript and React but I have passion for interface technologies beyond the browser.',
  text: `
        I am a maker at heart who is happiest covered head to toe in glitter, paint and LEDs.
        The most important thing for me is to work with smart and creative people who inspire me. 
        I genuinely enjoy peer programming and code reviews as part of a healthy and happy team.
        A day in my perfect role would have lots of opportunities for collaboration with two way learning and teaching.  `,
  icon: spaceman,
  isListing: false,
  fullSize: true,
};

const experience = {
  title: 'Experience',
  text: [
    `I’ve had an unconventional journey; I have an undergraduate degree in Fine Art and Art History and an MSc. in Computer Science.`,
    `Until recently I was contracted as a Front End Developer with LexisNexis in Dublin. As the first UI Dev to be hired into a team working on a complete product overhaul I established the React-based architecture, testing protocol and styling framework in addition to implementing a state management solution using the new React Hooks api. I ran frequent feedback sessions and group merge requests to keep the rest of my team up to date on my progress despite their unfamiliarity with React.`,
    `From 2016 - 2018 I was working as a Software Engineer at Accenture’s new state of the art Research and Development centre in Grand Canal Dock. It's a role that required me to be highly collaborative and innovative. Although I technically lived in the Front End Guild, every day was different and I found myself working with everything from 3D printing to Voice UI to IOT to Wearables.`,
    `It was through Accenture that I started mentoring with Coder Dojo. I am incredibly proud of my work with the Dojo; two ninjas I mentored went on to win European Digital Girl of the year in 2017 and in May 2018 I spoke on a panel at Coolest Projects.`,
    `I’m passionate about technology and reaching out to the next generation of women in Tech. I’ve written some blogs about my experiences so far  which you can read below.`
  ],
  icon: rocket
};

const networkBlog = {
  href: 'https://coderdojo.com/news/2017/05/30/building-a-network-to-support-female-mentors-and-ninjas/',
  title: 'Building a Network to Support Female Mentors and Ninjas',
  id:'30/05/2018'
}
const environmentBlog = {
  href: 'https://coderdojo.com/news/2017/07/01/creating-an-environment-to-support-female-ninjas/',
  title: 'Creating an Environment to Support Female Ninjas',
  id:'01/07/2017'
}
const creativityBlog = {
  href: 'https://www.accenture.com/ie-en/blogs/blogs-inspiring-childlike-creativity',
  title: 'Inspiring Childlike Creativity',
  id:'01/01/2017'
}
const wwcBlog = {
  href: 'https://www.womenwhocode.com/blog/dotjs-2017',
  title: 'Vising dotJS 2017 in Paris with Women Who Code',
  id:'14/12/2017'
}

export const blogsArray = [creativityBlog, networkBlog, environmentBlog, wwcBlog];

const devObject = {
  title: 'Development',
  subtitle: 'Dev Tools',
  text: `I'm interested in how things work and implementing UIs whether they're screen based or otherwise.`,
  icon: twinkle,
  skills: [ 'JavaScript', 'React', 'ECMAScript', 'TypeScript', 'Unit & Integration Testing', 'Jest', 'Cypress',
            'React Testing Library', 'Redux', 'State Management with React',
            'HTML5', 'CSS/SCSS', 'Bootstrap', 'Git', 'Continuous Integration', 
            'VSCode', 'IntelliJ']
}

const designObject = {
  title: 'Design',
  subtitle: 'Design Tools',
  text: `I work primarily in the Front End because I enjoy watching ideas in my head come to life visually. `,
  icon: telescope,
  skills: [
    'Sketch', 'Illustrator', 'Premiere Pro', 'Final Cut', 'Photoshop', 
    'Web Design', 'User Experience Design', 'User Interface Design', 'Voice Interface Design',
    'Balsamiq', 'InVision', '3D Modelling', 'Typography'
  ]
};

const otherObject = {
  title: 'And more...',
  text: `You never know what obscure skill is going to come in handy in the ever-changing world of Tech!`,
  subtitle: 'Other Tools',
  icon: ufo,
  skills: [
    'Voice UI', 'Agile', 'SCRUM', 'Critical Thinking', 'Problem Solving', 'Copywriting/Written Skills', 'Design Thinking',
    'Raspberry Pi', 'Arduino', 'Adafruit', 'Sensor Technologies', 'IOT', '3D Printing', 'TCP/IP Networks', 'Fine Art', 'Hand Lettering'
  ]
};

export const skillsArray = [devObject, designObject, otherObject];

export const sectionsArray = [profile, experience];
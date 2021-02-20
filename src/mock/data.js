import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Shreyesh Patel', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Shreyesh Patel',
  subtitle: 'Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'pic.jpg',
  paragraphOne: 'I am a student at Milwaukee School of Engineering. I will be graduating in May of 2021 with a Bachelors of Science in Software Engineering and a minor in Mathematics.',
  paragraphTwo: 'Programming and weightlifting are my passion. I push myself to learn and grow as much as possible!',
  paragraphThree: ' ',
  resume: {}, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'sudoku.jpeg',
    title: 'Sudoku Generator & Solver',
    info: 'This will create a valid Sudoku board given data received from an API endpoint. The valid board will then be solved using the backtracking algorithm in O(n^m) time, where n is the number of possibilities for a square and m is the number of black spaces.',
    info2: 'I learned about consuming an API in Python using requests and implementing the backtracking algorithm.',
    repo: 'https://github.com/patelsd/Sudoku', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'platformer.png',
    title: 'Platformer',
    info: 'Designing a platformer game using PyGame.',
    info2: '',
    repo: 'https://github.com/patelsd/Platformer', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to get in touch?',
  btn: '',
  email: 'shreyeshpatel@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shreyesh-patel/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/patelsd',
    },
  ],
};
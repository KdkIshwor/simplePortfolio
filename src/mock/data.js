import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ishwor Khadka', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.PNG',
    title: 'Crwn-Clothing',
    info: 'An ecommerce web app demo for clothing and footwears. Secured with user authentication and stripe payment methods.',
    info2: '',
    url: '',
    repo: 'https://github.com/KdkIshwor/crwn-clothing', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.PNG',
    title: 'Nepalese Heart Photography',
    info: 'A wedding planner website where you can find best packages for wedding photography and videography.',
    info2: '',
    url: 'https://nepaleseheartphotography.netlify.app/',
    repo: 'https://github.com/KdkIshwor/nepaleseHeartPhotography', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.PNG',
    title: 'Blogging in Nepal',
    info: 'Blogging In Nepal is a group of Blogger in Nepal who want to be blogger in comming days writing their best stories.',
    info2: '',
    url: 'https://blogging-in-nepal.netlify.app/',
    repo: 'https://github.com/KdkIshwor/bloggingWebsite', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-4.PNG',
    title: 'Yelpcamp',
    info: 'A website where you can find and upload the campgrounds across the world.',
    info2: '',
    url: 'https://afternoon-forest-17255.herokuapp.com/campgrounds',
    repo: 'https://github.com/KdkIshwor/YelpCamp-', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/IshworK10581503',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/KdkIshwor',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

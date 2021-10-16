/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Himanshu R Agarwal',
  title: "Hi all, I'm Himanshu",
  subTitle: emoji(
    'A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/1iv1sG6kqiyrfLBeUp1muGL7R-k0tesT-/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/himanshuagarwal12',
  linkedin: 'https://www.linkedin.com/in/himanshu-ramesh-agarwal-360850175',
  gmail: 'himanshu.tech1221@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=100044567773185',
  medium: 'https://medium.com/@himanshu.tech1221',
  stackoverflow: 'https://stackoverflow.com/users/13040419/himanshu-agarwal',
  instagram:'https://www.instagram.com/hrsa1221/',
  twitter:'https://twitter.com/Himansh96292976',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop Back End for your web and mobile applications'
    ),
    emoji('⚡ Enjoys Data Analysis'),
    emoji(
      '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'c',
      fontAwesomeClassname: 'fab fa-cuttlefish',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Vellore Institute Of Technology',
      logo: require('./assets/images/vitLogo.jpg'),
      subHeader: 'Bachelor of Technology in Computer Science',
      duration: 'June 2018 - ',
      desc:
        'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
      descBullets: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'BackEnd', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Frontend/Design',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '70%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    
    {
      role: 'BackEnd Developer',
      company: 'Algo8 AI',
      companylogo: require('./assets/images/prithviLogo.jpg'),
      date: 'Nov 2020 – Present',
      desc:
        'I am a part of the development team and responsible for handling the backend of the product.',
    },
    {
      role: 'Software Engineer',
      company: 'Illuminify Tech',
      companylogo: require('./assets/images/ITLogo.jpg'),
      date: 'January 2020 – October 2020',
      desc:
        'I was working as a python programmer and was a part of the team which developed a product for aiding the blind people.',
    },
    {
      role: 'Technology Research Intern',
      company: 'Dexterity Global Group',
      companylogo: require('./assets/images/DGLogo.jpg'),
      date: 'May 2020 – June 2020',
      desc:
        'I was working as a web developer and was responsible for suggesting some technical enhancements on their educational site.',
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'himanshuagarwal12', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some  projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/climberLogo.png'),
      link: 'https://www.mycaptain.in/about/',
    },
    {
      image: require('./assets/images/ecellLogo.png'),
      link: 'https://ecelldtu.in/',
    },
    {
      image: require('./assets/images/IMUNLogo.png'),
      link: 'https://www.internationalmun.org/',
    },
    
    
  ],
  display: true, // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements,Certifications And Projects🏆 '),
  subtitle:
    'Achievements, Certifications and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'OS HACKATHON',
      subtitle:
        'Stood First among 25 teams.',
      image: require('./assets/images/vitLogo.jpg'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing',
        },
      ],
    },
    {
      title: 'Web Development BootCamp',
      subtitle:
        'Completed Certifcation from Udemy for Web Development',
      image: require('./assets/images/WDLogo.jpg'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en',
        },
      ],
    },

    {
      title: 'Data Science Bootcamp',
      subtitle: 'Completed Certifcation from Udemy for Data Science',
      image: require('./assets/images/DSLogo.jpg'),
      footerLink: [
        { name: 'Certification', url: '' },
      ],
    },
    {
      title: 'connecTechh',
      subtitle:
        'Social Media Platform for Developers.',
      image: require('./assets/images/connecTechh.JPG'),
      footerLink: [
        {
          name: 'Visit Site',
          url:
            'https://connectechh.herokuapp.com/',
        },
      ],
    },
    {
      title: 'FarmProShop',
      subtitle:
        'E-Commerce Website for Farming Products',
      image: require('./assets/images/ecomm.JPG'),
      footerLink: [
        {
          name: 'Visit Site',
          url:
            'http://farmproshop.herokuapp.com/',
        },
      ],
    },
    {
      title: 'CampGuide',
      subtitle: 'Camping Place Guide for travellers',
      image: require('./assets/images/CG.JPG'),
      footerLink: [
        { name: 'Visit Site',
         url: 'https://pure-shelf-57291.herokuapp.com/' },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    '',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+91-9003765494',
  emailAddress: 'himanshu.tech1221@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'Himansh96292976', //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};

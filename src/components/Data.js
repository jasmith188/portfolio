export default {
  //Change The Website Template
  name: 'James Smith',

  // Landing Page Name
  landingPageName: 'James Smith',

  // Landing Page Paragraph
  landingPagePara:
    "Hello, my name is James Smith and I have recently recieved a Certificate in Full Stack Coding at the University of Central Florida. There I have learned the fundamentals of different Languages and Applications used in front and back end development. I'm looking forward to contributing to my team's success bycollaboratively creating different projects and applications.",

  // Landing Page Paragraph
  landingPagePara2:
    'Working in the hectic restaurant business for the past 16 yearshas honed my skills in teamwork, time-management and dealing with ambiguity. These skills have allowed me to successfully transition my career from a chef to a Full Stack Developer.',

  // Landing Page Image (replace - root/public/assets/photo.jpg)
  landingPageImage: 'assets/profile.jpeg',

  // Change Projects Here
  projects: [
    {
      id: 1, 
      title: 'infODose', 
      info:
        'This is a collaborative project which gives users information on overdoses by typing a location. Also the user can find a local police station nearby using geo-location. Our goal as a team was to source a very large database and extract information from that.',
      tools:
        'Utilized: HTML, CSS, JavaScript, MySQL, Passport, Bootstrap,large database',
      imageSrc: '/assets/infodosemain.jpg',
      
      demo: 'https://lit-crag-01772.herokuapp.com',
      github: 'https://github.com/jasmith188/infODose-1',
    },
    {
      id: 2, 
      title: 'WeatherToday', 
      info:
        'In this application users want to know the current and 5-day weather for an exact location and retrieve it by typing in city and choosing a country',
      tools: 'Utilized: HTML, CSS, JavaScript, React, Bootstrap, API data',
      imageSrc: '/assets/weathertoday.png',
      
      demo: 'https://jasmith188.github.io/WeatherToday/',
      github: 'https://github.com/jasmith188/WeatherToday',
    },

    {
      id: 3, 
      title: 'Vacation Makers', 
      info:
        'This is an application that allows users to vacation to Florida with a budget. Choose your flight, hotel, restaurant or attraction and add it to your budget for your trip.',
      tools:
        'Utilized: HTML, CSS, Javascript, MongoDB, Express, React, Node.js, Bootstrap, Full MERN Application',
      imageSrc: '/assets/vacationmakers.png',
      
      demo: 'https://the-vacation-makers.herokuapp.com/',
      github: 'https://github.com/jasmith188/VacationMakers',
    },
    // {
    //   id: 4, //DO NOT CHANGE THIS (Please)😅
    //   title: 'Project Four',
    //   imageSrc: 'https://via.placeholder.com/300',
    //   url: 'http://chetanverma.com/',
    // },
    // {
    //   id: 5, //DO NOT CHANGE THIS (Please)😅
    //   title: 'Project Five',
    //   imageSrc: 'https://via.placeholder.com/300',
    //   url: 'http://chetanverma.com/',
    // },
    // {
    //   id: 6, //DO NOT CHANGE THIS (Please)😅
    //   title: 'Project Six',
    //   imageSrc: 'https://via.placeholder.com/300',
    //   url: 'http://chetanverma.com/',
    // },
    // Paste more projects here from the template
  ],
};

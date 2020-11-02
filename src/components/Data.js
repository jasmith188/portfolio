export default {
  name: 'James Smith',

  landingPageName: 'James Smith',

  landingPagePara:
    "Hello, my name is James Smith and I have recently recieved a Certificate in Full Stack Coding at the University of Central Florida. There I have learned the fundamentals of different Languages and Applications used in front and back end development. I'm looking forward to contributing to my team's success by collaboratively creating different projects and applications.",

  landingPagePara2:
    'Working in the hectic restaurant business for the past 16 years has honed my skills in teamwork, time-management and dealing with ambiguity. These skills have allowed me to successfully transition my career from a chef to a Full Stack Developer.',

  landingPageImage: 'assets/profile.jpeg',

  projects: [
    {
      id: 1,
      title: 'Amazon Clone',
      info:
        'This amazon clone uses React and captures a very realistic design and fluidness similar to its real website .',
      tools:
        'HTML, CSS, Javascript, Firebase, Node.js, React Context API',
      imageSrc: '/assets/amazon-clone.png',

      demo: 'https://fir-d4124.web.app/',
      github: 'https://github.com/jasmith188/amazon-clone',
    },
    {
      id: 2,
      title: 'WeatherToday',
      info:
        'In this application users want to know the current and 5-day weather for an exact location and retrieve it by typing in city and choosing a country',
      tools: 'Utilized: HTML, CSS, JavaScript, React, Bootstrap, API data (MOBILE - FRIENDLY)',
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
  ],
};

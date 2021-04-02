export default {
  name: 'James Smith',

  landingPageName: 'James Smith',

  landingPagePara:
    "I have learned the fundamentals of different Languages and Applications used in front and back end development. I'm looking forward to contributing to my team's success by collaboratively creating different projects and applications.",

  landingPagePara2:
    'Working in the hectic restaurant business for the past 15 years has honed my skills in teamwork, time-management and dealing with ambiguity. These skills have allowed me to successfully transition my career from a chef to a Full Stack Developer.',

  landingPageImage: 'assets/profile.jpeg',

  projects: [
    {
      id: 1,
      title: 'Amazon Clone',
      info:
        'This amazon clone uses React and captures a very realistic design and fluidness similar to its real website .',
      tools:
        'Utilized: HTML, CSS, Javascript, Firebase, Node.js, React Context API',
      imageSrc: '../images/portfolio/amazon-clone.png',

      demo: 'https://fir-d4124.web.app/',
      github: 'https://github.com/jasmith188/amazon-clone',
    },
    {
      id: 2,
      title: 'Tide Forecast',
      info:
        'In this application users want to know the current and weather and tide forecast by users geo-location',
      tools:
        'Utilized: HTML, CSS, JavaScript, React and fetching two seperate APIs',
      imageSrc: '../images/portfolio/tide-forecast.png',

      demo: 'https://tide-forecast.netlify.app/',
      github: 'https://github.com/jasmith188/tide-forecast',
    },

    {
      id: 3,
      title: 'Movie Screen',
      info: 'This React Redux App is a recreation of the famous Netflix app',
      tools:
        'Utilized: HTML, CSS, Javascript, React, Firebase Authentication and Database, TMDB API for movie data,',
      imageSrc: '../images/portfolio/movie-screen.png',

      demo: 'https://netfilx-clone-b08c7.web.app/',
      github: 'https://github.com/jasmith188/netflix-react',
    },
    {
      id: 4,
      title: 'COVID-19 Tracker',
      info:
        'Users want to know the current status of COVID-19 cases throughout the world',
      tools:
        'Utilized: HTML, CSS, JavaScript, React, React Hooks, Material UI,',
      imageSrc: '../images/portfolio/covid-19-tracker.png',

      demo: 'https://dreamy-khorana-1fd10a.netlify.app/',
      github: 'https://github.com/jasmith188/covid-19-tracker',
    },
  ],
};

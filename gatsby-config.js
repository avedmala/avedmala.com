module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://avedmala.com/`,
    // Your Name
    name: "Abhinav Vedmala",
    // Main Site Title
    title: `Abhinav Vedmala | CS & Math Student`,
    // Description that goes under your name in main bio
    description: `CS & Math Student @ the University of Maryland`,
    // Optional: Github account URL
    github: `https://github.com/mrswagbhinav`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/abhinav-vedmala/`,
    // Content of the About Me section
    about: `I’m currently a freshman at the University of Maryland pursuing a double major in Computer Science on the Data Science track and Mathematics on the Statistics track. I’m deeply interested in Data Science and looking for learning opportunities in Big Data Analytics and Machine Learning.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: "Spotify Party",
        description: "A music playback syncing service built with Python Flask",
        link: "https://github.com/mrswagbhinav/spotify-party",
      },
      {
        name: "Weather Microservice",
        description:
          "A Weather Microservice implemented using both Firebase serverless functions and an Express JS API",
        link: "https://github.com/mrswagbhinav/weather-microservice",
      },
      {
        name: "URL Shortener",
        description: "Simple URL Shortener built with Node JS and MongoDB",
        link: "https://github.com/mrswagbhinav/url_shortener",
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: "Calculus Tutor",
        description: "Grade Support, October 2018 - May 2020",
        link: "https://gradesupport.org",
      },
      {
        name: "Code Instructor",
        description: "Code Ninjas, June 2019 - March 2020",
        link: "https://codeninjas.com/",
      },
      {
        name: "Research Intern",
        description:
          "Rutgers Discovery Informatics Institute, July 2019 - August 2019",
        link: "https://rdi2.rutgers.edu/",
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: "Languages",
        description: "Java, JavaScript, Python",
      },
      {
        name: "Frameworks",
        description: "Node JS, Express JS, Flask, React Native",
      },
      {
        name: "Technologies",
        description: "Git, Android Studio, Google Firebase, Unity",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};

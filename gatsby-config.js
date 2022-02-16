module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://avedmala.com/`,
    // Your Name
    name: "Abhinav Vedmala",
    // Main Site Title
    title: `Abhinav Vedmala`,
    // Description that goes under your name in main bio
    description: `Computer Science Student at the University of Maryland`,
    // Optional: Github account URL
    github: `https://github.com/avedmala`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/avedmala`,
    // Content of the About Me section
    about: `I’m currently a sophomore at the University of Maryland, pursuing a degree in Computer Science. I have interests in backend development and getting the chance to work on challenging problems.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: "Spotify Party",
        description: "Web application that allows users to login and sync their Spotify music playback in a listening room.",
        link: "https://github.com/avedmala/spotify-party",
      },
      {
        name: "NASA SUITS Augmented Reality Challenge",
        description: "Microsoft Hololens AR system which assists crewmembers with extravehicular activity tasks during a lunar mission.",
        link: "https://github.com/SUITS-2022",
      },
      {
        name: "Weather Microservice",
        description:
          "Microservices implemented using both Firebase serverless functions and an Express JS API.",
        link: "https://github.com/avedmala/weather-microservice",
      },
      {
        name: "URL Shortener",
        description: "Simple URL Shortener built with Node JS and MongoDB",
        link: "https://github.com/avedmala/url_shortener",
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: "Undergraduate Researcher",
        description: "NASA Goddard Space Flight Center, January 2022 - Present",
        link: "https://www.nccs.nasa.gov/",
      },
      {
        name: "Teaching Assistant",
        description: "University of Maryland, September 2021 - Present",
        link: "https://www.cs.umd.edu/",
      },
      {
        name: "Software Engineering Intern",
        description: "Capital One, June 2021 - Present",
        link: "https://www.capitalone.com/",
      },
      {
        name: "Undergraduate Researcher",
        description: "Human-Computer Interaction Lab, February 2021 – June 2021",
        link: "https://hcil.umd.edu/",
      },
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
        description: "Java, Python, JavaScript, C, Kotlin, Ruby, OCaml, Rust, Matlab",
      },
      {
        name: "Frameworks",
        description: "Express JS, Flask, React, React Native",
      },
      {
        name: "Technologies",
        description: "Git, Node JS, Jenkins, Pandas, MongoDB, Android Studio, Google Firebase, Unity",
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
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

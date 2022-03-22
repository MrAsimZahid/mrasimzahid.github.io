/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Asim Zahid",
  title: "Hi all, I'm Asim",
  subTitle: emoji(
    "I can brew up Algorithms✨ with a pinch of math🧮, an ounce of Python, and piles of Data📚 to power your Business📊 applications."
  ),
  resumeLink:
    "",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mrasimzahid",
  linkedin: "https://www.linkedin.com/in/mrasimzahid/",
  gmail: "asimzahid02@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/mrasimzahid",
  medium: "https://mrasimzahid.medium.com/",
  stackoverflow: "https://stackoverflow.com/users/11679697/asim-zahid",
  // Instagram and Twitter are also supported in the links!
  twitter: "https://www.twitter.com/mrasimzahid",
  instagram: "https://www.instagram.com/mrasimzahid/",
  kaggle: "https://www.kaggle.com/asimzahid",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: emoji("What I do 💻"),
  subTitle: "SOFTWARE ENGINEER WITH SPECIALIZATION IN DATA SCIENCE AND ARTIFICIAL INTELLIGENCE",
  skills: [
    emoji(
      "⚡ Perform quantative and qualitative analysis to reveal hidden patterns in the data."
    ),
    emoji("⚡ Performs research and teach machines to view and understand the surroundings."),
    emoji(
      "⚡ Do RPA to automate the boring stuff."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "kaggle",
      fontAwesomeClassname: "fab fa-kaggle"
    },
    {
      skillName: "neo4j",
      fontAwesomeClassname: "fab fa-hubspot"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fab fa-dochub"
    },
    {
      skillName: "AI",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "research",
      fontAwesomeClassname: "fab fa-researchgate"
    },
    {
      skillName: "neural network",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "nosql-database",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "google cloud",
      fontAwesomeClassname: "fas fa-cloud"
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Superior University",
      logo: require("./assets/images/superiorLogo.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2017 - May 2021",
      desc: emoji("Participated in the research of \"3D Soccer ⚽ Ball Trajectory Estimation Using Single Broadcast Camera 📷\" and 2 publication papers are in progress."),
      descBullets: [
        "Google Developer Student Club Lead(GDSC)[Selected among 52 leads out of 5000+ applicants in Pakistan] 2019-2020",
        "AWS Educate cloud Ambassador[selected among 17 in Pakistan and 316 over the globe out of thousands of applicants] 2020-2021",
        "Industry-academia collaborated research based final year project",
        "SOFTEC 2021: AI Competition, Publisher prediction(F1 score: 0.88)",
        "Student Voice Leader(SVL)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Computer Vision",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    
  ],
  displayCodersrank: false //Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Scientist",
      company: "TechnoGenics",
      companylogo: require("./assets/images/technogenics.jpeg"),
      date: "July 2021 – Present",
      desc: "Working on building Security Intelligence",
      descBullets: [
        "Wrote and Deployed django microservice for data ingestions and report building.",
        "Developed cyber threat intelligence platform(CTI/TIP) for the company with multiple data ingestions and pipelines.",
        "Designed and developed algorithms for rules extraction and validation.",
      ]
    },
    {
      role: "Associate AI Researcher",
      company: "Omno AI",
      companylogo: require("./assets/images/omnoai.png"),
      date: "Sep 2020 – Present",
      desc: emoji("3D Soccer ⚽ Ball Trajectory Estimation Using Single Broadcast Camera 📷"),
      descBullets: [
        "We created a complete custom trajectories dataset for the problem.",
        "Build and contributed open source tools.",
        "Two publications are in progress.",
        "Partial Demo: https://youtu.be/HSYKp8hfla4"
      ]
    },
    {
      role: "Data Science Intern",
      company: "Ingenio EC",
      companylogo: require("./assets/images/ingenioec.jpeg"),
      date: "Jun 2020 – Sep 2020",
      desc: "I worked on production ready machine learning, data science and software engineering tasks.",
      descBullets: [
        "Deployed automated social media data pipelines for storing and analyzing and reporting.",
        "Scraped whole country(Ecuador) twitter's data.",
        "Performed \'topic modeling\' on scraped data using AWS comprehend.",
      ]
    },
    {
      role: "Deep Learning Intern",
      company: "Milestone Zero",
      companylogo: require("./assets/images/milestonezero.jpg"),
      date: "Jun 2019 – Sep 2019",
      desc: "Worked on building Spacial Analysis Technology to help optimize real estate",
      descBullets: [
        "Created custom indoor real estate vision dataset.",
        "Custom dataset format conversions.",
        "Researched realtime object detection algorithms. \"mAP 0.72\"",
        // "Partial Demo: https://youtu.be/HSYKp8hfla4"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: emoji("Big Projects 🚀"),
  subtitle: "SOME STARTUPS AND COMPANIES PROJECTS AND DATA I WORKED ON",
  projects: [
    {
      image: require("./assets/images/shopee.png"),
      projectName: "Shopee - Price Match Guarantee",
      projectDesc: "Determine if two products are the same by their images",
      footerLink: [
        {
          name: "Details",
          url: "https://www.kaggle.com/c/shopee-product-matching/"
        },
        {
          name: "Notebook",
          url: "https://www.kaggle.com/imroze/tfidf-arcface-advanced-text-processing-131st"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/gufhtugu.png"),
      projectName: "Gufhtugu Publications",
      projectDesc: "20,000 Records of Books Sale in Pakistan",
      footerLink: [
        {
          name: "Notebook",
          url: "https://www.kaggle.com/asimzahid/analysis-on-e-commerce-gufhtugu"
        }
      ]
    },
    // {
    //   image: require("./assets/images/swvl.jpeg"),
    //   projectName: "Forecast Rides",
    //   projectDesc: "Anomaly detection, user conversion forecasting and impact based on sudden behavior change of society due to COVID-19",
    //   footerLink: [
    //     {
    //       name: "Dataset",
    //       url: "https://www.kaggle.com/asimzahid/new-york-bus-rides-service"
    //     }
    //   ]
    // },
    {
      image: require("./assets/images/zameen-logo.jpg"),
      projectName: "Real Estate Category Prediction",
      projectDesc: "Predict the price-categories of real estate in Pakistan. There are 4 distinct price-categories: Cheap, Affordable, Semi-Premium, Premium.",
      footerLink: [
        {
          name: "Dataset",
          url: "https://www.kaggle.com/c/kaggledatafest"
        },
        {
          name: "Notebook",
          url: "https://www.kaggle.com/asimzahid/zameen-real-estate-category-prediction"
        }
      ]
    },
    {
      image: require("./assets/images/pakwheels.png"),
      projectName: "PakWheels Automobiles Listings",
      projectDesc: "Pakistan's largest public, used automobiles listings dataset with 55k+ rows and 30+ features",
      footerLink: [
        {
          name: "Dataset",
          url: "https://www.kaggle.com/asimzahid/pakistans-largest-pakwheels-automobiles-listings"
        },
        {
          name: "Crawler",
          url: "https://github.com/MrAsimZahid/PakWheels-Listing-Scraper"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Dual Kaggle Expert",
      subtitle:
        "Kaggle is the world’s largest data science community with powerful tools and resources to help you achieve your data science goals. There are four categories in it. I ranked expert in notebook/code and dataset category.",
      image: require("./assets/images/expert@192.png"),
      footerLink: [
        {
          name: "View Profile",
          url: "https://www.kaggle.com/asimzahid/"
        }
      ]
    },
    {
      title: "Google Developer Student Club Lead",
      subtitle:
        "Selected among 52 leads out of 5000+ applicants in Pakistan. Founded Superior university's first technically focused club with the focus to bridge the gap between theory and practice. 400+ registered members. Organized 6 Events(3 technical, 2 Non-technical), delivered 1 technical workshop on Google Cloud, facilitated 1 technical on Git & Github. Reached to 2500+ students. 2019-2020",
      image: require("./assets/images/gdsc.png"),
      footerLink: [
        {
          name: "DSC Journey",
          url: "https://msaad.dev/my-dsc-journey/"
        },
        {
          name: "DSC Leads Summit",
          url: "https://youtu.be/gO_Lurqe08M"
        },
        {
          name: "Profile",
          url: "https://gdsc.community.dev/superior-gold-campus/"
        }
      ]
    },
    {
      title: "AWS Educate Cloud Ambassador",
      subtitle: "Selected among 17 from Pakistan and 316 from 50+ countries across the globe. Received AWS trainings, learned proceedures, participated in AWS hackathons and applied leadership. Helped launcing first Official AWS community accross Pakistan.",
      image: require("./assets/images/aws.png"),
      footerLink: [
        {
          name: "AWS blog", 
          url: "https://aws.amazon.com/blogs/publicsector/aws-educate-announces-inaugural-student-ambassador-cohort/"
        },
        {
          name: "AWS Community Pakistan",
          url: "https://awscommunity.pk"
        }
      ]
    },
    {
      title: "Neo4j Certified Professional",
      subtitle: "Certification exam assess on 6 areas including 'Overview of Neo4j 4.x',  'Querying with Cypher in Neo4j 4.x', 'Creating Nodes and Relationships in Neo4j 4.x', 'Using Indexes and Query Best Practices in Neo4j 4.x', 'Importing Data with Neo4j 4.x', 'Graph Data Modeling for Neo4j'",
      image: require("./assets/images/neo4j.png"),
      footerLink: [
        {
          name: "Certificate", 
          url: "https://graphacademy.neo4j.com/certificates/a88139441201fff1493f48daca4572526d269310d1d900192cc2e6cf04658c1a.pdf"
        },
        {
          name: "Exam Website", 
          url: "https://neo4j.com/graphacademy/neo4j-certification/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: emoji("Blogs 📝"),
  subtitle:
    "With Love for Research and Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://mrasimzahid.medium.com/google-cloud-platform-fundamentals-core-infrastructure-97c4d958d8e2",
      title: "Google Cloud Platform Fundamentals: Core Infrastructure",
      description:
        "This course is the best for someone who want to get a holistic view of Google cloud platform. What GCP do?, what services it offer?, and how they interact and function?"
    },
    {
      url: "https://mrasimzahid.medium.com/article-publisher-prediction-softech-2021-ai-competition-6719d8be2542",
      title: emoji("Article Publisher Prediction | SOFTEC 2021 AI Competition 🤖"),
      description:
        "Few takeaways and thoughts from SOFTEC 2021 AI competition."
    },
    {
      url: "https://medium.com/analytics-vidhya/how-to-scrape-tweets-and-create-dataset-using-twint-without-twitter-api-e5890c25d1c9",
      title: emoji("How to Scrape Tweets and create Dataset using Twint without Twitter API 🐦"),
      description:
        "In this article, I’ll describe how I created a huge dataset of tweets scraped from an entire country."
    },
    {
      url: "https://medium.com/analytics-vidhya/the-secret-recipe-of-earning-kaggle-medals-fb9d728c24bb",
      title: emoji("The Secret Recipe of Earning Kaggle Medals🥇"),
      description:
        "Here are few key learnings from active participation on kaggle."
    },
    {
      url: "https://medium.datadriveninvestor.com/kaggle-data-science-platform-alternatives-for-competitions-and-research-cbe051596e62",
      title: "Kaggle Data Science Platform Alternatives for Competitions and Research",
      description:
        "Kaggle is the world’s largest data science community with powerful tools and resources to help you achieve your data science goals. I aggregated few alternatives of kaggle which I found really interesting."
    },
    {
      url: "https://mrasimzahid.medium.com/hdfs-hadoop-distributed-file-system-hadoop-d566a7f48fc9",
      title: "HDFS - Hadoop Distributed File System",
      description:
        "A brief introduction to HDFS - Hadoop Distributed File System."
    },
    {
      url: "https://mrasimzahid.medium.com/20-best-data-and-web-scraping-tools-bb8c96cf9ed8",
      title: "20 Best Data and Web Scraping Tools",
      description:
        "Data is the new oil. Nowadays, Everyone needs data whether you are running an e-commerce business, performing quantitative research, working in cyber threat intelligence, blockchain, or else to analyze it and make better decisions."
    },
    {
      url: "https://mrasimzahid.medium.com/",
      title: "Read More",
      description:
        "View full catelog"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: emoji("TALKS🎙️"),
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: emoji("Introduction to Google Cloud ☁️"),
      subtitle: "Codelabs at Superior University 2019",
      slides_url: "https://www.youtube.com/watch?v=M0UH1JgpsIw",
      // event_url: "https://www.facebook.com/events/2339906106275053/"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3320443303",
  email_address: "asimzahid02@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "MrASimZahid", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  twitterDetails
};

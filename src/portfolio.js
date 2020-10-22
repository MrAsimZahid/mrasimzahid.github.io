
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Asim Zahid",
  title: "Hi all, I'm Asim",
  subTitle: emoji("A passionate Software Engineer 🚀 having an experience of building End to End Machine Learning Systems with Python / Tensorflow / Pytorch / Scikit-Learn and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/drive/folders/16lxxG50rFtyrwDtjwlM7A-RiYiZMvY-l?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/MrAsimZahid",
  linkedin: "https://www.linkedin.com/in/MrAsimZahid/",
  gmail: "asimzahid02@gmail.com",
  // gitlab: "https://gitlab.com/MrAsimZahid",
  facebook: "https://www.facebook.com/MrAsimZahid",
  medium: "https://medium.com/@MrAsimZahid",
  stackoverflow: "https://stackoverflow.com/users/10422806/MrAsimZahid",
  instagram: "http://instagram.com/mrasimzahid",
  twitter: "https://twitter.com/mrasimzahid"

  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEEP LEARNING ENGINEER WHO WANTS TO WANT TO BUILT IMPACTFUL PRODUCTS",
  skills: [
    emoji("⚡ Develop highly intelligent autonomus systems to help planet Earth"),
    emoji("⚡ Design and Build cloud based infrastructure for data driven apllications"),
    emoji("⚡ Integration of third party services such as GCP/ AWS / Azure")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "RPA",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "kaggle",
      fontAwesomeClassname: "fab fa-kaggle"
    },
    {
      skillName: "vision",
      fontAwesomeClassname: "far fa-eye"
    },
    {
      skillName: "NLP",
      fontAwesomeClassname: "fas fa-language"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Neural Networks",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-accusoft"
    },
    {
      skillName: "pip",
      fontAwesomeClassname: "fab fa-pied-piper-pp"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Computer Vision",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Skills",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Computer Vision Engineer",
      company: "OpenCV",
      companylogo: require("./assets/images/bleedaiLogo.png"),
      date: "Sep 2020 – Present",
      desc: "Building world class Tensorflow course for thousands of computer vision researchers, developers and aspirants ",
      descBullets: [
        "Custom Notebooks development",
        "Technical content writer"
      ]
    },
    {
      role: "Data Science Intern",
      company: "Ingenio EC",
      companylogo: require("./assets/images/transfopowerLogo.png"),
      date: "June 2020 – Sep 2020",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Deep Learning Engineer",
      company: "MileStone Zero",
      companylogo: require("./assets/images/milestonezeroLogo.jpg"),
      date: "June 2019 – Sep 2020",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "MrAsimZahid", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/edificeLogo.webp"),
      link: "https://edifice.ai/"
    },
    {
      image: require("./assets/images/ingenioLogo.png"),
      link: "https://www.ingenio.ec/"
    },
    {
      image: require("./assets/images/milestonezeroLogo.png"),
      link: "https://milestonezero.net/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "DSC Lead",
      subtitle: "One of 42 First Pakistani to be selected as Developer Student Club Lead by Google Developers from 4000 students across the country.",
      image: require("./assets/images/DSCLogo.png"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@MrAsimZahid/how-to-scrape-tweets-and-create-dataset-using-twint-without-twitter-api-e5890c25d1c9",
      title: "How to Scrape Tweets and create Dataset using Twint without Twitter API",
      description: "Do you want to utilize amazing power of tweets data? Leraan here How to do it."
    },
    {
      url: "https://medium.com/@MrAsimZahid/ai-data-architecture-simple-best-practices-for-creating-datasets-1d830f6c2757",
      title: "AI Data Architecture: Simple Best Practices for Creating Datasets",
      description: "Data is the new oil. Learn How to create scalable, sustainable, and shareable human centered AI data architectures with no overhead."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Hacktoberfest: Open-Source Contributions",
      subtitle: "Hands-on Workshop on Git & Github",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3320443303",
  email_address: "asimzahid02@gmail.com@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "mrasimzahid"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};

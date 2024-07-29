interface Experience {
  tag: string;
  title: string;
  description: string;
  url: string;
  year: number;
  categories: string[];
  order: number;
}

export const experiences: Experience[] = [
  {
    tag: 'experiences',
    title: "Bootstrap - Translator",
    description: "Open source translation of some pages of the Bootstrap framework. The world’s most popular front-end open source toolkit for quickly design and customize responsive mobile-first sites",
    url: "https://github.com/bootstrapbrasil/bootstrap",
    year: 2015,
    categories: ["Open Source", "Bootstrap", "CSS"],
    order: 7
  },
  {
    tag: 'experiences',
    title: "Garupa - Mobile Developer",
    description: "Development, maintenance and build of the app mobile Garupa for passengers, developed in react-native, redux and redux-saga. Application that had an average of 15.000 rides a day, reaching 450.000 rides a month and being the main product of the entire company. In this work I used a lot the agile methodology that we call 'scrumban' and I learned a lot about the concepts of build and distribution in the app store and play store and release versions for testing in the firebase app.",
    url: "https://garupa.co/",
    year: 2023,
    categories: ["React Native", "React.js", "Node.js", "Typescript", "PHP"],
    order: 2
  },
  {
    tag: 'experiences',
    title: "Impuls-e - Frontend Developer",
    description: "Built and maintained web applications, like websites, e-commerce’s, portfolios and landing-pages. The tools that were used are Gatsby.js, Netlify, GitHub, Contentful. Learning how to work as a tech small team with tight deadlines, daily meetings and Git workflow. Using Gatsby.js my primary focus was improving the sites speed and SEO to improve the rank of sites on PageSpeed Insights. As a result, our sites always scored 80+ on mobiles and 95+ on desktops.",
    url: "https://impuls-e.works/",
    year: 2020,
    categories: ["React", "Gatsby", "HTML", "CSS", "Javascript", "JAMSTACK", "Typescript"],
    order: 4
  },
  {
    tag: 'experiences',
    title: "Loeffa - Frontend Developer Internship",
    description: "Web development agency, where I worked in a fast-paced environment, with continuous deliveries and Scrum methodology. There I started my journey in development on the principles of the Web (HTML, CSS and JavaScript) and we used to use the LAMP stack (Wordpress) to develop our websites.",
    url: "https://loeffa.com/",
    year: 2018,
    categories: ["Wordpress", "PHP", "HTML", "CSS", "Javascript", "Scrum"],
    order: 6
  },
  {
    tag: 'experiences',
    title: "The Nodejs Handbook - Translator",
    description: "Voluntary co-translation of the book The Node.js Handbook, authorized by the author Flavio Copes. This book is a nodejs manual for beginners, covering topics such as event loop, asynchronous programming, HTTP requests, file system and some other essential modules. This translation has the sole purpose of making the book's content available in Portuguese to the community, thus facilitating access to quality content by Brazilians.",
    url: "https://github.com/ChristySchott/manual-node",
    year: 2020,
    categories: ["Open Source", "Nodejs", "Javascript"],
    order: 5
  },
  {
    tag: 'experiences',
    title: "SC State Department of Health",
    description: "I worked in the health department of Santa Catarina as a technical support. There I performed the maintenance and formatting of computers. I was always in contact with the user to help him solve all technical problems and give him all kinds of support so that he could perform his work, both personally and through remote access.",
    url: "https://www.getin.saude.sc.gov.br/",
    year: 2015,
    categories: ["Remote Acess", "Linux", "Formating", "Technical Suport"],
    order: 8
  },
  {
    tag: 'experiences',
    title: "V4 Company - DevOps",
    description: "During my return to V4, I spearheaded the automation of processes and  CI/CD workflows using GitHub Actions and AWS, establishing a robust  Kubernetes infrastructure to support both production and staging  environments. I initiated the adoption of serverless solutions via AWS Lambda Functions, managing all deployment processes for staging and  production environments. Additionally, I played a pivotal role as a  co-technical lead, sharing leadership responsibilities and technical  guidance, closely collaborating with another tech lead in driving  strategic projects and making key technological decisions.",
    url: "https://v4company.com/",
    year: 2024,
    categories: ["DevOps", "AWS", "Kubernetes", "Serverless", "AWS Lambda"],
    order: 1
  },
  {
    tag: 'experiences',
    title: "V4 Company - Frontend Developer",
    description: "Development, construction, implementation, support and maintenance of an internal web system, which was developed in the JavaScript language (with React/Typescript and NodeJS) and used by more than 200 offices throughout Brazil, with approximately 650 users and an average engagement time of 14 minutes.",
    url: "https://v4company.com/",
    year: 2021,
    categories: ["React", "Typescript", "Scrum", "OKR", "Node.js"],
    order: 3
  },
]
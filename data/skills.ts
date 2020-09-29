import { SkillTree, SkillsSimple } from './types'

export const frontEnd: SkillTree = {
  languages: [
    {
      name: 'HTML5',
      description:
        'The skeleton of all pages. Up to this day, I still remember the day I started learning HTML.',
    },
    {
      name: 'CSS3',
      description:
        'Makes everything look sexy. However, I prefer using pre-designed stuff, rather than writing CSS manually.',
    },
    {
      name: 'JavaScript',
      description:
        "The king of languages, and it's constantly evolving. Fun fact: about 98% of all code I write is JavaScript.",
      additional: [
        'ES6+',
        'Regular expressions',
        'Functional programming',
        'Object-oriented programming',
        'Algorithms & data structures',
      ],
    },
  ],
  cssFrameworksAndPreprocessors: [
    {
      name: 'Sass',
      description:
        "Helps me write styles in a less boring way, and more efficiently. It's basically CSS on little steroids.",
    },
    {
      name: 'Bootstrap',
      description:
        "Great for the 'quick and dirty' stuff. Saves me a TON of time with styling, and it's quite customizable.",
    },
  ],
  packageManagers: [
    {
      name: 'NPM',
      description:
        'Allows me to install and use just about anything I might need for my projects. One of the reasons JS is so great.',
    },
  ],
  buildTools: [
    {
      name: 'Webpack',
      description:
        "If I have to configure it from scratch, it's very useful for very small projects with modular JavaScript.",
    },
    {
      name: 'Babel',
      description:
        "Makes sure my code is executable in all browsers, including the old ones (IE, I'm looking at you!).",
    },
  ],
  lintersAndFormatters: [
    {
      name: 'ESLint',
      description:
        'Prevents me from making errors before they happen. Typos are the worst. My favorite configuration is Airbnb.',
    },
    {
      name: 'Prettier',
      description:
        "Makes the code inside of my code editor, well, very pretty. Powerful with the 'Bracket pair colorizer' extension.",
    },
  ],
  jsLibrariesAndFrameworks: [
    {
      name: 'jQuery',
      description:
        "Useful for the 'quick and dirty' fancy animations, and it used to be very popular. Not a big fan, though.",
    },
    {
      name: 'React',
      description:
        "I'm a HUGE React fanboy! I can't imagine building anything more complex without it, it's just amazing.",
      additional: ['React hooks', 'React router', 'Context API', 'Next.js'],
    },
  ],
  stateManagement: [
    {
      name: 'Redux',
      description:
        "I grab it whenever local state isn't enough. It's also React's best friend. I now prefer React Query though.",
    },
    {
      name: 'Apollo client',
      description:
        'The go-to state manager for GraphQL. It does a lot of things automatically, and provides a few superpowers as a bonus.',
    },
    {
      name: 'React Query + Context API',
      description:
        'React query is quite new, but super powerful - makes server state management easy, provides caching and optimistic UI.',
    },
  ],
  jssAndUiFrameworks: [
    {
      name: 'Styled components',
      description:
        "Great for making templates. Combines the best of Sass and React's props, making your styles very dynamic.",
    },
    {
      name: 'Material UI',
      description:
        'Awesome-looking custom components that make your page look very Google-ish. Even this website is built with it!',
    },
  ],
  frontEndTesting: [
    {
      name: 'Jest',
      description:
        "Testing framework that makes sure my code isn't buggy and I can sleep at night. Very popular worldwide.",
    },
    {
      name: 'Enzyme',
      description:
        'Used alongside Jest, this tool is very powerful for testing my components. The two are perhaps THE CHOICE for testing.',
    },
  ],
  typeCheckers: [
    {
      name: 'TypeScript',
      description:
        'The larger the project, the more likely I am to use it. Ensures type safety and grows rapidly in popularity.',
    },
  ],
  nativeAppDevelopment: [
    {
      name: 'React Native',
      description:
        'Might not be the most suitable, but it allows me to take my React knowledge to build native Android and iOS apps.',
    },
  ],
}

export const backEnd: SkillTree = {
  languagesAndFrameworks: [
    {
      name: 'Node.js',
      description:
        'Thank god for this. I can finally write JavaScript on the server, too, making the whole process use just one language.',
    },
    {
      name: 'Express',
      description:
        'By far the best framework for Node. Makes my life about 1000 times easier, thanks to its versatility.',
    },
    {
      name: 'GraphQL',
      description: `It's changing the way we build our APIs, and for a good reason - replaces the good old RESTful architecture.`,
    },
    {
      name: 'Python (in progress)',
      description:
        'Python and JavaScript are probably the most versatile languages there are. I am currently learning Python, more is coming.',
    },
  ],
  databases: [
    {
      name: 'MongoDB',
      description:
        "My favorite database, and for a good reason. It's fast and very flexible. All your data is in here.",
    },
    {
      name: 'SQL',
      description:
        'Another set of databases that have been around for ages. Very popular choice in the industry.',
    },
  ],
  databaseMappers: [
    {
      name: 'Mongoose',
      description:
        "Yet another tool that makes my life 1000 times easier. I can't imagine working with MongoDB without it.",
    },
    {
      name: 'Sequelize',
      description:
        'Traditional go-to ORM when working with relational databases. A good and mature alternative to Prisma.',
    },
    {
      name: 'Prisma',
      description:
        'Makes building a GraphQL API incredibly easy. Prisma truly takes developer experience to the next level.',
    },
  ],
  templateEngines: [
    {
      name: 'Handlebars',
      description:
        "For rendering templates on the server. I don't use it often, though, because we have front-end frameworks.",
    },
  ],
  authenticationAndAuthorization: [
    {
      name: 'JSON Web Tokens',
      description:
        'The only thing (at least for now) I need to make sure my API is safe, protected, and checks user permissions.',
    },
  ],
  backEndTesting: [
    {
      name: 'Jest',
      description:
        'Not only front-end related, it can also be used on the back-end with Supertest, too!',
    },
    {
      name: 'Supertest',
      description:
        'Allows me to test my API endpoints directly in my application, to make sure everything works as intended.',
    },
  ],
  webSockets: [
    {
      name: 'Socket.io',
      description:
        'An awesome tool essential for real-time communication such as chat apps, live location updates etc.',
    },
  ],
  miscellaneous: [
    {
      name: 'SendGrid',
      description:
        "A tool for sending emails. It has a few limitations, but it's great for small projects.",
    },
    {
      name: 'Multer',
      description:
        'Enables me to upload files, mostly images, to the server. I use it mostly for your avatars and profile pictures!',
    },
    {
      name: 'Advanced Mongoose',
      description:
        'For fetching only the data you need, and to make things fast - through sorting, pagination, and filtering.',
    },
  ],
  deployment: [
    {
      name: 'Heroku',
      description:
        "I deploy all my MERN-stack projects there. Easy to deploy to, and it's free. Ideal for my usage.",
    },
    {
      name: 'Firebase',
      description:
        "Google's own platform where I can deploy static pages and applications. It's fast 24/7, and reliable.",
    },
    {
      name: 'Vercel (also known as Now)',
      description:
        'My favorite deployment platform. This is the place to deploy all my projects that are built with Next.js.',
    },
  ],
}

export const skillsSimple: SkillsSimple = [
  {
    imgSrc: '/images/mongodb.png',
    subheadline: 'MongoDB',
    bodyText: `MongoDB is an open-source, document-driven database. It uses
		JSON-like documents to store data, which makes it very flexible and
		easy to work with. I use MongoDB almost always as my go-to database,
		and use the cloud solution: MongoDB Atlas. This makes it possible to
		store your data on cloud providers, such as AWS, one of the most
		reliable servers on the planet.`,
  },
  {
    imgSrc: '/images/express.png',
    subheadline: 'Express',
    bodyText: `Express is a minimalistic, unopinionated framework for Node.js. In
		other words, it lets me create my back-end however I want, allowing
		for great flexibility and quick server-side development. Its bundle
		size is very small, and creating APIs with Express is a breeze.`,
  },
  {
    imgSrc: '/images/react.png',
    subheadline: 'React',
    bodyText: `React is a JavaScript library for building user interfaces. It
		allows me to build very complex interfaces with ease, thanks to its
		way of handling data and component-based approach. It's currently
		the most popular front-end tool in the industry. It has huge
		community support, Facebook developers maintaining it, and it's not
		going anywhere in the near future.`,
  },
  {
    imgSrc: '/images/nodejs.png',
    subheadline: 'Node.js',
    bodyText: `Node.js is JavaScript runtime environment which allows me to execute
		JavaScript code outside of a web browser. In practice, this means I
		can write JavaScript on the server, making the entire stack use just
		one language, which has a lot of benefits. It's non-blocking, very
		fast, and one of the most popular server-side technologies out
		there.`,
  },
  {
    imgSrc: '/images/graphql.png',
    subheadline: 'GraphQL',
    bodyText: `A revolutionary way to build APIs - that's what GraphQL is. It's a
		query language that allows me to build extremely flexible APIs, and
		it works with any back-end and any database. With GraphQL, the
		front-end can ask for what it needs with just a single request, and
		gets exactly that. Nothing more, nothing less. I'm really excited
		about it, particularly because it's gaining a ton of traction and
		has a large ecosystem.`,
  },
]

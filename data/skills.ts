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
    {
      name: 'Tailwind CSS',
      description:
        'My go-to option for quickly building user interfaces. I love its versatility and customizability.',
    },
  ],
  packageManagers: [
    {
      name: 'NPM',
      description:
        'Allows me to install and use just about anything I might need for my projects. One of the reasons JS is so great.',
    },
    {
      name: 'Yarn',
      description:
        'Basically the same thing as NPM. I have yet to try out Yarn workspaces.',
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
      additional: ['React hooks', 'React router', 'Context API', 'Compound components'],
    },
    {
      name: 'Next.js',
      description:
        "React on steroids. Ever since I built my first full-stack app using just a single framework, I can't get enough of Next.js.",
    },
  ],
  stateManagement: [
    {
      name: 'Redux',
      description:
        "I don't use Redux anymore, but I know it almost inside out thanks to legacy codebases still using it.",
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
    {
      name: 'Ant Design',
      description:
        'This portfolio is built with it! I like the clean look of Ant Design and its minimalistic design.',
    },
  ],
  frontEndTesting: [
    {
      name: 'Jest',
      description:
        "Testing framework that makes sure my code isn't buggy and I can sleep at night. Very popular worldwide.",
    },
  ],
  typeCheckers: [
    {
      name: 'TypeScript',
      description:
        "Ever since I switched to TypeScript, I haven't looked back. A must-use these days!",
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
      name: 'Next.js API routes',
      description:
        'Not exactly a framework, but it just blows me away that I can build a full-stack app entirely using just Next.js and its serverless functions.',
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
        'Prisma truly takes developer experience to the next level thanks to its type-safe database access.',
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
        'The only thing I need to make sure my API is safe, protected, and checks user permissions.',
    },
    {
      name: 'Auth0',
      description:
        'A 3rd party auth provider that is well known in the industry. I found it quite easy to use with Next.js.',
    },
    {
      name: 'Next Auth',
      description:
        'A simple library intended to solve auth issues with SSR. It is usually my go-to for auth in Next.js.',
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
        "Aggregations in Mongoose are not exactly what you might like, but they're quite powerful. Speaking from experience.",
    },
    {
      name: 'AWS S3',
      description:
        'This is a no-brainer. Whenever I need a scalable place to put files, S3 is the way to go.',
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
      name: 'Netlify',
      description:
        'Usually my go-to for simple CRA React apps. I like it for its simplicity and convenient usage.',
    },
    {
      name: 'Vercel',
      description:
        'My favorite deployment platform not only for Next.js projects. Has great management tools, simple UI, performance monitoring and more!',
    },
  ],
}

export const skillsSimple: SkillsSimple = [
  {
    imgSrc: '/images/stack/mern.png',
    url: 'https://www.mongodb.com/mern-stack',
    subheadline: 'MERN stack',
    bodyText: `The MERN stack (MongoDB, Express, React, Node.js) got me started
			with web development. It was the stack I was using to build my first
			full-stack applications, and for a good reason - the whole stack is based
			on only one language, which makes it really easy to use. However, I have
			recently switched to the technologies you can read about below.`,
  },
  {
    imgSrc: '/images/stack/typescript.png',
    url: 'https://www.typescriptlang.org/',
    subheadline: 'TypeScript',
    bodyText: `I would say TypeScript is a no-brainer in 2021 and beyond. If you're
		developing a large-scale project and not using it, you're literally shooting
		yourself to the foot. TypeScript improves developer experience, reduces bugs,
		supercharges JavaScript with static typing and other incredible features that
		it just doesn't make sense not to use it.`,
  },
  {
    imgSrc: '/images/stack/nextjs.png',
    url: 'https://nextjs.org/',
    subheadline: 'Next.js',
    bodyText: `Perhaps my favorite framework these days. It is basically React
			on steroids - enriching React with features that standard single-page apps
			just do not have, such as automatic per-page code splitting, static site
			generation, server-side rendering and most recently also API routes which
			allow you to extend your front-end application by adding a back-end to it.`,
  },
  {
    imgSrc: '/images/stack/react query.svg',
    url: 'https://react-query.tanstack.com/',
    subheadline: 'React Query',
    bodyText: `My favorite state management library. Since most of global state
			is basically just data from API, React Query makes it a breeze to work
			with this type of data. It supports two things crucial to a better user
			experience - caching and optimistic updates. I have been using React Query
			as a replacement for Redux and have never looked back since.`,
  },
  {
    imgSrc: '/images/stack/tailwindcss.png',
    url: 'https://tailwindcss.com/',
    subheadline: 'Tailwind CSS',
    bodyText: `My go-to CSS library for quick and easy styling of my applications.
			Unlike Bootstrap and other class-based styling libraries, Tailwind CSS works
			in a different fashion - it is low-level and utility-based CSS library, it
			supports custom theming and configuration, removes unused CSS in production,
			and much more!`,
  },
  {
    imgSrc: '/images/stack/next auth.png',
    url: 'https://next-auth.js.org/',
    subheadline: 'Next Auth',
    bodyText: `Next Auth is a simple and powerful authentication tool for Next.js
			apps. It supports multiple authentication strategies, such as signing in with
			only email and password, google, github and other providers.`,
  },
  {
    imgSrc: '/images/stack/prisma.png',
    url: 'https://prisma.io/',
    subheadline: 'Prisma',
    bodyText: `Prisma is perhaps the only ORM that is truly type-safe, and while it
			still lacks certain advanced features that other ORMs have, its ingenuity and ease of
			use take developer experience to the next level. Prisma recently added support
			for MongoDB, which means I don't need to use any other ORM, regardless of what
			database I'm using.`,
  },
  {
    imgSrc: '/images/stack/postgresql.png',
    url: 'https://www.postgresql.org/',
    subheadline: 'PostgreSQL',
    bodyText: `PostgreSQL needs no further introduction - this relational database
			has been around for decades, proving its reliability and scalability. I usually
			use it in tandem with Prisma.`,
  },
  {
    imgSrc: '/images/stack/s3.png',
    url: 'https://aws.amazon.com/s3/',
    subheadline: 'AWS S3',
    bodyText: `Arguably the most famous file storage. Amazon Web Services are slowly
			but surely becoming the standard for most developers, and its file storage
			solution is no different. S3 scales virtually infinitely, is very cheap and
			easy to get started with. This is where I upload files of all kinds.`,
  },
  {
    imgSrc: '/images/stack/vercel.png',
    url: 'https://vercel.com/',
    subheadline: 'Vercel',
    bodyText: `A serverless deployment platform that is super easy to use, makes
			deploying Next.js apps a piece of cake, and provides a generous free tier.
			Vercel makes various DevOps tasks really easy to do and supports basic
			error tracking and performance monitoring analytics.`,
  },
]

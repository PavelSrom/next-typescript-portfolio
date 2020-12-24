import { Experience } from './types'

// eslint-disable-next-line import/prefer-default-export
export const workExperiences: Experience[] = [
  {
    title: 'React developer',
    chips: {
      company: 'Timothy Jacob Jensen Studios',
      duration: 'March 2020 - present',
      place: 'Copenhagen, Denmark (remote)',
    },
    responsibilities: `I am responsible for almost everything a front-end developer might do.
		The only things I am not so familiar with yet are the hardest tasks, such as a very specific
		webpack configuration or building a complex feature, although I am trying to learn from my
		front-end colleague as much as I can, especially things I have never done before. 
		`,
    codebase: {
      text: `Currently, the codebase consists of about 30,000 lines of code, and is
			connected to approximately 120 API endpoints.
				I started building it back in March 2020, and from scratch.
				My front-end colleague joined in June 2020 and we have since then done a few refactors:
				from JavaScript to TypeScript, from Redux to React Query, from JSS to Tailwind CSS...
				We are planning on adding more features, so the codebase will only grow from there.`,
      stack: [
        'React in TypeScript',
        'State management done with React Query + Context API',
        'Material UI as our go-to design system',
        'Tailwind CSS for rapidly building user interfaces',
        '... many other libraries for various purposes',
      ],
    },
    myTakeaways: `So far, I have learned a ton from being a part of this - how to
			use TypeScript in React, how to refactor things, read and understand other people's
			code, work with GitHub branches and pull requests, how to build real-world features,
			and much more. The biggest lesson has perhaps been on how to manage a relatively
			large codebase, since this platform is much, much bigger than anything I have ever
			built before, as well as how to collaborate within a team.
		`,
  },
  {
    title: 'React developer (internship)',
    chips: {
      company: 'Senti.io (Webhouse ApS)',
      duration: 'January 2020 - March 2020',
      place: 'Aalborg, Denmark (on-site)',
    },
    responsibilities: `My main task was to refactor React's class-based components into
			components using React hooks. Refactoring the majority of components took me about
			50% of my internship duration. For the remainder of my stay, I was working on building
			new components with Material UI for an onboarding process,
			and creating dashboard data widgets.
		`,
    codebase: {
      text: `The front-end of the platform had been about 2 years in the making when I joined.
				It was a standard React app, with Redux as a state manager. I do not know the exact size
				of it, but my estimate is a few tens of thousands of lines of code.
			`,
      stack: [
        'React, both class-based components and hooks',
        'State management with Redux',
        'Material UI as a design system',
      ],
    },
    myTakeaways: `My biggest takeaway was probably that there is so much I do not know yet.
			It was my first real-world experience with developing an application, and I began my
			internship fairly confident in my abilities. Very early on, I discovered that although
			my skills were not underwhelming, I should always be humble and never assume I am the
			smartest person in the room. It was a priceless experience.
		`,
  },
]

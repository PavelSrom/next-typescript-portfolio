/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
/* eslint-disable import/prefer-default-export */
import { Project } from './types'

export const projects: Project[] = [
  {
    imgSrc: '/',
    headline: 'E-commerce website',
    bodyText: [
      `By far the best project I have ever made so far (early February,
				2020). The idea of creating an e-commerce site seemed very
				tempting since it puts everything together, and it's a large
				project. The whole app has been built using my specialty - the
				MERN stack. Among other things, the back-end is using image
				uploads, and pagination is implemented in both Express and React.`,
      <br />,
      `It taught me a lot of new stuff - how to implement the pagination,
				how to handle file uploads, and how to show different content
				based on auth status. I've also learned how to properly render
				without React-suspense.`,
      <br />,
      `This project is by no means done - I have future plans. I'd like
				to migrate the whole back-end to using GraphQL & Apollo (and maybe
				TypeScript), as well as adding Socket.io and Next.js to the mix.
				I'd also like to add more endpoints and overall make this even
				bigger, handle payments with Stripe, and work on the details.`,
    ],
    techUsed: ['MERN stack', 'Redux', 'Material UI'],
    github: 'https://github.com/PavelSrom/MERN-ecommerce',
    demo: 'https://pavel-ecommerce.herokuapp.com/',
  },
  {
    imgSrc: '/',
    headline: 'Social media app',
    bodyText: [
      `The goal of this app was to practice using TypeScript within my
			stack - which is also why this app is built entirely in it. I
			didn't want to make anything super complex, but not anything
			simple, either. I simply wanted to learn how to use TypeScript
			with React, Redux, and Express.`,
      <br />,
      `Another thing I have learned along the way is how to handle file
			upload all the way from the client choosing a picture to the server
			handling it.`,
      <br />,
      `I have found that using TypeScript in my personal projects is too
			much and unnecessary - however, I see the great advantage of TypeScript
			being in bigger projects and companies, where it may by all means
			increase productivity significantly.`,
    ],
    techUsed: ['MERN stack', 'TypeScript', 'Material UI'],
    github: 'https://github.com/PavelSrom/socmed-app-typescript',
    demo: 'https://murmuring-dusk-35278.herokuapp.com/',
  },
  {
    imgSrc: '/',
    headline: 'Weight tracker app',
    bodyText: [
      `My very first project which I built right after finishing my
			MERN-stack Udemy course. It's basically the same app that my
			project group made in school API elective, but upgraded. What's
			new is that I replaced SQL database with MongoDB, users can save
			their favorite exercise, truly add only one log per day and see
			all of their stats directly in dashboard.`,
      <br />,
      `I focused mainly on building my API with Express and
			MongoDB, managing user authentication in React via private routes,
			and managing data in Redux instead of having multiple local
			states. Design is done in Material UI (custom pre-designed React
			components that implement Google's material design), and I also
			replaced class-based components with React hooks.`,
    ],
    techUsed: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/PavelSrom/weight-app-enhanced',
    demo: 'https://secret-basin-32227.herokuapp.com/',
  },
]

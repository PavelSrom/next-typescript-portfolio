/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
/* eslint-disable import/prefer-default-export */
import { Project } from './types'

export const projects: Project[] = [
  {
    imgSrc: '/images/proj_classco.png',
    headline: 'ClassCo - helping students and teachers collaborate',
    bodyText: [
      `A refactor of the ClassCo mini-Bachelor school project. The original
				version has been built with a single-page (CRA) React in TypeScript
				front-end and a back-end in Django. I was in charge of the entire
				front-end codebase.`,
      <br />,
      <br />,
      `This application has been refactored to using just a single
				framework - Next.js. It is my first and definitely not last Next.js
				full-stack application that uses API routes as a back-end. I fell in
				love with Next.js while building this - it is still mind-bending to me
				that I can build a full application using just one framework where API
				endpoints are serverless functions hosted on AWS Lambda.`,
      <br />,
      <br />,
      `This might actually be my new favorite stack - Next.js in TypeScript,
				Prisma, PostgreSQL, Tailwind CSS, React Query and either Next-auth or
				Auth0. The whole refactor only took about 10 hours, and I love how
				easy it is to build apps with Next.js.`,
    ],
    techUsed: ['Next.js + API routes', 'Prisma', 'Next-auth', 'React Query'],
    github: 'https://github.com/PavelSrom/minibachelor-next-fullstack',
    demo: 'https://minibachelor-next-fullstack.vercel.app/',
  },
  {
    imgSrc: '/images/proj_ecommerce.png',
    headline: 'E-commerce website',
    bodyText: [
      `By far the best project I have ever made so far (early February,
				2020). The idea of creating an e-commerce site seemed very
				tempting since it puts everything together, and it's a large
				project. The whole app has been built using my specialty - the
				MERN stack. Among other things, the back-end is using image
				uploads, and pagination is implemented in both Express and React.`,
      <br />,
      <br />,
      `It taught me a lot of new stuff - how to implement the pagination,
				how to handle file uploads, and how to show different content
				based on auth status. I've also learned how to properly render
				without React-suspense.`,
      <br />,
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
]

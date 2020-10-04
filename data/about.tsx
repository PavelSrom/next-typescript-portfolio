/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
/* eslint-disable import/prefer-default-export */
import { AboutPage } from './types'

export const aboutPage: AboutPage = {
  shortIntro: {
    headline: 'Me talking about myself',
    text: [
      `
			I'm Pavel Srom, a MERN-stack web developer currently studying at UCN in
            Aalborg, Denmark. As you can see from the counter above, I have been doing web
            development for quite some time. My passion for creating web solutions led me
            to learn a ton of exciting technologies in a relatively short amount of time,
            and I'm still hungry for more.
			`,
      <br />,
      `
			Apart from web development, I enjoy an intensive workout session, czech candy,
			and a good latté. If you want to get to know me even more, feel free to scroll
			down for further information.
			`,
    ],
  },
  detailedIntro: [
    {
      headline: 'The beginnings',
      text: [
        `In 2013, I spent about 2,5 months in France and studied a local
				private school. I temporarily moved with my mom, hated
				everything at first, struggled a lot, but over time, I started
				getting used to it and was doing very well. As it turned out
				later, this was perhaps the defining experience for my future
				path.`,
      ],
    },
    {
      headline: 'The decision',
      text: [
        `A lot of things for me changed in early 2017 when I decided to
				learn English on my own, and finally got a somewhat clear
				picture of what I want to do in the future.`,
        <br />,
        <br />,
        `During the time, I also knew I want to study abroad and not in
				Czechia. I'm very grateful I made that decision back in the day,
				because it led me to gain a ton of experience with living and
				studying in Denmark. I've met a lot of new people and found out
				I can take care of myself in a foreign country.`,
      ],
    },
    {
      headline: 'The commitment',
      text: [
        `As soon as I started my studies in Denmark, I was introduced to
				a lot of things to work with. I didn't like to code at first,
				but I somehow embraced it over time and a few weeks later, I
				decided this is what I want to do for living, and I've been
				giving it my 100% ever since.`,
        <br />,
        <br />,
        `The journey hasn't always been just sunshine and rainbows,
				though - you have to get used to failing, and failing often,
				especially as a developer, but when you do, amazing things
				happen. I can now create almost anything from start to finish,
				and I get a sense of pride whenever I make something from an
				empty folder to a fully functional product.`,
      ],
    },
    {
      headline: 'The future',
      text: [
        `Web development is a constantly changing field, and if you don't
				keep up, you lose. I like that approach, however, because it
				doesn't let you settle. Some of the things I'd like to learn in
				the future are making native apps, serverless architecture, and
				maybe AI at some point.`,
        <br />,
        <br />,
        `I'm not sure if web development is something I want to do forever,
				though. It's definitely my north star for the next few years, but
				I might want to switch careers later on in life.`,
      ],
    },
  ],
}

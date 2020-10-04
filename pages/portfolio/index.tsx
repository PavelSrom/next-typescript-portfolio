import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { Button, Tag } from 'antd'
import { makeStyles } from '@material-ui/styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Theme } from '../../utils/theme'
import LineLength from '../../styleguide/line-length'
import ResponsiveContainer from '../../styleguide/responsive-container'
import { Headline, Subheadline, BodyText } from '../../styleguide/typography'
import { projects } from '../../data/projects'

const useStyles = makeStyles<Theme>(theme => ({
  bgBlue: {
    background: theme.color.lightblue,
  },
  bgGrey: {
    background: theme.color.lightgray,
  },
  img: {
    display: 'block',
    margin: '0 auto',
    maxWidth: 200,
    height: 'auto',
    cursor: 'pointer',
  },
  headline: {
    margin: '20px 0',
    textAlign: 'center',
  },
  subheadline: {
    margin: '32px 0 8px 0',
    fontWeight: 600,
    textAlign: 'center',
  },
  buttons: {
    margin: '40px auto 0 auto',
    maxWidth: 300,
    display: 'flex',
    justifyContent: 'space-between',
  },
  chipInner: {
    margin: 2,
    color: theme.color.primary,
    background: '#fff',
    border: `1px solid ${theme.color.primary}`,
  },
  chipBox: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const Portfolio: NextPage = () => {
  const classes = useStyles()

  return (
    <>
      {projects.map(({ imgSrc, headline, bodyText, techUsed, github, demo }, index) => (
        <section
          key={index}
          className={index % 2 === 0 ? classes.bgBlue : classes.bgGrey}
        >
          <ResponsiveContainer>
            <a
              style={{ cursor: 'default' }}
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LazyLoadImage
                className={classes.img}
                alt=""
                src={imgSrc}
                height={585}
                width={285}
              />
            </a>

            <LineLength narrow className={classes.lineLength}>
              <Headline className={classes.headline}>{headline}</Headline>
              {bodyText.map((text, idx) => (
                <BodyText key={idx}>{text}</BodyText>
              ))}
              <Subheadline className={classes.subheadline}>Technology used</Subheadline>
              <div className={classes.chipBox}>
                {techUsed.map(item => (
                  <div key={item}>
                    <Tag className={classes.chipInner}>{item}</Tag>
                  </div>
                ))}
              </div>
              <div className={classes.buttons}>
                <Link href={github}>
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <Button target="_blank" href={github} type="default">
                      View code
                    </Button>
                  </a>
                </Link>

                <Link href={demo}>
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <Button
                      target="_blank"
                      href={github}
                      type="primary"
                      style={{ color: '#fff' }}
                    >
                      View demo
                    </Button>
                  </a>
                </Link>
              </div>
            </LineLength>
          </ResponsiveContainer>
        </section>
      ))}
    </>
  )
}

export default Portfolio

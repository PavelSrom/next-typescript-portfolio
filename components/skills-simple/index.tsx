import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '../../utils/theme'
import { Subheadline, BodyText } from '../../styleguide/typography'
import LineLength from '../../styleguide/line-length'
import { skillsSimple } from '../../data/skills'

const useStyles = makeStyles<Theme>(theme => ({
  link: {
    display: 'block',
    margin: '0 auto',
  },
  imgLarge: {
    maxWidth: theme.spacing(24),
    height: 'auto',
  },
  imgSmall: {
    maxWidth: theme.spacing(16),
    height: 'auto',
  },
  item: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
  },
  subheadline: {
    marginTop: theme.spacing(2),
    fontWeight: 'bolder',
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
}))

const SkillsSimple: React.FC = () => {
  const classes = useStyles()

  return (
    <LineLength narrow>
      {skillsSimple.map(({ imgSrc, url, subheadline, bodyText }, index) => (
        <div key={index} className={classes.item}>
          <a
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            className={classes.link}
          >
            <img
              src={imgSrc}
              alt=""
              className={index === 0 ? classes.imgLarge : classes.imgSmall}
            />
          </a>
          <Subheadline className={classes.subheadline}>{subheadline}</Subheadline>
          <BodyText>{bodyText}</BodyText>
        </div>
      ))}
    </LineLength>
  )
}

export default SkillsSimple

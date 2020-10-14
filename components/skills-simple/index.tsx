import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '../../utils/theme'
import { Subheadline, BodyText } from '../../styleguide/typography'
import LineLength from '../../styleguide/line-length'
import { skillsSimple } from '../../data/skills'

const useStyles = makeStyles<Theme>(theme => ({
  img: {
    display: 'block',
    margin: '0 auto',
  },
  item: {
    marginTop: theme.spacing(10),
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
      {skillsSimple.map(({ imgSrc, subheadline, bodyText }, index) => (
        <div key={index} className={classes.item}>
          <LazyLoadImage
            src={imgSrc}
            alt=""
            width={192}
            height={192}
            className={classes.img}
          />
          <Subheadline className={classes.subheadline}>{subheadline}</Subheadline>
          <BodyText>{bodyText}</BodyText>
        </div>
      ))}
    </LineLength>
  )
}

export default SkillsSimple

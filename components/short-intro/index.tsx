import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ResponsiveContainer from '../../styleguide/responsive-container'
import LineLength from '../../styleguide/line-length'
import { Headline, Subheadline } from '../../styleguide/typography'
import { Theme } from '../../utils/theme'
import { aboutPage } from '../../data/about'

const useStyles = makeStyles<Theme>(theme => ({
  intro: {
    backgroundColor: theme.color.lightgray,
  },
  headline: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  img: {
    display: 'block',
    margin: '0 auto',
    borderRadius: '50%',
    marginBottom: 40,
  },
}))

const {
  shortIntro: { headline, text },
} = aboutPage

const ShortIntro: React.FC = () => {
  const classes = useStyles()

  return (
    <section className={classes.intro}>
      <ResponsiveContainer>
        <LazyLoadImage
          src="/images/meRounded.jpg"
          className={classes.img}
          width={256}
          height={256}
          alt=""
        />
        <LineLength>
          <Headline className={classes.headline}>{headline}</Headline>
          {text.map((item, index) =>
            typeof item === 'string' ? (
              <Subheadline key={index}>{item}</Subheadline>
            ) : (
              <React.Fragment key={index}>{item}</React.Fragment>
            )
          )}
        </LineLength>
      </ResponsiveContainer>
    </section>
  )
}

export default ShortIntro

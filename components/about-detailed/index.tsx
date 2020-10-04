import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Divider } from 'antd'
import ResponsiveContainer from '../../styleguide/responsive-container'
import LineLength from '../../styleguide/line-length'
import { Subheadline, BodyText } from '../../styleguide/typography'
import { Theme } from '../../utils/theme'
import { aboutPage } from '../../data/about'

const { detailedIntro } = aboutPage

const useStyles = makeStyles<Theme>(theme => ({
  about: {
    background: theme.color.lightblue,
  },
  subheadline: {
    textAlign: 'center',
    fontWeight: 'bolder',
    marginBottom: theme.spacing(2),
  },
  divider: {
    margin: `${theme.spacing(10)}px 0`,
    borderTopWidth: 2,
  },
}))

const AboutDetailed: React.FC = () => {
  const classes = useStyles()

  return (
    <section className={classes.about}>
      <ResponsiveContainer>
        <LineLength narrow>
          {detailedIntro.map(({ headline, text }, index) => (
            <React.Fragment key={headline}>
              <Subheadline className={classes.subheadline}>{headline}</Subheadline>
              {text.map((item, idx) => (
                <React.Fragment key={idx}>
                  {typeof item === 'string' ? <BodyText>{item}</BodyText> : item}
                </React.Fragment>
              ))}

              {index !== detailedIntro.length - 1 && (
                <Divider className={classes.divider} />
              )}
            </React.Fragment>
          ))}
        </LineLength>
      </ResponsiveContainer>
    </section>
  )
}

export default AboutDetailed

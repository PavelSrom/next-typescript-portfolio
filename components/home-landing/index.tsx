import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { makeStyles } from '@material-ui/styles'
import { Row, Col } from 'antd'
import { Theme } from '../../utils/theme'
import ResponsiveContainer from '../../styleguide/responsive-container'
import { Headline, Subheadline, BodyText } from '../../styleguide/typography'
import useResponsiveDesign from '../../utils/hooks'

type ThemeProps = {
  spacing: number
}

const useStyles = makeStyles<Theme, ThemeProps>(theme => ({
  landing: {
    background: theme.color.lightgray,
  },
  flex: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    textAlign: 'center',
    [theme.breakpoints.down.sm]: {
      paddingTop: ({ spacing }) => spacing,
    },
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  },
}))

const HomeLanding: React.FC = () => {
  const { spacing } = useResponsiveDesign()
  const classes = useStyles({ spacing })

  return (
    <section className={classes.landing}>
      <ResponsiveContainer noPadding>
        <Row>
          <Col xs={24} md={16}>
            <div className={classes.flex}>
              <Subheadline>I&apos;m Pavel. I&apos;m a</Subheadline>
              <Headline>Full-stack web developer</Headline>
              <BodyText>specializing on the MERN stack</BodyText>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <LazyLoadImage
              src="/images/landing.png"
              alt=""
              className={classes.img}
              height={700}
              width={525}
            />
          </Col>
        </Row>
      </ResponsiveContainer>
    </section>
  )
}

export default HomeLanding

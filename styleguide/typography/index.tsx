import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { Typography } from 'antd'
import { TextProps } from 'antd/lib/typography/Text'
import { TitleProps } from 'antd/lib/typography/Title'
import { Theme } from '../../utils/theme'

type ThemeProps = {
  color?: 'white'
  sub?: boolean
}

const useStyles = makeStyles<Theme, ThemeProps>(theme => ({
  headline: {
    fontSize: 48,
    fontWeight: 400,
    marginBottom: 0,
    [theme.breakpoints.down.md]: {
      fontSize: 36,
    },
  },
  subheadline: {
    display: 'block',
    fontSize: 24,
    fontWeight: 350,
  },
  bodyText: {
    color: ({ color }) => color && color,
    fontSize: ({ sub }) => (sub ? 12 : 18),
  },
}))

const { Text } = Typography

export const Headline: React.FC<TitleProps> = ({ children, className, ...rest }) => {
  const classes = useStyles({})

  return (
    <h1 {...rest} className={clsx(classes.headline, className)}>
      {children}
    </h1>
  )
}

export const Subheadline: React.FC<TextProps> = ({ children, className, ...rest }) => {
  const classes = useStyles({})

  return (
    <Text {...rest} className={clsx(classes.subheadline, className)}>
      {children}
    </Text>
  )
}

type BodyTextProps = TextProps & {
  color?: 'white' // others?
  sub?: boolean
}

export const BodyText: React.FC<BodyTextProps> = ({ children, color, sub, ...rest }) => {
  const classes = useStyles({ color, sub })

  return (
    <Text {...rest} className={classes.bodyText}>
      {children}
    </Text>
  )
}

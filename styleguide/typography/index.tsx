import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from 'antd'
import { TextProps } from 'antd/lib/typography/Text'
import { TitleProps } from 'antd/lib/typography/Title'

type ThemeProps = {
  color?: 'white'
  sub?: boolean
}

const useStyles = makeStyles<any, ThemeProps>(() => ({
  bodyText: {
    color: ({ color }) => color && color,
    fontSize: ({ sub }) => (sub ? 12 : 18),
  },
}))

const { Title, Text } = Typography

export const Headline: React.FC<TitleProps> = ({ children, ...rest }) => {
  return (
    <Title {...rest} level={1}>
      {children}
    </Title>
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

import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '../../utils/theme'
import { Headline, Subheadline } from '../../styleguide/typography'
import ResponsiveContainer from '../../styleguide/responsive-container'

const useStyles = makeStyles<Theme>(theme => ({
  dayCount: {
    backgroundColor: theme.color.lightblue,
    textAlign: 'center',
  },
}))

const DayCount: React.FC = () => {
  const classes = useStyles()

  const oneDay = 24 * 60 * 60 * 1000
  const start = new Date(2018, 9, 3)

  const thisDay = new Date().getDate()
  const thisMonth = new Date().getMonth() + 1
  const thisYear = new Date().getFullYear()

  const today = new Date(thisYear, thisMonth, thisDay)
  // @ts-ignore
  const diffDays = Math.round(Math.abs(((start - today) as number) / oneDay))

  return (
    <section className={classes.dayCount}>
      <ResponsiveContainer>
        <Headline style={{ fontSize: 80 }}>{diffDays}</Headline>
        <Subheadline>days since I started coding</Subheadline>
      </ResponsiveContainer>
    </section>
  )
}

export default DayCount

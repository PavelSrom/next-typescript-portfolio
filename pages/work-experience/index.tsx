import React from 'react'
import { NextPage } from 'next'
import { Tag, Divider } from 'antd'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '../../utils/theme'
import { workExperiences } from '../../data/experience'
import LineLength from '../../styleguide/line-length'
import ResponsiveContainer from '../../styleguide/responsive-container'
import { Headline, Subheadline, BodyText } from '../../styleguide/typography'

const useStyles = makeStyles<Theme>(theme => ({
  section: {
    background: theme.color.lightblue,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  chipInner: {
    marginTop: theme.spacing(1),
    color: theme.color.primary,
    background: '#fff',
    border: `1px solid ${theme.color.primary}`,
  },
  blockOfText: {
    marginTop: theme.spacing(4),
  },
  divider: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(5),
    height: 2,
    background: theme.color.primary,
  },
  stack: {
    paddingLeft: theme.spacing(2),
  },
}))

const WorkExperience: NextPage = () => {
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <ResponsiveContainer>
        {workExperiences.map(
          ({ title, chips, responsibilities, codebase, myTakeaways }, index) => (
            <LineLength key={title} narrow>
              {index !== 0 && <Divider className={classes.divider} />}

              <div className={classes.header}>
                <Headline style={{ textAlign: 'center' }}>{title}</Headline>
                {Object.values(chips).map(chip => (
                  <Tag key={chip} className={classes.chipInner}>
                    {chip}
                  </Tag>
                ))}
              </div>

              <div className={classes.blockOfText}>
                <Subheadline strong>My responsibilities</Subheadline>
                <BodyText>{responsibilities}</BodyText>
              </div>

              <div className={classes.blockOfText}>
                <Subheadline strong>About the codebase</Subheadline>
                <BodyText>{codebase.text}</BodyText>

                <div style={{ marginTop: 32 }}>
                  <BodyText>Tech stack</BodyText>
                  <ul className={classes.stack}>
                    {codebase.stack.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={classes.blockOfText}>
                <Subheadline strong>My takeaways</Subheadline>
                <BodyText>{myTakeaways}</BodyText>
              </div>
            </LineLength>
          )
        )}
      </ResponsiveContainer>
    </section>
  )
}

export default WorkExperience

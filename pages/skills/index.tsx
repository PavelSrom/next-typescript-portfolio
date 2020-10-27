import React, { useState } from 'react'
import { NextPage } from 'next'
import { Switch } from 'antd'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '../../utils/theme'
import { Headline, Subheadline, BodyText } from '../../styleguide/typography'
import ResponsiveContainer from '../../styleguide/responsive-container'

import ServiceTeaser from '../../components/service-teaser'
import SkillsSimple from '../../components/skills-simple'
import SkillsDetailed from '../../components/skills-detailed'
import Certificates from '../../components/certificates'

const useStyles = makeStyles<Theme>(theme => ({
  section: {
    backgroundColor: theme.color.lightblue,
  },
  switch: {
    marginTop: 20,
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

const Skills: NextPage = () => {
  const classes = useStyles()
  const [detailedVisible, setDetailedVisible] = useState<boolean>(false)

  return (
    <>
      <ServiceTeaser />
      <section className={classes.section}>
        <ResponsiveContainer>
          <div className={classes.flexColumn}>
            <Headline>Technology I work with</Headline>
            <Subheadline style={{ marginBottom: 32 }}>
              Explore the stack and technologies I use!
            </Subheadline>{' '}
            <Switch
              checked={detailedVisible}
              onChange={() => setDetailedVisible(!detailedVisible)}
            />
            <BodyText>View in detail</BodyText>
          </div>
          {detailedVisible ? <SkillsDetailed /> : <SkillsSimple />}
        </ResponsiveContainer>
      </section>
      <Certificates />
    </>
  )
}

export default Skills

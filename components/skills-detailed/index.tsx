import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Collapse, Row } from 'antd'
import { DesktopOutlined, DatabaseOutlined } from '@ant-design/icons'
import { Theme } from '../../utils/theme'
import { Subheadline } from '../../styleguide/typography'
import { frontEnd, backEnd } from '../../data/skills'
import {
  frontEnd as frontEndLabels,
  backEnd as backEndLabels,
} from '../../data/translations'
import SkillItem from '../skill-item'

const useStyles = makeStyles<Theme>(theme => ({
  icon: {
    display: 'block',
    margin: '0 auto',
    fontSize: 70,
    color: theme.color.primary,
  },
  subheadline: {
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bolder',
    color: theme.color.primary,
  },
  blue: {
    color: theme.color.primary,
  },
}))

const { Panel } = Collapse

const SkillsDetailed: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <div style={{ marginTop: 80 }}>
        <DesktopOutlined className={classes.icon} />
        <Subheadline className={classes.subheadline}>Front-end</Subheadline>

        {Object.keys(frontEnd).map((area, index) => (
          <Collapse key={index}>
            <Panel
              key={index}
              header={
                <Subheadline>
                  {frontEndLabels[area].label === area && frontEndLabels[area].title}
                </Subheadline>
              }
            >
              <Row gutter={[64, 64]} style={{ marginBottom: 0 }}>
                {frontEnd[area].map((skill, idx) => (
                  <SkillItem key={idx} {...skill} />
                ))}
              </Row>
            </Panel>
          </Collapse>
        ))}
      </div>

      <div style={{ marginTop: 80 }}>
        <DatabaseOutlined className={classes.icon} />
        <Subheadline className={classes.subheadline}>Back-end</Subheadline>

        {Object.keys(backEnd).map((area, index) => (
          <Collapse key={index}>
            <Panel
              key={index}
              header={
                <Subheadline>
                  {backEndLabels[area].label === area && backEndLabels[area].title}
                </Subheadline>
              }
            >
              <Row gutter={[64, 64]} style={{ marginBottom: 0 }}>
                {backEnd[area].map((skill, idx) => (
                  <SkillItem key={idx} {...skill} />
                ))}
              </Row>
            </Panel>
          </Collapse>
        ))}
      </div>
    </>
  )
}

export default SkillsDetailed

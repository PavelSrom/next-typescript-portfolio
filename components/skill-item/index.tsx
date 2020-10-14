import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Tag, Col } from 'antd'
import { Skill } from '../../data/types'
import { Theme } from '../../utils/theme'
import { BodyText } from '../../styleguide/typography'

const useStyles = makeStyles<Theme>(theme => ({
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  headline: {
    display: 'block',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  additional: {
    marginTop: 16,
  },
  chip: {
    margin: 2,
    backgroundColor: '#fff',
    border: `1px solid ${theme.color.primary}`,
    color: theme.color.primary,
  },
}))

const SkillItem: React.FC<Skill> = ({ name, description, additional }) => {
  const classes = useStyles()

  return (
    <Col xs={24} sm={12} style={{ paddingBottom: 0 }}>
      <div className={classes.flexColumn}>
        <BodyText className={classes.headline}>{name}</BodyText>
        <BodyText className={classes.text}>{description}</BodyText>
        {additional && (
          <div className={classes.flex}>
            {additional.map((item, index) => (
              <Tag key={index} className={classes.chip}>
                {item}
              </Tag>
            ))}
          </div>
        )}
      </div>
    </Col>
  )
}

export default SkillItem

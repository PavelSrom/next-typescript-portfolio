import React from 'react'
import { Tooltip } from 'antd'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '../../utils/theme'
import { certificates } from '../../data/certificates'
import ResponsiveContainer from '../../styleguide/responsive-container'
import { Headline, Subheadline } from '../../styleguide/typography'

const useStyles = makeStyles<Theme>(theme => ({
  certificates: {
    textAlign: 'center',
    backgroundColor: theme.color.lightgray,
  },
  img: {
    maxWidth: 80,
  },
}))

const Certificates: React.FC = () => {
  const classes = useStyles()

  return (
    <section className={classes.certificates}>
      <ResponsiveContainer>
        <Headline>I have done these courses</Headline>
        {certificates.map(({ name, link }, index) => (
          <div key={index} style={{ marginTop: 48 }}>
            <Tooltip placement="top" title="View certificate in new tab">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src="/images/udemy.png" alt="" className={classes.img} />
              </a>
            </Tooltip>
            <Subheadline>{name}</Subheadline>
          </div>
        ))}
      </ResponsiveContainer>
    </section>
  )
}

export default Certificates

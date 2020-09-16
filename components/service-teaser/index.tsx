import React from 'react'
import { Row, Col } from 'antd'
import {
  RiseOutlined,
  DatabaseOutlined,
  DesktopOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '../../utils/theme'
import ResponsiveContainer from '../../styleguide/responsive-container'
import { Headline, Subheadline, BodyText } from '../../styleguide/typography'
import useResponsiveDesign from '../../utils/hooks'

const useStyles = makeStyles<Theme>(theme => ({
  section: {
    background: theme.color.lightblue,
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(2),
  },
  icon: {
    justifySelf: 'center',
    fontSize: theme.spacing(8),
    color: theme.color.primary,
  },
  subheadline: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    textAlign: 'center',
  },
}))

const items = [
  {
    headline: 'Taking care of everything',
    description: `You no longer need an interface guy, a server guy, and a
		database guy. I take care of everything, from an empty folder to
		deployment.`,
    icon: CheckCircleOutlined,
  },
  {
    headline: 'Complex user interfaces',
    description: `I build products that work and look great on any device,
		regardless of the design and interactivity of choice.`,
    icon: DesktopOutlined,
  },
  {
    headline: 'Behind-the-scenes logic',
    description: `I make sure your data is safe, and that your user interface gets
		exactly what it needs, at any time.`,
    icon: DatabaseOutlined,
  },
  {
    headline: 'Growth and maintenance',
    description: `My code is easy to scale and maintain. I follow the best
		practices whenever I can, and use only modern syntax.`,
    icon: RiseOutlined,
  },
]

type Props = {
  withButton?: boolean
}

const ServiceTeaser: React.FC<Props> = ({ withButton }) => {
  const classes = useStyles()
  const { spacing } = useResponsiveDesign()

  return (
    <section className={classes.section}>
      <ResponsiveContainer>
        <Headline style={{ textAlign: 'center', marginBottom: spacing }}>
          What can I offer you?
        </Headline>

        <Row gutter={[32, 32]}>
          {items.map(({ headline, description, icon: Icon }) => (
            <Col key={headline} xs={24} md={12}>
              <div className={classes.gridItem}>
                <Icon className={classes.icon} />
                <Subheadline strong className={classes.subheadline}>
                  {headline}
                </Subheadline>
                <BodyText>{description}</BodyText>
              </div>
            </Col>
          ))}
        </Row>
      </ResponsiveContainer>
    </section>
  )
}

export default ServiceTeaser

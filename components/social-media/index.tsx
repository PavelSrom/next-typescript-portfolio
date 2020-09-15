import React from 'react'
import { Button, Tooltip } from 'antd'
import { GithubOutlined, LinkedinOutlined, MediumOutlined } from '@ant-design/icons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  iconBox: {
    marginBottom: 40,
    '& > * + *': {
      marginLeft: 16,
    },
  },
}))

type Props = {
  url: string
  title: string
  icon: JSX.Element
}

const IconButton: React.FC<Props> = ({ url, title, icon }) => (
  <Tooltip placement="top" title={title}>
    <Button
      type="primary"
      icon={
        <a href={url} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      }
    />
  </Tooltip>
)

const icons: Props[] = [
  {
    title: 'GitHub',
    url: 'https://github.com/PavelSrom',
    icon: <GithubOutlined />,
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pavel-srom-3011a8171',
    icon: <LinkedinOutlined />,
  },
  {
    title: 'Medium',
    url: 'https://medium.com/@srompavel98',
    icon: <MediumOutlined />,
  },
]

const SocialMedia: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.iconBox}>
      {icons.map((content, index) => (
        <IconButton key={index} {...content} />
      ))}
    </div>
  )
}
export default SocialMedia

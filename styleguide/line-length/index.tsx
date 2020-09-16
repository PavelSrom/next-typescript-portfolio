import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '../../utils/theme'

type ThemeProps = {
  narrow?: boolean
}

const useStyles = makeStyles<Theme, ThemeProps>(() => ({
  lineLength: {
    maxWidth: ({ narrow }) => (narrow ? 640 : 768),
    margin: '0 auto',
  },
}))

type Props = React.HTMLAttributes<HTMLDivElement> & {
  narrow?: boolean
}

const LineLength: React.FC<Props> = ({ children, narrow, ...rest }) => {
  const classes = useStyles({ narrow })

  return (
    <div {...rest} className={classes.lineLength}>
      {children}
    </div>
  )
}

export default LineLength

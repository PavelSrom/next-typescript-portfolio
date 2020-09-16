import React from 'react'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import { Theme, DeviceSize } from '../../utils/theme'

type ThemeProps = {
  noPadding?: boolean
  maxWidth?: DeviceSize
}

const useStyles = makeStyles<Theme, ThemeProps>(theme => ({
  container: {
    margin: '0 auto',
    width: '100%',
    maxWidth: ({ maxWidth }) => {
      switch (maxWidth) {
        case 'xs':
          return 600
        case 'sm':
          return 960
        case 'md':
          return 1280
        case 'lg':
          return 1920
        case 'xl':
          return 2560
        default:
          return 1280
      }
    },
    padding: ({ noPadding }) => (noPadding ? 0 : `${theme.spacing(10)}px 0`),
    [theme.breakpoints.down.md]: {
      padding: ({ noPadding }) =>
        noPadding
          ? `0 ${theme.spacing(3)}px`
          : `${theme.spacing(5)}px ${theme.spacing(3)}px`,
    },
    [theme.breakpoints.down.xs]: {
      padding: ({ noPadding }) =>
        noPadding
          ? `0 ${theme.spacing(2)}px`
          : `${theme.spacing(5)}px ${theme.spacing(2)}px`,
    },
  },
}))

type Props = ThemeProps & React.HTMLAttributes<HTMLElement>

// work in progress
const ResponsiveContainer: React.FC<Props> = ({
  children,
  noPadding,
  maxWidth,
  ...rest
}) => {
  const classes = useStyles({ noPadding, maxWidth })

  return (
    // @ts-ignore
    <div {...rest} className={clsx(rest.className, classes.container)}>
      {children}
    </div>
  )
}

export default ResponsiveContainer

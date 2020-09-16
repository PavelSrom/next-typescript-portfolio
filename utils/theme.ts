export type DeviceSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type Theme = {
  color: Record<'primary' | 'lightblue' | 'lightgray', string>
  breakpoints: Record<'down' | 'up', Record<DeviceSize, string>>
  spacing: (level: number) => number
}

export const theme: Theme = {
  color: {
    primary: '#2196F3',
    lightblue: '#E3F2FD',
    lightgray: '#FAFAFA',
  },
  breakpoints: {
    down: {
      xs: '@media (max-width: 599px)',
      sm: '@media (max-width: 959px)',
      md: '@media (max-width: 1279px)',
      lg: '@media (max-width: 1919px)',
      xl: '@media (min-width: 1920px)',
    },
    up: {
      xs: '@media (min-width: 0px)',
      sm: '@media (min-width: 600px)',
      md: '@media (min-width: 960px)',
      lg: '@media (min-width: 1280px)',
      xl: '@media (min-width: 1920px)',
    },
  },
  spacing: level => level * 8,
}

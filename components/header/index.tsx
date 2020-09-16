import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, Button, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '../../utils/theme'
import ResponsiveContainer from '../../styleguide/responsive-container'

const useStyles = makeStyles<Theme>(theme => ({
  header: {
    background: '#fff',
    boxShadow: '0 2px 8px #f0f1f2',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 90,
    width: '100%',
    height: 66,
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    height: '100%',
    justifySelf: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  desktopNav: {
    [theme.breakpoints.down.sm]: {
      display: 'none',
    },
  },
  mobileNav: {
    display: 'none',
    [theme.breakpoints.down.sm]: {
      display: 'block',
    },
  },
  icon: {
    color: theme.color.primary,
  },
}))

const links = ['/about', '/portfolio', '/skills']

const Footer: React.FC = () => {
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

  return (
    <>
      <header className={classes.header}>
        <ResponsiveContainer noPadding className={classes.container}>
          <Link href="/">
            <a href="/">
              <p className="logo">{'<Pavel />'}</p>
            </a>
          </Link>

          <nav className={classes.desktopNav}>
            <Menu mode="horizontal" style={{ display: 'flex' }}>
              {links.map(link => (
                <Menu.Item key={link}>
                  <Link href={link}>
                    <a href={link}>{link.slice(1).toUpperCase()}</a>
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          </nav>

          <nav className={classes.mobileNav}>
            <Button
              icon={<MenuOutlined className={classes.icon} />}
              onClick={() => setDrawerOpen(true)}
            />
          </nav>

          <Drawer
            visible={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            title="Menu"
            placement="right"
          >
            <p>Burger menu</p>
          </Drawer>
        </ResponsiveContainer>

        <style jsx>{`
          .logo {
            font-family: 'Caveat', cursive;
            font-size: 50px;
            line-height: 50px;
            margin: 0;
          }
        `}</style>
      </header>

      <div style={{ marginBottom: 66 }} />
    </>
  )
}

export default Footer

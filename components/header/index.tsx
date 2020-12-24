import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
    height: 48,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up.md]: {
      padding: `0 ${theme.spacing(4)}px`,
    },
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

const links: string[] = ['/about', '/work-experience', '/portfolio', '/skills']

const Footer: React.FC = () => {
  const classes = useStyles()
  const router = useRouter()
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [currentLink, setCurrentLink] = useState<string>('/')

  // set active tab on refresh
  useEffect(() => {
    setCurrentLink(router.pathname)
  }, [router.pathname])

  return (
    <>
      <header className={classes.header}>
        <ResponsiveContainer noPadding maxWidth="xl" className={classes.container}>
          <Link href="/">
            <a href="/" onClick={() => setCurrentLink('/')}>
              <p className="logo">{'<Pavel />'}</p>
            </a>
          </Link>

          <nav className={classes.desktopNav}>
            <Menu
              mode="horizontal"
              selectedKeys={[currentLink]}
              onClick={e => setCurrentLink(e.key as string)}
              style={{ display: 'flex' }}
            >
              {links.map(link => (
                <Menu.Item key={link}>
                  <Link href={link}>
                    <a href={link}>{link.slice(1).toUpperCase().split('-').join(' ')}</a>
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
            bodyStyle={{ padding: 0 }}
          >
            <Menu
              mode="inline"
              selectedKeys={[currentLink]}
              onClick={e => setCurrentLink(e.key as string)}
            >
              {links.map(link => (
                <Menu.Item key={link} onClick={() => setDrawerOpen(false)}>
                  <Link href={link}>
                    <a href={link}>{link.slice(1).toUpperCase().split('-').join(' ')}</a>
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
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

      <div style={{ marginBottom: 48 }} />
    </>
  )
}

export default Footer

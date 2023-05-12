import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import AppMenuItem from './AppMenuItem'

const appMenuItems = [
  {
    "key": "mammal",
    "label": "Mammal",
    "nodes": [
      {
        "key": "canidae",
        "label": "Canidae",
        "nodes": [
          {
            "key": "dog",
            "label": "Dog",
            "nodes": [],
            "url": "https://www.google.com/search?q=dog"
          },
          {
            "key": "fox",
            "label": "Fox",
            "nodes": [],
            "url": "https://www.google.com/search?q=fox"
          },
          {
            "key": "wolf",
            "label": "Wolf",
            "nodes": [],
            "url": "https://www.google.com/search?q=wolf"
          }
        ],
        "url": "https://www.google.com/search?q=canidae"
      }
    ],
    "url": "https://www.google.com/search?q=mammal"
  },
  {
    "key": "reptile",
    "label": "Reptile",
    "nodes": [
      {
        "key": "squamata",
        "label": "Squamata",
        "nodes": [
          {
            "key": "lizard",
            "label": "Lizard",
            "url": "https://www.google.com/search?q=lizard"
          },
          {
            "key": "snake",
            "label": "Snake",
            "url": "https://www.google.com/search?q=snake"
          },
          {
            "key": "gekko",
            "label": "Gekko",
            "url": "https://www.google.com/search?q=gekko"
          }
        ],
        "url": "https://www.google.com/search?q=squamata"
      }
    ],
    "url": "https://www.google.com/search?q=reptile"
  }
]

const AppMenu: React.FC = () => {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      <Typography className={classes.sideNavHeading} variant="h4" component="h4">SideNav</Typography>
      {appMenuItems.map((item) => (
        <AppMenuItem {...item} key={item.key} />
      ))}
    </List>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    sideNavHeading: {
      padding: 24,
      paddingLeft: 48,
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

export default AppMenu

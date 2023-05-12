import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import IconButton from "@material-ui/core/IconButton"
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link';
import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'

// React runtime PropTypes
export const AppMenuItemPropTypes = {
  key: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  nodes: PropTypes.array,
}

type AppMenuItemPropTypes = PropTypes.InferProps<typeof AppMenuItemPropTypes>
type AppMenuItemPropsWithoutNodes = Omit<AppMenuItemPropTypes, 'nodes'>

// Improve child items declaration
export type AppMenuItemProps = AppMenuItemPropsWithoutNodes & {
  nodes?: AppMenuItemProps[]
}

const AppMenuItem: React.FC<AppMenuItemProps> = props => {
  const { label, url, nodes = [] } = props
  const classes = useStyles()
  const isExpandable = nodes && nodes.length > 0
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }

  const MenuItemRoot = (
    <ListItem className={classes.menuItem} >
      {/* Display an icon if any */}
      <Checkbox className={classes.checkbox} />
      <Link className={classes.link} underline="none" href={url} target="_blank" rel="noopener noreferrer">
        <ListItemText primary={label} className={classes.listItemText} />
      </Link>

      {/* Display the expand menu if the item has children */}
      <IconButton onClick={handleClick}>
        {isExpandable && !open && <IconExpandMore className={classes.icon} />}
        {isExpandable && open && <IconExpandLess className={classes.icon} />}
      </IconButton>

    </ListItem>
  )

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} className={classes.collapsePadding} timeout="auto" unmountOnExit>
      <Divider className={classes.divider} />
      <List component="div" disablePadding>
        {nodes.map((item) => (
          <AppMenuItem {...item} key={item.key} />
        ))}
      </List>
    </Collapse>
  ) : null

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  )
}

const useStyles = makeStyles(theme =>
  createStyles({
    collapsePadding: {
      paddingLeft: 16,
    },
    icon: {
      color: '#fff'
    },
    divider: {
      backgroundColor: 'rgb(255 255 255 / 40%)',
    },
    checkbox: {
      width: 16,
      height: 12,
      padding: 6,
      color: 'white',
      '&.MuiCheckbox-colorSecondary.Mui-checked': {
        backgroundColor: 'white',
        color: 'green !important',
      }
    },
    link: {
      width: '100%',
      paddingLeft: 16,
    },
    listItemText: {
      paddingLeft: 0,
      color: '#fff',
    },
    menuItem: {
      '&.active': {
        background: 'rgba(0, 0, 0, 0.08)',
        '& .MuiListItemIcon-root': {
          color: '#fff',
        },
      },
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

export default AppMenuItem

import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

export default function SideNavigation() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List className="font-thin text-slate-900 tracking-tighter uppercase">
        <ListItem key="seitenAnfang" disablePadding className="mt-8 px-2">
          <a href="#seitenAnfang">Seitenanfang</a>
        </ListItem>
        <ListItem
          key="emissionsVergleich"
          disablePadding
          className="mt-12 px-2"
        >
          <a href="#emissionsVergleich">CO₂ Emissionsvergleich</a>
        </ListItem>
        <ListItem
          key="rechtlicheHinweise"
          disablePadding
          className="mt-12 px-2"
        >
          <a href="#rechtlicheHinweise">Rechtliche Hinweise</a>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <nav
      className="fixed top-2 xl:top-20 ltr:left-2 rtl:right-2 "
      aria-label="page navigation"
    >
      <div className="hidden xl:block 2xl:text-xl font-thin text-slate-900 tracking-tighter uppercase">
        <ul>
          <li className="hover:text-slate-500">
            <a href="#seitenAnfang">Seitenanfang</a>
          </li>
          <li className="mt-12 hover:text-slate-500">
            <a href="#emissionsVergleich">CO₂ Emissionsvergleich</a>
          </li>
          <li className="mt-12 hover:text-slate-500">
            <a href="#rechtlicheHinweise">Rechtliche Hinweise</a>
          </li>
        </ul>
      </div>
      <div className="xl:hidden">
        <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
          anchor={document.documentElement.dir === 'rtl' ? 'right' : 'left'}
        >
          {DrawerList}
        </Drawer>
      </div>
    </nav>
  )
}

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import Hidden from '@mui/material/Hidden';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setOpenDrawer(open);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Hidden mdUp>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
            <List>
              <ListItem button onClick={toggleDrawer(false)}>
                <ListItemText primary="Link 1" />
              </ListItem>
              <ListItem button onClick={toggleDrawer(false)}>
                <ListItemText primary="Link 2" />
              </ListItem>
              <ListItem button onClick={toggleDrawer(false)}>
                <ListItemText primary="Link 3" />
              </ListItem>
              <ListItem button onClick={toggleDrawer(false)}>
                <ListItemText primary="Link 4" />
              </ListItem>
              <ListItem button onClick={toggleDrawer(false)}>
                <ListItemText primary="Link 5" />
              </ListItem>
            </List>
          </Drawer>
        </Hidden>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          Logo
        </Typography>
        <Hidden smDown>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h6" component="div" sx={{ mx: 2 }}>
              Link 1
            </Typography>
            <Typography variant="h6" component="div" sx={{ mx: 2 }}>
              Link 2
            </Typography>
            <Typography variant="h6" component="div" sx={{ mx: 2 }}>
              Link 3
            </Typography>
            <Typography variant="h6" component="div" sx={{ mx: 2 }}>
              Link 4
            </Typography>
            <Typography variant="h6" component="div" sx={{ mx: 2 }}>
              Link 5
            </Typography>
          </div>
        </Hidden>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Hidden smDown>
            <IconButton color="inherit" aria-label="search">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="language">
              <LanguageIcon />
            </IconButton>
          </Hidden>
          <Hidden mdUp>
            <IconButton color="inherit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Hidden>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
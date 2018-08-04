import React, { Component } from 'react';
import Home from './components/Home';
import Item from './components/Item';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mailFolderListItems, otherMailFolderListItems } from './components/tileData';

import './assets/css/layout.css';
import './assets/css/themes/blue.css';
import './assets/css/media.css';

class App extends Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    let components = {
      home: Home,
      item: Item,
    };
    const TagName = components[this.props.location.pathname.replace('/', '')];
    return (
      <div id="root">
        <AppBar >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              onClick={this.handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>Mini variant drawer</Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.open} >
          <div>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mailFolderListItems}</List>
          <Divider />
          <List>{otherMailFolderListItems}</List>
        </Drawer>
        <div className="main">
          <TagName />

          <div className="bg"></div>
        </div>
      </div>
    );
  }
}
export default App;
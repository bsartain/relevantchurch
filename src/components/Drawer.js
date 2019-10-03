import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';

import { scrollAppBar } from "../utilities/index";
import { Link } from 'react-router-dom';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: -10,
  },
};

class TemporaryDrawer extends React.Component {

  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  componentDidMount(){
    scrollAppBar()
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['welcome', 'gospel', 'about', 'faith', 'leadership'].map((text) => (
            <ListItem button key={text}>
              <Link to={text === 'welcome' ? `/` : `/${text}`}><ListItemText primary={text} /></Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['sermons', 'devotional', 'give', 'bulletin'].map((text, index) => (
            <ListItem button key={text}>
              <Link to={text === 'welcome' ? `/` : `/${text}`}><ListItemText primary={text} /></Link>
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <AppBar position="fixed" className="app-bar-dynamic-transparent">
            <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" className="logo-grow">
                <div className="logo-container-white"></div>
            </Typography>
            <div className="nav-icons">
              <Link to={'/devotional'}><i className="material-icons">book</i></Link>
              <Link to={'/sermons'}><i className="material-icons">mic</i></Link>
            </div>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon onClick={this.toggleDrawer('right', true)} fontSize="large"/>
            </IconButton>
            </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
import React from 'react';
import {
  AppBar, Toolbar, Typography, Grid
} from '@material-ui/core';
import './TopBar.css';

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
        <Grid container justify="space-between">
          <Typography variant="h5" align="left" color="inherit">
              Ibrahim 
          </Typography>
          <Typography variant="h5" align="right" color="inherit">
             {this.context.title}
          </Typography>
</Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;

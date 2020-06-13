import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

function TemporaryDrawer(props) {
  const classes = useStyles();

  const list = () => (
    <div
      className={ classes.list }
      role="presentation"
      onClick={ () => { props.setDrawerOpen(false); } }
      onKeyDown={ () => { props.setDrawerOpen(false); } }
    >
      <List>
        <ListItem button onClick={ () => { props.history.push("/"); } }>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <React.Fragment key={'left'}>
        <Drawer open={ props.drawerOpen } onClose={ () => { props.setDrawerOpen(false); } }>
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}


export default withRouter(TemporaryDrawer);
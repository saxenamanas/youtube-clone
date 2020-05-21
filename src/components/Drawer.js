import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


import HomeIcon from '@material-ui/icons/Home';
import { Toolbar, Typography, ListItemAvatar } from '@material-ui/core';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

import avatar1 from '../assets/avatar1.jpeg';

const useStyles = makeStyles(theme=>({
    drawer: {
        width: 240,
        flexShrink: 0,
      },
      drawerPaper: {
        width: 240,
      },
      drawerContainer: {
        overflow: 'auto',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      listText:{
          fontSize:"0.9em",
          fontWeight:600,
          fontFamily:'Roboto'
      },
      listItem:{
          "&:hover":{
              backgroundColor:"#f8f8f8"
          }
      },
      selected:{
          backgroundColor:"#d9d9d9",
          "&:hover":{
            backgroundColor:"#cccccc"
        },
        fontWeight:"1000"
      },
      subText:{
          fontFamily:'Roboto',
          fontWeight:700,
          fontSize:"0.9em",
          color:"#606060",
          marginLeft:"1em"
      },
      avatar:{
          height: theme.spacing(3.5),
          width: theme.spacing(3.5)
      }
      
}))

const SidePanel = ()=>{
    const classes = useStyles();
    return(
        <React.Fragment>
            <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List style={{paddingTop:"1px"}}>
              <ListItem className={classes.selected} button key="Home">
                <ListItemIcon><HomeIcon style={{marginLeft:"0.5em",color:"#f00"}} ></HomeIcon></ListItemIcon>
                <ListItemText disableTypography className={classes.listText} primary="Home" />
              </ListItem>
              <ListItem button key="Trending">
                <ListItemIcon><WhatshotIcon style={{marginLeft:"0.5em"}} fontSize="small"></WhatshotIcon></ListItemIcon>
                <ListItemText disableTypography className={classes.listText} primary="Trending" />
              </ListItem>
              <ListItem button key="Subscriptions">
                <ListItemIcon><SubscriptionsIcon  style={{marginLeft:"0.5em"}}></SubscriptionsIcon></ListItemIcon>
                <ListItemText disableTypography className={classes.listText} primary="Subscriptions" />
              </ListItem>
          </List>
          <Divider />
          <List>
                <ListItem button key="Library">
                    <ListItemIcon><VideoLibraryIcon style={{marginLeft:"0.5em"}}></VideoLibraryIcon></ListItemIcon>
                    <ListItemText disableTypography className={classes.listText} primary="Library" />
                </ListItem>
                <ListItem button key="History">
                    <ListItemIcon><HistoryIcon style={{marginLeft:"0.5em"}}></HistoryIcon></ListItemIcon>
                    <ListItemText disableTypography className={classes.listText} primary="History" />
                </ListItem>
                <ListItem button key="Your Videos">
                    <ListItemIcon><AddToQueueIcon style={{marginLeft:"0.5em"}}></AddToQueueIcon></ListItemIcon>
                    <ListItemText disableTypography className={classes.listText} primary="Your Videos" />
                </ListItem>
                <ListItem button key="Watcher Later">
                    <ListItemIcon><WatchLaterIcon style={{marginLeft:"0.5em"}}></WatchLaterIcon></ListItemIcon>
                    <ListItemText disableTypography className={classes.listText} primary="Watch Later" />
                </ListItem>
                <ListItem button key="Liked Videos">
                    <ListItemIcon><ThumbUpAltIcon style={{marginLeft:"0.5em"}}></ThumbUpAltIcon></ListItemIcon>
                    <ListItemText disableTypography className={classes.listText} primary="Liked Videos" />
                </ListItem>
                <ListItem button key="My Playlists">
                    <ListItemIcon><PlaylistPlayIcon style={{marginLeft:"0.5em"}}></PlaylistPlayIcon></ListItemIcon>
                    <ListItemText disableTypography className={classes.listText} primary="My Playlists" />
                </ListItem>
          </List>
          <Divider/>
          <ListItem>
              <ListItemText disableTypography className={classes.subText} primary="SUBSCRIPTIONS"></ListItemText>
          </ListItem>
          <List style={{padding:0}}>
              <ListItem button key="avt">
                  <ListItemAvatar>
                  <Avatar className={classes.avatar}
                        alt="avt"
                        src={avatar1}
                        style={{marginLeft:"0.5em"}}
                     />
                  </ListItemAvatar>
                  <ListItemText disableTypography className={classes.listText} primary="Mr Bean"></ListItemText>
              </ListItem>
          </List>
        </div>
      </Drawer>
        </React.Fragment>
    )
}

export default SidePanel;
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { Toolbar } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import {deepOrange} from '@material-ui/core/colors'


import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

import logo from '../assets/logo.jpg'

const useStyles = makeStyles(theme=>({
    logo:{
        "&:hover":{
            background:"transparent"
        },
        marginLeft:"1em"
    },
    inputField:{
        fontSize:"1.1em",
        fontWeight:400,
        paddingLeft:"0.5em",
        paddingTop:"0.2em",
        paddingBottom:"0.2em",
        width:"25em"
    },
    searchButton:{
        backgroundColor:"#f8f8f8",
        borderRadius:0,
        // borderColor:"#d3d3d3",
        border: [
            [1, 'solid', '#d3d3d3']
          ],
    },
    avatar:{
        backgroundColor:deepOrange[500]
    }
}))

const Header = ()=>{
    const classes = useStyles();
    return(
        <React.Fragment>
            <AppBar color="transparent" position="fixed">
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" className={classes.menuButton} color="transparent" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Button style={{padding:0,marginRight:"15em"}}>
                        <img src={logo} className={classes.logo} alt="logo" style={{width:"6em" ,height:"3em"}}></img>
                    </Button>
                    <input placeholder="Search" className={classes.inputField}></input>
                    <Button borderColor="#d3d3d3" className={classes.searchButton}>
                        <SearchIcon fontSize="small" ></SearchIcon>
                    </Button>
                    <IconButton style={{marginLeft:"auto"}}>
                        <VideoCallIcon/>
                    </IconButton>
                    <IconButton>
                        <AppsIcon/>
                    </IconButton>
                    <IconButton>
                        <NotificationsIcon></NotificationsIcon>
                    </IconButton>
                    <IconButton>
                        <Avatar className={classes.avatar}>M</Avatar>
                    </IconButton>
                </Toolbar>
            </AppBar>
    </React.Fragment>
    )
}

export default Header;
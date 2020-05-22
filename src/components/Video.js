import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const useStyles = makeStyles(theme=>({
    mainCard:{
        maxWidth:"20em",
        height:"18em",
        backgroundColor:"#f8f8f8"
    },
    media:{
        height:"13em",
        width:"22em"
    },
    avat:{
        height:"0.8em",
        width:"0.8em",
    },
    content:{
        backgroundColor:"#f8f8f8",
        margin:"0.5em"
    },
    videoName:{
        fontWeight:"bold",
        fontSize:"1rem",
        fontFamily:"Roboto"
    },
    author:{
        fontFamily:"Roboto",
        color:"#606060",
        fontWeight:"700",
        fontSize:"0.9em",
        lineHeight:"1.2em"
    }
}))

const Video = (props)=>{
    const classes = useStyles();
    return(
        <Grid className={classes.content} item>
            <Grid  container spacing={1} direction="column">
                <Grid item>
                    <Button style={{padding:0}} disableRipple>
                    <img src={props.image} alt="img" className={classes.media}></img>
                    </Button>
                </Grid>
                <Grid item>
                    <Grid container spacing={2} direction="row">
                        <Grid item>
                            <Grid container direction="column">
                                <Grid item>
                                        <Avatar src={props.avatar} alt="avat"></Avatar>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column">
                                <Grid style={{display:"wrap"}} item>
                                   <span className={classes.videoName}>{props.heading}</span>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.author} style={{marginTop:"0.5em"}} variant="subtitle1">
                                        {props.author}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.author} style={{marginTop:0}} variant="subtitle1">
                                        {props.views+" "+props.time}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Video;
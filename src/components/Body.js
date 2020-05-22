import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Toolbar from '@material-ui/core/Toolbar';

import Video from './Video';

import img from '../assets/img.jpg';
import avatar1 from '../assets/avatar1.jpeg';

const useStyles = makeStyles(theme=>({
    mainContainer:{
        backgroundColor:"#f8f8f8",
        marginLeft:235,
        height:"100em",
        width:"100em"
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
      }

}))

const Body = ()=>{
    const classes=useStyles();
    return(
        <React.Fragment>
            <main className={classes.content}>
                <Toolbar />
                <Grid container direction="column">
                    
                    <Grid item>
                        <Grid container direction="row">
                           
                                <Video image={img} 
                                imageTitle="image" 
                                avatar={avatar1} 
                                heading="Funny Episodes - Compilation [2020]" 
                                author="Mr Bean"
                                views="42K"
                                time="3 hours ago"
                                />
                                <Video image={img} 
                                imageTitle="image" 
                                avatar={avatar1} 
                                heading="Funny Episodes - Compilation [2020]" 
                                author="Mr Bean"
                                views="42K"
                                time="3 hours ago"
                                />
                                <Video image={img} 
                                imageTitle="image" 
                                avatar={avatar1} 
                                heading="Funny Episodes - Compilation [2020]" 
                                author="Mr Bean"
                                views="42K"
                                time="3 hours ago"
                                />
                                <Video image={img} 
                                imageTitle="image" 
                                avatar={avatar1} 
                                heading="Funny Episodes - Compilation [2020]" 
                                author="Mr Bean"
                                views="42K"
                                time="3 hours ago"
                                />
                                <Video image={img} 
                                imageTitle="image" 
                                avatar={avatar1} 
                                heading="Funny Episodes - Compilation [2020]" 
                                author="Mr Bean"
                                views="42K"
                                time="3 hours ago"
                                />
                                <Video 
                                image={img} 
                                imageTitle="image" 
                                avatar={avatar1} 
                                heading="Funny Episodes - Compilation [2020]" 
                                author="Mr Bean"
                                views="42K"
                                time="3 hours ago"
                                />
                            
                        </Grid>
                        
                    </Grid>
                </Grid>

            </main>


        </React.Fragment>
    )
}

export default Body;
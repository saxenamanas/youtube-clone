import React from 'react';

import Header from './components/Header';
import SidePanel from './components/Drawer';
import Body from './components/Body';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    root:{
        display:"flex"
    }
}))

const App = ()=>{
    const classes = useStyles();
    return(
        <React.Fragment>
            <div className={classes.root}>
            <Header></Header>
            <SidePanel></SidePanel>
            <Body/>
            </div>
        </React.Fragment>
    )
}

export default App;
import React from 'react';

import Header from './components/Header';
import SidePanel from './components/Drawer';


const App = ()=>{
    return(
        <React.Fragment>
            <Header></Header>
            <SidePanel></SidePanel>
        </React.Fragment>
    )
}

export default App;
import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const LogOut = (props) =>{
    return (
        <ExitToAppIcon onClick={props.logOut}/>
    );
}

export default LogOut;
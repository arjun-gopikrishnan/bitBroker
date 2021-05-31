import React from 'react';

const LogOut = (props) =>{
    return (
    <button onClick={props.logOut}>
        Logout        
    </button>
    );
}

export default LogOut;
import React from 'react';
import Footermenu from "./Footermenu";

class Footer extends React.Component{
    render(){
        return(
            <div>
            <div className="footer-part">
                <div className="logo-footer"></div>
                <Footermenu />
            </div>
                <p style={{textAlign: 'center'}}>Copyright 2018</p>
            </div>

        )
    }
}

export default Footer
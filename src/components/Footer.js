import React from 'react';
import Footermenu from "./Footermenu";

class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>

            <div className="footer-part">
                <div className="logo-footer"></div>
                <Footermenu />
            </div>


                <div className="copyright">
                    Copyright 2018
                </div>



            </React.Fragment>

        )
    }
}

export default Footer
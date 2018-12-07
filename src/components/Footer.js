import React from 'react';
import Footermenu from "./Footermenu";

class Footer extends React.Component{
    render(){
        return(
            
            <React.Fragment>
            <div className="footer-part">
                <div className="logo-footer"></div>
                <Footermenu />
                <div className="memberdesc"> <p>Contact Us</p>
                    <p><a href="https://www.facebook.com/mkheyan" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="mailto:petros_mkheyan@edu.aua.am" target="_top"><i className="far fa-envelope"></i></a>
                        <a href="tel:+55844743" target="_top"><i className="fas fa-phone"></i></a>
                    </p>
                </div>

            </div>

            


                <div className="copyright">
                    Copyright 2018
                </div>



            </React.Fragment>

        )
    }
}

export default Footer
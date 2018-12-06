import React from 'react';
import Footermenu from "./Footermenu";

class Footer extends React.Component{
    render(){
        return(
            <div>
<<<<<<< HEAD
            <div className="footer-part">
                <div className="logo-footer"></div>
                <Footermenu />
            </div>
=======
                <ul className='footerul'>
                    <li className='footerli'><img src={'https://pbs.twimg.com/media/DMInxKbX4AA5Mrr.jpg'}  alt='boo' width = '20px' height = '20px'/></li>
                    <li className='footerli'><img src={'https://pbs.twimg.com/media/DMInxKbX4AA5Mrr.jpg'}  alt='boo' width = '20px' height = '20px'/></li>
                </ul>
>>>>>>> e115173dea428526f7227ea1f468268ca1274fd8
                <p style={{textAlign: 'center'}}>Copyright 2018</p>
            </div>

        )
    }
}

export default Footer
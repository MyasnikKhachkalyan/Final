import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div>
                <ul className='footerul'>
                    <li className='footerli'><img src={'https://pbs.twimg.com/media/DMInxKbX4AA5Mrr.jpg'}  alt='boo' width = '20px' height = '20px'/></li>
                    <li className='footerli'><img src={'https://pbs.twimg.com/media/DMInxKbX4AA5Mrr.jpg'}  alt='boo' width = '20px' height = '20px'/></li>
                </ul>
                <p style={{textAlign: 'center'}}>Copyright 2018</p>
            </div>
        )
    }
}

export default Footer
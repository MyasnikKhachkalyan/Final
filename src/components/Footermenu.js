import React from 'react';
import {NavLink} from 'react-router-dom';

class Footermenu extends React.Component{
    render(){
        return(
            <nav>
                <ul className='menu-ul'>
                    <li className='menu-li'><NavLink to='/home' className='menu'>Home</NavLink></li>
                    <li className='menu-li'><NavLink to='/game1' className='menu'>Game1</NavLink></li>
                    <li className='menu-li'><NavLink to='/game2' className='menu'>Game2</NavLink></li>
                    <li className='menu-li'><NavLink to='/about' className='menu'>About Us</NavLink></li>
                </ul>
            </nav>
        )

    }
}

export default Footermenu
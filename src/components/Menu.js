import React from 'react';
import {NavLink} from 'react-router-dom';

class Menu extends React.Component{
    render(){
        return(
            <nav>
                <ul className='menuul'>
                    <li className='menuli'><NavLink to='/home' className='menu' activeStyle={{textDecoration: 'underline'}}>Home</NavLink></li>
                    <li className='menuli'><NavLink to='/game1' className='menu' activeStyle={{textDecoration: 'underline'}}>Game1</NavLink></li>
                    <li className='menuli'><NavLink to='/game2' className='menu' activeStyle={{textDecoration: 'underline'}}>Game2</NavLink></li>
                    <li className='menuli'><NavLink to='/about' className='menu' activeStyle={{textDecoration: 'underline'}}>About Us</NavLink></li>
                </ul>
          </nav>
        )

    }
}

export default Menu
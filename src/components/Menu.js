import React from 'react';
import {NavLink} from 'react-router-dom';

class Menu extends React.Component{
    render(){
        return(
            <nav>
                <ul className='menuul'>
                    <li className='menuli'><NavLink to='/home' className='menu'>Home</NavLink></li>
                    <li className='menuli'><NavLink to='/game1' className='menu'>Game1</NavLink></li>
                    <li className='menuli'><NavLink to='/game2' className='menu'>Game2</NavLink></li>
                    <li className='menuli'><NavLink to='/years' className='menu'>30 Years</NavLink></li>
                    <li className='menuli'><NavLink to='/about' className='menu'>About Us</NavLink></li>
                </ul>
          </nav>
        )

    }
}

export default Menu;
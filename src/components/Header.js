import React from 'react';
import Menu from './Menu';
import {NavLink} from 'react-router-dom';
class Header extends React.Component{

    render(){
        return (
            <div className='header'>

                <NavLink to='/home' className='menu'><div className="logo"></div></NavLink>
                <Menu />

            </div>


)}

}

export default Header;
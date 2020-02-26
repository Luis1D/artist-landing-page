import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div id="Nav">
                    <NavLink className="link" exact to="/" activeStyle={{backgroundColor: '#000', color: '#fff'}}>Albums</NavLink>
                    <NavLink className="link" to="/Songs" activeStyle={{backgroundColor: '#000', color: '#fff'}}>Songs</NavLink>
        </div>
    )
}

export default Nav;
import React, { Component } from 'react';
import TrelloLogo from '../assets/trello-logo.png'

class Navbar extends Component {
    render() {
        return (
            <div className='nav-bar'>
                <img src={TrelloLogo} height='30'alt='logo'/>
            </div>
        );
    }
}

export default Navbar;
import React from 'react'
import './Header.css'
import Logo from "../assets/SP digital-logos_white.png"
import searchIcon from "../assets/search.png"
import Swtich from "../assets/theme-switch.png"

const Header = () => {
  return (
    <div className="header">
        <div className="logoContainer">
          <img src={Logo} alt='' className='logo'/>
        </div>

        <div className="seachBar">
            <div className='searchIconContainer'>
                <img src={searchIcon}/>
            </div>
            <input  className='searchInput' placeholder='Collection, item or user....'/>
        </div>

        <div className='headerItems'>
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>
        </div>
        <div className='headerActions'>
            <div className='themeSwitchContainer'>
                <img src={Swtich}/>
            </div>
        </div>
        <div className='LoginContainer'>
            Get In
        </div>
    </div>
  )
}

export default Header
import React, {useState} from 'react'
import '../scss/components/navbar.scss'


const Navbar = () => {
const [clicked, setValue] = useState(false)

  return (
    <div className='header'>
        <nav className='navbar'>

            <img className='navbar-logo-mobile' src={require("../pictures/logo.png")} alt="Početna"></img>

        
            <div className='navbar-icon' onClick = {()=>setValue(!clicked)}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'navbar-menu active':'navbar-menu'}>
                <li>
                    <a className='navbar-link' href="/">O nama</a>
                </li>
                <li>
                    <a className='navbar-link' href="/">Projekti</a>
                </li>
                <li>
                    <a className='navbar-link' href="/">
                        <img className='navbar-logo' src={require("../pictures/logo.png")} alt="Početna"></img>
                    </a>
                </li>
                <li>
                    <a className='navbar-link' href="/">Objave</a>
                </li>
                <li>
                    <a className='navbar-link' href="/">Kontakt</a>
                </li>
            </ul>
        </nav>
    </div>
  )
};

export default Navbar
import React, {useState} from 'react'
import '../scss/components/navbar.scss'


const Navbar = () => {
const [clicked, setValue] = useState(false)

  return (
    <div className='header'>
        <nav className='navbar'>

            <a href="/">
                <img className='navbar-logo-mobile' src={require("../pictures/logo.png")} alt="Početna"></img>
            </a>

        
            <div className='navbar-icon' onClick = {()=>setValue(!clicked)}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'navbar-menu active':'navbar-menu'}>
                <li>
                    <a className='navbar-link' href="/o-nama">O nama</a>
                </li>
                <li>
                    <a className='navbar-link' href="/projekti">Projekti</a>
                </li>
                <li>
                    <a className='navbar-link' href="/">
                        <img className='navbar-logo' src={require("../pictures/logo.png")} alt="Početna"></img>
                    </a>
                </li>
                <li>
                    <a className='navbar-link' href="/objave">Objave</a>
                </li>
                <li>
                    <a className='navbar-link' href="/kontakt">Kontakt</a>
                </li>
            </ul>
        </nav>
    </div>
  )
};

export default Navbar
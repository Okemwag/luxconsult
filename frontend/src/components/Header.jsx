import React, {useState}from 'react'
import '../styles/header.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import { PiDotsNineBold } from 'react-icons/pi'

const Header = () => {
    const [active, setActive] = useState('navBar')
    // Function to toggle the navbar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }
    // Function to close the navbar
    const removeNavbar = () => {
        setActive('navBar')
    }
        return (
            <section className='navbarSection'>
                <header className='header flex'>
                    <div className='logoDiv'>
                        <a href='/' className='logo flex'><h1>Lux Consult</h1></a>
                    </div>
                    <div className={active}>
                        <ul className='navLists flex'>
                            <li className='navItem'><a href='/' className='navLink'>Home</a></li>
                            <li className='navItem'><a href='/' className='navLink'>Sales</a></li>
                            <li className='navItem'><a href='/' className='navLink'>Rental</a></li>
                            <li className='navItem'><a href='/' className='navLink'>Invest</a></li>
                            <li className='navItem'><a href='/' className='navLink'>Consult</a></li>
                            <button className='btn'>
                                <a href='/'>Contact</a>
                            </button>
                        </ul>
                        <div onClick={removeNavbar}className='closeNavbar'>
                            <AiFillCloseCircle className='icon' />
                        </div>
                    </div>
               
              
                    <div onClick={showNav} className="toggleNavbar">
                        <PiDotsNineBold className='icon' />
                    </div>
                </header>
      
            </section>
        )
    }



export default Header

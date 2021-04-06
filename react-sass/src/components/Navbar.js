import React,{useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';


export default function Navbar() {
    let initialWidthBool = window.innerWidth > 768 ? false : true;
    let widthValue;
    const [open, setOpen] = useState(false); //change to initial true
    const [width, setWidth] = useState(initialWidthBool);
    useEffect(() => {
        window.addEventListener('resize',() => {
            widthValue = window.innerWidth;
            console.log(widthValue)
            if(widthValue < 768){
                setWidth(true)
                
            }else if (widthValue > 768){
                setWidth(false)
            }
        })
       
       
    }, [])
 
    
    const openMenu = () => {
        setOpen(true);
        
    }
    const closeMenu = () =>{
        setOpen(false);
    }

    return (
        <nav>
            <ul className='container'>
            <NavLink to='/'> <li className='logo'>LOGO</li></NavLink>
                <img src={require('../assets/menu.svg').default} alt="open menu" className='menu-button' onClick={openMenu} />
                
                <div className={`menu ${open ? 'menu-open menu-shadow ' : ' menu-close'}`}>
                    <img src={require('../assets/cancel.svg').default} alt="" className='menu-button-close'onClick={closeMenu}/>
                    <NavLink to='/' onClick={width && closeMenu}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to='/services' onClick={width && closeMenu}>
                        <li>Services</li>
                    </NavLink >
                    <NavLink to='/about' onClick={width && closeMenu}>
                        <li>About</li>
                    </NavLink>
                    <NavLink to='/contact' onClick={width && closeMenu}>
                        <li>Contact</li>
                    </NavLink>

                </div>
            </ul>
        </nav>
    )
}

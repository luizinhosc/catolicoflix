import React from 'react';
import Logo from '../../assets/images/logo.png';
import './Menu.css'
import  { Link } from 'react-router-dom';
import ButtonLink from '../ButtonLink';


function Menu(){

    return (
        
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={Logo} alt='CatolicoFlix logo'/>

            </Link>

            <ButtonLink as={Link} className="ButtonLink" href="/cadastro/video">
                Novo video
            </ButtonLink>
        </nav>

    );
}

export default Menu;
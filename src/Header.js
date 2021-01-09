import React, { useEffect, useState } from 'react'
import './Header.css';

function Header() {

    const [show, setShow] = useState(false);

    useEffect(()=> {
        window.addEventListener("scroll", () => {            
            if(window.scrollY > 100){
                setShow(true);
            }else{
                setShow(false);
            }
            return () =>{
                window.removeEventListener("scroll");
            }
        })
    },[])

    return (
        <div className = {`nav ${ show && "nav_backgound" }`}>
            <img 
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />
            <img 
                className="nav_profile"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="Netflix Logo"/>                
        </div>
    )
}

export default Header

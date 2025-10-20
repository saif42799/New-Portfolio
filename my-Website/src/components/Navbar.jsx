import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const pathOffsets = {
            '/': 0,
            '/AboutPage': -96,
            '/ProjectPage': -192,
            '/ConnectPage': -288,
        };

        const newOffset = pathOffsets[location.pathname] ?? 0;
        setOffset(newOffset);
    }, [location]);

    return (
        <nav>
            <div className='number-container'>
                <div className='page-zero'>0</div>
                <div className='scroll-number' style={{ transform: `translateY(${offset}px)` }}>
                    <div className='page-number'>1</div>
                    <div className='page-number'>2</div>
                    <div className='page-number'>3</div>
                    <div className='page-number'>4</div>
                </div>
            </div>


            <input type='checkbox' id='sidebar-active'></input>
            <label htmlFor='sidebar-active' className='open-sidebar-button' >
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
            </label>

            <label id='overlay' for='sidebar-active'></label>
            <div className='nav-background'>

                <label htmlFor='sidebar-active' className='close-sidebar-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </label>

                
                <ul>
                    <li><Link className='nav-element' to={"/"}><div className='element-background'>[HOME]</div></Link></li>
                    <li><Link className='nav-element' to={"/AboutPage"}><div className='element-background'>[ABOUT]</div></Link></li>
                    <li><Link className='nav-element' to={"/ProjectPage"}><div className='element-background'>[PROJECT]</div></Link></li>
                    <li><Link className='nav-element' to={"/ConnectPage"}><div className='element-background'>[CONNECT]</div></Link></li>
                </ul>
                
            </div>



        </nav>
    );
}

export default Navbar;

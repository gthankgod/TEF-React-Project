import React from 'react'

const Navbar = () => {
    function toggleButton() {
        const toggleBtn = document.querySelector('#wrapper');
        toggleBtn.classList.toggle('toggled');
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
            <button className="btn" id="menu-toggle" onClick={toggleButton}><i className="fas fa-bars" /></button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link d-flex align-items-center" href="!#">
                            <p className="d-inline-block mb-0 r-14 mr-2">System Settings</p>
                            <img src="img/user-ig.jpeg" className="d-inline-block user-img mr-1" alt="" />
                            <img src="http://hib.hh-converge.com/Converge-vF/img/converge_logo.png" className="d-inline-block logo-img" alt="converge-logo" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar({mode, navstyle, title, aboutText = 'about', togglemode, modetext} ) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} fixed-top`} style={navstyle} >
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/' >{title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/' >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-disabled="true" to='/about' >{aboutText} </Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${mode ==='light'? "dark" : 'light'}`}>
                            <input className="form-check-input" onClick={togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{modetext}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

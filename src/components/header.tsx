import { useState } from 'react'
import '../App.css'
import '../pages/index'
import { HashLink } from 'react-router-hash-link'
import logo from '../assets/slicLogo.png'


function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-inner">
          <div className="logo">
            <img src={logo} alt="SLIC Logo" />
            <h1>Standard Life Int'l Church-SLIC</h1>
          </div>

          {/* Hamburger */}
          <div className="hamburger" onClick={() => setOpen(!open)}>
            <div className={open ? "bar rotate1" : "bar"}></div>
            <div className={open ? "bar hide" : "bar"}></div>
            <div className={open ? "bar rotate2" : "bar"}></div>
          </div>

          <div className={`navlink ${open ? "active" : ""}`}>
            <HashLink className="li" to="/#home" onClick={() => setOpen(false)}>Home</HashLink>
            <HashLink className="li" to="/#services" onClick={() => setOpen(false)}>Services</HashLink>
            <HashLink className="li" to="/#about" onClick={() => setOpen(false)}>About</HashLink>
            <HashLink className="li" to="/#ministries" onClick={() => setOpen(false)}>Ministries</HashLink>
            <HashLink className="li" to="/#events" onClick={() => setOpen(false)}>Events</HashLink>
            <HashLink className="li" to="/#contacts" onClick={() => setOpen(false)}>Contacts</HashLink>

            <HashLink className="donatebtn mobile-donate" to="/src/pages/donate.tsx" onClick={() => setOpen(false)}>
              Donate
            </HashLink>
          </div>

          <HashLink className="donatebtn" to="/donate">Donate</HashLink>
        </div>
      </nav>
    </>
  )
}

export default Header
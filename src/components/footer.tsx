import { HashLink } from 'react-router-hash-link'
import '../App.css'
import '../pages/index'
import { FaFacebook, FaInstagram, FaSpotify, FaTelegram, FaYoutube } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa6'


function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer1">
          <div className="footer-info">
            <h3>Standard Life Int'l Church</h3>
            <p>A place where faith grows, community thrives, and love abounds. Join us in experiencing the transforming love of Jesus Christ.</p>
            <p>123 Faith Street Grace City, GC 12345</p>
            <p>+234 812 345 6789</p>
            <p>info@SLICchurch.org</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <HashLink className='footer-list' to="#about">About</HashLink>
            <HashLink className='footer-list' to="#service">Services</HashLink>
            <HashLink className='footer-list' to="#ministries">Ministries</HashLink>
            <HashLink className='footer-list' to="#events">Events</HashLink>
            <HashLink className='footer-list' to="#contact">Contacts</HashLink>
            <HashLink className='footer-list' to="#">About</HashLink>
          </div>

          <div className="footer-res">
            <h4>Resources</h4>
            <HashLink className='footer-list' to="#about">Sermons</HashLink>
            <HashLink className='footer-list' to="#service">Bible Study</HashLink>
            <HashLink className='footer-list' to="#ministries">Prayer Requests</HashLink>
            <HashLink className='footer-list' to="#events">Volunteer</HashLink>
            <HashLink className='footer-list' to="#contact">Membership</HashLink>
            <HashLink className='footer-list' to="#">Staff Directory</HashLink>
          </div>
        </div>

        <hr/>

        <div className="footer2">
          <div className="social-media">
            <h3>Follow Us</h3>
            <a href="https://web.facebook.com/slicnig" target='_blank'><FaFacebook className='media-icon' size={25} style={{ marginLeft: 0, color: 'white'}}/></a>
            <a href="" target='_blank'><FaYoutube className='media-icon' size={25} style={{ marginLeft: 9, color: 'white'}}/></a>
            <a href="" target='_blank'><FaInstagram className='media-icon' size={25} style={{ marginLeft: 9, color: 'white'}}/></a>
            <a href="" target='_blank'><FaTelegram className='media-icon' size={25} style={{ marginLeft: 9, color: 'white'}}/></a>
            <a href="" target='_blank'><FaSpotify className='media-icon' size={25} style={{ marginLeft: 9, color: 'white'}}/></a>
          </div>

          <div className="footer-service">
            <h3>Service Time</h3>
            <p>Sunday 9:00 AM </p>
            <p>Wednesday 5:00 PM</p>
          </div>
        </div>

        <hr/>

        <div className="footer3">
          <p>© 2025 Standard Life Int'l Church. All rights reserved.</p> <FaRegHeart size={15} style={{color: 'red'}}/> <p> Made with love for our community</p>
        </div>
      </div>
    </>
  )
}

export default Footer
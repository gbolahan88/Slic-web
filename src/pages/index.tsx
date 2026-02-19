import '../App.css'
import Slideshow from '../components/slideShow'
import "../components/header"
import "../components/footer"
import { 
  FaRegClock,
  FaRegStar,
  FaBookOpen,
  FaPrayingHands,
  FaRegHeart,
  FaPhoneAlt,
  FaEnvelope,
  FaUserFriends,
} from 'react-icons/fa'
import { 
  FaPeopleGroup,
  FaLocationDot,
  FaBookBible,
  FaCalendarDay,
  FaMapLocationDot,
  FaClock,
  FaShield,
} from 'react-icons/fa6'
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import aboutImg from '../assets/slic1.jpg'
import ministriesImg from '../assets/slic2.jpg'


function Home() {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_fk2jf36",
        "template_cz5dzco",
        form.current,
        "vyErHq71s5xKEwH33"
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          setLoading(false);
          form.current?.reset();
        },
        (error) => {
          console.log(error);
          setSuccess("Something went wrong.");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <section className="hero-container" id="home">
        <Slideshow /> 
        <div className='hero-text'>
          <h1>Welcome to <span style={{ color: 'red', }}>SLIC</span> International <br></br>Church</h1>
          <p>A place where faith grows, community thrives,<br></br> and love abounds</p>
          <a href="https://web.facebook.com/slicnig" target='_blank'><button>Watch Online</button></a>
        </div>

        <div className="hero-invite">
          <h3>Join Us This Sunday</h3>
          <p>Service Times: 8:00AM & 9:00AM</p>
        </div>
      </section>

      <section className="services-container" id="services">
        <div className="section-title">
          <h1>Service's Time</h1>
          <p>Come as you are and experience the love of Christ in our welcoming community</p>
        </div>

        <div className="service-content">
          <div className="service-items">
            <FaRegClock size={50}/>
            <h3>Sunday Morning Worship</h3>
            <h2>9:00 AM - 12:00 PM</h2>
            <p>Join us for inspiring worship, biblical teaching, and fellowship</p>
          </div>
          <div className="service-items">
            <FaPrayingHands size={50}/>
            <h3>Monday Evening Engaging the Supernatural</h3>
            <h2>5:00 PM</h2>
            <p>Join us for inspiring worship, biblical teaching, and fellowship</p>
          </div>
          <div className="service-items">
            <FaBookOpen size={50}/>
            <h3>Wednesday Bible Study</h3>
            <h2>5:00 PM</h2>
            <p>Dive deeper into God's word with our midweek study</p>
          </div>
          <div className="service-items">
            <FaPeopleGroup size={50}/>
            <h3>Chadeva</h3>
            <h2>4:00 PM</h2>
            <p>Join us for the Church aggresive day of Envagelism</p>
          </div>
        </div>

        <div className="location-container">
          <h2 style={{ textAlign: 'center'}}> Our Locations</h2>

          <div className="location-content">
            <div className="location-item">
              <h3>Lekki Expression <FaLocationDot/></h3>
              <p>123 Faith Street, Grace City, GC 12345</p>
            </div>

            <div className="location-item">
              <p>Need Direction?</p>
              <h3>Get Direction</h3>
            </div>
          </div>

          <div className="location-content">
            <div className="location-item">
              <h3>Dele Yes Sir Expression <FaLocationDot/></h3>
              <p>123 Faith Street, Grace City, GC 12345</p>
            </div>

            <div className="location-item">
              <p>Need Direction?</p>
              <h3>Get Direction</h3>
            </div>
          </div>

          <div className="location-content">
            <div className="location-item">
              <h3>Capital Expression <FaLocationDot/></h3>
              <p>123 Faith Street, Grace City, GC 12345</p>
            </div>

            <div className="location-item">
              <p>Need Direction?</p>
              <h3>Get Direction</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="about-container" id="about">
        <div className="about-img">
          <img src={aboutImg} alt="About SLIC" style={{ width: '90%', height: '90%', objectFit: 'cover',borderRadius: '10px' }} />
        </div>

        <div className="about-items">
          <div className="about-text">
            <h1>About Our Church</h1>
            <p>Standard Life Int'l Church has been serving our community for over 25 years. We are a vibrant, diverse congregation committed to following Jesus Christ and making a positive impact in our world.</p>
            <p>Our mission is to know God and make Him known through authentic worship, biblical teaching, and loving service to others. We believe that everyone has a place in God's family and in our church family.</p>
          </div>
          
          <div className="about-grid">
            <div className="grid">
              <FaBookBible size={30}/>
              <h4>Faith</h4>
              <p>Committed to biblical teaching and <br/>authentic discipleship</p>
            </div>
            <div className="grid">
              <FaRegHeart size={30}/>
              <h4>Love</h4>
              <p>We believe love is the foundation of our<br/> faith and community</p>
            </div>
            <div className="grid">
              <FaRegStar size={30}/>
              <h4>Excellent</h4>
              <p>Bringing hope and transformation to our <br/>city and beyond</p>
            </div>
            <div className="grid">
              <FaUserFriends size={30}/>
              <h4>Growth</h4>
              <p>Building meaningful relationships and <br/>supporting one another</p>
            </div>
            <div className="grid">
              <FaShield size={30}/>
              <h4>Integrity</h4>
              <p>Committed to biblical teaching and <br/>authentic discipleship</p>
            </div>
            <div className="grid">
              <FaClock size={30}/>
              <h4>Puctuality</h4>
              <p>Bringing hope and transformation to our <br/>city and beyond</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ministries-container" id="ministries">
        <div className="section-title">
          <h1>Our Ministries</h1>
          <p>Discover opportunities to grow in faith, build relationships, and serve others</p>
        </div>

        <div className="ministries-content">
          <div className="ministries-items">
            <img src={ministriesImg} alt="Ministries" />
            <div style={{ padding: '5px'}}>
              <h3>Community Outreach</h3>
              <p>Serving our neighbors and making a difference in our community</p>
            </div>
            <ul className='card-list'>
              <li>Food Bank</li>
              <li>Homeless Ministry</li>
              <li>Community Events</li>
            </ul>
            <button>Learn More</button>
          </div>
          <div className="ministries-items">
            <img src={ministriesImg} alt="Children's Ministry" />
            <div style={{ padding: '5px'}}>
              <h3>Children's Ministry</h3>
              <p>Fun, safe, and engaging programs for kids from birth to 5th grade</p>
            </div>
            <ul className='card-list'>
              <li>Sunday School</li>
              <li>Vacation Bible School</li>
              <li>Children's Worship</li>
            </ul>
            <button>Learn More</button>
          </div>
          <div className="ministries-items">
            <img src={ministriesImg} alt="Youth Ministry" />
            <div style={{ padding: '5px'}}>
              <h3>Youth Ministry</h3>
              <p>Connecting teens with God and each other through relevant teaching and fun activities</p>
            </div>
            <ul className='card-list'>
              <li>Youth Group</li>
              <li>Summer Camps</li>
              <li>Mission Trips</li>
            </ul>
            <button>Learn More</button>
          </div>
          
        </div>

        <div className="location-container">
          <h3 style={{ textAlign: 'center'}}>Additional Ministries</h3>

          <div className="addmini-content">
            <div className="addmini-item">
              <h4>Small Groups</h4>
              <p>Bible study and fellowship in homes</p>
            </div>

            <div className="addmini-item">
              <h4>Women's Ministry</h4>
              <p>Encouraging women in their faith journey</p>
            </div>

            <div className="addmini-item">
              <h4>Men's Ministry</h4>
              <p>Building strong Christian men</p>
            </div>
          </div>
        </div>
      </section>

      <section className="events-container" id="events">
        <div className="section-title">
          <h1>Upcoming Events</h1>
          <p>Stay connected with what's happening in our church community</p>
        </div>

        <div className="events-content">
          <div className="events-items">
            <button style={{padding: 8, color: '#710692', backgroundColor: '#a109cf57', border: 'none', borderRadius: '8px'}}>Special Service</button>
            <h3>Easter Sunday Celebration</h3>
            <p>Join us for a special Easter service celebrating the resurrection of Jesus Christ</p>
            <ul>
              <li><FaCalendarDay/> March 31, 2026</li>
              <li><FaRegClock/> 9:00 AM & 11:00 AM</li>
              <li><FaLocationDot/> All Expression</li>
            </ul>
            <a href=""><button className='item-btn'>Learn More</button></a>
          </div>

          <div className="events-items">
            <button style={{padding: 8, color: '#068992', backgroundColor: '#0689923a', border: 'none', borderRadius: '8px'}}>Special Service</button>
            <h3>Easter Sunday Celebration</h3>
            <p>Join us for a special Easter service celebrating the resurrection of Jesus Christ</p>
            <ul>
              <li><FaCalendarDay/> March 31, 2026</li>
              <li><FaRegClock/> 9:00 AM & 11:00 AM</li>
              <li><FaLocationDot/> All Expression</li>
            </ul>
            <a href=""><button className='item-btn'>Learn More</button></a>
          </div>

          <div className="events-items">
            <button style={{padding: 8, color: '#063e92', backgroundColor: '#063e923b', border: 'none', borderRadius: '8px'}}>Special Service</button>
            <h3>Easter Sunday Celebration</h3>
            <p>Join us for a special Easter service celebrating the resurrection of Jesus Christ</p>
            <ul>
              <li><FaCalendarDay/> March 31, 2026</li>
              <li><FaRegClock/> 9:00 AM & 11:00 AM</li>
              <li><FaLocationDot/> All Expression</li>
            </ul>
            <a href=""><button className='item-btn'>Learn More</button></a>
          </div>

          <div className="events-items">
            <button style={{padding: 8, color: '#747207', backgroundColor: '#92900650', border: 'none', borderRadius: '8px'}}>Special Service</button>
            <h3>Easter Sunday Celebration</h3>
            <p>Join us for a special Easter service celebrating the resurrection of Jesus Christ</p>
            <ul>
              <li><FaRegClock/> March 31, 2026</li>
              <li><FaRegClock/> 9:00 AM & 11:00 AM</li>
              <li><FaRegClock/> All Expression</li>
            </ul>
            <a href=""><button className='item-btn'>Learn More</button></a>
          </div>
        </div>
      </section>

      <section className="contacts-container" id="contacts">
        <div className="section-title">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Reach out with any questions or to learn more about our church</p>
        </div>

        <div className="contact-contents">
          <div className="contact-items">
            <h3>Contact Information</h3>

            <div className="contact-info">
              <div className="info-grid">
                <FaPhoneAlt size={23} />
                <div style={{ marginLeft: 40, marginTop: -50}}>
                  <h4>Phone</h4>
                  <h5>08123456789</h5>
                  <p>Call us anytime</p>
                </div>
              </div>
              <div className="info-grid">
                <FaEnvelope size={23} />
                <div style={{ marginLeft: 40, marginTop: -50}}>
                  <h4>Email</h4>
                  <h5>info@SLICchurch.org</h5>
                  <p>Send us a message</p>
                </div>
              </div>
              <div className="info-grid">
                <FaLocationDot size={23} />
                <div style={{ marginLeft: 40, marginTop: -50}}>
                  <h4>Address</h4>
                  <h5>Osogbo & Lekki</h5>
                  <p>Come visit us</p>
                </div>
              </div>
              <div className="info-grid">
                <FaClock size={23} />
                <div style={{ marginLeft: 40, marginTop: -50}}>
                  <h4>Office Hours </h4>
                  <h5>Mon-Fri: 9:00 AM - 5:00 PM</h5>
                  <p>Saturday & Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="map">
              <div>
                <FaMapLocationDot size={50} />
                <p>Interactive Map Coming Soon</p>
              </div>
            </div>

          </div>

          <div className="contact-form">
            <h3>Send us a Message</h3>

            <form ref={form} onSubmit={sendEmail} className="form-content">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your first and last Name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone (Optional)</label>
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="+234 812 345 6789"
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  required
                ></textarea>
              </div>

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && <p className="form-status">{success}</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
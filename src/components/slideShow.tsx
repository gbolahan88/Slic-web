import { useEffect, useState } from "react";
import "../App.css"
import img1 from "../assets/slic1.jpg"
import img2 from "../assets/slic2.jpg"
import img3 from "../assets/slic3.jpg"
import img4 from "../assets/slic4.jpg"
import img5 from '../assets/slic5.jpg'
import img6 from '../assets/slicLogo.png'

const Images = [img1, img2, img3, img4, img5, img6];

function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow" style={{ width: '100%', height: '100%' }}>
      <img src={Images[current]} alt="slide" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
}

export default Slideshow;
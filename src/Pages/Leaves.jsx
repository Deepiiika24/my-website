import React from 'react'
import '../css/Leaf.css'
import { Link } from 'react-router-dom'
import banner from '../images/Leaf/leaf-banner.png'
import icon from '../images/icon.png'
import leaf1 from '../images/Leaf/Banana-leaf.jpg'
import leaf2 from '../images/Leaf/Neem-leaf.jpg'
import leaf3 from '../images/Leaf/Ashoka-leaf.jpg'
import leaf4 from '../images/Leaf/Mango-leaf.jpg'
import leaf5 from '../images/Leaf/Betel-leaf.jpg'
import leaf6 from '../images/Leaf/Teak-leaf.jpg'
import leaf7 from '../images/Leaf/Eucalyptus-leaf.jpg'
import leaf8 from '../images/Leaf/Palm-leaf.jpg'
import leaf9 from '../images/Leaf/Tulsi-leaf.jpg'
import leaf10 from '../images/Leaf/Bamboo-leaf.jpg'
import leaf11 from '../images/Leaf/Guava-leaf.jpg'
import leaf12 from '../images/Leaf/Fig-leaf.jpg'
import leaf13 from '../images/Leaf/Moringa-leaf.jpg'
import leaf14 from '../images/Leaf/Toran-leaf.jpg'


function Leaves() {
  return (
    <div className='leaves-main-container'>
      <div>
        <img src={banner} alt="banner" className='leaves-banner'/>
      </div>
      <div class="leaves-content">
        <h1>Leaves</h1>
        <ul className='leaves-menu'>
          <li><Link to="/">HOME</Link></li>
          <li style={{ fontSize: "17px", color: "white" }}> / LEAVES</li>
        </ul>
      </div>
      <div className="leaves-container">
          <img src={icon} alt="icon" className='leaves-icon'/>
          <h3 style={{color:"green"}}>EXPORTING PREMIUM QUALITY LEAVES FOR ALL YOUR NEEDS</h3>
          <h1 style={{color:"red"}}>_______</h1>
          <p>At Koogul Industries, we pride ourselves on providing a diverse range of premium quality leaves to meet all your culinary, decorative, and ceremonial needs. Our leaves are handpicked, ensuring the utmost freshness and quality with every shipment. We cater to both large-scale commercial orders and individual customer requests, making us your trusted partner in leaf export.</p>
      </div>
      <div className="leaves-sub-container">
          <div className="leaves-img">
            <div className='card'>
              <img src={leaf1} className='leaves-pic'></img>
              <h3 className='leaf-link1-name' id='leaf-link-name'><Link to='/Banana-leaves'>Banana Leaves</Link> </h3>
            </div>
            <div className='card'>
              <img src={leaf2} className='leaves-pic'></img>
              <h3 className='leaf-link1-name' id='leaf-link-name'><Link to='/Neem-leaves'>Neem Leaves</Link> </h3>
            </div>
            <div className='card'>
              <img src={leaf3} className='leaves-pic'></img>
              <h3 className='leaf-link1-name' id='leaf-link-name'><Link to='/Ashoka-leaves'>Ashoka Leaves</Link> </h3>
            </div>
            <div className='card'>
              <img src={leaf4} className='leaves-pic'></img>
              <h3 className='leaf-link1-name' id='leaf-link-name'><Link to='/Mango-leaves'>Mango Leaves</Link> </h3>
            </div>
          </div>
          <div className="leaves-img">
            <div className='card'>
              <img src={leaf5} className='leaves-pic'></img>
              <h3 className='leaf-link1-name' id='leaf-link-name'><Link to='/Betel-leaves'>Betel Leaves</Link> </h3>
            </div>
            <div className='card'>
              <img src={leaf6} className='leaves-pic'></img>
              <h3 className='leaf-link1-name' id='leaf-link-name'><Link to='/Teak-leaves'>Teak Leaves</Link> </h3>
            </div>
            <div className='card'>
              <img src={leaf7} className='leaves-pic'></img>
              <h3 className='leaf-link1-name' id='leaf-link-name'><Link to='/Eucalyptus-leaves'>Eucalyptus Leaves</Link> </h3>
            </div>
            <div className='card'>
              <img src={leaf8} className='leaves-pic'></img>
              <h3 className='leaf-link1-name' id='leaf-link-name'><Link to='/Palm-leaves'>Palm Leaves</Link> </h3>
            </div>
          </div>
          <div className="leaves-img">
            <div className='card'>
              <img src={leaf9} className='leaves-pic'></img>
              <h3 className='leaf-link1-name' id='leaf-link-name'><Link to='/Tulsi-leaves'>Tulsi Leaves</Link> </h3>
            </div>
            <div className='card'>
              <img src={leaf10} className='leaves-pic'></img>
              <h3 className='leaf-link1-name' id='leaf-link-name'><Link to='/Bamboo-leaves'>Bamboo Leaves</Link> </h3>
            </div>
            <div className='card'>
              <img src={leaf11} className='leaves-pic'></img>
              <h3 className='leaf-link1-name' id='leaf-link-name'><Link to='/Guava-leaves'>Guava Leaves</Link> </h3>
            </div>
            <div className='card'>
              <img src={leaf12} className='leaves-pic'></img>
              <h3 className='leaf-link1-name' id='leaf-link-name'><Link to='/Fig-leaves'>Fig Leaves</Link> </h3>
            </div>
          </div>
          <div className="leaves-img-end">
            <div className='card'>
              <img src={leaf13} className='leaves-pic'></img>
              <h3 className='leaf-link1-name' id='leaf-link-name'><Link to='/Moringa-leaves'>Moringa Leaves</Link> </h3>
            </div>
            <div className='card'>
              <img src={leaf14} className='leaves-pic'></img>
              <h3 className='leaf-link1-name' id='leaf-link-name'><Link to='/Toren-leaves'>Toran</Link> </h3>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Leaves

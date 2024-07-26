import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Rice.css'
import rice from '../images/rice/Rice-banner.png'
import icon from '../images/l.png'
import rice1 from '../images/rice/Basmati-rice.jpg'
import rice2 from '../images/rice/Matta-rice.jpg'
import rice3 from '../images/rice/Idli-rice.jpg'
import rice4 from '../images/rice/Boiled-Rice.jpg'
import rice5 from '../images/rice/Red-raw-rice.jpg'
import rice6 from '../images/rice/Seeraga-samba.jpg'
import rice7 from '../images/rice/White-raw-rice.jpg'

function Rice() {
  return (
    <div>
      <div className="rice-main-container">
        <img src={rice} className='rice-banner' />
      </div>
      <div className="rice-container">
        <div class="rice-content">
          <h1 className='rice-heading'>Rice</h1>
          <ul className='rice-menu'>
            <li><Link to="/">HOME</Link></li>
            <li style={{ fontSize: "17px", color: "white" }}> / RICE</li>
          </ul>
        </div>
        <div className="rice-icon">
          <img src={icon} className='rice-body-icon' />
        </div>
        <div rice-container>
          <h2 className='rice-body-heading'>WE EXPORT PREMIUM QUALITY RICE, ENSURING EXCELLENCE IN EVERY GRAIN</h2>
          <h1>_______</h1>
          <p>At Koogul Industries, we take pride in exporting only the highest quality rice to meet the diverse needs of our global customers. Our commitment to excellence begins with carefully selecting the finest rice varieties from trusted growers. Each grain undergoes rigorous quality checks to ensure it meets our exacting standards.</p>
        </div>
        <div className="rice-sub-container">
          <div className="rice-image">
            <div className='card'>
              <img src={rice1} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Basmati-rice'>Basmati Rice</Link> </h3>
            </div>
            <div className='card'>
              <img src={rice2} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Matta-rice'>Matta Rice</Link> </h3>
            </div>
            <div className='card'>
              <img src={rice3} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Idli-rice'>Idli Rice</Link> </h3>
            </div>
            <div className='card'>
              <img src={rice4} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Boiled-rice'>Boiled Rice</Link> </h3>
            </div>
          </div>
          <div className="rice-image1">
            <div className='card'>
              <img src={rice5} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Red-raw-rice'>Red Raw Rice</Link> </h3>
            </div>
            <div className='card'>
              <img src={rice6} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Seeraga-samba-rice'>Seeraga Samba Rice</Link> </h3>
            </div>
            <div className='card'>
              <img src={rice7} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/White-raw-rice'>White Raw Rice</Link> </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rice;


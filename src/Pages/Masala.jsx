import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Rice.css'
import '../css/Responsive/RiceResponsive.css'
import rice from '../images/rice/Rice-banner.png'
import icon from '../images/l.png'
import Masala1 from '../images/Masala/Garam-Masala.png'
import Masala2 from '../images/Masala/Curry-Masala.png'
import Masala3 from '../images/Masala/Sambar-Masala.png'
import Masala4 from '../images/Masala/Rasam-Masala.png'
import Masala5 from '../images/Masala/PuliKulambu-Masala.png'

function Masala() {
  return (
    <div>
      <div className="rice-main-container">
        <img src={rice} className='rice-banner' />
      </div>
      <div className="rice-container">
        <div className="rice-icon">
          <img src={icon} className='rice-body-icon' />
        </div>
        <div rice-container>
          <h2 className='rice-body-heading'>PREMIUM MASALA PRODUCTS EXPORTER – EXCELLENCE IN EVERY SPICE</h2>
          <h2 className='rice-body-heading'>_______</h2>
          <p>Koogul Industries is dedicated to exporting the finest masala products, bringing authentic flavor and quality to kitchens worldwide. We source only the best spices from trusted suppliers, ensuring that each product delivers unmatched freshness, rich aroma, and superior taste. Every batch is meticulously tested for quality and consistency, guaranteeing that our masala products meet the highest international standards. Experience the true essence of spices with Koogul Industries' premium masalas, crafted to elevate every dish.</p>
        </div>
        <div className="rice-sub-container">
            <div className='card'>
              <img src={Masala1} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Garam-masala'>Garam Masala</Link> </h3>
            </div>
            <div className='card'>
              <img src={Masala2} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Curry-Masala'>Curry Masala</Link> </h3>
            </div>
            <div className='card'>
              <img src={Masala3} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Sambar-Masala'>Sambar Masala</Link> </h3>
            </div>
            <div className='card'>
              <img src={Masala4} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Rasam-Masala'>Rasam Masala</Link> </h3>
            </div>
            <div className='card'>
              <img src={Masala5} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Puli-Kulambu-Masala'>Puli Kulambu Masala</Link> </h3>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Masala;


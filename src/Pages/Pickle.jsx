import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Rice.css'
import '../css/Responsive/RiceResponsive.css'
import banner from '../images/Pickle/pickle-banner.png'
import icon from '../images/l.png'
import pickle1 from '../images/Pickle/Garlic-Pickle1.png'
import pickle2 from '../images/Pickle/GreenChilli-Pickle.jpg'
import pickle3 from '../images/Pickle/Tomato-Pickle.jpg'
import pickle4 from '../images/Pickle/Mango-Pickle.jpg'
import pickle5 from '../images/Pickle/Brinjal-Pickle.jpg'
import pickle6 from '../images/Pickle/Curry-Pickle.jpg'
import pickle7 from '../images/Pickle/Coriander-Pickle.jpg'
import pickle8 from '../images/Pickle/Ginger-Pickle.jpg'
import pickle9 from '../images/Pickle/Mahani-Pickle.jpg'
import pickle10 from '../images/Pickle/Vadu-Maangai-Pickle.jpg'
import pickle11 from '../images/Pickle/Amla-Pickle.jpg'
import pickle12 from '../images/Pickle/Lime-Pickle.jpg'

function Pickle() {
  return (
    <div>
      <div className="rice-main-container">
        <img src={banner} className='rice-banner' />
      </div>
      <div className="rice-container">
        <div className="rice-icon">
          <img src={icon} className='rice-body-icon' />
        </div>
        <div rice-container>
          <h2 className='rice-body-heading'>WE EXPORT FINEST PICKLES, DELIVERING FLAVOR IN EVERY JAR</h2>
          <h2 className='rice-body-heading'>_______</h2>
          <p>At Koogul Industries, we take pride in exporting only the finest pickles to satisfy the varied tastes of our global customers. Our commitment to excellence starts with selecting the freshest ingredients from trusted sources. Each jar of pickle undergoes strict quality checks to ensure it meets our high standards.</p>
        </div>
        <div className="rice-sub-container">
            <div className='card'>
              <img src={pickle1} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Garlic-pickle'>Garlic Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle2} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Green-chilli-pickle'>Green Chilli Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle3} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Tomato-pickle'>Tomato Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle4} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Mango-pickle'>Mango Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle5} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Brinjal-pickle'>Brinjal Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle6} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Curry-leaf-pickle'>Curry Leaf Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle7} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Coriander-leaf-pickle'>Coriander Leaf Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle8} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Ginger-pickle'>Ginger Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle9} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Mahani-pickle'>Mahani Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle10} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Vadu-maangai-pickle'>Vadu Maangai Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle11} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Amla-pickle'>Amla Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle12} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Lime-pickle'>Lime Pickle</Link> </h3>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Pickle;


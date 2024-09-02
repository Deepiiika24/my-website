import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Rice.css'
import '../css/Responsive/RiceResponsive.css'
import banner from '../images/Pickle/Banner.png'
import icon from '../images/l.png'
import pickle1 from '../images/Pickle/Garlic-Pickle.jpg'
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
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Basmati-rice'>Garlic Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle2} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Matta-rice'>Green Chilli Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle3} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Idli-rice'>Tomato Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle4} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Boiled-rice'>Mango Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle5} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Red-raw-rice'>Brinjal Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle6} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Seeraga-samba-rice'>Curry Leaf Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle7} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/White-raw-rice'>Coriander Leaf Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle8} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/White-raw-rice'>Ginger Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle9} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/White-raw-rice'>Mahani Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle10} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/White-raw-rice'>Vadu Maangai Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle11} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/White-raw-rice'>Amla Pickle</Link> </h3>
            </div>
            <div className='card'>
              <img src={pickle12} className='rice-pic'></img>
              <h3 className='rice-link1-name' id='rice-link-name'><Link to='/White-raw-rice'>Lime Pickle</Link> </h3>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Pickle;


import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Rice.css'
import '../css/Responsive/RicePageResponsive.css'
import rice from '../images/oil/oil-banner.jpeg'
import icon from '../images/l.png'
import rice1 from '../images/oil/peanut.png'
import rice2 from '../images/oil/ghee.png'
import rice3 from '../images/oil/palm.png'
import rice4 from '../images/oil/sunflower.png'
import rice5 from '../images/oil/yellu.png'
import rice6 from '../images/oil/coconut.png'
import rice7 from '../images/oil/mustard.png'
function Oil() {
    return (
      <div>
        <div className="rice-main-container">
          <img src={rice} className='rice-banner' />
        </div>
        <div className="rice-container">
          <div className="rice-icon">
            <img src={icon} className='rice-body-icon' />
          </div>
          <div>
            <h2 className='rice-body-heading'>
            OIL EXPORTER FROM INDIA</h2>
            <h1>_______</h1>
            <p>Cooking oil is a versatile kitchen staple used for frying, sautéing, roasting, baking, and as a base for dressings and marinades. It enhances the flavor and texture of food while providing essential fats needed for a balanced diet. Different types of cooking oils, such as olive, sunflower, coconut, and canola oil, have unique properties, including varying smoke points and health benefits, making them suitable for different cooking methods. Additionally, cooking oils are also used in food preservation, as they help to extend shelf life and maintain moisture in various dishes.</p>
          </div>
          <div className="rice-sub-container">
              <div className='card'>
                <img src={rice1} className='rice-pic'></img>
                <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Peanutoil'>Peanut Oil</Link> </h3>
              </div>
              <div className='card'>
                <img src={rice2} className='rice-pic'></img>
                <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Ghee'>Ghee</Link> </h3>
              </div>
              <div className='card'>
                <img src={rice3} className='rice-pic'></img>
                <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Palmoil'>Palm oil</Link> </h3>
              </div>
              <div className='card'>
                <img src={rice4} className='rice-pic'></img>
                <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Sunfloweroil'>Sun flower Oil</Link> </h3>
              </div>
              <div className='card'>
                <img src={rice5} className='rice-pic'></img>
                <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Yelluoil'>Sesame Oil</Link> </h3>
              </div>
              <div className='card'>
                <img src={rice6} className='rice-pic'></img>
                <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Coconutoil'>Coconut Oil</Link> </h3>
              </div>
              <div className='card'>
                <img src={rice7} className='rice-pic'></img>
                <h3 className='rice-link1-name' id='rice-link-name'><Link to='/Mustardoil'>Mustard Oil</Link> </h3>
              </div>
          </div>
        </div>
      </div>
    );
  }
  

export default Oil;

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Snacks.css'
import rice from '../images/snacks/snacks-banner.png'
import icon from '../images/l.png'
import snack1 from '../images/snacks/Black-sesame-balls.jpg' 
import snack2 from '../images/snacks/Banana-chips.jpg' 
import snack3 from '../images/snacks/Peanut-powder.jpg' 
import snack4 from '../images/snacks/Garlic-mixture.jpg' 
import snack5 from '../images/snacks/Kadala-parupu.jpg' 
import snack6 from '../images/snacks/Hot-mixture.jpg' 
import snack7 from '../images/snacks/Kamarkat.jpg' 
import snack8 from '../images/snacks/Chikki.jpg' 
import snack9 from '../images/snacks/Chilli-peanut.jpg' 
import snack10 from '../images/snacks/Pepper-peanut.jpg' 
import snack11 from '../images/snacks/Peanut-salted.jpg' 
import snack12 from '../images/snacks/Topioca-chips.jpg' 
import snack13 from '../images/snacks/Topioca-stick.jpg' 
import snack14 from '../images/snacks/Thattai.avif' 
import snack15 from '../images/snacks/White-sesame-balls.jpg' 
import snack16 from '../images/snacks/chikpeas.jpg' 

function Snacks() {
  return (
    <div>
      <div className="snacks-main-container">
        <img src={rice} className='snacks-banner' />
      </div>
      <div className="snacks-container">
        <div class="snacks-content">
          <h1 className='snacks-heading'>Snacks</h1>
          <ul className='snacks-menu'>
            <li><Link to="/">HOME</Link></li>
            <li style={{ fontSize: "17px", color: "white" }}> / SNACKS</li>
          </ul>
        </div>
        <div className="snacks-icon">
          <img src={icon} className='snacks-body-icon' />
        </div>
        <div>
          <h1 className='snacks-body-heading'>WORLD-CLASS SNACKS DELIVERED : PREMIER EXPORTER OF GOURMET TREATS</h1>
          <h1>_______</h1>
          <p>Indulge in our exquisite range of gourmet snacks, meticulously sourced and crafted to delight your taste buds. As a premier exporter, we ensure world-class quality and taste delivered right to your doorstep.</p>
        </div>
        <div className="snacks-sub-container">
          <div className="snacks-image">
            <div className='card'>
              <img src={snack1} className='snacks-pic'></img>
              <h3 className='snacks-link1-name' id='snacks-link-name'><Link to='/Black-sesame-balls'>Black Sesame Balls</Link> </h3>
            </div>
            <div className='card'>
              <img src={snack2} className='snacks-pic'></img>
              <h3 className='snacks-link1-name' id='snacks-link-name'><Link to='/Banana-chips'>Banana Chips</Link> </h3>
            </div>
            <div className='card'>
              <img src={snack3} className='snacks-pic'></img>
              <h3 className='snacks-link1-name' id='snacks-link-name'><Link to='/Peanut-chikki-powder'>Peanut Powder</Link> </h3>
            </div>
            <div className='card'>
              <img src={snack4} className='snacks-pic'></img>
              <h3 className='snacks-link1-name' id='snacks-link-name'><Link to='/Garlic-mixture'>Garlic Mixture</Link> </h3>
            </div>
          </div>
          <div className="snacks-image">
            <div className='card'>
              <img src={snack5} className='snacks-pic'></img>
              <h3 className='snacks-link1-name' id='snacks-link-name'><Link to='/Kadalai-parupu'>Channa Dal</Link> </h3>
            </div>
            <div className='card'>
              <img src={snack6} className='snacks-pic'></img>
              <h3 className='snacks-link1-name' id='snacks-link-name'><Link to='/Hot-mixture'>Hot Mixture</Link> </h3>
            </div>
            <div className='card'>
              <img src={snack7} className='snacks-pic'></img>
              <h3 className='snacks-link1-name' id='snacks-link-name'><Link to='/Kamarcut'>Kamarcut</Link> </h3>
            </div>
            <div className='card'>
              <img src={snack8} className='snacks-pic'></img>
              <h3 className='snacks-link1-name' id='snacks-link-name'><Link to='/Peanut-chikkies'>Peanut Chikkies</Link> </h3>
            </div>
          </div>
          <div className="snacks-image">
            <div className='card'>
              <img src={snack9} className='snacks-pic'></img>
              <h3 className='snacks-link1-name' id='snacks-link-name'><Link to='/Peanut-chilli'>Peanut Chilli</Link> </h3>
            </div>
            <div className='card'>
              <img src={snack10} className='snacks-pic'></img>
              <h3 className='snacks-link1-name' id='snacks-link-name'><Link to='/Peanut-pepper'>Peanut Pepper</Link> </h3>
            </div>
            <div className='card'>
              <img src={snack11} className='snacks-pic'></img>
              <h3 className='snacks-link1-name' id='snacks-link-name'><Link to='/Peanut-salt'>Peanut Salt</Link> </h3>
            </div>
            <div className='card'>
              <img src={snack12} className='snacks-pic'></img>
              <h3 className='snacks-link1-name' id='snacks-link-name'><Link to='/Tapioca-chips'>Tapioca Chips</Link> </h3>
            </div>
          </div>
          <div className="snacks-image">
            <div className='card'>
              <img src={snack13} className='snacks-pic'></img>
              <h3 className='snacks-link1-name' id='snacks-link-name'><Link to='/Tapioca-stick'>Tapioca Stick</Link> </h3>
            </div>
            <div className='card'>
              <img src={snack14} className='snacks-pic'></img>
              <h3 className='snacks-link1-name' id='snacks-link-name'><Link to='/Thattai-vadai'>Thattai Vadai</Link> </h3>
            </div>
            <div className='card'>
              <img src={snack15} className='snacks-pic'></img>
              <h3 className='snacks-link1-name' id='snacks-link-name'><Link to='/White-sesame-balls'>White Sesame Balls</Link> </h3>
            </div>
            <div className='card'>
              <img src={snack16} className='snacks-pic'></img>
              <h3 className='snacks-link1-name' id='snacks-link-name'><Link to='/Chikpeas'>Chikpeas</Link> </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snacks;


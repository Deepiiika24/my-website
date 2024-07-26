import React from 'react';
import '../css/vegetable.css'
import { Link } from 'react-router-dom'
import veg1 from '../images/vegetables/BOTTEL.jpg'
import veg2 from '../images/vegetables/brinjal.jpg'
import veg3 from '../images/vegetables/broccolie.jpg'
import veg4 from '../images/vegetables/cabbage.jpg'
import veg5 from '../images/vegetables/cauliflower.jpg'
import veg6 from '../images/vegetables/drum stick.jpg'
import veg7 from '../images/vegetables/GREEN CHILLI.jpg'
import veg8 from '../images/vegetables/ladys finger.jpg'
import veg9 from '../images/vegetables/mashroom.jpg'
import veg10 from '../images/vegetables/onione.jpg'
import veg11 from '../images/vegetables/potato.jpg'
import veg12 from '../images/vegetables/spinach.jpg'
import spiceslogo from '../images/l.png'
function Vegetables() {
  return (
    <div>
       <div className='container'>
      <section className='vegetable'>
        <div className='vegetable-banner'>
        <h1>vegetables</h1>
         <ul>
        <span><Link to="/">Home /</Link></span>
         <span><Link to="/vegetables">vegetables</Link></span>
         </ul>
        </div>   
      </section>
      <section className='vegetable-content'>
      <div className='vegetable-logo-context'>
      <img src={spiceslogo}></img>
      <div>
        <h1>Vegetable export from India </h1>
      <p>India has a rich and diverse climate. This diversity provides lots of varieties of vegetables. Vegetables are one of the most rapid growing sub-sectors of food processing sector. India currently stands at 2nd position in the world for its production of vegetables. It also holds 3rd position as the net-exporter of vegetables.
According to the export value; onion occupies the first position. In the recent years, potatoes and some green vegetables like bitter gourd, okra and green chillies have also shown an increase in their exports.</p>
      </div>
      </div>
      </section>
      <section className='vegetable-product'>
        <div className='vegetable-img'>
        <div className='card'>
                 <img src={veg1} className='vegetable-pic bottle'></img>
              <h3 className='link1-nameveg'><Link to='/Vegbottle'>Bottle Gourd</Link> </h3>
             </div>
             <div className='card'>
                 <img src={veg2} className='vegetable-pic'></img>
              <h3 className='link2-nameveg'><Link to='/Brinjal'>Brinjal</Link> </h3>
             </div>
             <div className='card'>
                 <img src={veg3} className='vegetable-pic'></img>
              <h3 className='link3-nameveg'><Link to='/Vegetablebroccolie'>Broccolie</Link> </h3>
             </div>
             <div className='card'>
                 <img src={veg4} className='vegetable-pic'></img>
              <h3 className='link4-nameveg'><Link to='/Cabbage'>Cabbage</Link> </h3>
             </div>
             <div className='card'>
                 <img src={veg5} className='vegetable-pic'></img>
              <h3 className='link5-nameveg'><Link to='/Cauliflower'>Cauliflower</Link> </h3>
             </div>
             <div className='card'>
                 <img src={veg6} className='vegetable-pic'></img>
              <h3 className='link6-nameveg'><Link to='/Drumstick'>Drum stick</Link> </h3>
             </div>
             <div className='card'>
                 <img src={veg7} className='vegetable-pic'></img>
              <h3 className='link7-nameveg'><Link to='/Greenchilli'>Green chilli</Link> </h3>
             </div>
             <div className='card'>
                 <img src={veg8} className='vegetable-pic'></img>
              <h3 className='link8-nameveg'><Link to='/Ladyfinger'>Lady finger</Link> </h3>
             </div>
             <div className='card'>
                 <img src={veg9} className='vegetable-pic'></img>
              <h3 className='link9-nameveg'><Link to='/Mushroom'>Mushroom</Link> </h3>
             </div>
             <div className='card'>
                 <img src={veg10} className='vegetable-pic'></img>
              <h3 className='link10-nameveg'><Link to='/Onion'>Onion</Link> </h3>
             </div>
             <div className='card'>
                 <img src={veg11} className='vegetable-pic'></img>
              <h3 className='link11-nameveg'><Link to='/Potato'>Potato</Link> </h3>
             </div>
             <div className='card'>
                 <img src={veg12} className='vegetable-pic'></img>
              <h3 className='link12-nameveg'><Link to='/Spinach'>Spinach</Link> </h3>
             </div>
             
                    </div>
      </section>
   </div>
    </div>
  );
}

export default Vegetables;

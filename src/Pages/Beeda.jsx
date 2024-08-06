import React from 'react';
import '../css/beeda.css'
import { Link } from 'react-router-dom'
import veg1 from '../images/beeda/cocount.jpg'
import veg2 from '../images/beeda/jeera.jpg'
import veg3 from '../images/beeda/rore-beeda.jpg'
import veg5 from '../images/beeda/tuttifrutti.jpg'
import veg6 from '../images/beeda/dry-clove.jpg'
import veg7 from '../images/beeda/chutni.jpg'
import veg8 from '../images/beeda/cardamom.jpg'
import veg9 from '../images/beeda/battikatha.jpg'
import spiceslogo from '../images/l.png'
function Beeda() {
   return (
      <div>
         <div className='container'>
            <section className='beeda'>
               <div className='beeda-banner'>
                  <h1>PAN BEEDA</h1>
                  <ul>
                     <span><Link to="/">HOME /</Link></span>
                     <span><Link to="/Beeda">PAN BEEDA</Link></span>
                  </ul>
               </div>
            </section>
            <div className="beeda-body-container">
               <section className='beeda-content'>
                  <div className='beeda-logo-context'>
                     <img src={spiceslogo}></img>
                     <div>
                        <h1> PAN BEEDA EXPORT FROM INDIA</h1>
                        <h1>_______</h1>
                        <p>Always fresh betel leaves for making beeda.  Till you start making the beeda keep this inside a bowl of water.
                           Take one from the water and pat dry it. On the back side of the leaf, slightly spread the Sunnambu . This gives colour in your tongue after you chew the paan.
                           Do not add too much, just a little will do.Cut the stem of the betel leaves as shown in the picture.
                           Start folding it from one end to make a cone. My hubby helped me out for this picture.Once the cone is ready start filling it with the ingredients. Keep in mind not to over stuff the cone, else you will not be able to close it.
                           First start with supari | paaku. And then with other ingredients and lastly with gulkand.Close the cone and keep a cherry in the middle and insert a tooth pick in the middle.</p>
                     </div>
                  </div>
               </section>
               <section className='beeda-product'>
                  <div className='beeda-img'>
                     <div className='card'>
                        <img src={veg1} className='beeda-pic bottle'></img>
                        <h3 className='link1-namebeeda' id='beeda-linkname'><Link to='/Shreddedcoconut'>Shredded Coconut</Link> </h3>
                     </div>
                     <div className='card'>
                        <img src={veg2} className='beeda-pic'></img>
                        <h3 className='link2-namebeeda' id='beeda-linkname'><Link to='/Sweetjeeramittai'>Sweet Jeera Mittai</Link> </h3>
                     </div>
                     <div className='card'>
                        <img src={veg3} className='beeda-pic'></img>
                        <h3 className='link3-namebeeda' id='beeda-linkname'><Link to='/Rosegulkand'>Rose Gulkand</Link> </h3>
                     </div>
                     <div className='card'>
                        <img src={veg5} className='beeda-pic'></img>
                        <h3 className='link5-namebeeda' id='beeda-linkname'><Link to='/Drytuttifrutti'>Dry Tutti Frutti</Link> </h3>
                     </div>
                     <div className='card'>
                        <img src={veg6} className='beeda-pic'></img>
                        <h3 className='link6-namebeeda' id='beeda-linkname'><Link to='/Dryclove'>Dry Clove</Link> </h3>
                     </div>
                     <div className='card'>
                        <img src={veg7} className='beeda-pic'></img>
                        <h3 className='link7-namebeeda' id='beeda-linkname'><Link to='/Sweetpanchutni'>Sweet Pan Chutni</Link> </h3>
                     </div>
                     <div className='card'>
                        <img src={veg8} className='beeda-pic'></img>
                        <h3 className='link8-namebeeda' id='beeda-linkname'><Link to='/Cardamomseeds'>Cardamom Seeds</Link> </h3>
                     </div>
                     <div className='card'>
                        <img src={veg9} className='beeda-pic'></img>
                        <h3 className='link9-namebeeda' id='beeda-linkname'><Link to='/Kanpuribiscuit'>Kanpuri Biscuit</Link> </h3>
                     </div>

                  </div>
               </section>
            </div>
         </div>
      </div>
   );
}

export default Beeda;


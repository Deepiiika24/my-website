import React from 'react';
import spiceslogo from '../images/l.png'
import '../css/Spices.css'
import { Link } from 'react-router-dom'
import spices1 from '../images/spices/garlic.jpg'
import spices2 from '../images/spices/clove.jpg'
import spices3 from '../images/spices/mustard.jpg'
import spices4 from '../images/spices/bayleaf.jpg'
import spices5 from '../images/spices/turmeric.jpg'
import spices6 from '../images/spices/ginger.jpg'
import spices7 from '../images/spices/star.jpg'
import spices8 from '../images/spices/cinnamon.jpg'
import spices9 from '../images/spices/nutmeg.jpg'
import spices10 from '../images/spices/cumin.jpg'
import spices11 from '../images/spices/blackpeppr.jpg'
import spices12 from '../images/spices/redchilli.jpg'
import spices13 from '../images/spices/coriander.jpg'
import spices14 from '../images/spices/saffron.jpg'
import spices15 from '../images/spices/caromseeds.jpg'
import spices16 from '../images/spices/mace.jpg'
import spices17 from '../images/spices/poppy.jpg'
import spices18 from '../images/spices/greencardamom.jpg'
import spices19 from '../images/spices/peppercorn.jpg'
import spices20 from '../images/spices/brown.jpg'
import spices21 from '../images/spices/bayleaf.jpg'
function Spices() {
   return (
      <div className='container'>
         <section className='spices'>
            <div className='spices-banner'>
               <h1>Spices</h1>
               <ul>
                  <span><Link to="/">HOME /</Link></span>
                  <span><Link to="/Spices">SPICES</Link></span>
               </ul>
            </div>
         </section>
         <div className="spices-body-container">
            <section className='spices-content'>
               <div className='spices-logo-context'>
                  <img src={spiceslogo}></img>
                  <div>
                     <h4>GET MESMERIZED WITH THE FRAGRANCE OF THE SUPERB QUALITY OF SPICES BOUGHT FROM KOOGUL INDUSTRIES FOOD EXPORTS</h4>
                     <h1>_______</h1>
                     <p>Koogul Industries Food Exports is famous for delivering excellent quality of organic Indian spices to middle east nations. The taste and aroma these spices add to your food is beyond the best experience. We have a range of customers who come back to us specially for buying our range of spices because it gives them ultimate satisfaction of eating very tasty food. A high quality standard is maintained while delivering organic Indian spices to the customers.</p>
                  </div>
               </div>
            </section>
            <section className='spices-product'>
               <div className='spices-img'>
                  <div className='card'>
                     <img src={spices1} className='spices-pic'></img>
                     <h3 className='link1-name' id='link-name'><Link to='/Garlic'>Garlic</Link> </h3>
                  </div>
                  <div className='card'>
                     <img src={spices2} className='spices-pic'></img>
                     <h3 className='link2-name' id='link-name'><Link to='/Clove'>Clove</Link> </h3>
                  </div>
                  <div className='card'>
                     <img src={spices3} className='spices-pic'></img>
                     <h3 className='link3-namespices' id='link-name'><Link to='/Mustardseeds'>Mustard Seeds</Link> </h3>
                  </div>
                  <div className='card'>
                     <img src={spices4} className='spices-pic'></img>
                     <h3 className='link4-name' id='link-name'><Link to='/Bayleaf'>Bay-leaf</Link> </h3>
                  </div>
                  <div className='card'>
                     <img src={spices5} className='spices-pic'></img>
                     <h3 className='link5-name' id='link-name'><Link to='/Turmeric'>Turmeric</Link> </h3>
                  </div>
                  <div className='card'>
                     <img src={spices6} className='spices-pic'></img>
                     <h3 className='link6-name' id='link-name'><Link to='/Ginger'>Ginger</Link> </h3>
                  </div>
                  <div className='card'>
                     <img src={spices7} className='spices-pic'></img>
                     <h3 className='link7-name' id='link-name'><Link to='/Spistaranice'>Start-anise</Link> </h3>
                  </div>
                  <div className='card'>
                     <img src={spices8} className='spices-pic'></img>
                     <h3 className='link8-name' id='link-name'><Link to='/Cinnamon'>Cinnamon</Link> </h3>
                  </div>
                  <div className='card'>
                     <img src={spices9} className='spices-pic'></img>
                     <h3 className='link9-name' id='link-name'><Link to='/Nutmeg'>Nutmeg</Link> </h3>
                  </div>
                  <div className='card'>
                     <img src={spices10} className='spices-pic'></img>
                     <h3 className='link10-name' id='link-name'><Link to='/Cumin'>Cumin</Link> </h3>
                  </div>
                  <div className='card'>
                     <img src={spices11} className='spices-pic'></img>
                     <h3 className='link11-name' id='link-name'><Link to='/Blackpepper'>Black pepper</Link> </h3>
                  </div>
                  <div className='card'>
                     <img src={spices12} className='spices-pic'></img>
                     <h3 className='link12-name' id='link-name'><Link to='/Redchilli'>Red chilli</Link> </h3>
                  </div>
                  <div className='card'>
                     <img src={spices13} className='spices-pic'></img>
                     <h3 className='link13-name' id='link-name'><Link to='/Coriander'>Coriander</Link> </h3>
                  </div>

                  <div className='card'>
                     <img src={spices15} className='spices-pic'></img>
                     <h3 className='link15-name' id='link-name'><Link to='/Caromseeds'>Carom seeds</Link> </h3>
                  </div>
                  <div className='card'>
                     <img src={spices16} className='spices-pic'></img>
                     <h3 className='link16-name' id='link-name'><Link to='/Mace'>Mace</Link> </h3>
                  </div>
                  <div className='card'>
                     <img src={spices17} className='spices-pic'></img>
                     <h3 className='link17-name' id='link-name'><Link to='/poppyseed'>poppy seed</Link> </h3>
                  </div>
                  <div className='card'>
                     <img src={spices18} className='spices-pic'></img>
                     <h3 className='link18-name' id='link-name'><Link to='/Greencardamom'>Green Cardamom</Link> </h3>
                  </div>

                  <div className='card'>
                     <img src={spices19} className='spices-pic'></img>
                     <h3 className='link19-name' id='link-name'><Link to='/Peppercorns'>Peppercorns</Link> </h3>
                  </div>
                  <div className='card'>
                     <img src={spices20} className='spices-pic'></img>
                     <h3 className='link20-name' id='link-name'><Link to='/Browncardamam'>Brown cardamam</Link> </h3>
                  </div>
                  <div className='card'>
                     <img src={spices14} className='spices-pic'></img>
                     <h3 className='link14-name' id='link-name'><Link to='/Spicessaffron'>Saffron</Link> </h3>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
}

export default Spices;

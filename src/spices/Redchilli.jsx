import React from 'react';
import garlic from '../images/spices/redchilli-banner.jpg'
import '../css/spices/Spicespage.css'
function Redchilli() {
  return (
    <div>
      <section className='Spices-type-banner'>
        <div className='container'>
          <img src={garlic} className='banner'></img>
        </div>
      </section>
      <section className='spices-type-content'>
        <div className='spices-type-text redchilli'>
          <h1>RED CHILLI EXPORTERS</h1>
          <p>Red Chillies" redirects here. For the film, see Red Chillies (film). "Hot pepper" redirects here. For other uses, see Hot pepper (disambiguation). For the dish often called simply "chili", see Chili con carne. For the band, see Red Hot Chili Peppers.
Young chili plants Chili peppers, also spelled chile or chilli (from Classical Nahuatl chīlli ), are varieties of the berry-fruit of plants from the genus Capsicum, which are members of the nightshade family Solanaceae, cultivated for their pungency. Chili peppers are widely used in many cuisines as a spice to add "heat" to dishes. Capsaicin and related compounds known as capsaicinoids are the substances that give chili peppers their intensity when ingested or applied topically. Chili peppers exhibit a range of heat and flavors. This diversity is the reason behind the availability of different types of paprika and chili powder, each offering its own taste and heat level.</p>
        </div>
      </section>
      <section className='Spices-type-table'>
        <div className='Spices-table-heading'>
          <h1>INGREDIENTS</h1>
          <table class="table table-hover table-responsive table-bordered">
            <thead>
             <th>   </th>
             <th scope='row'>Quantity<br></br>Per<span>Serving</span></th>
             <th scope='row'>Quantity<br></br>Per<span>100g</span></th>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>Energy</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Protein</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Fat</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Carbohydrate</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Sodium</th>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Redchilli;



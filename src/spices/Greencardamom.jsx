import React from 'react';
import garlic from '../images/spices/Greencardamom-banner.jpg'
import '../css/spices/Spicespage.css'
import '../css/Responsive/SpicespageResponsive.css'
function Greencardamom() {
  return (
    <div>
      <section className='Spices-type-banner'>
        <div className='container'>
          <img src={garlic} className='banner'></img>
        </div>
      </section>
      <section className='spices-type-content'>
        <div className='spices-type-text greens'>
          <h1>GREEN CARDAMON EXPORTERS</h1>
          <p>Elettaria cardamomum, commonly known as green cardamom or true cardamom, is a herbaceous, perennial plant in the ginger family, native to southern India. It is the most common of the species whose seeds are used as a spice called cardamom that has a sharp, strong, punchy aroma. It is cultivated widely in tropical regions and reportedly naturalized in Réunion, Indochina, and Costa Rica.</p>
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

export default Greencardamom;

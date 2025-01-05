import React from 'react';
import cinnamon from '../images/spices/cinnamon-banner.jpg'
import '../css/spices/Spicespage.css'
import '../css/Responsive/SpicespageResponsive.css'
function Cinnamon() {
  return (
    <div>
      <section className='Spices-type-banner'>
        <div className='spices-page-container'>
          <img src={cinnamon} className='spices-page-banner'></img>
        </div>
      </section>
      <section className='spices-type-content'>
        <div className='spices-type-text cinnamon'>
          <h1>CINNAMON EXPORTERS</h1>
          <p>Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive in a wide variety of cuisines, sweet and savoury dishes, breakfast cereals, snack foods, bagels, teas, hot chocolate and traditional foods. The aroma and flavour of cinnamon derive from its essential oil and principal component, cinnamaldehyde, as well as numerous other constituents including eugenol.
Cinnamomum verum, from Koehler's Medicinal-Plants (1887)Close-up view of raw cinnamon bark Cinnamon is the name for several species of trees and the commercial spice products that some of them produce. All are members of the genus Cinnamomum in the family Lauraceae. </p>  </div>
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

export default Cinnamon;




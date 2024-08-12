import React from 'react';
import garlic from '../images/spices/caromseeds-banner.jpg'
import '../css/spices/Spicespage.css'
import '../css/Responsive/SpicespageResponsive.css'
function Caromseeds() {
  return (
    <div>
      <section className='Spices-type-banner'>
        <div className='container'>
          <img src={garlic} className='banner'></img>
        </div>
      </section>
      <section className='spices-type-content'>
        <div className='spices-type-text'>
          <h1>CAROMSEEDS EXPORTERS</h1>
          <p>Ajwain or ajowan (Trachyspermum ammi)  also known as ajowan caraway, omam (in Tamil), thymol seeds, bishop's weed, or carom—is an annual herb in the family Apiaceae.[4] Both the leaves and the seed like fruit (often mistakenly called seeds) of the plant are consumed by humans. The name "bishop's weed" also is a common name for other plants. The "seed" (i.e., the fruit) is often confused with lovage seed.</p>
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

export default Caromseeds;

import React from 'react';
import turmeric from '../images/spices/turmeric-banner.jpg'
import '../css/spices/Spicespage.css'
import '../css/Responsive/SpicespageResponsive.css'
function Turmeric() {
  return (
    <div>
      <section className='Spices-type-banner'>
        <div className='container'>
          <img src={turmeric} className='banner'></img>
        </div>
      </section>
      <section className='spices-type-content'>
        <div className='spices-type-text tumeric'>
          <h1>TURMERIC EXPORTERS</h1>
          <p>Turmeric powder has a warm, bitter, black pepper-like flavor and earthy, mustard-like aroma.Curcumin, a bright yellow chemical produced by the turmeric plant, is approved as a food additive by the World Health Organization, European Parliament, and United States Food and Drug Administration.
Although long used in Ayurvedic medicine, there is no high-quality clinical evidence that consuming turmeric or curcumin is effective for treating any disease.</p>
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

export default Turmeric;

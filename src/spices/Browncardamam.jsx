import React from 'react';
import garlic from '../images/spices/Brown cardamam-banner.jpg'
import '../css/spices/Spicespage.css'
function Browncardamam() {
  return (
    <div>
      <section className='Spices-type-banner'>
        <div className='container'>
          <img src={garlic} className='banner'></img>
        </div>
      </section>
      <section className='spices-type-content '>
        <div className='spices-type-text greens'>
          <h3>Browncardamam Exporters</h3>
          <p>Amomum subulatum, also known as black cardamom, hill cardamom, Bengal cardamom, greater cardamom, Indian cardamom,Nepal cardamom, winged cardamom, big cardamon, or brown cardamom, is a perennial herbaceous plant in the family Zingiberaceae. Its seed pods have a strong, camphor-like flavour, with a smoky character derived from the method of drying.</p>
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

export default Browncardamam;


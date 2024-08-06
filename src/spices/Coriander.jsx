import React from 'react';
import corianter from '../images/spices/corianter-banner.jpg'
import '../css/spices/Spicespage.css'
function Coriander() {
  return (
    <div>
      <section className='Spices-type-banner'>
        <div className='container'>
          <img src={corianter} className='banner'></img>
        </div>
      </section>
      <section className='spices-type-content coriander'>
        <div className='spices-type-text'>
          <h1>CORIANDER EXPORTERS</h1>
          <p>Coriander (Coriandrum sativum), also known as cilantro  is an annual herb in the family Apiaceae. All parts of the plant are edible, but the fresh leaves and the dried seeds are the parts most traditionally used in cooking.
Most people perceive coriander as having a tart, lemon/lime taste, but some individuals perceive the leaves to have a soapy, pungent, or rotten taste</p>
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

export default Coriander;


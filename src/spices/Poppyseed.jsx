import React from 'react';
import garlic from '../images/spices/poppy-banner.jpg'
import '../css/spices/Spicespage.css'
function Poppyseed() {
  return (
    <div>
      <section className='Spices-type-banner'>
        <div className='container'>
          <img src={garlic} className='banner'></img>
        </div>
      </section>
      <section className='spices-type-content poppy'>
        <div className='spices-type-text'>
          <h3>Poppy seed Exporters</h3>
          <p>Poppy seed is an oilseed obtained from the opium poppy (Papaver somniferum). The tiny, kidney-shaped seeds have been harvested from dried seed pods by various civilizations for thousands of years. It is still widely used in many countries, especially in Central Europe and South Asia, where it is legally grown and sold in shops. The seeds are used whole or ground into meal as an ingredient in many foods especially in pastry and bread and they are pressed to yield poppyseed oil.</p>
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

export default Poppyseed;

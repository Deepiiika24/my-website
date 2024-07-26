import React from 'react';
import garlic from '../images/spices/mustard-banner.jpg'
import '../css/spices/Spicespage.css'
function Mustardseeds() {
  return (
    <div>
      <section className='Spices-type-banner'>
        <div className='container'>
          <img src={garlic} className='banner'></img>
        </div>
      </section>
      <section className='spices-type-content'>
        <div className='spices-type-text'>
          <h2>Mustard Seeds Exporters</h2>
          <p>Mustard seeds are the small round seeds of various mustard plants. The seeds are usually about 1 to 2 millimetres in diameter and may be colored from yellowish white to black. They are an important spice in many regional foods and may come from one of three different plants: black mustard (Brassica nigra), brown mustard (B. juncea), or white mustard (Sinapis alba).
Grinding and mixing the seeds with water, vinegar or other liquids creates the yellow condiment known as mustard.</p>
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

export default Mustardseeds;

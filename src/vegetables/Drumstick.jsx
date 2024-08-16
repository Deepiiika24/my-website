import React from 'react';
import '../css//vegetablepages.css'
import '../css/Responsive/VegetablePageResponsive.css'
import drumstick from '../images/vegetables/drumstick-banner.jpg'
function Drumstick() {
  return (
    <div className='veg-main-container'>
      <section className='vegetable-type-banner'>
        <div className='veg-container'>
          <div className='vegetable-contant-banner'>
            <img src={drumstick}></img>
          </div>
          <div className='veg-contant'>
            <h1>DRUMSTICK EXPORTERS</h1><br></br>
            <p>The pods of the Drumstick or Moringa tree are generally long, smooth-skinned, dark green in color, and three-sided. Drumstick exporter in India export tonnes of Drumsticks every year to different countries in the world. Drumsticks can be used in many recipes and are known for their nutritional qualities. This may be one of the reasons why Drumstick export from India has increased. The Drumstick import from India is now a growing business opportunity. </p>
          </div>
        </div>
      </section>
      <section className='veg-type-table'>
        <div className='veg-table-heading'>
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


export default Drumstick;

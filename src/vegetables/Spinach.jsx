import React from 'react';
import garlic from '../images/spices/garlic-banner2.jpg'
import '../css//vegetablepages.css'
import spinach from '../images/vegetables/spinach-banner.jpg'
function Spinach() {
  return (
    <div>
    <section className='vegetable-type-banner'>
      <div className='container'>
        <div className='vegetable-contant-banner'>
        <img src={spinach}></img>
        <div className='veg-contant'>
        <h1>Spinach Exporters</h1><br></br>
        <p>Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and Western Asia. It is of the order Caryophyllales, family Amaranthaceae, subfamily Chenopodioideae. Its leaves are a common edible vegetable consumed either fresh, or after storage using preservation techniques by canning, freezing, or dehydration. It may be eaten cooked or raw, and the taste differs considerably; the high oxalate content may be reduced by steaming.
It is an annual plant (rarely biennial), growing as tall as 30 cm (1 ft). Spinach may overwinter in temperate regions.</p>
        </div>
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

export default Spinach;

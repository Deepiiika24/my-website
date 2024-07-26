import React from 'react';
import garlic from '../images/spices/garlic-banner2.jpg'
import '../css//vegetablepages.css'
import brinjal from '../images/vegetables/brinjal-banner.jpg'
function Brinjal() {
  return (
    <div>
    <section className='vegetable-type-banner'>s
      <div className='container'>
        <div className='vegetable-contant-banner'>
        <img src={brinjal}></img>
        <div className='veg-contant'>
        <h1>Brinjal Exporters</h1><br></br>
        <p>Most commonly purple, the spongy, absorbent fruit is used in several cuisines. Typically used as a vegetable in cooking, it is a berry by botanical definition. As a member of the genus Solanum, it is related to the tomato, chili pepper, and potato, although those are of the New World while the eggplant is of the Old World. Like the tomato, its skin and seeds can be eaten, but, like the potato, it is usually eaten cooked. Eggplant is nutritionally low in macronutrient and micronutrient content, but the capability of the fruit to absorb oils and flavors into its flesh through cooking expands its use in the culinary arts.</p>
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

export default Brinjal;

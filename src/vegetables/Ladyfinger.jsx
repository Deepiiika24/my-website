import React from 'react';
import garlic from '../images/spices/garlic-banner2.jpg'
import '../css//vegetablepages.css'
import ladyfinger from '../images/vegetables/ladyfinger-banner.jpg'
function Ladyfinger() {
  return (
    <div>
    <section className='vegetable-type-banner'>
      <div className='container'>
        <div className='vegetable-contant-banner'>
        <img src={ladyfinger}></img>
        <div className='veg-contant'>
        <h1>Ladyfinger Exporters</h1><br></br>
        <p>Okra , Abelmoschus esculentus, known in some English-speaking countries as lady's fingers, is a flowering plant in the mallow family native to East Africa. It has edible green seed pods. Cultivated in tropical, subtropical, and warm temperate regions around the world, okra is used in the cuisines of many countries.<br></br><br></br>The pods of the plant are mucilaginous, resulting in the characteristic "goo" or slime when the seed pods are cooked; the mucilage contains soluble fiber. One possible way to de-slime okra is to cook it with an acidic food, such as tomatoes, to minimize the mucilage. </p>
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


export default Ladyfinger;

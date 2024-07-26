import React from 'react';
import garlic from '../images/spices/garlic-banner2.jpg'
import '../css//vegetablepages.css'
import potato from '../images/vegetables/potato-banner.jpg'
function Potato() {
  return (
    <div>
    <section className='vegetable-type-banner'>
      <div className='container'>
        <div className='vegetable-contant-banner'>
        <img src={potato}></img>
        <div className='veg-contant'>
        <h1>Potato Exporters</h1><br></br>
        <p>The potato is a starchy root vegetable native to the Americas that is consumed as a staple food in many parts of the world. Potatoes are tubers of the plant Solanum tuberosum, a perennial in the nightshade family Solanaceae.
Wild potato species can be found from the southern United States to southern Chile. Genetic studies show that the cultivated potato has a single origin, in the area of present-day southern Peru and extreme northwestern Bolivia. Potatoes were domesticated there about 7,000-10,000 years ago from a species in the S. brevicaule complex. Many varieties of the potato are cultivated in the Andes region of South America, where the species is indigenous </p>
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

export default Potato;

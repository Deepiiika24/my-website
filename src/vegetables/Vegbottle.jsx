import React from 'react';
import '../css//vegetablepages.css'
import '../css/Responsive/VegetablePageResponsive.css'
import bottle from '../images/vegetables/bottel-banner.jpg'
function Vegbottle() {
  return (
    <div className='veg-main-container'>
      <section className='vegetable-type-banner'>
        <div className='veg-container'>
          <div className='vegetable-contant-banner'>
            <img src={bottle}></img>
          </div>
          <div className='veg-contant'>
            <h1>BOTTLE GOURD EXPORTERS</h1><br></br>
            <p>Calabash fruits have a variety of shapes: they can be huge and rounded, small and bottle-shaped, or slim and serpentine, and they can grow to be over a metre long. Rounder varieties are typically called calabash gourds. The gourd was one of the world's first cultivated plants grown not primarily for food, but for use as containers. The bottle gourd may have been carried from Asia to Africa, Europe, and the Americas in the course of human migration, or by seeds floating across the oceans inside the gourd.  </p>
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


export default Vegbottle;

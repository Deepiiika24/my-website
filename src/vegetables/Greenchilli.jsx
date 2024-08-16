import React from 'react';
import '../css//vegetablepages.css'
import '../css/Responsive/VegetablePageResponsive.css'
import greenchilli from '../images/vegetables/greenchilli-banner.jpg'
function Greenchilli() {
  return (
    <div className='veg-main-container'>
      <section className='vegetable-type-banner'>
        <div className='veg-container'>
          <div className='vegetable-contant-banner'>
            <img src={greenchilli}></img>
          </div>
          <div className='veg-contant'>
            <h1>GREEN CHILLI EXPORTERS</h1><br></br>
            <p>Green chillies are one of the most important parts of Indian cuisine. Green chilli exporter in India exports tonnes of chillies abroad each year. The growing popularity of the green chillies is because of its unique flavour and aroma. Green chilli export from India is thus a good business opportunity for our local farmers and vendors to enter the international market. Green chilli import from India includes the import of different types and qualities of chillies. </p>
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


export default Greenchilli;

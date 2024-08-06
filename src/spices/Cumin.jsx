import React from 'react';
import cumin from '../images/spices/cumin-banner.jpg'
import '../css/spices/Spicespage.css'
function Cumin() {
  return (
    <div>
      <section className='Spices-type-banner'>
        <div className='container'>
          <img src={cumin} className='banner'></img>
        </div>
      </section>
      <section className='spices-type-content'>
        <div className='spices-type-text cumin'>
          <h1>CUMIN EXPORTERS</h1>
          <p>Cumin ( US also  Cuminum cyminum) is a flowering plant in the family Apiaceae, native to the Irano-Turanian Region. Its seeds  each one contained within a fruit, which is dried – are used in the cuisines of many cultures in both whole and ground form. Although cumin is used in traditional medicine, there is no high-quality evidence that it is safe or effective as a therapeutic agent.</p>
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

export default Cumin;


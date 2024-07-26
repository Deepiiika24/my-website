import React from 'react';
import garlic from '../images/spices/garlic-banner2.jpg'
import '../css/spices/Spicespage.css'
function Garlic() {
  return (
    <div>
      <section className='Spices-type-banner'>
        <div className='container'>
          <img src={garlic} className='banner'></img>
        </div>
      </section>
      <section className='spices-type-content'>
        <div className='spices-type-text'>
          <h1>Garlic Exporters</h1>
          <p>Garlic (Allium sativum) is a species of bulbous flowering plant in the genus Allium. Its close relatives include the onion, shallot, leek, chive, Welsh onion, and Chinese onion. It is native to South Asia, Central Asia and northeastern Iran and has long been used as a seasoning worldwide, with a history of several thousand years of human consumption and use.It was known to ancient Egyptians and has been used as both a food flavoring and a traditional medicine. China produced 73% of the world's supply of garlic in 2021.</p>
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

export default Garlic;

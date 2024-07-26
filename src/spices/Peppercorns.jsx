import React from 'react';
import garlic from '../images/spices/Peppercorns-banner.jpg'
import '../css/spices/Spicespage.css'
function Peppercorns() {
  return (
    <div>
      <section className='Spices-type-banner'>
        <div className='container'>
          <img src={garlic} className='banner'></img>
        </div>
      </section>
      <section className='spices-type-content'>
        <div className='spices-type-text greens'>
          <h3>Pepper corns Exporters</h3>
          <p>Black pepper (Piper nigrum) is a flowering vine in the family Piperaceae, cultivated for its fruit (the peppercorn), which is usually dried and used as a spice and seasoning. The fruit is a drupe (stonefruit) which is about 5 mm (0.20 in) in diameter (fresh and fully mature), dark red, and contains a stone which encloses a single pepper seed. Peppercorns and the ground pepper derived from them may be described simply as pepper, or more precisely as black pepper (cooked and dried unripe fruit), green pepper (dried unripe fruit), or white pepper (ripe fruit seeds).
Black pepper is native to the Malabar Coast of India, and the Malabar pepper is extensively cultivated there and in other tropical regions. Ground, dried, and cooked peppercorns have been used since antiquity, both for flavour and as a traditional medicine.</p>
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

export default Peppercorns;

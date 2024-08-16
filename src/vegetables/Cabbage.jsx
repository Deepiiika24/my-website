import React from 'react';
import '../css//vegetablepages.css'
import '../css/Responsive/VegetablePageResponsive.css'
import cabbage from '../images/vegetables/cabbage-banner.jpg'
function Cabbage() {
  return (
    <div className='veg-main-container'>
      <section className='vegetable-type-banner'>
        <div className='veg-container'>
          <div className='vegetable-contant-banner'>
            <img src={cabbage}></img>
          </div>
          <div className='veg-contant'>
            <h1>CABBAGE EXPORTERS</h1><br></br>
            <p>Cabbage, comprising several cultivars of Brassica oleracea, is a leafy green, red (purple), or white (pale green) biennial plant grown as an annual vegetable crop for its dense-leaved heads. It is descended from the wild cabbage (B. oleracea var. oleracea), and belongs to the "cole crops" or brassicas, meaning it is closely related to broccoli and cauliflower (var. botrytis); Brussels sprouts (var. gemmifera); and Savoy cabbage (var. sabauda).
              A cabbage generally weighs between 500 and 1,000 grams (1 and 2 lb).</p>
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

export default Cabbage;

import React from 'react'
import '../css/FlowerPage.css'
import '../css/Responsive/FlowerPageResponsive.css'
import banner from '../images/Red-carnation-banner.jpg'

function Redcarnation() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Exporting Passionate Beauty The Red Carnation Flower</h2>
          <p>Red Carnations, from the genus Dianthus, are renowned for their deep, passionate hues and intricate, ruffled petals. These flowers are celebrated for their bold color and timeless elegance, making them a symbol of love and admiration in floral arrangements and significant events.
          To ensure Red Carnations maintain their vibrant color and freshness during export, refrigeration is essential. This process extends their vase life, ensuring they arrive in pristine condition, ready to convey their heartfelt message and enhance any setting.
          </p>
        </div>
      </div>
      <section className='Flower-type-table'>
        <div className='Flower-table-heading'>
          <h3>SPECIFICATIONS</h3>
          <table class="table table-hover table-responsive table-bordered">
            <thead>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>Name</th>
                <td>Red Carnation</td>
              </tr>
              <tr>
                <th scope='row'>Origin</th>
                <td>Native to the Mediterranean region, widely cultivated worldwide</td>
              </tr>
              <tr>
                <th scope='row'>Family</th>
                <td>Caryophyllaceae</td>
              </tr>
              <tr>
                <th scope='row'>Binomial Name</th>
                <td>Dianthus caryophyllus</td>
              </tr>
            </tbody>
          </table>
          <p>Red Carnations are timeless symbols of love and admiration, offering a blend of beauty and profound meaning that enriches both personal and ceremonial occasions. Their rich color and delicate fragrance make them a cherished addition to any floral display.</p>
        </div>
      </section>
    </div>
  )
}

export default Redcarnation

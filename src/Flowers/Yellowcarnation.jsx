import React from 'react'
import '../css/FlowerPage.css'
import '../css/Responsive/FlowerPageResponsive.css'
import banner from '../images/Yellow-carnation-banner.jpg'

function Yellowcarnation() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Exporting The Yellow Carnation Flower</h2>
          <p>Yellow Carnations, from the Dianthus genus, are admired for their bright, cheerful hues and delicately ruffled petals. These flowers exude joy and positivity, making them a delightful addition to various floral arrangements and celebratory occasions.
          To maintain the freshness and vibrant color of Yellow Carnations during export, refrigeration is essential. This process ensures the flowers retain their beauty and fragrance, extending their vase life and ensuring they arrive in pristine condition.
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
                <td>Yellow Carnation</td>
              </tr>
              <tr>
                <th scope='row'>Origin</th>
                <td>Cultivated varieties derived from Dianthus caryophyllus</td>
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
        </div>
        <p> While not commonly used in mainstream medicine, Yellow Carnations, like other Dianthus species, have been used in traditional medicine for their potential health benefits. They are believed to have mild diuretic and anti-inflammatory properties.</p>
      </section>
    </div>
  )
}

export default Yellowcarnation

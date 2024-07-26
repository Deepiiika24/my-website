import React from 'react'
import '../css/FlowerPage.css'
import banner from '../images/Orange-rose-banner.jpg'

function Orangerose() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Exporting Orange Rose Flower</h2>
          <p>The Orange Rose is a symbol of elegance and vibrant beauty, renowned for its striking color and delicate petals. It belongs to the genus Rosa and captivates with its warm hues and subtle fragrance.
          Maintaining the freshness of Orange Roses is crucial during export, ensuring they retain their vibrant color and fragrance. Refrigeration helps extend their vase life, preserving their beauty and appeal upon arrival.
          Across cultures, Orange Roses hold deep symbolic meaning, representing joy, gratitude, and appreciation. They are integral in celebrations and ceremonies, embodying sentiments of love and admiration.
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
                <td>Orange Rose</td>
              </tr>
              <tr>
                <th scope='row'>Origin</th>
                <td>Historically cultivated in Europe, the Middle East, and Asia</td>
              </tr>
              <tr>
                <th scope='row'>Family</th>
                <td>Rosaceae</td>
              </tr>
              <tr>
                <th scope='row'>Binomial Name</th>
                <td>Rosa spp.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>The Orange Rose's allure lies in its timeless beauty and profound symbolism, making it a cherished choice for expressing emotions and enhancing aesthetics in floral arrangements worldwide.</p>
      </section>


    </div>
  )
}

export default Orangerose

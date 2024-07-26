import React from 'react'
import '../css/FlowerPage.css'
import banner from '../images/Yellow-rose-banner.avif'

function Yellowrose() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Exporting The Yellow Rose Flower</h2>
          <p>Yellow Roses, from the Rosa genus, are admired for their radiant, sunny hues and velvety petals. These flowers exude warmth and positivity, making them a cherished choice for various floral arrangements and expressions of joy.
          To maintain the freshness and vibrant color of Yellow Roses during export, refrigeration is essential. This process helps preserve their beauty and fragrance, ensuring they arrive in pristine condition.
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
                <td>Yellow Rose</td>
              </tr>
              <tr>
                <th scope='row'>Origin</th>
                <td>Cultivated varieties derived from Rosa species</td>
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
        <p>Yellow Roses embody radiant beauty and positive emotions, making them a timeless symbol of joy and friendship. Their cheerful color and graceful petals add a touch of sunshine to any occasion, enriching both the visual and emotional landscape.





</p>
      </section>

    </div>
  )
}

export default Yellowrose

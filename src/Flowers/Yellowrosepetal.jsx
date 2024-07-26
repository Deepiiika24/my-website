import React from 'react'
import '../css/FlowerPage.css'
import banner from '../images/Yellow-petals-banner.jpg'

function Yellowrosepetal() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Exporting Yellow Rose Petals</h2>
          <p>Yellow Rose Petals, derived from the vibrant and cheerful Yellow Rose (Rosa spp.), are prized for their bright color and delicate texture. These petals embody warmth and positivity, making them a popular choice for various decorative, culinary, and ceremonial uses.
          To preserve the freshness and vibrant color of Yellow Rose Petals during export, refrigeration is essential. This ensures that the petals maintain their beauty and fragrance, arriving in optimal condition for immediate use.
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
                <td>Yellow Rose Petals</td>
              </tr>
              <tr>
                <th scope='row'>Origin</th>
                <td>Derived from various cultivars of Rosa spp.</td>
              </tr>
              <tr>
                <th scope='row'>Family</th>
                <td>Rosaceae</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Yellow Rose Petals bring a touch of sunshine and positivity to any occasion, whether through their decorative charm, culinary appeal, or symbolic significance. Their vibrant color and versatile uses make them a beloved choice for enriching both aesthetic and cultural experiences.</p>
      </section>

    </div>
  )
}

export default Yellowrosepetal

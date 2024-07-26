import React from 'react'
import '../css/FlowerPage.css'
import banner from '../images/Orange-petals-banner.jpg'

function Orangerosepetal() {
  return (
    <div>
      <div id='container'>
      <div id='banner-img'>
        <img src={banner} alt="" />
      </div>
      <div id='banner-content'>
        <h2>Exporting Natural Radiance Orange Rose Petals</h2>
        <p>Orange Rose Petals are exquisite fragments of nature's artistry, prized for their vibrant color and delicate texture. These petals, sourced from the elegant Orange Rose (Rosa spp.), add a touch of warmth and sophistication to various applications.
        To maintain the freshness and vibrant color of Orange Rose Petals during export, refrigeration is essential. This preservation method helps ensure that the petals arrive in optimal condition, ready to enhance culinary, decorative, and ceremonial uses.
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
                <td>Orange Rose Petals</td>
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
        <p>Orange Rose Petals epitomize elegance and versatility, offering a burst of color and fragrance that enhances both visual and sensory experiences across cultural and culinary landscapes.</p>
      </section>
    </div>
  )
}

export default Orangerosepetal

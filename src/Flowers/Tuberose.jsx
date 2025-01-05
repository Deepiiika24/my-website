import React from 'react'
import '../css/FlowerPage.css'
import '../css/Responsive/FlowerPageResponsive.css'
import banner from '../images/Tuberose-banner.jpg'

function Tuberose() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Exporting The Tuberose Flower</h2>
          <p>The Tuberose, known scientifically as Polianthes tuberosa, is celebrated for its intoxicating fragrance and elegant white blooms. These flowers, with their long, slender stems and clusters of star-shaped blossoms, are a symbol of sensuality and purity, making them a cherished choice for various decorative and aromatic applications.
          To maintain the freshness and fragrance of Tuberose flowers during export, refrigeration is essential. Proper cooling ensures that the flowers arrive in optimal condition, retaining their captivating scent and pristine appearance.
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
                <td>Tuberose</td>
              </tr>
              <tr>
                <th scope='row'>Origin</th>
                <td>Native to Mexico, widely cultivated in tropical and subtropical regions</td>
              </tr>
              <tr>
                <th scope='row'>Family</th>
                <td>Asparagaceae</td>
              </tr>
              <tr>
                <th scope='row'>Binomial Name</th>
                <td>Polianthes tuberosa</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Tuberose flowers, with their exotic fragrance and elegant appearance, offer a blend of beauty and sensory delight. Their enduring charm and multifaceted uses make them a treasured addition to floral displays and aromatic products worldwide.</p>
      </section>
    </div>
  )
}

export default Tuberose

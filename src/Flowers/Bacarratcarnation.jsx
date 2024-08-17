import React from 'react'
import '../css/FlowerPage.css'
import '../css/Responsive/FlowerPageResponsive.css'
import banner from '../images/Bacarrat-carnation-banner.jpg'

function Bacarratcarnation() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Premium Bacarrat Carnation Flowers Exporter</h2>
          <p>Our Bacarrat Carnation flowers, renowned for their rich, deep red hue and elegant form, are carefully selected and preserved to maintain their stunning beauty. Each bloom is handpicked at peak freshness and immediately refrigerated to ensure that the flowers arrive in perfect condition, ready to enhance any occasion with their timeless charm.
          To guarantee the highest quality, our Bacarrat Carnation flowers are refrigerated immediately after harvesting. This process locks in their freshness, ensuring that they retain their vibrant color and exquisite form throughout their journey to you. Our advanced refrigeration facilities and careful handling methods ensure that the flowers remain vibrant and fresh.
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
                <td>Bacarrat Carnation</td>
              </tr>
              <tr>
                <th scope='row'>Origin</th>
                <td>Native to the Mediterranean region, with the Bacarrat variety cultivated for its exceptional quality</td>
              </tr>
              <tr>
                <th scope='row'>Family</th>
                <td>Caryophyllaceae</td>
              </tr>
              <tr>
                <th scope='row'>Binomial Name</th>
                <td>Dianthus caryophyllus 'Bacarrat'</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Carnations are believed to have anti-inflammatory properties that can help in reducing inflammation and associated pain. They can be used in the form of teas or extracts.
      The flowers are known to contain antioxidants that help combat oxidative stress in the body, which can protect cells from damage and reduce the risk of chronic diseases.
      </p>
      </section>
    </div>
  )
}

export default Bacarratcarnation

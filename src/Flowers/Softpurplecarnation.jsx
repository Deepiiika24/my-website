import React from 'react'
import '../css/FlowerPage.css'
import '../css/Responsive/FlowerPageResponsive.css'
import banner from '../images/Soft-purple-carnation-banner.jpg'

function Softpurplecarnation() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Exporting The Soft Purple Carnation Flower</h2>
          <p>Soft Purple Carnations, members of the Dianthus genus, are admired for their delicate, pastel purple hues and elegantly ruffled petals. These flowers exude a soft sophistication and gentle fragrance, making them a preferred choice for various floral arrangements and expressions of sentiment.
          Refrigeration is crucial to maintain the freshness and delicate color of Soft Purple Carnations during export. This process ensures the flowers retain their beauty and fragrance, extending their vase life and ensuring they arrive in perfect condition.
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
                <td>Soft Purple Carnation</td>
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
        <p>Soft Purple Carnations embody subtle sophistication and meaningful symbolism, making them a timeless choice for enhancing personal and communal celebrations. Their delicate color and gentle fragrance offer a serene and beautiful way to express emotions and beautify any occasion.</p>
      </section>
    </div>
  )
}

export default Softpurplecarnation

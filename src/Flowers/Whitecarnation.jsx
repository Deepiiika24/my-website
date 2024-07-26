import React from 'react'
import '../css/FlowerPage.css'
import banner from '../images/White-carnation-banner.jpg'

function Whitecarnation() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Exporting The White Carnation Flower</h2>
          <p>White Carnations, part of the Dianthus genus, are cherished for their pristine, pure white petals and intricate, ruffled edges. These flowers exude an air of elegance and simplicity, making them a timeless choice for various floral arrangements and significant occasions.
          To maintain the freshness and delicate color of White Carnations during export, refrigeration is essential. This process ensures the flowers retain their beauty and fragrance, extending their vase life and ensuring they arrive in perfect condition.
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
                <td> White Carnation</td>
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
        <p>White Carnations embody pure elegance and meaningful symbolism, making them a timeless choice for enhancing personal and communal celebrations. Their delicate color and gentle fragrance offer a serene and beautiful way to express emotions and beautify any occasion.</p>
      </section>
    </div>
  )
}

export default Whitecarnation

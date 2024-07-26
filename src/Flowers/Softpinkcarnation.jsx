import React from 'react'
import '../css/FlowerPage.css'
import banner from '../images/Soft-pink-carnation-banner.jpg'
function Softpinkcarnation() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Exporting Gentle Elegance The Soft Pink Carnation Flower</h2>
          <p>Soft Pink Carnations, from the Dianthus genus, are cherished for their delicate, pastel hues and ruffled petals. These flowers exude a gentle elegance and subtle fragrance, making them a favored choice for a variety of floral arrangements and heartfelt expressions.
          To maintain the freshness and delicate color of Soft Pink Carnations during export, refrigeration is essential. This preservation method ensures the flowers arrive in pristine condition, ready to enchant and inspire with their understated beauty.
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
                <td>Soft Pink Carnation</td>
              </tr>
              <tr>
                <th scope='row'>Origin</th>
                <td> Cultivated varieties derived from Dianthus caryophyllus</td>
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
        <p>Soft Pink Carnations embody a gentle elegance and profound symbolism, making them a timeless choice for enhancing personal and communal celebrations. Their delicate color and subtle fragrance offer a serene and beautiful way to express emotions and beautify any occasion.</p>
      </section>
    </div>
  )
}

export default Softpinkcarnation

import React from 'react'
import '../css/FlowerPage.css'
import banner from '../images/Purple-carnation-banner.jpg'

function Purplecarnation() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Exporting Royal Elegance The Purple Carnation Flower</h2>
          <p>Purple Carnations, members of the Dianthus genus, captivate with their rich, regal hues and intricate, ruffled petals. These flowers are celebrated for their unique color and enduring beauty, making them a standout choice in floral arrangements and symbolic gestures.
          To ensure that Purple Carnations retain their vibrant color and freshness during export, refrigeration is crucial. This process extends the vase life of the flowers, allowing them to arrive in pristine condition, ready to enchant and inspire.
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
                <td>Purple Carnation</td>
              </tr>
              <tr>
                <th scope='row'>Origin</th>
                <td>Native to the Mediterranean region, extensively cultivated worldwide</td>
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
          <p>Purple Carnations are symbols of distinction and creativity, offering a unique blend of beauty and meaning that enhances both personal and ceremonial occasions. Their rich color and delicate fragrance make them a cherished addition to any floral display.</p>
        </div>
      </section>

    </div>
  )
}

export default Purplecarnation

import React from 'react'
import '../css/FlowerPage.css'
import banner from '../images/Pink-carnation-banner.jpg'

function Pinkcarnation() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Exporting The Pink Carnation Flower</h2>
          <p>Pink Carnations, part of the Dianthus genus, are treasured for their delicate, ruffled petals and charming shades of pink. These flowers exude elegance and grace, making them a beloved choice for various floral arrangements and meaningful gestures.
          Refrigeration is essential to maintain the freshness and vibrant color of Pink Carnations during export. Proper cooling ensures that the flowers retain their beauty and fragrance, extending their vase life and appeal upon arrival.
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
                <td>Pink Carnation</td>
              </tr>
              <tr>
                <th scope='row'>Origin</th>
                <td>Native to the Mediterranean region, widely cultivated worldwide</td>
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
          <p>Pink Carnations are emblematic of elegance and affection, offering a gentle yet profound way to convey emotions and beautify any occasion with their classic charm and delicate fragrance.</p>
        </div>
      </section>

    </div>
  )
}

export default Pinkcarnation

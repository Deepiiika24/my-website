import React from 'react'
import '../css/FlowerPage.css'
import banner from '../images/Yellow-marigold-banner.jpg'

function Yellowmarigold() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Exporting The Yellow Marigold Flower</h2>
          <p>Yellow Marigolds, from the Tagetes genus, are renowned for their bright, cheerful hues and distinctive, fluffy petals. These flowers exude a sense of vibrancy and positivity, making them a popular choice for both decorative and functional purposes.
          To preserve the freshness and vibrant color of Yellow Marigolds during export, refrigeration is essential. This ensures the flowers maintain their beauty and fragrance, extending their shelf life and arriving in optimal condition.
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
                <td> Yellow Marigold</td>
              </tr>
              <tr>
                <th scope='row'>Origin</th>
                <td>Native to the Americas, widely cultivated globally</td>
              </tr>
              <tr>
                <th scope='row'>Family</th>
                <td>Asteraceae (Compositae)</td>
              </tr>
              <tr>
                <th scope='row'>Binomial Name</th>
                <td>Tagetes spp.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Traditionally, marigold extracts are used in herbal medicine for their anti-inflammatory and antiseptic properties, promoting skin health and wound healing.
            Yellow Marigolds embody vibrant charm and positive energy, making them a versatile flower for enhancing both outdoor landscapes and indoor settings. Their cheerful color and practical benefits contribute to their enduring popularity across cultures and contexts.</p>
      </section>
    </div>
  )
}

export default Yellowmarigold

import React from 'react'
import '../css/FlowerPage.css'
import '../css/Responsive/FlowerPageResponsive.css'
import banner from '../images/Orange-marigold-banner.jpg'

function Orangemarigold() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Exporting Orange Marigold Flower</h2>
          <p>The Orange Marigold, scientifically known as Tagetes spp., is a vibrant and cheerful flower cherished for its bold hues and distinctive fragrance. Belonging to the daisy family (Asteraceae), these flowers are characterized by their fluffy, pom-pom-like blooms and aromatic foliage.
          Orange Marigolds benefit from refrigeration to maintain their freshness and vibrant color during transportation and storage. Keeping them in cool temperatures helps prolong their vase life, ensuring they arrive in optimal condition at their destination.
          Valued for their ornamental value, Orange Marigolds add bright splashes of color to gardens, flower beds, and containers. They thrive in sunny locations with well-drained soil, complementing other garden plants with their vibrant blooms.
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
                <td>Orange Marigold</td>
              </tr>
              <tr>
                <th scope='row'>Origin</th>
                <td>Native to the Americas, particularly Mexico and Central America</td>
              </tr>
              <tr>
                <th scope='row'>Family</th>
                <td>Asteraceae</td>
              </tr>
              <tr>
                <th scope='row'>Binomial Name</th>
                <td>Tagetes spp</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Orange Marigolds are not just garden favorites; they embody vitality, cultural heritage, and a joyful spirit that transcends borders, making them a beloved choice for both decorative and symbolic purposes worldwide.</p>
      </section>
    </div>
  )
}

export default Orangemarigold

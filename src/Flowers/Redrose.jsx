import React from 'react'
import '../css/FlowerPage.css'
import banner from '../images/Red-rose-banner.jpg'

function Redrose() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Exporting The Red Rose Flower</h2>
          <p>The Red Rose, a classic emblem of love and passion, is one of the most cherished flowers worldwide. With its deep, velvety petals and enchanting fragrance, the Red Rose from the genus Rosa has been a symbol of romance and admiration for centuries.
          Refrigeration is crucial for maintaining the freshness and vibrant color of Red Roses during export. This preservation method ensures that the roses arrive in optimal condition, ready to exude their timeless beauty and fragrance.
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
                <td>Red Rose</td>
              </tr>
              <tr>
                <th scope='row'>Origin</th>
                <td>Historically cultivated in Europe, the Middle East, and Asia</td>
              </tr>
              <tr>
                <th scope='row'>Family</th>
                <td>Rosaceae</td>
              </tr>
              <tr>
                <th scope='row'>Binomial Name</th>
                <td>Rosa spp.</td>
              </tr>
            </tbody>
          </table>
          <p>Red Roses, with their rich color and captivating fragrance, continue to be a timeless expression of love and admiration. Their enduring appeal and profound symbolism make them a favorite in floral arrangements and a cherished gift for conveying heartfelt emotions.</p>
        </div>
      </section>
    </div>
  )
}

export default Redrose

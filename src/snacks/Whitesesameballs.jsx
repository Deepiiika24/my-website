import React from 'react'
import banner from '../images/snacks/White-sesame-banner.jpg'
import '../css/SnacksPage.css'
import '../css/Responsive/SnacksPageResponsive.css'

function Whitesesameballs() {
  return (
    <div className='snackspage-main-container'>
      <div className="snackspage-container">
        <div className="snackspage-banner">
          <img src={banner} className='snackspage-banner-img' />
        </div>
        <div className="snackspage-content">
          <h2>WHITE SESAME BALLS EXPORTERS</h2>
          <p>White sesame balls, also known as tilgul or ellu urundai in Indian cuisine, are delightful spherical treats made from roasted white sesame seeds and jaggery (unrefined cane sugar). These balls are popular during festivals like Makar Sankranti in India, symbolizing sweetness and auspiciousness. The sesame seeds impart a nutty flavor, while the jaggery provides a rich caramel-like sweetness, creating a harmonious blend of textures and tastes.

As an exporting company specializing in white sesame balls, you can highlight their traditional recipe and cultural significance, making them a cherished choice among consumers celebrating festive occasions worldwide.</p>
        </div>
      </div>
      <section className='snackspage-type-table'>
        <div className='snackspage-table-heading'>
          <h2>INGREDIENTS</h2>
          <table className="table table-hover table-responsive table-bordered even-columns-table">
            <thead>
              <tr>
                <th id='Quantity'></th>
                <th id='quantity'>
                  Quantity<br />
                  <span>Per Serving</span>
                </th>
                <th>
                  Quantity<br />
                  <span>Per 100g</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Energy</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Protein</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Fat</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Carbohydrates</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Sodium</th>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default Whitesesameballs

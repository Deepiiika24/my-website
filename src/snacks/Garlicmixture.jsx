import React from 'react'
import banner from '../images/snacks/Garlic-mixture-banner.jpg'
import '../css/SnacksPage.css'
import '../css/Responsive/SnacksPageResponsive.css'

function Garlicmixture() {
  return (
    <div className='snackspage-main-container'>
      <div className="snackspage-container">
        <div className="snackspage-banner">
          <img src={banner} className='snackspage-banner-img' />
        </div>
        <div className="snackspage-content">
          <h2>GARLIC MIXTURE EXPORTERS</h2>
          <p>Garlic mixture is a savory and crunchy Indian snack blend featuring roasted nuts, crunchy chickpea flour noodles (sev), and spices, with a distinct garlic flavor. It offers a perfect balance of textures and flavors, combining the earthy taste of garlic with the crunchiness of nuts and sev. Our exporting company specializes in crafting garlic mixture using premium quality ingredients sourced directly from trusted suppliers. We ensure each batch maintains its authentic taste and quality, making it a favorite snack choice both locally and internationally. Emphasizing on taste, quality, and freshness, we aim to deliver a delightful snacking experience to our customers worldwide.</p>
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

export default Garlicmixture

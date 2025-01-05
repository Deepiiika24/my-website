import React from 'react'
import banner from '../images/snacks/Hot-mixture-banner.jpg'
import '../css/SnacksPage.css'
import '../css/Responsive/SnacksPageResponsive.css'

function Hotmixture() {
  return (
    <div className='snackspage-main-container'>
      <div className="snackspage-container">
        <div className="snackspage-banner">
          <img src={banner} className='snackspage-banner-img' />
        </div>
        <div className="snackspage-content">
          <h2>HOT MIXTURE EXPORTERS</h2>
          <p>Hot mixture, a popular Indian snack, is a tantalizing blend of crispy ingredients like peanuts, fried gram, cashews, and spices. It's renowned for its spicy kick and savory taste, making it a favorite tea-time snack across India. Our exporting company specializes in crafting hot mixture using traditional recipes and premium ingredients sourced from trusted suppliers. Each batch is carefully prepared to ensure a perfect balance of flavors and textures, appealing to snack enthusiasts worldwide. Whether enjoyed alone or paired with beverages, our hot mixture promises an authentic taste of India with every crunchy bite.</p>
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

export default Hotmixture

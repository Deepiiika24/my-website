import React from 'react'
import banner from '../images/snacks/Peanut-powder-banner.jpg'
import '../css/SnacksPage.css'

function Peanutchikkipowder() {
  return (
    <div className='snackspage-main-container'>
      <div className="snackspage-container">
        <div className="snackspage-banner">
          <img src={banner} className='snackspage-banner-img' />
        </div>
        <div className="snackspage-content">
          <h2>PEANUT POWDER EXPORTERS</h2>
          <p>Peanut chikki powder is a popular Indian snack made from ground peanuts and jaggery, blended into a fine powder that's both nutritious and delicious. It combines the rich, nutty flavor of peanuts with the sweetness of jaggery, offering a satisfying crunch in every bite. Our exporting company specializes in sourcing the finest peanuts and jaggery, ensuring high quality and authentic taste in every batch of chikki powder we export worldwide. With a commitment to quality and taste, we aim to bring the authentic flavors of Indian snacks to global markets, promoting healthy and flavorful snacking options for everyone.</p>
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

export default Peanutchikkipowder

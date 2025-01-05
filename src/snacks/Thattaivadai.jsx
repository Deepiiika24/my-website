import React from 'react'
import banner from '../images/snacks/Thattai-banner.jpg'
import '../css/SnacksPage.css'
import '../css/Responsive/SnacksPageResponsive.css'

function Thattaivadai() {
  return (
    <div className='snackspage-main-container'>
      <div className="snackspage-container">
        <div className="snackspage-banner">
          <img src={banner} className='snackspage-banner-img' />
        </div>
        <div className="snackspage-content">
          <h2>THATTAI VADAI EXPORTERS</h2>
          <p>Thattai vadai, a popular South Indian snack, is a crispy and savory treat made from rice flour and a blend of spices. These deep-fried discs are known for their crunchy texture and unique flavor, enhanced by ingredients like cumin seeds, curry leaves, and sometimes chili powder for a hint of spice. Thattai vadai is often enjoyed during festivals and celebrations, as well as casually as a tea-time snack.

As an exporting company specializing in Thattai vadai, you can emphasize its traditional recipe and authentic South Indian taste, making it a beloved choice among snack enthusiasts worldwide.</p>
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

export default Thattaivadai

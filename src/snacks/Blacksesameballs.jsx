import React from 'react'
import banner from '../images/snacks/Black-sesame-banner.jpg'
import '../css/SnacksPage.css'
import '../css/Responsive/SnacksPageResponsive.css'

function Blacksesameballs() {
  return (
    <div className='snackspage-main-container'>
      <div className="snackspage-container">
        <div className="snackspage-banner">
          <img src={banner} className='snackspage-banner-img' />
        </div>
        <div className="snackspage-content">
          <h2>BLACK SESAME BALL EXPORTERS</h2>
          <p>Discover the essence of Asian culinary heritage with KOOGUL INDUSTRIES, a premier exporter of authentic black sesame balls. Our delicately crafted treats feature a blend of premium black sesame seeds, sticky rice, and a hint of sweetness. Known as 'tangyuan' or 'onde onde,' these balls offer a delightful nutty flavor and a satisfyingly chewy texture. Perfect for festive celebrations or as a comforting dessert, our black sesame balls uphold traditional recipes while meeting the highest international quality standards. Indulge in the timeless allure of black sesame balls with KOOGUL INDUSTRIES.</p>
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

export default Blacksesameballs

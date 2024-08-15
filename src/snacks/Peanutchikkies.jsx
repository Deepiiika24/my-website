import React from 'react'
import banner from '../images/snacks/Chikki-banner.jpg'
import '../css/SnacksPage.css'
import '../css/Responsive/SnacksPageResponsive.css'

function Peanutchikkies() {
  return (
    <div className='snackspage-main-container'>
      <div className="snackspage-container">
        <div className="snackspage-banner">
          <img src={banner} className='snackspage-banner-img' />
        </div>
        <div className="snackspage-content">
          <h2>PEANUT CHIKKI EXPORTERS</h2>
          <p>Peanut chikki, a beloved Indian treat, combines roasted peanuts and jaggery into a crunchy and sweet snack. It's known for its distinctive texture and nutty flavor, making it popular across India, especially during festivals like Diwali. The peanuts are carefully roasted to enhance their flavor, then mixed with melted jaggery to create a sticky, caramel-like mixture. Once cooled, it's cut into squares or bars for easy snacking. As an exporting company, specializing in peanut chikki allows you to share this delightful treat globally, showcasing India's rich culinary heritage and offering a taste of traditional sweetness to the world.</p>
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

export default Peanutchikkies

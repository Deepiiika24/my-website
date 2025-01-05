import React from 'react'
import banner from '../images/snacks/Chilli-peanut-banner.jpg'
import '../css/SnacksPage.css'
import '../css/Responsive/SnacksPageResponsive.css'

function Peanutchilli() {
  return (
    <div className='snackspage-main-container'>
      <div className="snackspage-container">
        <div className="snackspage-banner">
          <img src={banner} className='snackspage-banner-img' />
        </div>
        <div className="snackspage-content">
          <h2>CHILLI PEANUT EXPORTERS</h2>
          <p>Chilli peanuts are a spicy, crunchy snack that blend roasted peanuts with a fiery chilli seasoning. This popular Indian snack is known for its perfect balance of heat and crunch, making it irresistible to snack enthusiasts. The peanuts are typically roasted to a golden brown, then coated with a blend of chilli powder, salt, and spices, creating a tantalizing flavor profile that is both spicy and savory. Ideal for snacking or as a spicy addition to dishes, chilli peanuts are a favorite at gatherings and parties. As an exporting company, offering chilli peanuts can introduce international markets to the bold flavors of Indian snacks, expanding your reach with a product that embodies the zest of Indian cuisine.</p>
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

export default Peanutchilli

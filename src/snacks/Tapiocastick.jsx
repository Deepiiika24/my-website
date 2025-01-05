import React from 'react'
import banner from '../images/snacks/Topioca-stick-banner.jpg'
import '../css/SnacksPage.css'
import '../css/Responsive/SnacksPageResponsive.css'

function Tapiocastick() {
  return (
    <div className='snackspage-main-container'>
      <div className="snackspage-container">
        <div className="snackspage-banner">
          <img src={banner} className='snackspage-banner-img' />
        </div>
        <div className="snackspage-content">
          <h2>TAPIOCA STICK EXPORTERS</h2>
          <p>Tapioca sticks, also known as tapioca fries or tapioca fingers, are a crispy and flavorful snack made from sliced tapioca roots. These sticks are typically deep-fried until they achieve a golden brown color and a crunchy texture. Often seasoned with salt and spices, tapioca sticks offer a unique taste that combines the earthy sweetness of tapioca with a savory and sometimes spicy flavor profile.

As an exporting company specializing in tapioca sticks, you can highlight their crunchy texture and versatile flavor, making them a popular choice among snack enthusiasts.</p>
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

export default Tapiocastick

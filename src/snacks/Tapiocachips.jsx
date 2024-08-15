import React from 'react'
import banner from '../images/snacks/Topioca-chips-banner.jpg'
import '../css/SnacksPage.css'
import '../css/Responsive/SnacksPageResponsive.css'

function Tapiocachips() {
  return (
    <div className='snackspage-main-container'>
      <div className="snackspage-container">
        <div className="snackspage-banner">
          <img src={banner} className='snackspage-banner-img' />
        </div>
        <div className="snackspage-content">
          <h2>TAPIOCA CHIPS EXPORTERS</h2>
          <p>Tapioca chips are a delightful and crispy snack made from thinly sliced tapioca roots, which are then deep-fried until golden brown and seasoned with a blend of spices. Known for their light texture and addictive crunch, tapioca chips offer a unique taste experience that combines the earthy flavor of tapioca with a savory and sometimes spicy seasoning. These chips are popular across South Asia, particularly in Kerala, where they are often enjoyed alongside tea or as a standalone snack.
          As an exporting company specializing in tapioca chips, you can highlight their natural ingredients, traditional preparation methods, and distinctive flavors to appeal to a global market.
          </p>
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

export default Tapiocachips

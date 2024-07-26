import React from 'react'
import banner from '../images/snacks/Banana-chips-banner.jpg'
import '../css/SnacksPage.css'

function Bananachips() {
  return (
    <div className='snackspage-main-container'>
      <div className="snackspage-container">
        <div className="snackspage-banner">
          <img src={banner} className='snackspage-banner-img' />
        </div>
        <div className="snackspage-content">
          <h2>BANANA CHIPS EXPORTERS</h2>
          <p>A premier exporter of exquisite banana chips sourced from the heartlands of India. Our commitment to quality shines through in every crisp and savory bite of our meticulously crafted banana chips. With a passion for authenticity and flavor, we bring the essence of traditional Indian snacking to global markets, ensuring each batch meets the highest standards of taste and freshness. Explore our range of banana chips and experience the essence of South Indian culinary tradition.
          Banana chips are a beloved South Indian snack known for their crunchy texture and delightful taste. Made from ripe bananas that are thinly sliced and deep-fried to perfection, these chips offer a unique blend of sweet and savory flavors. Seasoned with a touch of salt or spices, banana chips are enjoyed as a satisfying snack or paired with other dishes. Their popularity extends beyond India, making them a cherished export that introduces global consumers to the rich culinary heritage of South India.
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

export default Bananachips

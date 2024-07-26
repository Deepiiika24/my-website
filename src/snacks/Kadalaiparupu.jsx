import React from 'react'
import banner from '../images/snacks/Kadala-parupu-banner.jpg'
import '../css/SnacksPage.css'

function Kadalaiparupu() {
  return (
    <div className='snackspage-main-container'>
      <div className="snackspage-container">
        <div className="snackspage-banner">
          <img src={banner} className='snackspage-banner-img' />
        </div>
        <div className="snackspage-content">
          <h2>CHANNA DAL EXPORTERS</h2>
          <p>Channa dal, also known as split chickpeas, is a versatile legume widely used in Indian cuisine. It's known for its nutty flavor and firm texture, making it a staple ingredient in various dishes and snacks. Our exporting company takes pride in sourcing the finest channa dal from trusted suppliers, ensuring superior quality and freshness. Whether roasted as a crunchy snack or used in curries and soups, our channa dal meets stringent quality standards to deliver a delightful culinary experience. We prioritize authenticity and taste, catering to global markets with a commitment to excellence in every batch we export.</p>
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

export default Kadalaiparupu

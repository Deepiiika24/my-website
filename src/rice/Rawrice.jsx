import React from 'react'
import banner from '../images/rice/White-raw-rice-banner.jpg'
import '../css/Ricepage.css'

function Rawrice() {
  return (
    <div className='ricepage-main-container'>
      <div className="ricepage-container">
        <div className="ricepage-banner">
          <img src={banner} className='ricepage-banner-img' />
        </div>
        <div className="ricepage-content">
          <h2>WHITE RAW RICE EXPORTERS</h2>
          <p>White raw rice, a staple in many cuisines around the world, is prized for its mild flavor, versatility, and ability to complement a wide range of dishes. This rice variety is produced by removing the husk, bran, and germ layers from the rice grain, resulting in a polished, white appearance. While it has a lower nutritional content compared to whole grain varieties, white raw rice remains a popular choice due to its long shelf life, quick cooking time, and adaptable nature. It is widely used in everyday meals, including stir-fries, pilafs, sushi, and as a side dish to accompany various proteins and vegetables.

Our exporting company is dedicated to providing high-quality white raw rice to international markets, ensuring that the rice's purity, texture, and flavor are preserved throughout the supply chain. We source our white raw rice from trusted farmers who employ sustainable and efficient farming practices, ensuring a consistent and reliable supply. Our selection process is meticulous, guaranteeing that only the finest grains are chosen for further processing.</p>
        </div>
      </div>
      <section className='ricepage-type-table'>
        <div className='ricepage-table-heading'>
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
                <th scope="row">Crude Fibre</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Carbohydrates</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Caloific Value</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Vitamin B1 mg</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Vitamin B2 mg</th>
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

export default Rawrice

import React from 'react'
import banner from '../images/oil/palmoil.jpg'
import '../css/Ricepage.css'
import '../css/Responsive/RicePageResponsive.css'
function Palmoil() {
  return (
    <div className='ricepage-main-container'>
      <div className="ricepage-container">
        <div className="ricepage-banner">
          <img src={banner} className='ricepage-banner-img' />
        </div>
        <div className="ricepage-content">
          <h2>PALM OIL EXPORTERS</h2>
          <p>Palm oil is a widely used cooking oil known for its rich content of beta-carotene, which the body converts to vitamin A, supporting eye health and boosting the immune system. It is also a good source of healthy fats, particularly a balance of saturated and unsaturated fats, making it useful for energy and heart health when consumed in moderation. Palm oil’s high smoke point makes it ideal for frying and baking, and it is commonly found in many processed foods and cosmetics due to its versatility and long shelf life. However, sustainable sourcing is important to mitigate its environmental impact.</p>
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



export default Palmoil;



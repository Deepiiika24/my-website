import React from 'react'
import banner from '../images/rice/Red-raw-rice-banner.jpg'
import '../css/Ricepage.css'

function Redrice() {
  return (
    <div className='ricepage-main-container'>
      <div className="ricepage-container">
        <div className="ricepage-banner">
          <img src={banner} className='ricepage-banner-img' />
        </div>
        <div className="ricepage-content">
          <h2>RED RAW RICE EXPORTERS</h2>
          <p>Red raw rice, also known as red rice, is a variety of rice known for its rich color, nutty flavor, and numerous health benefits. The red hue comes from the presence of anthocyanins, which are powerful antioxidants. Red raw rice is less processed than white rice, retaining its bran layer and, therefore, a higher nutritional content. It is an excellent source of fiber, vitamins, minerals, and antioxidants, making it a popular choice for health-conscious consumers. This variety of rice is widely used in salads, rice bowls, and as a side dish to complement a range of cuisines.

Our exporting company is dedicated to providing high-quality red raw rice to international markets, ensuring that the rice’s nutritional benefits and robust flavor are preserved throughout the supply chain. We partner with skilled farmers who employ traditional and sustainable farming methods, ensuring that our red raw rice is cultivated with care and respect for the environment. Through a rigorous selection process, we ensure that only the finest grains make it to our processing facilities.
</p>
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

export default Redrice

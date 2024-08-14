import React from 'react'
import banner from '../images/rice/Boiled-rice-banner.jpg'
import '../css/Ricepage.css'
import '../css/Responsive/RicePageResponsive.css'

function Boiledrice() {
  return (
    <div className='ricepage-main-container'>
      <div className="ricepage-container">
        <div className="ricepage-banner">
          <img src={banner} className='ricepage-banner-img' />
        </div>
        <div className="ricepage-content">
          <h2>BOILED RICE EXPORTERS</h2>
          <p>Boiled rice, also known as parboiled rice, is a type of rice that undergoes a unique processing method involving partial boiling in the husk. This process helps retain more nutrients compared to regular white rice, making it a healthier option for consumers. Boiled rice is characterized by its firm texture, non-sticky grains, and slightly nutty flavor, making it versatile for various culinary applications, including stir-fries, curries, and salads.

Our exporting company specializes in providing high-quality boiled rice to international markets, ensuring that the nutritional benefits and superior taste of the rice are preserved throughout the supply chain. We source our rice from trusted farmers who adhere to sustainable farming practices, ensuring that each grain of boiled rice is cultivated with care and respect for the environment. Our rigorous selection process ensures that only the finest grains are chosen for further processing.</p>
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

export default Boiledrice

import React from 'react'
import banner from '../images/rice/Idli-rice-banner.jpg'
import '../css/Ricepage.css'
import '../css/Responsive/RicePageResponsive.css'

function Idlirice() {
  return (
    <div className='ricepage-main-container'>
      <div className="ricepage-container">
        <div className="ricepage-banner">
          <img src={banner} className='ricepage-banner-img' />
        </div>
        <div className="ricepage-content">
          <h2>IDLI RICE EXPORTERS</h2>
          <p>Idli rice is a specialized variety of rice specifically cultivated for making idlis, a staple in South Indian cuisine. This rice variety is known for its short, plump grains that provide the perfect texture and consistency for creating soft, fluffy idlis. Idli rice is also used in preparing dosas, uttapams, and other traditional dishes, making it a versatile ingredient in Indian kitchens.

Our exporting company is committed to supplying premium quality Idli rice to international markets, ensuring that our customers can recreate authentic South Indian dishes with ease. We source our Idli rice from dedicated farmers who use sustainable agricultural practices, preserving the integrity and nutritional value of the rice. Our careful selection process ensures that only the best grains are chosen for export.</p>
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

export default Idlirice

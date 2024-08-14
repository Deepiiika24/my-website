import React from 'react'
import banner from '../images/rice/seeraga-samba-banner.webp'
import '../css/Ricepage.css'
import '../css/Responsive/RicePageResponsive.css'

function Seeraghasamba() {
  return (
    <div className='ricepage-main-container'>
      <div className="ricepage-container">
        <div className="ricepage-banner">
          <img src={banner} className='ricepage-banner-img' />
        </div>
        <div className="ricepage-content">
          <h2>SEERAGA SAMBA RICE EXPORTERS</h2>
          <p>Seeraga Samba rice, also known as Jeera Samba rice, is a premium variety of rice native to the Tamil Nadu region in South India. This rice is renowned for its small, fine grains that resemble cumin seeds, hence its name "Seeraga" or "Jeera," which means cumin in Tamil and Hindi, respectively. Seeraga Samba rice is celebrated for its distinct aroma, delicate texture, and subtle flavor, making it an ideal choice for preparing traditional dishes such as biryanis, especially the famous Tamil Nadu-style biryani, as well as pulaos and other special rice recipes.

Our exporting company is dedicated to delivering the finest Seeraga Samba rice to international markets, ensuring that the quality and authenticity of this cherished rice variety are maintained throughout the supply chain. We source our Seeraga Samba rice from trusted farmers who employ sustainable and traditional farming practices, ensuring that the rice is cultivated with utmost care and attention to detail. Our selection process is meticulous, guaranteeing that only the best grains are chosen for export.</p>
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

export default Seeraghasamba

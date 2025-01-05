import React from 'react'
import banner from '../images/oil/coconutoil.jpg'
import '../css/Ricepage.css'
import '../css/Responsive/RicePageResponsive.css'
function Coconutoil() {
  return (
    <div className='ricepage-main-container'>
      <div className="ricepage-container">
        <div className="ricepage-banner">
          <img src={banner} className='ricepage-banner-img' />
        </div>
        <div className="ricepage-content">
          <h2>COCONUT OIL EXPORTERS</h2>
          <p>Nothing but 100% pure coconut oil
Is made with the finest hand-picked Coconuts
Contains no added preservatives or chemicals
Fresh nutty fragrance of pure coconut oil
Long lasting freshness
27 quality tests and 5 stage purification process – for 100% purity every time. Coconut oil is known for its versatile benefits, particularly for skin, hair, and overall health. Rich in medium-chain triglycerides (MCTs), it can boost metabolism and support weight management. Its antimicrobial properties make it effective for improving skin conditions, promoting hair growth, and supporting oral health through oil pulling. Additionally, it may help raise HDL (good cholesterol), potentially improving heart health when used in moderation. With its high smoke point, coconut oil is also a stable option for cooking, adding a mild coconut flavor to dishes.</p>
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



export default Coconutoil;

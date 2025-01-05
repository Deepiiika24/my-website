import React from 'react'
import banner from '../images/rice/Basmati-rice-banner.jpg'
import '../css/Ricepage.css'
import '../css/Responsive/RicePageResponsive.css'

function Basmatirice() {
  return (
    <div className='ricepage-main-container'>
      <div className="ricepage-container">
        <div className="ricepage-banner">
          <img src={banner} className='ricepage-banner-img' />
        </div>
        <div className="ricepage-content">
          <h2>BASMATI RICE EXPORTERS</h2>
          <p>Basmati rice, known for its long grains, fragrant aroma, and distinct nutty flavor, is a premium variety of rice primarily grown in the Indian subcontinent. Revered for its delicate texture and exceptional taste, Basmati rice is a staple in many culinary traditions, particularly in Indian and Middle Eastern cuisine, where it is often used in dishes such as biryanis, pilafs, and as a side to curries.
            Our exporting company takes pride in delivering the finest quality Basmati rice to international markets, ensuring that each grain upholds the high standards of purity and taste associated with this esteemed rice variety. We source our Basmati rice directly from reputable farmers who use traditional farming methods, ensuring sustainability and authenticity in every batch. Our commitment to quality begins at the source, where we select only the best grains, and continues through our meticulous processing and packaging procedures.
            We employ advanced processing technologies to clean, sort, and package the rice, maintaining its nutritional value and aromatic qualities.</p>
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

export default Basmatirice

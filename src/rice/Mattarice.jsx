import React from 'react'
import banner from '../images/rice/Matta-rice-banner.jpg'
import '../css/Ricepage.css'
import '../css/Responsive/RicePageResponsive.css'

function Mattarice() {
  return (
    <div className='ricepage-main-container'>
      <div className="ricepage-container">
        <div className="ricepage-banner">
          <img src={banner} className='ricepage-banner-img' />
        </div>
        <div className="ricepage-content">
          <h2>MATTA RICE EXPORTERS</h2>
          <p>Matta rice, also known as Kerala red rice or Rosematta rice, is a popular variety of rice grown in the Palakkad district of Kerala, India. Renowned for its robust, earthy flavor and distinctive reddish-brown hue, Matta rice is prized for its nutritional benefits, including high fiber content, essential vitamins, and minerals. This rice variety is integral to the culinary traditions of Kerala, frequently used in dishes such as biryanis, idlis, and plain boiled rice.

Our exporting company specializes in sourcing and delivering premium quality Matta rice to international markets, ensuring that the rice retains its freshness and nutritional value throughout the supply chain. We work closely with local farmers who employ traditional and sustainable farming practices to cultivate Matta rice, thereby supporting the local economy and promoting eco-friendly agriculture. Our meticulous processing techniques include careful de-husking and polishing, preserving the rice’s natural nutrients and authentic flavor.</p>
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

export default Mattarice

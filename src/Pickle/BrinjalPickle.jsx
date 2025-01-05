import React from 'react'
import banner from '../images/Pickle/BrinjalPickleBanner.jpg'
import '../css/Ricepage.css'
import '../css/Responsive/RicePageResponsive.css'

function BrinjalPickle() {
  return (
    <div className='ricepage-main-container'>
      <div className="ricepage-container">
        <div className="ricepage-banner">
          <img src={banner} className='ricepage-banner-img' />
        </div>
        <div className="ricepage-content">
          <h2>BRINJAL PICKLE EXPORTER</h2>
          <p>Brinjal, commonly known as eggplant, is a versatile vegetable that is highly valued for its rich, savory taste. In Indian cuisine, brinjal is often transformed into a flavorful pickle, combining spices and oil to create a unique condiment with a bold, tangy profile. Brinjal pickles are enjoyed for their ability to elevate meals with their robust flavor and satisfying texture.

            Our exporting company takes pride in offering the finest brinjal pickles to international markets. We use fresh, high-quality brinjals sourced from farmers who practice sustainable agriculture. Our focus on quality ensures that every jar of pickle captures the authentic taste of brinjal, adhering to the highest food safety standards.</p>
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

export default BrinjalPickle

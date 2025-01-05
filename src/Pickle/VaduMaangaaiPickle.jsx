import React from 'react'
import banner from '../images/Pickle/VaduMaangaaiPickleBanner.jpg'
import '../css/Ricepage.css'
import '../css/Responsive/RicePageResponsive.css'

function VaduMaangaaiPickle() {
  return (
    <div className='ricepage-main-container'>
      <div className="ricepage-container">
        <div className="ricepage-banner">
          <img src={banner} className='ricepage-banner-img' />
        </div>
        <div className="ricepage-content">
          <h2>VADU MAANGAI PICKLE EXPORTER</h2>
          <p>Vadu Maangai pickle, made from raw mangoes, is a traditional South Indian favorite known for its tangy and spicy flavor. This pickle features a unique blend of spices that enhance the natural tartness of the mango, making it a popular choice for adding a bold kick to meals.
            Our exporting company specializes in offering high-quality Vadu Maangai pickles to international markets. We use fresh, raw mangoes sourced from trusted farms, ensuring each jar captures the authentic taste and traditional spice blend. Our pickles are carefully processed to maintain their vibrant flavor and meet international food safety standards, delivering a delicious and authentic experience for pickle lovers worldwide.</p>
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

export default VaduMaangaaiPickle

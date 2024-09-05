import React from 'react'
import banner from '../images/Pickle/AmlaPickleBanner.jpg'
import '../css/Ricepage.css'
import '../css/Responsive/RicePageResponsive.css'

function AmlaPickle() {
  return (
    <div className='ricepage-main-container'>
      <div className="ricepage-container">
        <div className="ricepage-banner">
          <img src={banner} className='ricepage-banner-img' />
        </div>
        <div className="ricepage-content">
          <h2>AMLA PICKLE EXPORTERS</h2>
          <p>Amla, also known as Indian Gooseberry, is renowned for its numerous health benefits and distinctive tangy flavor. As a traditional ingredient in Indian cuisine, Amla is often used to create flavorful and nutritious pickles, loved for their unique blend of sourness and spiciness. Amla pickles are rich in vitamin C and antioxidants, making them a sought-after condiment that not only enhances the taste of meals but also offers health benefits.
            Our exporting company specializes in providing the highest quality Amla pickles to international markets. We take pride in using fresh, organically grown Amla, sourced from trusted farmers who prioritize natural and sustainable farming practices. Our commitment to quality ensures that each jar of pickle retains the authentic flavors and nutritional properties of Amla while meeting international food safety standards.</p>
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

export default AmlaPickle

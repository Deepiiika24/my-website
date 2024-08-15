import React from 'react'
import '../css/LeavesPage.css'
import '../css/Responsive/LeavesPageResponsive.css'
import banner from '../images/Leaf/Bananaleaf-banner.png'
function Bananaleaf() {
  return (
    <div className='leaf-page-container'>
      <div className='subpage-container'>
        <div className='leaf-sub-banner'>
          <img src={banner} className='leaf-subpage-img' />
        </div>
        <div id='leaf-banner-content'>
          <h2>Banana Leaf Exporter</h2>
          <p>At Koogul Industries, we take pride in exporting premium banana leaves sourced from the lush regions of tropical and subtropical areas. Our banana leaves are handpicked to ensure they meet the highest standards of freshness and quality, making them perfect for a wide range of applications.
          By exporting high-quality banana leaves, Koogul Industries is committed to delivering a versatile, eco-friendly product that meets the diverse needs of our global customers while promoting sustainable and traditional practices.
          Banana leaves are 100% biodegradable and compostable, making them an environmentally friendly alternative to disposable plates and packaging materials.
          Banana plants grow quickly and abundantly, making banana leaves a sustainable and renewable resource.
          </p>
        </div>
      </div>
      <section className='leaves-type-table'>
        <div className='leaves-table-heading'>
          <h3>SPECIFICATIONS</h3>
          <table class="table table-hover table-responsive table-bordered">
            <thead>
            </thead>
            <tbody>
              <tr id='leaf-table'>
                <th scope='row'>Leaf Name</th>
                <td>Banana Leaf</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Botanical Name</th>
                <td>Musa species (commonly Musa acuminata and Musa balbisiana)</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Origin</th>
                <td> Native to the tropical and subtropical regions of Southeast Asia.</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Common Uses</th>
                <td><ul>
                  <li>Banana leaves are commonly used for wrapping food before steaming, grilling, or baking. This technique infuses a subtle, natural flavor into the food while keeping it moist.</li>
                  <li>In many cultures, banana leaves are used as natural, biodegradable plates for serving food during festivals, gatherings, and traditional meals.</li>
                </ul></td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Benefits</th>
                <td>
                  <ul>
                    <li>Banana leaves contain polyphenols, which are natural antioxidants that help in protecting the body from oxidative stress.</li>
                    <li>Health benefits (antioxidant properties), environmental benefits (biodegradable, sustainable), cultural significance (enhanced flavor and presentation).</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  )
}

export default Bananaleaf

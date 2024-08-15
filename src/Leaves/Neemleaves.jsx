import React from 'react'
import '../css/LeavesPage.css'
import '../css/Responsive/LeavesPageResponsive.css'
import banner from '../images/Leaf/Neem-banner.png'

function Neemleaves() {
  return (
    <div className='leaf-page-container'>
      <div className='subpage-container'>
        <div className='leaf-sub-banner'>
          <img src={banner} className='leaf-subpage-img' />
        </div>
        <div id='leaf-banner-content'>
          <h2>Neem Leaves Exporter</h2>
          <p>Neem leaves, derived from the neem tree (Azadirachta indica), are renowned for their medicinal properties and wide-ranging health benefits. These bitter-tasting leaves have been integral to traditional medicine in South Asia for centuries, valued for their therapeutic applications.
          Beyond their culinary uses, neem leaves are esteemed for their medicinal prowess, offering benefits that span from promoting skin health to supporting immune function. They are valued for their antibacterial, antiviral, antifungal, and anti-inflammatory properties.
          Our company specializes in exporting superior neem leaves sourced from reputable growers in tropical and subtropical regions. We ensure that our leaves are harvested at optimal maturity and processed to preserve their natural goodness, delivering exceptional quality to our global customers.
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
                <td>Neem Leaves</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Botanical Name</th>
                <td>Azadirachta indica</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Origin</th>
                <td>Native to the Indian subcontinent, now cultivated in tropical and subtropical regions worldwide</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Common Uses</th>
                <td><ul>
                  <li>Neem leaves are used in various forms (pastes, oils, extracts) to treat acne, eczema, and other skin conditions due to their antibacterial and anti-inflammatory properties.</li>
                  <li>Neem leaf extracts are used in hair oils and shampoos to treat dandruff, nourish the scalp, and promote hair growth.</li>
                  <li>Neem extracts serve as natural pesticides, protecting crops from pests without harmful chemicals.</li>
                </ul></td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Benefits</th>
                <td>
                  <ul>
                    <li>Neem leaves contain compounds like nimbin and nimbidin, which exhibit strong antibacterial and antifungal effects.</li>
                    <li>They help reduce inflammation both internally and externally, making them beneficial for treating inflammatory conditions.</li>
                    <li>Applied topically or consumed internally, neem leaves promote clear, healthy skin by addressing acne, scars, and other dermatological issues.</li>
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

export default Neemleaves

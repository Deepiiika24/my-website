import React from 'react'
import '../css/LeavesPage.css'
import '../css/Responsive/LeavesPageResponsive.css'
import banner from '../images/Leaf/Eucalyptus-banner.jpg'

function Eucalyptus() {
  return (
    <div className='leaf-page-container'>
      <div className='subpage-container'>
        <div className='leaf-sub-banner'>
          <img src={banner} className='leaf-subpage-img' />
        </div>
        <div id='leaf-banner-content'>
          <h2>Eucalyptus Leaf Exporter</h2>
          <p>Our company is a premier exporter of high-quality Eucalyptus leaves, dedicated to delivering the finest products to our global customers. With a commitment to sustainability and excellence, we ensure that our Eucalyptus leaves retain their potent medicinal properties and refreshing aroma.
           Eucalyptus leaves, derived from the Eucalyptus tree (Eucalyptus spp.), are renowned for their aromatic and medicinal properties. These leaves are widely used in traditional medicine, aromatherapy, and various wellness applications.
          Eucalyptus leaves are valued for their wide range of health benefits, including their ability to alleviate respiratory issues, reduce inflammation, and provide antimicrobial effects. Their refreshing scent and healing properties make them a staple in natural medicine and wellness practices.

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
                <td>Eucalyptus Leaves</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Botanical Name</th>
                <td>Eucalyptus spp.</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Origin</th>
                <td>Native to Australia</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Common Uses</th>
                <td><ul>
                  <li>Eucalyptus leaves are used in steam inhalation to clear nasal congestion, treat colds, and alleviate symptoms of bronchitis.</li>
                  <li>Eucalyptus leaves are distilled to produce essential oils used in aromatherapy to relieve stress, improve concentration, and promote relaxation.</li>
                  <li>The leaves are incorporated into skincare products to treat acne, reduce redness, and soothe irritated skin.</li>
                </ul></td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Benefits</th>
                <td>
                  <ul>
                    <li>Eucalyptus leaves help clear nasal passages and ease breathing, making them effective for treating colds and respiratory infections.</li>
                    <li>They provide pain relief when applied topically in the form of balms and ointments.</li>
                    <li>Eucalyptus leaves are used in skincare products to reduce redness and soothe irritation.</li>
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

export default Eucalyptus

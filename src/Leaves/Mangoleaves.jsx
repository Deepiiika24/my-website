import React from 'react'
import '../css/LeavesPage.css'
import banner from '../images/Leaf/Mango-banner.jpg'

function Mangoleaves() {
  return (
    <div className='leaf-page-container'>
      <div className='subpage-container'>
        <div className='leaf-sub-banner'>
          <img src={banner} className='leaf-subpage-img' />
        </div>
        <div id='leaf-banner-content'>
          <h2>Mango Leaves Exporter</h2>
          <p>Mango leaves, obtained from the mango tree (Mangifera indica), are celebrated for their therapeutic properties and nutritional benefits. These glossy, evergreen leaves have been used for centuries in traditional medicine across tropical regions for their diverse healing capabilities.
          Beyond their culinary uses, mango leaves are revered for their medicinal applications, offering benefits that range from managing diabetes to promoting overall well-being. They are valued for their antioxidant content and natural healing properties.
          Our company specializes in exporting premium mango leaves sourced from reputable growers in tropical regions. We ensure that our leaves are harvested at optimal maturity and processed to preserve their natural goodness, delivering superior quality to our global customers.
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
                <td>Mango Leaves</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Botanical Name</th>
                <td>Mangifera indica</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Origin</th>
                <td>Native to South Asia, Southeast Asia, and parts of Africa</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Common Uses</th>
                <td><ul>
                  <li>Mango leaf tea is traditionally used to help regulate blood sugar levels and improve insulin sensitivity.
                  </li>
                  <li>Mango leaf extracts are used in cosmetics for their astringent and antimicrobial properties, benefiting skin health.</li>
                  <li>Mango leaf tea is brewed from dried leaves and enjoyed for its mild, slightly sweet flavor and health benefits.</li>
                </ul></td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Benefits</th>
                <td>
                  <ul>
                    <li>Mango leaves are rich in antioxidants like quercetin, isoquercitrin, and gallic acid, which help protect cells from oxidative stress and support overall health.</li>
                    <li>Compounds in mango leaves, such as mangiferin, may help lower blood sugar levels and improve glucose metabolism.</li>
                    <li>They aid digestion by stimulating the secretion of digestive enzymes and promoting gastrointestinal health.</li>
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

export default Mangoleaves

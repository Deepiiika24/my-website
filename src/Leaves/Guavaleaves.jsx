import React from 'react'
import '../css/LeavesPage.css'
import '../css/Responsive/LeavesPageResponsive.css'
import banner from '../images/Leaf/Guava-banner.jpg'

function Guavaleaves() {
  return (
    <div className='leaf-page-container'>
      <div className='subpage-container'>
        <div className='leaf-sub-banner'>
          <img src={banner} className='leaf-subpage-img' />
        </div>
        <div id='leaf-banner-content'>
          <h2>Guava Leaves Exporter</h2>
          <p>Guava leaves, derived from the guava tree (Psidium guajava), are esteemed for their nutritional richness and therapeutic properties. These leaves have been utilized across cultures for their diverse health benefits and are integral to traditional medicine practices.
          Beyond their culinary uses, guava leaves are renowned for their medicinal applications, offering benefits that range from promoting digestive health to managing diabetes. They are valued for their antioxidant content and natural healing properties.
          Our company specializes in exporting superior guava leaves sourced from reputable growers in tropical regions. We ensure that our leaves are harvested at peak freshness and processed to retain their natural goodness, delivering exceptional quality to our global customers.
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
                <td>Guava Leaves</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Botanical Name</th>
                <td>Psidium guajava</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Origin</th>
                <td>Native to tropical regions of Central America and South America</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Common Uses</th>
                <td><ul>
                  <li>Guava leaf tea is traditionally used to aid digestion, alleviate diarrhea, and treat gastrointestinal issues.</li>
                  <li>Guava leaf extracts are used in cosmetics for their astringent and antimicrobial properties, benefiting skin health.</li>
                  <li>Guava leaf tea is brewed from dried leaves and enjoyed for its mild, earthy flavor and health benefits.</li>
                </ul></td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Benefits</th>
                <td>
                  <ul>
                    <li>Guava leaves are rich in antioxidants like flavonoids and phenolic compounds, which help protect cells from oxidative stress and damage.</li>
                    <li>Compounds like quercetin in guava leaves may help lower blood sugar levels and improve insulin resistance.</li>
                    <li>Guava leaves contain anti-inflammatory agents that reduce inflammation in the body, supporting overall health and wellness.</li>
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

export default Guavaleaves

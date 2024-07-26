import React from 'react'
import '../css/LeavesPage.css'
import banner from '../images/Leaf/Tulsi-banner.png'

function Tulsileaves() {
  return (
    <div className='leaf-page-container'>
      <div className='subpage-container'>
        <div className='leaf-sub-banner'>
          <img src={banner} className='leaf-subpage-img' />
        </div>
        <div id='leaf-banner-content'>
          <h2>Tulsi Leaves Exporter</h2>
          <p>Tulsi leaves, also known as holy basil, are revered in Ayurvedic medicine for their medicinal properties and spiritual significance. These aromatic leaves have been cherished for centuries across South Asia for their healing benefits and cultural importance.
          Our company specializes in exporting premium tulsi leaves sourced from reputable growers in South Asia. We ensure that our tulsi leaves are cultivated sustainably and processed with care to retain their natural freshness and therapeutic potency, catering to global demand for this revered herb.
          Our company is dedicated to promoting the health-enhancing properties and cultural significance of tulsi leaves through responsible sourcing and export. We strive to deliver excellence in quality while contributing positively to the environment and communities in tulsi-growing regions.
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
                <td>Tulsi Leaves</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Botanical Name</th>
                <td>Ocimum tenuiflorum (syn. Ocimum sanctum)</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Origin</th>
                <td>Tulsi plants are native to the Indian subcontinent and are cultivated widely throughout Southeast Asia and other tropical regions.</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Common Uses</th>
                <td><ul>
                  <li>Tulsi leaves are adaptogenic, helping the body adapt to stress and promoting resilience.</li>
                  <li>Tulsi leaves are brewed into herbal teas appreciated for their soothing aroma and health benefits.</li>
                  <li>Tulsi is considered a sacred plant in Hinduism and is often grown in households for spiritual purification and blessings.</li>
                </ul></td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Benefits</th>
                <td>
                  <ul>
                    <li> Tulsi leaves are rich in antioxidants, protecting cells from oxidative stress and promoting overall health.</li>
                    <li>They have anti-inflammatory properties that help reduce inflammation and support joint health.</li>
                    <li>Tulsi helps manage stress levels and promotes mental clarity and emotional well-being.</li>
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

export default Tulsileaves

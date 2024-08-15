import React from 'react'
import '../css/LeavesPage.css'
import '../css/Responsive/LeavesPageResponsive.css'
import banner from '../images/Leaf/Moringa-banner.png'

function Moringaleaves() {
  return (
    <div className='leaf-page-container'>
      <div className='subpage-container'>
        <div className='leaf-sub-banner'>
          <img src={banner} className='leaf-subpage-img' />
        </div>
        <div id='leaf-banner-content'>
          <h2>Moringa Leaves Exporter</h2>
          <p>Moringa leaves, derived from the Moringa oleifera tree, are revered for their exceptional nutritional profile and medicinal properties. These vibrant green leaves have been a staple in traditional medicine and culinary practices across various cultures for centuries.
          Beyond their culinary uses, moringa leaves are prized for their extensive health benefits, ranging from boosting immunity to promoting overall well-being. They are valued for their antioxidant content, essential vitamins, and minerals.
          Our company specializes in exporting premium moringa leaves sourced from reputable growers in tropical and subtropical regions. We ensure that our leaves are harvested at peak freshness and processed to preserve their natural goodness, delivering superior quality to our global customers.
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
                <td>Moringa Leaves</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Botanical Name</th>
                <td>Moringa oleifera</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Origin</th>
                <td>Native to the Indian subcontinent, now widely cultivated in tropical and subtropical regions worldwide.</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Common Uses</th>
                <td><ul>
                  <li>Moringa leaves are used fresh or dried in various dishes, such as soups, curries, and salads, adding a nutritious boost to meals.</li>
                  <li> Moringa leaf powder is consumed as a dietary supplement to provide essential vitamins (A, C, E) and minerals (iron, calcium, potassium).</li>
                  <li>Extracts of moringa leaves are used in cosmetics for their moisturizing, anti-aging, and skin-healing properties.</li>
                </ul></td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Benefits</th>
                <td>
                  <ul>
                    <li>Moringa leaves are packed with essential nutrients, making them a potent source of vitamins, minerals, and protein.</li>
                    <li>They contain high levels of antioxidants that help neutralize free radicals and protect cells from damage.</li>
                    <li>The leaves boost immune function due to their nutrient density and immune-stimulating properties.</li>
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

export default Moringaleaves

import React from 'react'
import '../css/LeavesPage.css'
import '../css/Responsive/LeavesPageResponsive.css'
import banner from '../images/Leaf/Ashoka-banner.jpg'

function Ashokaleaves() {
  return (
    <div className='leaf-page-container'>
      <div className='subpage-container'>
        <div className='leaf-sub-banner'>
          <img src={banner} className='leaf-subpage-img' />
        </div>
        <div id='leaf-banner-content'>
          <h2>Ashoka Leaf Exporters</h2>
          <p>Ashoka leaves, derived from the sacred Ashoka tree (Saraca asoca), are cherished in various cultures for their medicinal properties and spiritual significance. These leaves are used in traditional medicine and rituals, symbolizing purity and wellness.
            Our company stands at the forefront of exporting high-quality Ashoka leaves, ensuring that these prized botanical treasures reach global markets in their freshest and most potent form. With a commitment to sustainability and excellence, we cater to the diverse needs of our international clientele.
            Ashoka leaves are integral to Ayurveda and other traditional medicine systems, where they are used to treat various ailments, including menstrual disorders and skin diseases. Additionally, these leaves are often employed in religious ceremonies and rituals, highlighting their cultural and spiritual value.
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
                <td>Ashoka Leaf</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Botanical Name</th>
                <td> Saraca asoca (also known as Saraca indica)</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Origin</th>
                <td>The Ashoka tree is native to the Indian subcontinent and parts of Southeast Asia. It is commonly found in countries like India, Nepal, and Sri Lanka.</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Common Uses</th>
                <td><ul>
                  <li>Used in Ayurvedic medicine to treat gynecological issues, inflammation, and skin disorders.</li>
                  <li>Integral part of Hindu rituals and festivals.</li>
                  <li>Utilized in skincare products for their healing and anti-inflammatory properties.</li>
                </ul></td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Benefits</th>
                <td>
                  <ul>
                    <li>Anti-inflammatory, antioxidant, and beneficial for gynecological health.</li>
                    <li>Effective in treating skin conditions like acne and eczema.</li>
                    <li>Acts as a detoxifying agent and aids in digestive health.</li>
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

export default Ashokaleaves

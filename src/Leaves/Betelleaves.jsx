import React from 'react'
import '../css/LeavesPage.css'
import banner from '../images/Leaf/Betel-banner.jpg'

function Betelleaves() {
  return (
    <div className='leaf-page-container'>
      <div className='subpage-container'>
        <div className='leaf-sub-banner'>
          <img src={banner} className='leaf-subpage-img' />
        </div>
        <div id='leaf-banner-content'>
          <h2>Betel Leaf Exporter</h2>
          <p>Betel leaves, obtained from the Piper betle plant, are revered for their unique taste and medicinal properties. These heart-shaped leaves are integral to cultural traditions and holistic healing practices across Asia.
          Betel leaves are widely used in culinary and medicinal applications. In many cultures, they are chewed with areca nut and slaked lime as a traditional practice. Medically, they are known for their antiseptic, carminative, and digestive properties.
          Our company is a leading exporter of premium Betel leaves, ensuring that these culturally and medically significant leaves reach global markets with their integrity intact. We prioritize quality, freshness, and sustainability in our export practices.
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
                <td>Betel Leaves</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Botanical Name</th>
                <td>Piper betle</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Origin</th>
                <td>Indigenous to Southeast Asia</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Common Uses</th>
                <td><ul>
                  <li>Betel leaves are traditionally chewed with areca nut and slaked lime in many Asian cultures. This practice is known as 'paan' in India.</li>
                  <li>Betel leaves are used as a wrapper for various savory and sweet fillings in traditional dishes.</li>
                  <li>Betel leaves are used in traditional remedies to treat respiratory problems like cough, cold, and bronchitis.</li>
                </ul></td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Benefits</th>
                <td>
                  <ul>
                    <li>The essential oils in betel leaves have potent antiseptic qualities, making them effective in treating wounds and preventing infections.
                    </li>
                    <li>The leaves are rich in antioxidants, which help in combating oxidative stress and reducing the risk of chronic diseases.</li>
                    <li>Betel leaves are used in traditional medicine to treat skin problems like acne, rashes, and infections due to their antimicrobial properties.</li>
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

export default Betelleaves

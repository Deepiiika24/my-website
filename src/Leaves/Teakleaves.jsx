import React from 'react'
import '../css/LeavesPage.css'
import banner from '../images/Leaf/Teak-banner.jpg'

function Teakleaves() {
  return (
    <div className='leaf-page-container'>
      <div className='subpage-container'>
        <div className='leaf-sub-banner'>
          <img src={banner} className='leaf-subpage-img' />
        </div>
        <div id='leaf-banner-content'>
          <h2>Teak Leaves Exporter</h2>
          <p>Teak leaves, obtained from the teak tree (Tectona grandis), are renowned for their elegant appearance and diverse applications in traditional medicine and cultural practices. These glossy, elongated leaves are valued for their aesthetic appeal and therapeutic properties.
          Our company specializes in exporting premium teak leaves sourced sustainably from teak plantations in South and Southeast Asia. We prioritize quality and ethical sourcing practices to deliver superior teak leaves for medicinal, cultural, and decorative purposes worldwide.
          Our company is dedicated to showcasing the natural elegance and therapeutic benefits of teak leaves through responsible sourcing and export. We strive to meet the highest standards of quality while contributing positively to the environment and communities in teak-growing regions.
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
                <td>Teak Leaves</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Botanical Name</th>
                <td>Tectona grandis</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Origin</th>
                <td>Teak trees are native to the tropical regions of South and Southeast Asia, including India, Indonesia, and Myanmar.</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Common Uses</th>
                <td><ul>
                  <li>Teak leaves are utilized in Ayurvedic remedies for their antimicrobial and anti-inflammatory properties.</li>
                  <li>They are often incorporated into floral arrangements, wreaths, and decorative crafts.</li>
                  <li>Teak trees and their leaves support diverse wildlife species, enhancing biodiversity.</li>
                </ul></td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Benefits</th>
                <td>
                  <ul>
                    <li>Teak leaves contain antioxidants that help protect cells from oxidative stress and support skin health.</li>
                    <li>They possess anti-inflammatory compounds that can help reduce inflammation and promote healing.</li>
                    <li>Teak leaves hold cultural and symbolic meanings in many societies, representing longevity, strength, and prosperity.</li>
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

export default Teakleaves

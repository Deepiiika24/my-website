import React from 'react'
import '../css/LeavesPage.css'
import banner from '../images/Leaf/Palm-banner.jpg'

function Palmleaves() {
  return (
    <div className='leaf-page-container'>
      <div className='subpage-container'>
        <div className='leaf-sub-banner'>
          <img src={banner} className='leaf-subpage-img' />
        </div>
        <div id='leaf-banner-content'>
          <h2>Palm Leaves Exporter</h2>
          <p>Palm leaves, characterized by their large size and distinctive fan or feather-like appearance, are iconic symbols of tropical landscapes and cultural significance. These lush, green leaves are revered for their versatility in various traditional and contemporary applications.
          Our company specializes in exporting high-quality palm leaves sourced sustainably from palm groves in tropical regions worldwide. We ensure meticulous harvesting and processing to preserve the natural integrity and aesthetic appeal of palm leaves, catering to global demand for exotic foliage.
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
                <td>Palm Leaves</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Botanical Name</th>
                <td>Various genera and species within the Arecaceae family, including Phoenix, Areca, and Sabal genera.</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Origin</th>
                <td>Palm leaves originate from diverse species of palm trees found across tropical and subtropical regions worldwide.</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Common Uses</th>
                <td><ul>
                  <li>Palm leaves are used in rituals, festivals, and religious ceremonies across cultures.</li>
                  <li>Dried palm leaves are used for thatching roofs and constructing shelters in traditional architecture.</li>
                  <li>Palm trees and their leaves contribute to soil stabilization and erosion prevention in coastal and tropical environments.</li>
                </ul></td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Benefits</th>
                <td>
                  <ul>
                    <li>Palm leaves add a touch of natural beauty and tropical elegance to indoor and outdoor spaces.</li>
                    <li>They hold cultural and symbolic meanings in many societies, representing vitality, peace, and prosperity.</li>
                    <li>Palm leaves are renewable and biodegradable, making them eco-friendly choices for decorations and construction materials.</li>
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

export default Palmleaves

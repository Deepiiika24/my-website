import React from 'react'
import '../css/LeavesPage.css'
import banner from '../images/Leaf/Bambooleaf-banner.jpg'

function Bambooleaves() {
  return (
    <div className='leaf-page-container'>
      <div className='subpage-container'>
        <div className='leaf-sub-banner'>
          <img src={banner} className='leaf-subpage-img' />
        </div>
        <div id='leaf-banner-content'>
          <h2>Bamboo Leaf Exporter</h2>
          <p>At Koogul Industries, we specialize in exporting high-quality bamboo leaves sourced from the finest Bambusa species, including Bambusa vulgaris and Phyllostachys edulis. Originating from the lush regions of Asia, particularly China, Japan, and Southeast Asia, our bamboo leaves are renowned for their versatility and numerous benefits.
          Our bamboo leaves are carefully harvested and processed to ensure they retain their natural freshness and aroma. Ideal for culinary applications, these leaves are perfect for wrapping and steaming foods, enhancing the flavor and presentation of dishes such as sticky rice and dumplings. Additionally, they can be brewed into a refreshing herbal tea known for its health benefits.
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
                <td>Bamboo Leaf</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Botanical Name</th>
                <td>Bambusa species (e.g., Bambusa vulgaris, Phyllostachys edulis)</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Origin</th>
                <td>Native to tropical, subtropical, and temperate regions of Asia, Africa, and the Americas, particularly abundant in China, Japan, and Southeast Asia.</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Common Uses</th>
                <td><ul>
                  <li>Used for wrapping and steaming food, making herbal tea.</li>
                  <li>Employed in herbal remedies for detoxification and treating various ailments.</li>
                  <li>Served as animal feed for livestock.</li>
                </ul></td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Benefits</th>
                <td>
                  <ul>
                    <li>Antioxidant, anti-inflammatory, and detoxifying properties.</li>
                    <li> Rich in silica and essential minerals.</li>
                    <li>Supports sustainable practices due to bamboo's fast growth and minimal environmental impact.</li>
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

export default Bambooleaves

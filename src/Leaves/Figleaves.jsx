import React from 'react'
import '../css/LeavesPage.css'
import banner from '../images/Leaf/Fig-banner.jpg'

function Figleaves() {
  return (
    <div className='leaf-page-container'>
      <div className='subpage-container'>
        <div className='leaf-sub-banner'>
          <img src={banner} className='leaf-subpage-img' />
        </div>
        <div id='leaf-banner-content'>
          <h2>Fig Leaves Exporters</h2>
          <p>Fig leaves, derived from the fig tree (Ficus carica), are known for their unique shape and diverse applications in both culinary and medicinal fields. These broad, lobed leaves have been utilized for centuries across various cultures for their nutritional and therapeutic properties.
          Beyond their culinary uses, fig leaves hold medicinal significance, offering benefits that range from promoting heart health to managing diabetes. They are also valued in traditional medicine and herbal remedies for their diverse healing properties.
          Our company specializes in exporting premium fig leaves sourced from trusted growers around the Mediterranean region and Western Asia. We ensure that only the finest leaves are selected and processed to preserve their natural goodness and deliver exceptional quality to our global clientele.
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
                <td>Fig Leaves</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Botanical Name</th>
                <td>Ficus carica</td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Origin</th>
                <td>Native to the Mediterranean region and Western Asia
                </td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Common Uses</th>
                <td><ul>
                  <li>Fig leaves are used as natural wrappers for cooking, imparting a subtle, earthy flavor to dishes like dolmas and grilled meats.</li>
                  <li>Compounds in fig leaves may support cardiovascular health by helping to lower cholesterol levels.</li>
                  <li>Fig leaves are employed in folk medicine for treating skin conditions, respiratory issues, and gastrointestinal disorders.</li>
                </ul></td>
              </tr>
              <tr id='leaf-table'>
                <th scope='row'>Benefits</th>
                <td>
                  <ul>
                    <li>Fig leaves contain antioxidants that help neutralize free radicals and protect cells from oxidative damage.</li>
                    <li>Compounds in fig leaves, such as ficusin and gallic acid, may help improve insulin sensitivity and regulate blood glucose levels.
                    </li>
                    <li>Fig leaves are used to aid digestion and alleviate symptoms like indigestion and bloating.</li>
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

export default Figleaves

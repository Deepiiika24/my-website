import React from 'react'
import '../css/FlowerPage.css'
import banner from '../images/Marigold-string-banner.jpg'

function Marigoldstring() {
  return (
    <div>
      <div id='container'>
        <div id="banner-img">
          <img src={banner} alt="" />
        </div>
        <div id="banner-content">
          <h2>Exporting Premium Marigold Strings</h2>
          <p>Our Marigold Strings, known for their vibrant hues and cheerful blossoms, are meticulously crafted to bring a burst of color to any event. Each string is created using freshly picked marigold flowers, chosen at peak bloom and immediately refrigerated to ensure they maintain their vivid colors and fresh appearance. Marigold strings symbolize joy, prosperity, and festivity, making them perfect for weddings, religious ceremonies, and cultural celebrations.</p>
        </div>
      </div>
      <section className='Flower-type-table'>
        <div className='Flower-table-heading'>
          <h3>SPECIFICATIONS</h3>
          <table class="table table-hover table-responsive table-bordered">
            <thead>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>Name</th>
                <td>Marigold</td>
              </tr>
              <tr>
                <th scope='row'>Origin</th>
                <td>Native to the Americas, primarily Mexico and Central America</td>
              </tr>
              <tr>
                <th scope='row'>Family</th>
                <td>Asteraceae</td>
              </tr>
              <tr>
                <th scope='row'>Binomial Name</th>
                <td>Tagetes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div className='final-container'>
        <h4>USES & BENEFITS</h4>
        <h6><b>USES</b></h6>
        <ul>
          <li>Marigold extract has been used by ancient cultures and has anti-inflammatory healing properties. Learn more about marigold extract benefits for the skin.</li>
          <li>It contains flavonoids, which are plant-based antioxidants that protect the skin from free radical damage and reduce inflammation.</li>
          <li>Marigold tea also helps in detoxification of the body and stimulates the lymph system to flush out toxic substances and get rid of inflammation.</li>
        </ul>
        <h6><b>BENEFITS</b></h6>
        <ul>
          <li>Tincture of marigold eases headaches and can help to facilitate sleep.</li>
          <li>The strong scent of marigold flowers acts as a natural repellent against pests like mosquitoes and aphids, making them a valuable companion plant in gardens.</li>
          <li>Marigold flowers have medicinal properties and are used in traditional medicine for treating minor skin irritations, wounds, and inflammation.</li>
        </ul>
      </div>
    </div>
  )
}

export default Marigoldstring

import React from 'react'
import '../css/FlowerPage.css'
import banner from '../images/Jasmine-string-banner.jpg'

function Jasminestring() {
  return (
    <div>
      <div id='container'>
        <div id="banner-img">
          <img src={banner} alt="" />
        </div>
        <div id="banner-content">
          <h2>Premium Jasmine Strings Exporter</h2>
          <p>Our Jasmine Strings, renowned for their captivating fragrance and delicate white blossoms, are carefully handcrafted to bring a touch of elegance to any occasion. Each string is made from freshly picked jasmine flowers, selected at their peak bloom and immediately refrigerated to ensure they maintain their pristine condition and intoxicating aroma. Jasmine strings symbolize purity, love, and beauty, making them perfect for weddings, religious ceremonies, and festive celebrations.</p>
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
                <td>Jasmine</td>
              </tr>
              <tr>
                <th scope='row'>Origin</th>
                <td>Native to tropical and subtropical regions of Eurasia, Australasia, and Oceania</td>
              </tr>
              <tr>
                <th scope='row'>Family</th>
                <td>Oleaceae</td>
              </tr>
              <tr>
                <th scope='row'>Binomial Name</th>
                <td>Jasminum</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div className="final-container">
        <h4>USES & BENEFITS</h4>
        <h6><b>USES</b></h6>
        <ul>
          <li>Jasmine is inhaled to improve mood, reduce stress, and reduce food cravings.</li>
          <li>In foods, jasmine is used to flavor beverages, frozen dairy desserts, candy, baked goods, gelatins, and puddings.</li>
          <li>Jasmine is used on the skin to reduce the amount of breast milk, for skin diseases, and to speed up wound healing.</li>
        </ul>
        <h6><b>BENEFITS</b></h6>
        <ul>
          <li>Jasmine flowers are known for their sweet, intoxicating scent, which creates a pleasant and inviting atmosphere.</li>
          <li>Jasmine flowers symbolize purity, love, and beauty, adding depth and meaning to your decorations and gifts.</li>
          <li>Suitable for a wide range of occasions, from weddings and festivals to everyday home decor.</li>
        </ul>
      </div>
    </div>

  )
}

export default Jasminestring

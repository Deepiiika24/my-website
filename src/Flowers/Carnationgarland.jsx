import React from 'react'
import '../css/FlowerPage.css'
import '../css/Responsive/FlowerPageResponsive.css'
import banner from '../images/Carnation-garland-banner.png'


function Carnationgarland() {
  return (

    <div className='flowers-container'>
      <div className="banner">
        <img src={banner} />
      </div>
      <div className="content">
        <h2> Exporting Premium Carnation Garlands Worldwide</h2>
        <p>Our Carnation Garlands, renowned for their vibrant colors and exquisite form, are expertly crafted and meticulously preserved to maintain their stunning beauty. Each garland is made from handpicked carnations, selected at peak freshness and immediately refrigerated to ensure that they arrive in pristine condition. These garlands, symbolizing love, admiration, and celebration, are perfect for weddings, religious ceremonies, and festive occasions.</p>
        <section className='Flower-type-table'>
          <div className='Flower-table-heading'>
            <h3>SPECIFICATIONS</h3>
            <table class="table table-hover table-responsive table-bordered">
              <thead>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>Name</th>
                  <td>Carnation</td>
                </tr>
                <tr>
                  <th scope='row'>Origin</th>
                  <td>Native to the Mediterranean region
                  </td>
                </tr>
                <tr>
                  <th scope='row'>Family</th>
                  <td>Caryophyllaceae</td>
                </tr>
                <tr>
                  <th scope='row'>Binomial Name</th>
                  <td>Dianthus caryophyllus</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <div className="final-container">
        <h4>USES & BENEFITS</h4>
        <h6><b>USES</b></h6>
        <ul>
          <li>Enhance the beauty of wedding venues, mandaps, and bridal attire with elegant Carnation Garlands.</li>
          <li>Perfect for decorating homes, temples, and public spaces during festivals like Diwali, Christmas, and more.</li>
          <li>Ideal for creating a sacred and pure atmosphere during pujas, havans, and other religious rituals.</li>
          <li>Add a touch of natural beauty to your living spaces by using Carnation Garlands in vases, as wall hangings, or table centerpieces.</li>
        </ul>
        <h6><b>BENEFITS</b></h6>
        <ul>
          <li><b>Long-Lasting Freshness:</b> Carnations are known for their durability and long vase life, ensuring that your garlands stay fresh for extended periods.</li>
          <li><b>Symbolic Significance:</b> Each color and type of carnation carries a unique meaning, adding depth and sentiment to your decorations and gifts.</li>
          <li><b>Versatility:</b> Suitable for a wide range of occasions, from weddings and festivals to everyday home decor.</li>
          <li><b>Natural Fragrance:</b> The subtle, sweet scent of carnations enhances the sensory experience, making your celebrations even more delightful.</li>
        </ul>
        </div>
        <p>By exporting our premium Carnation Garlands, we ensure that their elegance and charm can be shared and appreciated globally, bringing joy and beauty to every special occasion.</p>
      </div>
    </div>

  )
}

export default Carnationgarland

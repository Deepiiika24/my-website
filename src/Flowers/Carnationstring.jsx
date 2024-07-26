import React from 'react'
import '../css/FlowerPage.css'
import banner from '../images/Carnation-string-banner.jpg'

function Carnationstring() {
  return (
    <div>
      <div id='container'>
        <div id="banner-img">
          <img src={banner} />
        </div>
        <div id="banner-content">
          <h2>Exporting Premium Carnation Strings Worldwide</h2>
          <p>Our Carnation Strings, cherished for their vibrant colors and delicate appearance, are meticulously crafted to enhance the beauty of any occasion. Each string is created using handpicked carnations, selected at their peak freshness and immediately refrigerated to ensure they maintain their pristine condition. These strings symbolize love, admiration, and celebration, making them ideal for weddings, religious ceremonies, and festive events.
            To guarantee the highest quality, our Carnation Garlands are refrigerated immediately after crafting. This process locks in their freshness, ensuring that they retain their vibrant colors and delicate fragrance throughout their journey to you.
          </p>
        </div>
        </div>
        <div className='final-container'>
        <h4>USES & BENEFITS</h4>
        <h6><b>USES</b></h6>
        <ul>
          <li>Enhance the beauty of wedding venues, mandaps, and bridal attire with elegant Carnation Strings.</li>
          <li>Ideal for creating a sacred and pure atmosphere during pujas, havans, and other religious rituals.</li>
        </ul>
        <h6><b>BENEFITS</b></h6>
        <ul>
          <li><b>Vibrant Colors:</b>The rich and varied colors of Carnation Strings brighten up any space, creating a cheerful and inviting atmosphere.</li>
          <li><b>Natural Fragrance:</b> The subtle, sweet scent of carnations enhances the sensory experience, making your celebrations even more delightful.</li>
        </ul>
        </div>

    </div>
  )
}

export default Carnationstring

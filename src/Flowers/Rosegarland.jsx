import React from 'react'
import '../css/FlowerPage.css'
import '../css/Responsive/FlowerPageResponsive.css'
import banner from '../images/Rose-garland-banner.png'

function Rosegarland() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Exporting Rose Garland</h2>
          <p>Rose garlands are a timeless and elegant choice for various ceremonies, especially weddings. Known for their beauty, fragrance, and symbolism, roses add a touch of romance and sophistication to any occasion. These garlands are crafted by stringing together fresh roses, creating a continuous chain of blossoms that can be used in numerous ways.
            Red Roses: Symbolize love, passion, and respect.Red Roses: Symbolize love, passion, and respect.Red Roses: Symbolize love, passion, and respect.Yellow Roses: Stand for friendship and happiness.
            Orange Roses: Reflect enthusiasm and excitement.
          </p>
        </div>
      </div>
      <div className="final-container">
        <h4>USES & BENEFITS</h4>
        <ul>
          <li><b>Weddings:</b>Rose garlands are commonly used in wedding ceremonies for the garland exchange ritual between the bride and groom, symbolizing their acceptance and union.</li>
          <li><b>Religious Ceremonies:</b>These garlands are often used in religious events to honor deities, decorate altars, and create a sacred atmosphere.</li>
          <li><b>Special Occasions:</b>Rose garlands are ideal for decorating venues during festivals, anniversaries, and other celebrations.</li>
        </ul>
        <p>Rose garlands are a beautiful and meaningful addition to any special occasion. Their rich symbolism, combined with their aesthetic appeal, makes them an ideal choice for weddings, religious ceremonies, and various celebrations. By choosing the right color and style, you can create a stunning rose garland that enhances the beauty and significance of your event, leaving a lasting impression on everyone present.</p>
      </div>

    </div>
  )
}

export default Rosegarland

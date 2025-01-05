import React from 'react'
import '../css/FlowerPage.css'
import '../css/Responsive/FlowerPageResponsive.css'
import banner from '../images/Wedding-garland-banner.png'

function Weddinggarland() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Expoting Wedding Garland</h2>
          <p>Wedding garlands, also known as "varmala" in some cultures, play a significant role in matrimonial ceremonies across various traditions. These garlands symbolize love, respect, and the union of two individuals. They are made from a variety of flowers, each carrying its own symbolism and aesthetic appeal.
            Wedding garlands are intricately crafted by stringing together fresh flowers. The design and choice of flowers can vary based on cultural preferences, regional traditions, and personal tastes. Common flowers used include roses, marigolds, jasmine, and tuberose, among others.
          </p>
        </div>
      </div>
      <div className="final-container">
        <h4><b>Types of Flowers Used</b></h4>
        <ul>
          <li><b>Roses:</b><br />Symbolize love and passion. Red roses are especially popular in wedding garlands.</li>
          <li><b>Jasmine:</b><br />Known for its sweet fragrance, it symbolizes purity and grace.</li>
          <li><b>Marigolds:</b><br />Represent auspiciousness and are often used in vibrant orange or yellow colors.</li>
          <li><b>Tuberose:</b><br />Valued for its strong, pleasant fragrance, it signifies sensuality and passion.</li>
          <li><b>Carnations:</b><br />Available in various colors, they represent love and admiration.</li>
        </ul>
        <p>Wedding garlands are a beautiful and meaningful part of matrimonial ceremonies. Their significance, coupled with their aesthetic appeal, makes them an essential element in weddings, symbolizing the bond of love and unity between the bride and groom. By choosing the right flowers and design, you can create a stunning garland that enhances the beauty and significance of your special day.</p>
      </div>
    </div>
  )
}

export default Weddinggarland

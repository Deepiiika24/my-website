import React from 'react'
import '../css/FlowerPage.css'
import '../css/Responsive/FlowerPageResponsive.css'
import banner from '../images/Tuberose-garland-banner.png'
function Tuberosegarland() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Exporting Tuberose Garland</h2>
          <p>Tuberose garlands are highly valued for their exquisite beauty and intense fragrance. The tuberose (Polianthes tuberosa) is a perennial plant known for its tall spikes of aromatic, white flowers. These garlands are often used in various cultural and religious ceremonies, weddings, and special occasions due to their elegant appearance and enchanting scent.
          Tuberose garlands are meticulously handcrafted by stringing together the individual tuberose flowers, creating a continuous chain of blossoms. The flowers are typically arranged in a way that maximizes their visual appeal and fragrance, often interspersed with other decorative elements such as leaves or smaller flowers.
          </p>
        </div>
      </div>
      <div className="final-container">
        <h4>USES & BENEFITS</h4>
        <h6><b>USES</b></h6>
        <ul>
          <li><b>Weddings:</b> Tuberose garlands are popular in weddings for adorning the bride and groom, decorating venues, and as part of various ceremonial rituals.</li>
          <li><b>Religious Ceremonies:</b>These garlands are used in temples and during religious festivals to honor deities and create a sacred atmosphere.</li>
          <li><b>Special Occasions:</b>Tuberose garlands are used in celebrations and events to add an element of elegance and fragrance to the surroundings.</li>
        </ul>
        <p>By incorporating tuberose garlands into your events and decor, you can enjoy their captivating beauty and fragrance, enhancing the ambiance and creating memorable experiences.</p>
        </div>
    </div>
  )
}

export default Tuberosegarland

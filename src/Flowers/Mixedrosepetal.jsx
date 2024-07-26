import React from 'react'
import '../css/FlowerPage.css'
import banner from '../images/Mixed-petal-banner.avif'

function Mixedrosepetal() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Exploring Mixed Rose Petals for Various Uses</h2>
          <p>Mixed rose petals combine the beauty and diversity of different rose varieties into a stunning collection of colors and fragrances. These petals are carefully harvested at their peak freshness, ensuring they retain their natural vibrancy and delicate texture. Whether used for decoration, culinary delights, or symbolic gestures, mixed rose petals offer a versatile and enchanting addition to various occasions.
          </p>
        </div>
      </div>
      <div className='final-container'>
      <h4>USES & BENEFITS</h4>
      <h6><b>USES</b></h6>
      <ul>
        <li> Edible rose petals are perfect for garnishing cakes, pastries, salads, and beverages, imparting a subtle floral flavor and enhancing visual presentation. They are also used in making rose petal jams, syrups, and teas, adding a unique twist to culinary creations.</li>
        <li>The calming and uplifting scent of rose petals makes them ideal for aromatherapy purposes. They can be used in homemade potpourri, sachets, bath salts, and facial steams to promote relaxation, reduce stress, and rejuvenate the senses.</li>
      </ul>
      <h6><b>BENEFITS</b></h6>
      <ul>
        <li>Edible rose petals from mixed varieties are used to garnish a variety of dishes, including desserts, salads, and beverages. They impart a mild floral flavor and enhance the presentation of culinary creations.</li>
        <li>Certain rose petals, such as those from the Rosa damascena and Rosa centifolia varieties, are used in traditional medicine for their anti-inflammatory and antioxidant properties. They are also known for promoting skin health and soothing irritation.</li>
        <li>Roses, from which mixed petals are derived, contribute to garden biodiversity by attracting beneficial insects like bees and butterflies. They help in pollination and support ecosystem health.</li>
      </ul>
      </div>
    </div>
  )
}

export default Mixedrosepetal

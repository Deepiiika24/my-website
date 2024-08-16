import React from 'react';
import '../css/poojapages.css'
import durga from '../images/beeda/cardamom-banner.jpg'
function  Cardamomseeds() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2> CARDAMOM SEEDS</h2>
              <p>Premium Whole Green Cardamom Pods: Fresh from farm, aromatic, and considered the queen of spices. Green and whole, these "true cardamom" pods offer a herbal warmth-like fragrance and the most recognized cardamom flavor.
              100% Natural and Pure: No preservatives, no additives, no added color. Experience the natural aroma and taste of premium whole cardamom, hygienically packed to preserve freshness.</p>
            </div>
          </div>
          </div>
          <section className='brass-type-table'>
        <div className='brass-table-heading'>
          <h3>SPECIFICATIONS</h3>
          <table class="table table-hover table-responsive table-bordered">
            <thead>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>Color</th>
                <td>Green</td>
              </tr>
              <tr>
                <th scope='row'>Item Shape</th>
                <td>Seeds</td>
              </tr>
              <tr>
                <th scope='row'>Capacity</th>
                <td>100gm</td>
              </tr>
              <tr>
                <th scope='row'>Primary Material</th>
                <td>Dry</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default  Cardamomseeds;








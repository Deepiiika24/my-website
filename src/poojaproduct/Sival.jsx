import React from 'react';
import '../css/poojapages.css'
import '../css/Responsive/PoojaPageResponsive.css'
import durga from '../images/pooja/sival-banner.jpg'
function Sival() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>SIVAL PAKKU</h2>
              <p>Seeval Pakku is believed to aid digestion. The mixture often contains ingredients like dried ginger, cardamom, and other spices that are known to support digestive functions.
Anti-inflammatory Properties: Some of the ingredients in Seeval Pakku, such as turmeric, may possess anti-inflammatory properties, potentially aiding in reducing inflammation in the body.
Boosting Immunity: Ingredients like turmeric, which contains curcumin, are known for their potential immune-boosting properties. However, the concentration of these compounds in Seeval Pakku may vary.</p>
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
                <td>pink</td>
              </tr>
              <tr>
                <th scope='row'>Item Shape</th>
                <td>Round</td>
              </tr>
              <tr>
                <th scope='row'>Capacity</th>
                <td>100gm</td>
              </tr>
              <tr>
                <th scope='row'>Primary Material</th>
                <td>sival pakku</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Sival;




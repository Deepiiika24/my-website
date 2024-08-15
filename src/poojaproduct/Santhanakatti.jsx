import React from 'react';
import '../css/poojapages.css'
import '../css/Responsive/PoojaPageResponsive.css'
import durga from '../images/pooja/santhanam.jpg'
function Santhanakatti() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>SANTHANAM KATTI</h2>
              <p>ASai organics natural Natural sandal/Santhanam/Chanda tablets is 100% pure and organic, no added chemicals.
Natural sandal tablets will help in removing sun tan and dark spots. Mix 1 tablespoon of sandalwood ball (after soaking in water) and coconut oil and massage it on your face and leave it on overnight. With regular usage, the dark spots will vanish.
Sandalwood is surely a wonderful ingredient to keep in your beauty cabinet and reap all its benefits for beautiful and clear skin.
Sai sandalwood tablets is naturally aromatic and it plays a major role in puja.</p>
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
                <td>sandle</td>
              </tr>
              <tr>
                <th scope='row'>Item Shape</th>
                <td>tablets</td>
              </tr>
              <tr>
                <th scope='row'>Capacity</th>
                <td>100gm</td>
              </tr>
              <tr>
                <th scope='row'>Primary Material</th>
                <td>Natural</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Santhanakatti;



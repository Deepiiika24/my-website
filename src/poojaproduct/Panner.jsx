import React from 'react';
import '../css/poojapages.css'
import durga from '../images/pooja/rosewater.jpg'
function Panner() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>PANNER WATER</h2>
              <p>Refreshing Facial Toner: Vitro Rose Water Spray is a hydrating and refreshing facial toner that helps revitalize and rejuvenate your skin.
Nourishes and Hydrates: This rose water toner is hydro-distilled to retain the natural goodness of roses, providing nourishment and hydration to your skin.
Suitable for Normal to Oily Skin: As it containains 100% natural rose water, this rose water spray is suitable for all skin types, particularly beneficial for normal to oily skin.</p>
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
                <td>Gold</td>
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
                <td>Brass</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Panner;


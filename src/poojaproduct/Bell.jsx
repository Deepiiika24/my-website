import React from 'react';
import '../css/poojapages.css'
import '../css/Responsive/PoojaPageResponsive.css'
import durga from '../images/pooja/bell-banner.jpg'
function Bell() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>BELL</h2>
              <p>In Hinduism, bells are generally hung at the temple dome in front of the Garbhagriha. Generally, devotees ring the bell while entering into the sanctum. It is said that by ringing the bell, the devotee informs the deity of  arrival. The sound of the bell is considered auspicious which welcomes divinity and dispels evil.</p>
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
                <td>Copper</td>
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
                <td>Copper</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Bell;



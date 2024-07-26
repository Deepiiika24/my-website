import React from 'react';
import '../css/poojapages.css'
import durga from '../images/pooja/navathaniyam.jpg'
function Navathaniyam() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>NAVATHANIYAM</h2>
              <p>Navathaniyam, also known as "Navadhanyam" or "Nine Grains," holds significant importance in Hindu rituals and poojas. These nine grains are believed to represent the nine forms of the Divine Mother (Navadurga) and are used to invoke blessings for prosperity, health, and spiritual well-being. </p>
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
                <td>Multicolor</td>
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
                <td>natural</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Navathaniyam;


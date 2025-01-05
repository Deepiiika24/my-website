import React from 'react';
import '../css/poojapages.css'
import '../css/Responsive/PoojaPageResponsive.css'
import durga from '../images/pooja/kalash-banner.png'
function Kalash() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>KALASH</h2>
              <p>Kalash Pooja, also known as Kalasha Puja, is a significant ritual in Hindu traditions where a Kalash (a pot filled with water, often with mango leaves and a coconut placed on top) is used as a symbolic representation of the deity.</p>
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

export default Kalash;


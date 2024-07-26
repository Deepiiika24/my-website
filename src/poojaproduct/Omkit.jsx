import React from 'react';
import '../css/poojapages.css'
import durga from '../images/pooja/kit-banner.jpg'
function Omkit() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>108 OM KIT</h2>
              <p>This package contains the herbals used for omam only
              Package is best use for Ganapati Homam, Grehaprevesham, Sudharshana Homam, lakshmi pooja, navagreha pooja, ayushiya homam, miruthinjya homam, dhanvantri homam and boomi pooja</p>
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
                <td>Yellow</td>
              </tr>
              <tr>
                <th scope='row'>Item Shape</th>
                <td>Bag</td>
              </tr>
              <tr>
                <th scope='row'>Capacity</th>
                <td>108 items</td>
              </tr>
              <tr>
                <th scope='row'>Primary Material</th>
                <td>Herbals</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Omkit;



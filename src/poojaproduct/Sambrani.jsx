import React from 'react';
import '../css/poojapages.css'
import durga from '../images/pooja/sambrani-banner.jpg'
function Sambrani() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>AGARPATHI HOLDER</h2>
              <p>00% Natural & Pure, Divine Fragrance, Premium Quality.
Since ancient times, this balsamic resin is used across India to sanctify the atmosphere, to dispels negativity, elevate the energy levels.
Purify the living spaces, to make the environment fragrant and odour-free, to relax and calm down our subconcious mind positively.
To repel bugs and insects, used as a natural fumigating agent that absorbs moisture and sanitizes the atmosphere from harmful microorganisms.</p>
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
                <td>Brown</td>
              </tr>
              <tr>
                <th scope='row'>Item Shape</th>
                <td>Packet</td>
              </tr>
              <tr>
                <th scope='row'>Capacity</th>
                <td>600g</td>
              </tr>
              <tr>
                <th scope='row'>Item Form</th>
                <td>Powder</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Sambrani;



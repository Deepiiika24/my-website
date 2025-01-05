import React from 'react';
import '../css/poojapages.css'
import '../css/Responsive/PoojaPageResponsive.css'
import durga from '../images/pooja/sandhanam-panner.jpg'
function Santhanam() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>SANDHANAM POWDER</h2>
              <p>It is comprised of eight unique unadulterated and sacrosanct materials.This is the aroma one experiences on a visit to the sanctuary, a scent one partners with heavenliness, immaculateness and inspiration.
Tilak cover the spot between the eyebrows, which is the seat of memory and thinking. Tilak is applied with the petition - "May I recollect the Lord.
Sandalwood powder can make your skin sparkle strikingly, and it doesn't create any facial episodes. It is an imperiled species since wrongfully collected for scent items.</p>
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
                <th scope='row'>Item Form</th>
                <td>powder</td>
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

export default Santhanam;


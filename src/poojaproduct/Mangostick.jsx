import React from 'react';
import '../css/poojapages.css'
import durga from '../images/pooja/mangostick1.jpg'
function Mangostick() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>MANGO STICK</h2>
              <p>pure and 100% natural sticks for any kind of Puja, Havan samithu/shamidhu, yagnas,rituals.
Mango wood widely used for havan,Also Used As Fuel, Widely Used For Havan Puja And Rituals
Clean and good for purify atmosphere
Very auspicious for yagya or any Puja
Wooden Sticks for Havan, Havan fire wood for Puja.</p>
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
                <th scope='row'>Item form</th>
                <td>Stick</td>
              </tr>
              <tr>
                <th scope='row'>Capacity</th>
                <td>100gm</td>
              </tr>
              <tr>
                <th scope='row'>Primary Material</th>
                <td>Wood</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Mangostick;


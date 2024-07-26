import React from 'react';
import '../css/poojapages.css'
import durga from '../images/pooja/panchinool.jpg'
function Panchinool() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>PANCHI NOOL</h2>
              <p>All the wicks are made of pure natural cotton, safer and healthier to use.
No black smoke, odor or chemicals. Longer burning time with the more stable flame and it's totally harmless to environment.
Cotton Wicks / Diya batti is daily used for pooja at temple, home, office places, shops etc. and also during all the festival occasions.
Our products are stored in Amazon warehouse, you will get the products on time.</p>
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
                <td>White</td>
              </tr>
              <tr>
                <th scope='row'>Item Shape</th>
                <td>Thread</td>
              </tr>
              <tr>
                <th scope='row'>Capacity</th>
                <td>100gm</td>
              </tr>
              <tr>
                <th scope='row'>Primary Material</th>
                <td>Cotton</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Panchinool;


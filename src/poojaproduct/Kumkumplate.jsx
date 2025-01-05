import React from 'react';
import '../css/poojapages.css'
import '../css/Responsive/PoojaPageResponsive.css'
import durga from '../images/pooja/kungumamplate.jpg'
function Kumkumplate() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>KUNKUM PLATE</h2>
              <p>Two separate compartments / Cups for holding Kungumam(Sindoor), chandan or Vibhuthi
Traditional Brass made Pooja articles for you
Beautiful Light weight decorative pooja product for Holding Kungumam, chandanam or Vibhuti
This is gold with antique finish so looks very beautiful and use for the purpose of worship and for home decorative</p>
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
                <td>Copper</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Kumkumplate;






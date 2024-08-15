import React from 'react';
import '../css/poojapages.css'
import '../css/Responsive/PoojaPageResponsive.css'
import durga from '../images/pooja/karpuram-banner.jpg'
function Karpuram() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>KARPURAM</h2>
              <p>As per our holy scriptures, pure camphor symbolises union with god as it burns completely, leaving behind no trace. Pure Camphor aarti dispels negativity, keeps one healthy and attracts prosperity
Camphor is burnt to perform Aarti (circular movement or display of the lamp in reverence before the deity or the idol) before the deity.
Use it with coconut oil/rose water for beauty, skin care, pain reliever, disinfectant balm. Making a green camphor powder paste with water and applying it works wonders for face / skin and hair.</p>
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
                <td>Round</td>
              </tr>
              <tr>
                <th scope='row'>Capacity</th>
                <td>100gm</td>
              </tr>
              <tr>
                <th scope='row'>Primary Material</th>
                <td>Camphor Tablet</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Karpuram;


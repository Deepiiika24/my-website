import React from 'react';
import '../css/poojapages.css'
import durga from '../images/pooja/kashthurimanjal.jpg'
function Kashthurimanjal() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>KASTHURI MANJAL</h2>
              <p>Kasturi Manjal, or wild turmeric, is revered in Hindu rituals and poojas for its auspicious and purifying properties Kasturi Manjal, also known as wild turmeric or Curcuma aromatica, is another variety of turmeric that holds a special place in traditional rituals, medicinal practices, and beauty treatments. </p>
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
                <th scope='row'>Item form</th>
                <td>powder</td>
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

export default Kashthurimanjal;


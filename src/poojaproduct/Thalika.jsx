import React from 'react';
import '../css/poojapages.css'
import durga from '../images/pooja/archana.png'
function Thalika() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>THALIKA</h2>
              <p>A pooja thali ('prayer plate') is a tray or large container on which puja materials are accumulated and decorated.On Hindu religious occasions, festivals, traditions and rituals, the puja thali maintains an auspicious role. A puja thali may be made of steel, gold, silver, brass, or any other metal; it may be rounded, oval, or any other shaped or with little engravings and other decorations.</p>
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
                <td>Brass</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Thalika;







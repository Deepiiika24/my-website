import React from 'react';
import '../css/poojapages.css'
import '../css/Responsive/PoojaPageResponsive.css'
import durga from '../images/pooja/arasankatta.jpg'
function Arasankattai() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>ARASAN KATTAI</h2>
              <p>Arasan Kattai, also known as "Peepal Stick" or "Peepal Tree Branch," is derived from the sacred Peepal tree (Ficus religiosa). This tree holds immense significance in Hinduism, Buddhism, and Jainism, often regarded as a symbol of fertility, longevity, and divinity.</p>
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

export default Arasankattai;


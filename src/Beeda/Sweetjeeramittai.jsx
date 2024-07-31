import React from 'react';
import '../Css/poojapages.css'
import durga from '../images/beeda/jeera.jpg'
function  Sweetjeeramittai() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>SWEET JEERAMITTAI</h2>
              <p>Jeera Mittai / Mouth Freshener.
90's Kids Special. Rich in taste.100% natural & best quality ingredients Rich source of natural nutrients & anti oxidants Helps in digestion & improves stomach health Home pack, easy to stor</p>
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
                <td>all</td>
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
                <td>Sweet</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default  Sweetjeeramittai;







import React from 'react';
import '../css/poojapages.css'
import durga from '../images/beeda/battikatha.jpg'
function  Kanpuribiscuit() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>KANPURI BISCUIT</h2>
              <p> Kanpuri Biscuit, exported by our company, is a traditional treat known for its unique flavor and crisp texture. Hailing from Kanpur, these biscuits are made using high-quality ingredients and time-honored baking methods. With a rich, buttery taste and satisfying crunch, our Kanpuri Biscuit is perfect for tea time or as a delicious snack, reflecting our commitment to quality and authenticity.</p>
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

export default  Kanpuribiscuit;








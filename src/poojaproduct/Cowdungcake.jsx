import React from 'react';
import '../css/poojapages.css'
import durga from '../images/pooja/cake.jpg'
function Cowdungcake() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>COW DUNG CAKE</h2>
              <p>Cow dung, also known as "Gobar"are traditional fuel sources in rural areas of many countries, especially in India.They are made from cow dung, which is mixed with hay or straw and shaped into round for drying.
Cow dung have been used as a fuel for cooking and heating for centuries, dating back to ancient times.The process of making cow dung involves collecting fresh cow dung, mixing it with hay or straw, and allowing them to dry in the sun.
</p>
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
                <td>Natural Dark Brown</td>
              </tr>
              <tr>
                <th scope='row'>Item Shape</th>
                <td>Round</td>
              </tr>
              <tr>
                <th scope='row'>Capacity</th>
                <td>Medium</td>
              </tr>
              <tr>
                <th scope='row'>Primary Material</th>
                <td>Indigenous Cow Dung</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Cowdungcake;







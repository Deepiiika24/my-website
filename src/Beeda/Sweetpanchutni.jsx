import React from 'react';
import '../Css/poojapages.css'
import durga from '../images/beeda/chutni.jpg'
function  Sweetpanchutni() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>SWEET PANCHUTNI</h2>
              <p> Sweet Panchutni from our exporting company is a traditional Indian confectionery celebrated for its unique blend of flavors. Crafted from a rich combination of jaggery, sesame seeds, and aromatic spices, it delivers a delightful sweetness. Perfect for snacking or festive occasions, our Sweet Panchutni embodies authentic taste and quality, ensuring a delightful experience in every bite.</p>
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
                <td>paste</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default  Sweetpanchutni;








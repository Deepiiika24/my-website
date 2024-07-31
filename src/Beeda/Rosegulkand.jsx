import React from 'react';
import '../Css/poojapages.css'
import durga from '../images/beeda/rore-beeda.jpg'
function  Rosegulkand() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>ROSE GULKAND</h2>
              <p>100% Pure & Natural. Finest quality Gulkand, made from Chaitri Roses (Spring Roses). Comes in a premium quality food-grade Jar
Gulkand is a powerful antioxidant and a very good rejuvenator.
Can be used to make Rose Milkshake, Rose Petal Ice Cream, Falooda, Paan, Desserts or even as a beautiful filling in Cookies!
Ingredients: Rose Petals, Mishri. That's it! No colouring, flavouring, preservatives or things you don't understand</p>
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
                <td>Brawn</td>
              </tr>
              <tr>
                <th scope='row'>Item Shape</th>
                <td>Paste</td>
              </tr>
              <tr>
                <th scope='row'>Capacity</th>
                <td>100gm</td>
              </tr>
              <tr>
                <th scope='row'>Primary Material</th>
                <td>	Gulkand Rose Petal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default  Rosegulkand;









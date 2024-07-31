import React from 'react';
import '../Css/poojapages.css'
import durga from '../images/beeda/tuttifrutti-banner.jpg'
function  Drytuttifrutti() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>DRY TUTTI FRUTTI</h2>
              <p>Dry Fruit Hub Tutti Frutti-Cherries-Fresh Fruits, Tutti Fruity, Tutti Fruity Mix, Tutti Fruity for Cake Decoration.
These are used in various bakery products, including cakes, milk-breads, cookies, dilkhush and buns.
Add these fresh cherry to desserts, cakes, cookies, icecreams, muffins or can be eaten directly.
These are excellent source in vitamin C and D which keeps skin elasticity and smooth.</p>
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
                <td>ALL</td>
              </tr>
              <tr>
                <th scope='row'>Item Shape</th>
                <td>Square</td>
              </tr>
              <tr>
                <th scope='row'>Capacity</th>
                <td>100gm</td>
              </tr>
              <tr>
                <th scope='row'>Primary Material</th>
                <td>DRIED</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default  Drytuttifrutti;








import React from 'react';
import '../Css/poojapages.css'
import durga from '../images/beeda/clove-anner.jpg'
function  Dryclove() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>DRY-CLOVE</h2>
              <p>Fruitri is the flavor of the Indian Kitchen, spices to enrich your food with flavors, colors and aroma, a mix of sun kissed spices crushed and grinded in an Hamam Dasta bringing out the essential oils and flavors, to make your recipes taste perfect.
              Fruitri creates options for consumers like you, who want to make informed decisions about what you experience and buy, knowing your actions will help empower Indian farmers and transform their lives, making the world a better place.</p>
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
                <th scope='row'>Variety	</th>
                <td>Clove</td>
              </tr>
              <tr>
                <th scope='row'>Item Shape</th>
                <td>Seeds</td>
              </tr>
              <tr>
                <th scope='row'>Capacity</th>
                <td>100gm</td>
              </tr>
              <tr>
                <th scope='row'>Primary Material</th>
                <td>Dry</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default  Dryclove;









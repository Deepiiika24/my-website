import React from 'react';
import '../css/poojapages.css'
import '../css/Responsive/PoojaPageResponsive.css'
import durga from '../images/pooja/kopparathengai.jpg'
function Kopparathengai() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>KOPPARA THENGAI</h2>
              <p>Pure Tropical Goodness: Indulge in the authentic taste of the tropics with our high-quality Kopparai Thengai. Made from freshly grated coconuts, it's a pure delight that brings the essence of tropical paradise to your kitchen.
              Versatile Ingredient: Elevate your culinary creations with the natural sweetness and nutty aroma of desiccated coconut. Perfect for both sweet and savory dishes, it adds a delightful texture and flavor to your recipes.</p>
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
                <td>White</td>
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

export default Kopparathengai;


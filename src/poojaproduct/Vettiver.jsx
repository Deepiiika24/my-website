import React from 'react';
import '../css/poojapages.css'
import '../css/Responsive/PoojaPageResponsive.css'
import durga from '../images/pooja/vettiver-banner.jpg'
function Vettiver() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img'/>
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>VETTI VER</h2>
              <p>BEAT THE BODY HEAT: Soak in the Benefits - Infuse our Khus Roots in Water and enjoy refreshing beverages that cool down your body naturally, relieve stress, and promote relaxation.
              PREMIUM QUALITY: Our Vetiver roots are carefully selected and sourced to ensure authenticity and quality, free from dust, bugs, and mud, for a fresh and natural aroma that will enhance your daily routine.</p>
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
                <th scope='row'>Variety</th>
                <td>Vetiver roots</td>
              </tr>
              <tr>
                <th scope='row'>Item Form</th>
                <td>	Dried Roots</td>
              </tr>
              <tr>
                <th scope='row'>Diet Type	
                </th>
                <td>Vegetarian</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Vettiver;



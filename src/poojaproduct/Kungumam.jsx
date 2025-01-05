import React from 'react';
import '../css/poojapages.css'
import '../css/Responsive/PoojaPageResponsive.css'
import durga from '../images/pooja/kungum.jpg'
function Kungumam() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>KUNGUMAM</h2>
              <p>100% Natural, Made from Turmeric and Lime. We follow our ancient method which is natural and safe to use. No skin irritation & No artificial chemicals or scents added
Turmeric has antiseptic properties that not only keep infections at bay, it also helps cool the body and keep the "Ajna Chakra" cool when applied as a bindi
No Artificial Colour, Chemical Free</p>
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
                <td>Red</td>
              </tr>
              <tr>
                <th scope='row'>Item Form</th>
                <td>Powder</td>
              </tr>
              <tr>
                <th scope='row'>Product Benefits	</th>
                <td>Smoothening,Fresh</td>
              </tr>
              <tr>
                <th scope='row'>Skin Type	</th>
                <td>Normal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Kungumam;






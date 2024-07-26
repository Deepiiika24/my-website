import React from 'react';
import '../css/poojapages.css'
import durga from '../images/pooja/viputhi-banner.jpg'
function Viputhi() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-viputhi'>
              <h2>VIPUTHI</h2>
              <p>USED AS TILAK FOR ITS SPIRITUAL POWER - Vibhuti mangal is a favorite item of Lord Shiva. He always smears his body with the holy ash as it is the purest thing in this universe. Bhasma or Udi gives spiritual power and glory to one who applies it
              POSITIVE ENERGY - Vibhuti gets charged with positive energy and should be taken with the right hand and applied on the forehead as three horizontal lines</p>
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
                <td>Beige</td>
              </tr>
              <tr>
                <th scope='row'>Item Form</th>
                <td>Powder</td>
              </tr>
              <tr>
                <th scope='row'>Capacity</th>
                <td>100gm</td>
              </tr>
              <tr>
                <th scope='row'>Primary Material</th>
                <td>Natural herbal fragrance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Viputhi;



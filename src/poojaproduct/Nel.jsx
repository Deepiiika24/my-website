import React from 'react';
import '../css/poojapages.css'
import durga from '../images/pooja/nel.jpg'
function Nel() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>NEL</h2>
              <p>Natural Paddy Toran are hung on the Main Entrance of the house, Pooja Room or Temples Entrances to attract Positivity, Prosperity and Peace at home. It beautifies the door with its traditional design
This Paddy Craft has been Fantastically Crafted with Classical designing by our skilled Craftsmen
It is believed to wind off the negative energy and bring peace, positivity and prosperity at home</p>
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
                <td>natural</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Nel;

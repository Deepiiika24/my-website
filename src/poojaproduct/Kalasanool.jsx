import React from 'react';
import '../css/poojapages.css'
import durga from '../images/pooja/kalasanool.jpg'
function Kalasanool() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>KALASA NOOL</h2>
              <p>Kalasa Nool, also known as Kalasa, refers to the sacred pot or vessel used in Hindu rituals and ceremonies. It is typically filled with water and adorned with various items like mango leaves, a coconut, and other auspicious materials. The Kalasa is considered a symbol of abundance, fertility, and the divine presence.
In many Hindu traditions, the Kalasa is used in rituals like Poojas (worship ceremonies), weddings, and other auspicious occasions. The water from the Kalasa is believed to purify and sanctify the surroundings, and it is often sprinkled around the area or on participants to bless them.</p>
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
                <td>thread</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Kalasanool;


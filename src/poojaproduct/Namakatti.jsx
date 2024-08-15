import React from 'react';
import '../css/poojapages.css'
import '../css/Responsive/PoojaPageResponsive.css'
import durga from '../images/pooja/nama katti.jpg'
function Namakatti() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>NAMAKATTI</h2>
              <p>Namakatti, also known as "Vibhuti" or sacred ash, is an important element in Hindu rituals and poojas. It holds significant religious and spiritual meaning Applying Namakatti helps in focusing the mind during meditation and prayers. It strengthens the connection between the devotee and the divine, fostering a sense of inner peace and spiritual well-being.</p>
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
                <td>Wite</td>
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

export default  Namakatti;;



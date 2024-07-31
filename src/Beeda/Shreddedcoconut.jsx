import React from 'react';
import '../Css/poojapages.css'
import durga from '../images/beeda/cocount.jpg'
function  Shreddedcoconut() {
  return (
    <div>
      <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content-kalash'>
              <h2>SHREDDED COCONUT</h2>
              <p>Our exporting company offers premium Shredded Coconut, made from the finest mature coconuts. This versatile ingredient adds a delightful texture and subtle sweetness to various dishes, from baked goods to savory meals. Valued for its natural flavor and nutritional benefits, including high fiber content and healthy fats, our Shredded Coconut is a top choice for both home cooks and professional chefs.</p>
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
                <td>Brass</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default  Shreddedcoconut;









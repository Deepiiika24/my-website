import React from 'react';
import garlic from '../images/spices/garlic-banner2.jpg'
import '../css//vegetablepages.css'
import onion from '../images/vegetables/onion-banner.jpg'
function Onion() {
  return (
    <div>
    <section className='vegetable-type-banner'>
      <div className='container'>
        <div className='vegetable-contant-banner'>
        <img src={onion}></img>
        <div className='veg-contant'>
        <h1>Onion Exporters</h1><br></br>
        <p>An onion (Allium cepa L., from Latin cepa meaning "onion"), also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium. The shallot is a botanical variety of the onion which was classified as a separate species until 2011. Its close relatives include garlic, scallion, leek, and chive.<br></br>
This genus also contains several other species variously referred to as onions and cultivated for food, such as the Japanese bunching onion Allium fistulosum, the tree onion Allium proliferum, and the Canada onion Allium canadense.  </p>
        </div>
        </div>
      </div>
    </section>
    <section className='veg-type-table'>
        <div className='veg-table-heading'>
          <h1>INGREDIENTS</h1>
          <table class="table table-hover table-responsive table-bordered">
            <thead>
             <th>   </th>
             <th scope='row'>Quantity<br></br>Per<span>Serving</span></th>
             <th scope='row'>Quantity<br></br>Per<span>100g</span></th>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>Energy</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Protein</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Fat</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Carbohydrate</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Sodium</th>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
  </div>
);
}


export default Onion;

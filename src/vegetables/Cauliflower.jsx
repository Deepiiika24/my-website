import React from 'react';
import '../css//vegetablepages.css'
import cauliflower from '../images/vegetables/cauliflower-banner.jpg'
function Cauliflower() {
  return (
    <div className='veg-main-container'>
      <section className='vegetable-type-banner'>
        <div className='veg-container'>
          <div className='vegetable-contant-banner'>
            <img src={cauliflower}></img>
          </div>
          <div className='veg-contant'>
            <h1>CAULIFLOWER EXPORTERS</h1><br></br>
            <p>Cauliflower is one of several vegetables cultivated from the species Brassica oleracea in the genus Brassica, which is in the Brassicaceae (or mustard) family.
              An annual plant that reproduces by seed, the cauliflower head is composed of a (generally) white inflorescence meristem. Cauliflower heads resemble those in broccoli, which differs in having flower buds as the edible portion.<br></br><br></br>
              Typically, only the head is eaten; the edible white flesh is sometimes called "curd". </p>
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


export default Cauliflower;

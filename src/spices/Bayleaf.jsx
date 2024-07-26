import React from 'react';
import payleaf from '../images/spices/payleaf-banner.jpg'
import '../css/spices/Spicespage.css'
function Bayleaf() {
  return (
    <div>
      <section className='Spices-type-banner'>
        <div className='container'>
          <img src={payleaf} className='banner'></img>
        </div>
      </section>
      <section className='spices-type-content'>
        <div className='spices-type-text'>
          <h3>Bay-leaf Exporters</h3>
          <p>The bay leaf is an aromatic leaf commonly used as a herb in cooking. It can be used whole, either dried or fresh, in which case it is removed from the dish before consumption, or less commonly used in ground form. The flavor that a bay leaf imparts to a dish has not been universally agreed upon, but many agree it is a subtle addition.
Bay leaves come from various plants and are used for their distinctive flavor and fragrance. The most common source is the bay laurel (Laurus nobilis). Other types include California bay laurel, Indian bay leaf, West Indian bay laurel, and Mexican bay laurel. Bay leaves contain essential oils, such as eucalyptol, terpenes, and methyleugenol, which contribute to their taste and aroma.</p>
        </div>
      </section>
      <section className='Spices-type-table'>
        <div className='Spices-table-heading'>
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

export default Bayleaf;

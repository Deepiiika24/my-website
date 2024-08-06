import React from 'react';
import nut from '../images/spices/nutmeg-banner.jpg'
import '../css/spices/Spicespage.css'
function Nutmeg() {
  return (
    <div>
      <section className='Spices-type-banner'>
        <div className='container'>
          <img src={nut} className='banner'></img>
        </div>
      </section>
      <section className='spices-type-content'>
        <div className='spices-type-text'>
          <h1>NUTMEG EXPORTERS</h1>
          <p>Nutmeg is the seed, or the ground spice derived from that seed, of several tree species of the genus Myristica; fragrant nutmeg or true nutmeg (M. fragrans) is a dark-leaved evergreen tree cultivated for two spices derived from its fruit: nutmeg, from its seed, and mace, from the seed covering. It is also a commercial source of nutmeg essential oil and nutmeg butter. Indonesia is the main producer of nutmeg and mace, and the true nutmeg tree is native to its islands.
If consumed in amounts exceeding its typical use as a spice, nutmeg powder may produce allergic reactions, cause contact dermatitis, or have psychoactive effects. Although used in traditional medicine for treating various disorders, nutmeg has no scientifically confirmed medicinal value.</p>
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

export default Nutmeg;


import React from 'react';
import anise from '../images/spices/staranise-banner.jpg'
import '../css/spices/Spicespage.css'
import '../css/Responsive/SpicespageResponsive.css'
function Spistaranice() {
  return (
    <div>
      <section className='Spices-type-banner'>
        <div className='spices-page-container'>
          <img src={anise} className='spices-page-banner'></img>
        </div>
      </section>
      <section className='spices-type-content'>
        <div className='spices-type-text star'>
          <h1>STAR-ANISE EXPORTERS</h1>
          <p>Illicium verum (star anise or badian, Chinese star anise, star anise seed, star aniseed and star of anise) is a medium-sized evergreen tree native to northeast Vietnam and South China. It is a spice that closely resembles anise in flavor and is obtained from the star-shaped pericarps of the fruit of I. verum which are harvested just before ripening. Star anise oil is a highly fragrant oil used in cooking, perfumery, soaps, toothpastes, mouthwashes, and skin creams. Until 2012, when they switched to using genetically modified E. coli, Roche Pharmaceuticals used up to 90% of the world's annual star anise crop to produce oseltamivir (Tamiflu) via shikimic acid.</p>
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

export default Spistaranice;

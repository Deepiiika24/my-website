import React from 'react';
import garlic from '../images/spices/mace-banner.jpg'
import '../css/spices/Spicespage.css'
import '../css/Responsive/SpicespageResponsive.css'
function Mace() {
  return (
    <div>
      <section className='Spices-type-banner'>
        <div className='container'>
          <img src={garlic} className='spices-page-banner'></img>
        </div>
      </section>
      <section className='spices-type-content'>
        <div className='spices-type-text'>
          <h1>MACE EXPORTERS</h1>
          <p>Mace is actually the lacy coating, called the aril, found on a nutmeg seed. This lacy aril is red in colour and can be removed by hand from the outer shell of the nutmeg and then dried. The Mace exporter in India exports tonnes of the product abroad from India. This Mace export from India has been increasing over the years. This may be because of the several health and medicinal benefits of Mace. The Indian Mace exporter, therefore, is earning good revenues from this export. The Mace export includes the export of various varieties of Mace.</p>
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

export default Mace;

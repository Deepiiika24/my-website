import React from 'react'
import '../css/LeavesPage.css'
import toren1 from '../images/Leaf/Mangoleaf-toran.png'
import toren2 from '../images/Leaf/Mangoleaf-toran.jpg'
import toren3 from '../images/Leaf/Marigold-toran.jpg'

function Toren() {
  return (
    <div className='toren-main-container'>
      <h2>EXPORTING FESTIVE TORAN WORLDWIDE</h2>
      <div className="toren-container">
        <div className='toren-banner'>
          <img src={toren1} alt="toren1" />
        </div>
        <div className='toren-content'>
          <h3 className='toren-heading'>Mango Leaf with Jasmine Toran</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus totam suscipit dolor, minima expedita deserunt vel sequi eveniet aliquid voluptatum aliquam, quam neque voluptas! Incidunt quia itaque odit rem dolores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil porro voluptatum facere praesentium earum? Animi, optio, odio placeat doloremque molestias quaerat earum culpa delectus esse architecto adipisci ratione ea debitis.
          </p>
        </div>
      </div>
      <div className="toren-container">
        <div className="toren-content">
          <h3 className='toren-heading'>Mango Leaf Toran</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates soluta iure alias eligendi. Reprehenderit et, autem quia dolor vero fugiat ab voluptatem obcaecati cum, earum dolores similique tenetur nesciunt! Assumenda.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nemo dolorem molestias aliquam magnam? Maiores ad earum dolorem quia autem accusamus quod minus accusantium quidem magni animi, consectetur incidunt inventore.
          </p>
        </div>
        <div className="toren-banner">
          <img src={toren2} alt="" />
        </div>
      </div>
      <div className="toren-container">
        <div className='toren-banner'>
          <img src={toren3} alt="toren1" />
        </div>
        <div className='toren-content'>
          <h3 className='toren-heading'>Marigold Toran</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus totam suscipit dolor, minima expedita deserunt vel sequi eveniet aliquid voluptatum aliquam, quam neque voluptas! Incidunt quia itaque odit rem dolores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil porro voluptatum facere praesentium earum? Animi, optio, odio placeat doloremque molestias quaerat earum culpa delectus esse architecto adipisci ratione ea debitis.
          </p>
        </div>
      </div>
      <section className='toren-type-table'>
        <div className='toren-table-heading'>
          <h2 className='table-heading'>SPECIFICATIONS</h2>
          <table class="table table-hover table-responsive table-bordered">
            <thead>
              <tr>
                <th scope="col">Type of Toran</th>
                <th scope="col">Material</th>
                <th scope="col">Design</th>
                <th scope="col">Uses</th>
                <th scope="col">Cultural Significance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Jasmine and Mango Leaf Toran</th>
                <td>Fresh jasmine flowers and mango leaves</td>
                <td>Combination of jasmine flowers and mango leaves in a string</td>
                <td>Ceremonial decorations, religious events</td>
                <td>Combines the purity of jasmine with the prosperity of mango leaves</td>
              </tr>
              <tr>
                <th scope="row">Mango Leaf Toran</th>
                <td>Fresh mango leaves</td>
                <td>Simple string of fresh mango leaves</td>
                <td>Festivals like Diwali, New Year</td>
                <td>Represents fertility and prosperity</td>
              </tr>
              <tr>
                <th scope="row">Marigold Toran</th>
                <td>Fresh marigold flowers</td>
                <td>Strung marigold flowers creating vibrant garlands</td>
                <td>Home decoration, weddings, festivals</td>
                <td>Symbolizes purity and auspiciousness</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div >
  )
}

export default Toren

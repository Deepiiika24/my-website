import React from 'react'
import '../css/FlowerPage.css'
import banner from '../images/Peach-carnation-banner.jpg'

function Peachcarnation() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Exporting Delicate Charm The Peach Carnation Flower</h2>
          <p>Peach Carnations, members of the Dianthus genus, are beloved for their soft, pastel hues and elegant appearance. These flowers captivate with their subtle beauty and gentle fragrance, making them a favorite for various decorative and symbolic uses.
          Maintaining the freshness of Peach Carnations through refrigeration ensures they retain their delicate color and fragrance during transportation. This preservation method prolongs their vase life, making them ideal for international export and display.
          </p>
        </div>
      </div>
      <section className='Flower-type-table'>
        <div className='Flower-table-heading'>
          <h3>SPECIFICATIONS</h3>
          <table class="table table-hover table-responsive table-bordered">
            <thead>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>Name</th>
                <td>Peach Carnation</td>
              </tr>
              <tr>
                <th scope='row'>Origin</th>
                <td>Cultivated varieties derived from Dianthus caryophyllus</td>
              </tr>
              <tr>
                <th scope='row'>Family</th>
                <td>Caryophyllaceae</td>
              </tr>
              <tr>
                <th scope='row'>Binomial Name</th>
                <td>Dianthus caryophyllus</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Peach Carnations embody grace and sincerity, offering a timeless charm that enhances both personal and ceremonial occasions with their delicate color and subtle fragrance.</p>
      </section>
    </div>
  )
}

export default Peachcarnation

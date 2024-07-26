import React from 'react'
import '../css/FlowerPage.css'
import banner from '../images/Orange-carnation-banner.jpg'

function Orangecarnation() {
  return (
    <div>
      <div id='container'>
        <div id='banner-img'>
          <img src={banner} alt="" />
        </div>
        <div id='banner-content'>
          <h2>Exporting the Beauty of Orange Carnation Flowers</h2>
          <p>The orange carnation, scientifically known as Dianthus caryophyllus, stands as a vivid testament to nature's artistry and human admiration. With its radiant hue and delicate, ruffled petals, this flower captivates the senses and holds a rich tapestry of symbolism and practical uses that span centuries of human history.
            The orange carnation presents itself with a striking and vibrant color palette that ranges from deep, fiery oranges to softer, more subtle peach tones. Each petal is adorned with fringed or ruffled edges, adding texture and depth to its appearance. The bloom's structure exudes elegance and sophistication, making it a popular choice for both formal and informal floral arrangements alike.
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
                <td>Carnation</td>
              </tr>
              <tr>
                <th scope='row'>Origin</th>
                <td>Native to Eurasia</td>
              </tr>
              <tr>
                <th scope='row'>Family</th>
                <td>Dianthus caryophyllus</td>
              </tr>
              <tr>
                <th scope='row'>Binomial Name</th>
                <td>Caryophyllaceae</td>
              </tr>
            </tbody>
          </table>
          <p>Orange Carnations are versatile flowers that bring a burst of color and meaning to various occasions, from joyful celebrations to solemn ceremonies, embodying both aesthetic beauty and cultural significance.</p>
        </div>
      </section>
    </div>
  )
}

export default Orangecarnation

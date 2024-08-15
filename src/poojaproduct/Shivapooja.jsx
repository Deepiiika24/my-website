import React from 'react';
import '../css/poojapages.css'
import '../css/Responsive/PoojaPageResponsive.css'
import siva from '../images/pooja/kit3.jpg'
function Shivapooja() {
  return (
    <div>
    <div className='pooja-page-container'>
      <div className='pooja-subpage-container'>
        <div className='pooja-sub-banner'>
          <img src={siva} className='pooja-subpage-img' />
        </div>
        <div id='pooja-banner-content'>
          <h2>SHIVA POOJA </h2>
          <p>Shiva Puja in Hinduism is the way by which one worships Shiva through traditional and ancient rites with the use of mantra, tantra, yantra, kriyas, mudras, and abhishekam.Shiva is known as The Destroyer within the Trimurti, the Hindu trinity which also includes Brahma and Vishnu. In the Shaivite tradition, Shiva is the Supreme Lord who creates, protects and transforms the universe. In the goddess-oriented Shakta tradition, the Supreme Goddess (Devi) is regarded as the energy and creative power (Shakti) and the equal complementary partner of Shiva. Shiva is one of the five equivalent deities in Panchayatana puja of the Smarta tradition of Hinduism.
          </p>
        </div>
      </div>
      </div>
    <section className='pooja-items'>
        <h1 className='pooja-kit-heading'>POOJA KIT</h1>
      <div className='pooja-item-list'>
        <div className='pooja-samagari'>
          <h1>  Pooja Samagri</h1>
            <ul>
              <li>1.Haldi Powder</li>
              <li>2.Meenakshi Kumkum</li>
              <li>3.Sandal Powder</li>
              <li>4.Betel Nuts </li>
              <li>5.Agarbathi</li>
              <li>6.Match Box </li>
              <li>7.Camphor</li>
              <li>8.Pure Cow Ghee</li>
              <li>9.Pancha Deepam oil </li>
              <li>10.Akshathan </li>
              <li>11.Rangoli powder</li>
              <li>12.Honey </li>
            </ul>
        </div>
        <div className='pooja-powder'>
           <h1>Suganda Dhravyam Powder</h1>
           <ul>
            <li>13.Elachi</li>
            <li>14.Jajikaya</li>
            <li>15.Japathri</li>
            <li>16.Pacha Karpooram </li>
            <li>17.Lavangam</li>
            <li>18.Dalchina Chekka </li>
            <li>19.Kasturi </li>
            <li>20.Gorojanam </li>
            <li>21.Anasa Poovu</li>
            <li>22.Saffron (kunkuma povvu)</li>
           </ul>
        </div>
        <div className='pooja-poornahuthi'>
          <h1>Poornahuthi</h1>
          <ul>
            <li>23.Navarathanam</li>
            <li>24.Pancha loham </li>
            <li>25.Dry Coconut</li>
            <li>26.Vattiveru </li>
            <li>27.Navadhanyam</li>
            <li>28.HomaDhravyam</li>
            <li>29.Black Tills </li>
            <li>30.Dharba Pavithram Kurcham</li>
            <li>31.Hand Napkinse Tissue Pape </li>
          </ul>
        </div>
      </div>
    </section>
    <section className='pooja-items-row2'>
    <div className='pooja-item-list-2'>
      <div className='pooja-Dry-Fruits'>
        <h1>Dry Fruits</h1>
        <ul>
          <li>33.Dry Karjuram </li>
        </ul>
      </div>
      <div className='pooja-Vasthram'>
        <h1>Vasthram</h1>
       <ul>
        <li>40.Pattu Vasthram</li>
        <li>41.Thread Reel</li>
        <li>42.Cotton Wicks</li>
        <li>43.Kankanam </li>
        <li>44.Pooja Asanam</li>
       </ul>
      </div>
      </div>
    </section>
    </div>
  );
}

export default Shivapooja;


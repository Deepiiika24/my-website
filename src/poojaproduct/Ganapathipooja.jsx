import React from 'react';
import '../css/poojapages.css'
import '../css/Responsive/PoojaPageResponsive.css'
import ganapathi from '../images/pooja/kit7.jpg'

function Ganapathipooja() {
  return (
    <div>
    <div className='pooja-page-container'>
      <div className='pooja-subpage-container'>
        <div className='pooja-sub-banner'>
          <img src={ganapathi} className='pooja-subpage-img' />
        </div>
        <div id='pooja-banner-content'>
          <h2>GANAPATHI POOJA </h2>
          <p>Ganesh Chaturthi is also called Vinayaka Chaturthi, it is a pure Hindu festival, during this festival people pray Lord Ganesha with great devotion. In this occasion people keep their clay idols privately in their homes, or publicly on big pandals (or temporary stages or altars).
It starts with Vedic hymns, prayers, vrata and hindu texts such as Ganesha Upanishad. Offerings of prasada after the prayer and distributing amongst the community people, prasad include sweets, modaka (it is believed to be the favourite sweet of ganesha). This festival starts on the fourth day of Hindu luni-solar calendar month Bhadrapada, which normally falls in the month of August or September.   </p>
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
              <li>8.Cow Ghee</li>
              <li>9.Pancha Deepam oil </li>
              <li>10.Akshathan </li>
              <li>11.Rangoli powder</li>
              <li>12.Honey </li>
              <li>13.Jaggery </li>
              <li>14.Sugar Nuts </li>
            </ul>
        </div>
        <div className='pooja-powder'>
           <h1>Suganda Dhravyam Powder</h1>
           <ul>
            <li>14.Elachi</li>
            <li>15.Jajikaya</li>
            <li>16.Japathri</li>
            <li>17.Pacha Karpooram </li>
            <li>18.Lavangam</li>
            <li>19.Dalchina Chekka </li>
            <li>20.Kasturi </li>
            <li>21.Gorojanam </li>
            <li>22.Anasa Poovu</li>
            <li>23.Saffron (kunkuma povvu)</li>
           </ul>
        </div>
        <div className='pooja-poornahuthi'>
          <h1>Poornahuthi</h1>
          <ul>
            <li>24.Navarathanam</li>
            <li>25.Pancha loham </li>
            <li>26.Dry Coconut</li>
            <li>27.Vattiveru </li>
            <li>28.Navadhanyam</li>
            <li>29.HomaDhravyam</li>
            <li>30.Lotus Seeds </li>
            <li>31.Dharba</li>
            <li>32.Pavitram </li>
            <li>33.Kurcham </li>
          </ul>
        </div>
      </div>
    </section>
    <section className='pooja-items-row2'>
    <div className='pooja-item-list-2'>
      <div className='pooja-Dry-Fruits'>
        <h1>Dry Fruits</h1>
        <ul>
          <li>34.Cashew Nuts Kaju</li>
          <li>35.Dry Grapes(Kismiss) </li>
          <li>36.Dry Karjuram </li>
        </ul>
      </div>
      <div className='pooja-Vasthram'>
        <h1>Vasthram</h1>
       <ul>
        <li>37.Pattu Vasthram</li>
        <li>38.Thread Reel</li>
        <li>39.Cotton Wicks</li>
        <li>40.Kankanam </li>
        <li>41.Pooja Asanam</li> 
       </ul>
      </div>
      <div className='pooja-Vasthram'>
        <h1> Pavitra Jalam</h1>
       <ul>
        <li>42.Ganga Jalam</li>
       </ul>
      </div>
      </div>
    </section>
    </div>
  );
}

export default Ganapathipooja;

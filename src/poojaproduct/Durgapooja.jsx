import React from 'react';
import '../css/poojapages.css'
import durga from '../images/pooja/kit9.jpg'

function Durgapooja() {
    return (
        <div>
        <div className='pooja-page-container'>
          <div className='pooja-subpage-container'>
            <div className='pooja-sub-banner'>
              <img src={durga} className='pooja-subpage-img' />
            </div>
            <div id='pooja-banner-content'>
              <h2>DURGA POOJA </h2>
              <p>Durga Puja , also known as Durgotsava or Sharodotsav, is an annual festival originating in the Indian subcontinent which reveres and pays homage to the Hindu goddess Durga, and is also celebrated because of Durga's victory over Mahishasura. It is particularly celebrated in the Eastern Indian states of West Bengal, Bihar, Jharkhand, eastern Uttar Pradesh, Assam, Odisha and by Hindus in Bangladesh.The festival is observed in the Indian calendar in the month of Ashvin, which corresponds to September–October in the Gregorian calendar.Durga Puja is a ten-day festival, of which the last five are of the most significance. </p>
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
    

export default Durgapooja;

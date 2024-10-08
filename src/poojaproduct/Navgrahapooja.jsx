import React from 'react';
import '../css/poojapages.css'
import '../css/Responsive/PoojaPageResponsive.css'
import navgraha from '../images/pooja/kit6.jpg'
function Navgrahapooja() {
  return (
    <div>
    <div className='pooja-page-container'>
      <div className='pooja-subpage-container'>
        <div className='pooja-sub-banner'>
          <img src={navgraha} className='pooja-subpage-img' />
        </div>
        <div id='pooja-banner-content'>
          <h2> NAVGRAHA POOJA</h2>
          <p>The Navgrah Shanti puja means worshipping all nine planets. It is an auspicious ritual dating back to ancient Vedic times. This is a very eminent puja where all the nine planets namely Surya, Chandra, Kuja or Mangal, Budh, Guru, Shukra, Shani, Rahu and Ketu, are worshipped collectively. One can also perform puja for a specific planet. Each planet teaches us some lessons and the person performing the puja of a specific planet is blessed with a few boons. The Nav Grah Shanti Pooja helps alleviate the negative effects of the planets.
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
              <li>8.Cow Ghee</li>
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
            <li>29.Lotus Seeds </li>
            <li>30.Dharba</li>
            <li>31.Pavitram </li>
            <li>32.Kurcham </li>
          </ul>
        </div>
      </div>
    </section>
    <section className='pooja-items-row2'>
    <div className='pooja-item-list-2'>
      <div className='pooja-Dry-Fruits'>
        <h1>Dry Fruits</h1>
        <ul>
          <li>33.Cashew Nuts Kaju</li>
          <li>34.Dry Grapes(Kismiss) </li>
          <li>35.Dry Karjuram </li>
          <li>36.Jaggery</li>
          <li>37.Sugar Nuts</li>
          <li>38.Chuduva </li>
          <li>39.Vari Pelalu (Nel Pori)</li>
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

export default Navgrahapooja;

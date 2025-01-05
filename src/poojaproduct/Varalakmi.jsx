import React from 'react';
import '../css/poojapages.css'
import '../css/Responsive/PoojaPageResponsive.css'
import varalakshmi from '../images/pooja/kit2.jpg'
function Varalakmi() {
  return (
    <div>
    <div className='pooja-page-container'>
      <div className='pooja-subpage-container'>
        <div className='pooja-sub-banner'>
          <img src={varalakshmi} className='pooja-subpage-img' />
        </div>
        <div id='pooja-banner-content'>
          <h2> VARALAKSHMI POOJA</h2>
          <p>Varalakshmi Vratam also called Varalakshmi Puja, is a Hindu observance to propitiate the goddess of wealth, Lakshmi.[1] Varalakshmi is the manifestation of Lakshmi who grants boons (varam). It is a puja primarily performed by married Hindu women in the states of South India. This occasion is observed on the Friday before the day of the full moon - Purnima - in the Hindu month of Shravana, which corresponds to the Gregorian months of July-August.
The Varalakshmi Vratam is primarily performed by married women (sumangali), for their own well-being, and in order to ask the goddess to bless their husbands with health and longevity.
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
              <li>1.Pasupu</li>
              <li>2.Meenakshi Kumkum</li>
              <li>3.Sandal Powder</li>
              <li>4.Pasupu Kommulu </li>
              <li>5.Betel Nuts</li>
              <li>6.Agarbathi </li>
              <li>7.Camphor</li>
              <li>8.Pancha Deepam oil  </li>
              <li>9.Akshathan </li>
              <li>10.Dry coconut Piece</li>
              <li>11.Dry Karjuram</li>
            </ul>
        </div>
        <div className='pooja-powder'>
           <h1>Vasthram</h1>
           <ul>
            <li>12.Blouse Piece</li>
            <li>13.Thread Reel</li>
            <li>14.Cotton Wicks</li>
            <li>15.Kankanam </li>
            <li>16.Pooja Asanam</li>
           </ul>
        </div>
              </div>
    </section>
    </div>
  );
}

export default Varalakmi;


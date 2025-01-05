import React, { useState } from 'react'
import '../css/Flower.css'
import '../css/Responsive/FlowerResponsive.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'
import flower1 from '../images/Flower-banner.jpg'
import icon from '../images/icon.png'
import Carnation1 from '../images/White-carnation.jpg'
import Carnation2 from '../images/Soft-pink-carnation-heads.jpg'
import Carnation3 from '../images/Red-carnation.jpg'
import Carnation4 from '../images/Peach-carnation.jpg'
import Carnation5 from '../images/Orange-carnation.jpg'
import Carnation6 from '../images/Yellow-carnation.jpg'
import Carnation7 from '../images/Soft-purple-carnation.jpg'
import Carnation8 from '../images/Carnation-bacarat-purple.jpg'
import Carnation9 from '../images/Purple-carnation.jpg'
import Carnation10 from '../images/Pink-carnation.jpg'
import Tuberose1 from '../images/Tuberose.jpg'
import Yellow from '../images/Yellow-Marigold.jpg'
import Orange from '../images/Orange-Marigold.webp'
import PoojaFlower from '../images/Pooja-Flower.webp'
import RedRose from '../images/Red-button-rose.jpg'
import YellowRose from '../images/Yellow-rose.jpg'
import OrangeRose from '../images/Orange-rose.jpg'
import Garland1 from '../images/Carnation-Garland-Hover.png'
import Garland2 from '../images/Rose-garland.png'
import Garland3 from '../images/Wedding-Garland.png'
import Garland4 from '../images/Tuberose-Garland.png'
import Petal1 from '../images/Red-Rose-petels.jpg'
import Petal2 from '../images/Yellow-petals.avif'
import Petal3 from '../images/Orange-Petals.jpg'
import Petal4 from '../images/Mixed-Petals.avif'
import String1 from '../images/Jasmine-string.png'
import String2 from '../images/Mixed-carnation-string.jpg'
import String3 from '../images/Baby-breath.png'
import String4 from '../images/Marigold-string.webp'


function Flower() {
  return (
    <div className='flower-container'>
      <section className="flowers">
        <div className="flower-banner">
          <img src={flower1} />
        </div>
      </section>
      <section className="flower-content">
        <img src={icon} />
        <h1>TRUSTED PARTNER IN FLORICULTURE EXPORTS</h1>
        <h1>_______</h1>
        <p>Floriculture in India primarily means the cultivation of flowers or flower farming. Known for its rich diversity, India's floriculture sector thrives with a wide variety of flowers, making it a prominent player in the global flower market. At Koogul Industries, we take pride in being one of the leading exporters of exquisite flowers from India, ensuring that the beauty of Indian floriculture reaches every corner of the world.</p>
      </section>
      <section className='flower-product'>
        <h3>FLOWER HEADS</h3>
        <div className="flower-img">
          <Swiper slidesPerView={4} spaceBetween={10} freeMode={true} loop={true} pagination={{ clickable: true, }} autoplay={{
            delay: 2500, disableOnInteraction: false,
          }} modules={[FreeMode, Pagination, Autoplay]} className="flower-swiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            374: {
              slidesPerView: 1,
            },
            424: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            }
          }}>
            <SwiperSlide className='flower-swiper-slide'>
              <div className='card'>
                <img className='flower-slide-img' src={Carnation1} alt="" />
                <h3 className='link1-name' id='link-name'><Link to='/White-carnation'>White Carnation</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className='flower-swiper-slide'>
              <div className='card'>
                <img className='flower-slide-img' src={Carnation2} alt="" />
                <h3 className='link2-name' id="link-name"><Link to='/Soft-pink-carnation'>Soft Pink Carnation</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className='flower-swiper-slide'>
              <div className='card'>
                <img className='flower-slide-img' src={Carnation3} alt="" />
                <h3 className='link3-name' id="link-name"><Link to='/Red-carnation'>Red Carnation</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className='flower-swiper-slide'>
              <div className='card'>
                <img className='flower-slide-img' src={Carnation4} alt="" />
                <h3 className='link4-name' id="link-name"><Link to='/Peach-carnation'>Peach Carnation</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className='flower-swiper-slide'>
              <div className='card'>
                <img className='flower-slide-img' src={Carnation5} alt="" />
                <h3 className='link5-name' id="link-name"><Link to='/Orange-carnation'>Orange Carnation</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className='flower-swiper-slide'>
              <div className='card'>
                <img className='flower-slide-img' src={Carnation6} alt="" />
                <h3 className='link6-name' id="link-name"><Link to='/Yellow-carnation'>Yellow Carnation</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className='flower-swiper-slide'>
              <div className='card'>
                <img className='flower-slide-img' src={Carnation7} alt="" />
                <h3 className='link7-name' id="link-name"><Link to='/Soft-purple-carnation'>Soft Purple Carnation</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className='flower-swiper-slide'>
              <div className='card'>
                <img className='flower-slide-img' src={Carnation8} alt="" />
                <h3 className='link8-name' id="link-name"><Link to='/Bacarrat-carnation'>Bacarrat Carnation</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className='flower-swiper-slide'>
              <div className='card'>
                <img className='flower-slide-img' src={Carnation9} alt="" />
                <h3 className='link9-name' id="link-name"><Link to='/Purple-carnation'>Purple Carnation</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className='flower-swiper-slide'>
              <div className='card'>
                <img className='flower-slide-img' src={Carnation10} alt="" />
                <h3 className='link10-name' id="link-name"><Link to='/Pink-carnation'>Pink Carnation</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className='flower-swiper-slide'>
              <div className='card'>
                <img className='flower-slide-img' src={Tuberose1} alt="" />
                <h3 className='link10-name' id="link-name"><Link to='/Tube-rose'>Tube Rose</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className='flower-swiper-slide'>
              <div className='card'>
                <img className='flower-slide-img' src={Yellow} alt="" />
                <h3 className='link10-name' id="link-name"><Link to='/Yellow-mari-gold'>Yellow Marigold</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className='flower-swiper-slide'>
              <div className='card'>
                <img className='flower-slide-img' src={Orange} alt="" />
                <h3 className='link10-name' id="link-name"><Link to='/Orange-mari-gold'>Orange Marigold</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className='flower-swiper-slide'>
              <div className='card'>
                <img className='flower-slide-img' src={PoojaFlower} alt="" />
                <h3 className='link10-name' id="link-name"><Link to='/Assorted-pooja-flower'>Assorted Pooja Flower</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className='flower-swiper-slide'>
              <div className='card'>
                <img className='flower-slide-img' src={RedRose} alt="" />
                <h3 className='link10-name' id="link-name"><Link to='/Red-rose'>Red Button Rose</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className='flower-swiper-slide'>
              <div className='card'>
                <img className='flower-slide-img' src={YellowRose} alt="" />
                <h3 className='link10-name' id="link-name"><Link to='/Yellow-rose'>Yellow Button Rose</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className='flower-swiper-slide'>
              <div className='card'>
                <img className='flower-slide-img' src={OrangeRose} alt="" />
                <h3 className='link10-name' id="link-name"><Link to='/Orange-rose'>Orange Button Rose</Link> </h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flower-garland">
          <h3>FLOWER GARLAND</h3>
          <div className="garland-img">
            <div className='card'>
              <img src={Garland1} className='garland-pic'></img>
              <h3 className='link1-name' id='link-name'><Link to='/Carnation-Garland'>Carnation Garland</Link> </h3>
            </div>
            <div className='card'>
              <img src={Garland2} className='garland-pic'></img>
              <h3 className='link1-name' id='link-name'><Link to='/Rose-Garland'>Rose Garland</Link> </h3>
            </div>
            <div className='card'>
              <img src={Garland3} className='garland-pic'></img>
              <h3 className='link1-name' id='link-name'><Link to='/Wedding-Garland'>Wedding Garland</Link> </h3>
            </div>
            <div className='card'>
              <img src={Garland4} className='garland-pic'></img>
              <h3 className='link1-name' id='link-name'><Link to='/Tuberose-Garland'>Tuberose Garland</Link> </h3>
            </div>
          </div>
        </div>
        <div className="flower-petals">
          <h3>FLOWER PETALS</h3>
          <div className="petals-img">
            <div className='card'>
              <img src={Petal1} className='petals-pic'></img>
              <h3 className='link1-name' id='link-name'><Link to='/Red-rose-petals'>Red Rose Petals</Link> </h3>
            </div>
            <div className='card'>
              <img src={Petal2} className='petals-pic'></img>
              <h3 className='link1-name' id='link-name'><Link to='/Yellow-rose-petals'>Yellow Rose Petals</Link> </h3>
            </div>
            <div className='card'>
              <img src={Petal3} className='petals-pic'></img>
              <h3 className='link1-name' id='link-name'><Link to='/Orange-rose-petals'>Orange Rose Petals</Link> </h3>
            </div>
            <div className='card'>
              <img src={Petal4} className='petals-pic'></img>
              <h3 className='link1-name' id='link-name'><Link to='/Mixed-rose-petal'>Mixed Rose Petals</Link> </h3>
            </div>
          </div>
        </div>
        <div className="flower-string">
          <h3>FLOWER STRING</h3>
          <div className="string-img">
            <div className='card'>
              <img src={String1} className='string-pic'></img>
              <h3 className='link1-name' id='link-name'><Link to='/Jasmine-string'>Jasmine String</Link> </h3>
            </div>
            <div className='card'>
              <img src={String2} className='string-pic'></img>
              <h3 className='link1-name' id='link-name'><Link to='/Carnation-string'>Carnation String</Link> </h3>
            </div>
            <div className='card'>
              <img src={String3} className='string-pic'></img>
              <h3 className='link1-name' id='link-name'><Link to='/Baby-breath-string'>Baby Breath String</Link> </h3>
            </div>
            <div className='card'>
              <img src={String4} className='string-pic'></img>
              <h3 className='link1-name' id='link-name'><Link to='/Marigold-string'>Marigold String</Link> </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Flower

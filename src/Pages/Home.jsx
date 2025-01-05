import React from 'react'
import '../css/Home.css';
import '../css/Responsive/HomeResponsive.css'
import slide1 from '../images/slider-1.jpg'
import slide2 from '../images/pooja-home-banner.jpg'
import slide3 from '../images/spices-banner-4.jpg'
import pic from '../images/icon.png'
import swiper1 from '../images/swiper3.jpg'
import swiper2 from '../images/Jasmine-string.png'
import swiper3 from '../images/swiper4.jpg'
import swiper4 from '../images/spices2.jpg'
import swiper5 from '../images/swiper5.jpg'
import swiper6 from '../images/swiper7.jfif'
import swiper7 from '../images/snack1.jpg'
import swiper8 from '../images/beeda.jpg'
import shape from '../images/shape.png'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import VegetableVideo1 from '../Video/Video1.mp4'
import VegetableVideo2 from '../Video/Video2.mp4'
import VegetableVideo3 from '../Video/Video3.mp4'
function Home() {

    return (
        <div className='home-main-container' >
            <div className="home-slider-container">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={slide1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={slide2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={slide3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <section className='home-main-bg'>
                <div className='home-container'>
                    <div className='home-content'>
                        <h1>Koogul Industries - Global Food Importers & Exporters</h1>
                        <h1 style={{ padding: "0px 0px 20px 0px" }}>__________</h1>
                        <p>"As a leading exporter of premium quality food products, Koogul Industries is committed to bringing the rich and diverse flavors of India to the world. Our extensive range of food and spice exports is sourced directly from trusted farms and suppliers, ensuring freshness and authenticity in every shipment. With a strong focus on meeting international quality standards, we guarantee that our products reach global markets with the highest level of care and excellence. Koogul Industries is dedicated to supporting your business by delivering the finest Indian produce to every corner of the globe."</p>
                    </div>
                </div>
            </section>
            <div className='shape-container'>
                <img className='product' src={shape}></img>
            </div>
            <section className='main-bg1'>
                <img className='pic' src={pic}></img>
                <h1 className='text'>Popular Products</h1>
                <div className='slider1'>
                    <div className='card'>
                        <img src={swiper1} className='slide-img'></img>
                        <h3 className='link1-name' id='home-link-name'><Link to='/Rice'>Rice</Link> </h3>
                    </div>
                    <div className='card'>
                        <img src={swiper2} className='slide-img'></img>
                        <h3 className='link2-name' id='home-link-name'><Link to='/Flower'>Flower</Link> </h3>
                    </div>
                    <div className='card'>
                        <img src={swiper3} className='slide-img'></img>
                        <h3 className='link3-name' id='home-link-name'><Link to='/Poojaproduct'>Pooja product</Link> </h3>
                    </div>
                    <div className='card'>
                        <img src={swiper4} className='slide-img'></img>
                        <h3 className='link4-name' id='home-link-name'><Link to='/Spices'>Spices</Link> </h3>
                    </div>
                    <div className='card'>
                        <img src={swiper5} className='slide-img'></img>
                        <h3 className='link5-name' id='home-link-name'><Link to='/Vegetables'>Vegetables</Link> </h3>
                    </div>
                    <div className='card'>
                        <img src={swiper6} className='slide-img'></img>
                        <h3 className='link6-name' id='home-link-name'><Link to='/leaves'>Leaf</Link> </h3>
                    </div>
                    <div className='card'>
                        <img src={swiper8} className='slide-img'></img>
                        <h3 className='link7-name' id='home-link-name'><Link to='/Beeda'>Beeda</Link> </h3>
                    </div>
                    <div className='card'>
                        <img src={swiper7} className='slide-img'></img>
                        <h3 className='link8-name' id='home-link-name'><Link to='/Snacks'>Snacks</Link> </h3>
                    </div>
                </div>
            </section>
            <div className='vegetable-video-container'>
                <Swiper slidesPerView={1} spaceBetween={10} freeMode={true} loop={true} pagination={{ clickable: true, }} autoplay={{
                    delay: 5000, disableOnInteraction: false,
                }} modules={[FreeMode, Pagination, Autoplay]} className='video-swiper'>
                    <SwiperSlide className='video-swiper-slide'>
                        <video autoPlay loop muted>
                            <source src={VegetableVideo1} />
                        </video>
                    </SwiperSlide>
                    <SwiperSlide className='video-swiper-slide'>
                        <video autoPlay loop muted>
                            <source src={VegetableVideo2} />
                        </video>
                    </SwiperSlide>
                    <SwiperSlide className='video-swiper-slide'>
                        <video autoPlay loop muted>
                            <source src={VegetableVideo3} />
                        </video>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>


    )
}

export default Home

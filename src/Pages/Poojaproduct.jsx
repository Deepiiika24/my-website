import React from 'react';
import '../css/poojaitem.css'
import '../css/Responsive/PoojaitemResponsive.css'
import { Link } from 'react-router-dom'
import poojalogo from '../images/l.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import swiper1 from '../images/pooja/kalash1.jpg'
import swiper2 from '../images/pooja/bell.jpg'
import swiper3 from '../images/pooja/kunkumthattu.jpg'
import swiper4 from '../images/pooja/pooja.jpg'
import swiper5 from '../images/pooja/plate.jpg'
import swiper6 from '../images/pooja/spoon.jpg'
import spiritual1 from '../images/pooja/kungumam.jpg'
import spiritual2 from '../images/pooja/pakku.jpg'
import spiritual3 from '../images/pooja/cow cake.jpg'
import spiritual4 from '../images/pooja/seeval.jpg'
import spiritual5 from '../images/pooja/thengai.jpg'
import spiritual6 from '../images/pooja/vettiver.jpg'
import spiritual7 from '../images/pooja/viputhi.jpg'
import spiritual8 from '../images/pooja/omam kit.png'
import Medical1 from '../images/pooja/rose water.jpg'
import Medical2 from '../images/pooja/sambrani.jpg'
import Medical3 from '../images/pooja/sandal.jpg'
import Medical4 from '../images/pooja/sandhanam.jpg'
import Medical5 from '../images/pooja/thiri.jpg'
import Medical6 from '../images/pooja/cupimage.jpg'
import Medical7 from '../images/pooja/kalasanool.jpg'
import Medical8 from '../images/pooja/karpuram.jpg'
import Medical9 from '../images/pooja/kattimanjal.jpg'
import Medical10 from '../images/pooja/nama katti.jpg'
import Medical11 from '../images/pooja/kashthurimanjal.jpg'
import Medical12 from '../images/pooja/navathaniyam.jpg'
import agricalture1 from '../images/pooja/nel.jpg'
import agricalture2 from '../images/pooja/mangostick.jpg'
import agricalture3 from '../images/pooja/pori.jpg'
import agricalture4 from '../images/pooja/arasankatta.jpg'
import agricalture5 from '../images/pooja/arugampul.jpg'
import special1 from '../images/pooja/pooja kit 1.jpg'
import special2 from '../images/pooja/pooja kit 2.jpg'
import special3 from '../images/pooja/pooja kit 3.jpg'
import special4 from '../images/pooja/pooja kit 4.jpg'
import special5 from '../images/pooja/pooja kit 5.jpg'
import special6 from '../images/pooja/pooja kit 6.jpg'
import special7 from '../images/pooja/pooja kit 7.jpg'
import special8 from '../images/pooja/pooja kit 8.jpg'
import special9 from '../images/pooja/pooja kit 9.jpg'
function Poojaproduct() {
  return (
    <>
      <section className='pooja'>
        <div className='pooja-banner'>
        </div>
      </section>
      <div className='pooja-main-container'>
        <section className='pooja-content'>
          <div className='pooja-logo-content'>
            <img src={poojalogo}></img>
            <div>
              <h4>POOJA PRODUCT EXPORT FROM INDIA</h4>
              <h1>_______</h1>
              <p>Koogul Industries Pooja Products encompass a range of meticulously crafted items that are essential for performing rituals and ceremonies. These products are designed to enhance the spiritual experience and create an atmosphere of devotion and reverence. Our Pooja Products offer a wide variety of items, including ghee diya, sambrani cups, chandan tika, camphor, kapoor, hawan samagri, puja oils, and more.</p>
            </div>
          </div>
        </section>
        <section className='brass-swiper'>
          <h2>SPECIAL POOJA KIT</h2>
          <div className="pooja-img">
            <Swiper slidesPerView={4} spaceBetween={10} freeMode={true} loop={true} pagination={{ clickable: true, }}
              autoplay={{
                delay: 2500, disableOnInteraction: false,
              }}
              modules={[FreeMode, Pagination, Autoplay]} className="pooja-Swiper"
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
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={special1} alt="" />
                  <h3 className='link1-namepooja-sudrashana' ><Link to='/Sudharshana'>Sudrashana pooja</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={special2} alt="" />
                  <h3 className='link1-namepooja-varalakshmi' ><Link to='/Varalakmi'>Varalakshmi pooja</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={special3} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Shivapooja'>Shiva pooja</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={special4} alt="" />
                  <h3 className='link4-namepooja-satya' ><Link to='/Sathyanarayanapooja'>Satyanarayana pooja</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={special5} alt="" />
                  <h3 className='link1-namepooja-hari' ><Link to='/Haridharshanapooja'>Haridarshan Pooja</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={special6} alt="" />
                  <h3 className='link1-namepooja-navgraha' ><Link to='/Navgrahapooja'>Navgraha pooja</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={special7} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Ganapathipooja'>Ganapathi Pooja</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={special8} alt="" />
                  <h3 className='link1-namepooja-108' ><Link to='/Omthiraviyam'>108 Om Thiraviya Samangal</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={special9} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Durgapooja'>Durga Pooja</Link> </h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className='brass-swiper1'>
          <h2>BRASS POOJA PRODUCT</h2>
          <div className="pooja-img">
            <Swiper slidesPerView={4} spaceBetween={10} freeMode={true} loop={true} pagination={{ clickable: true, }} autoplay={{
              delay: 2500, disableOnInteraction: false,
            }} modules={[FreeMode, Pagination, Autoplay]} className="pooja-Swiper"
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
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={swiper1} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Kalash'>kalash</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={swiper2} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Bell'>Bell</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={swiper3} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Kumkumplate'>kunkum Plate</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={swiper4} alt="" />
                  <h3 className='link4-namepooja' ><Link to='/Agarpathiolder'>Agarbatti holder</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={swiper5} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Thalika'>Thalika</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={swiper6} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Lota'>Lota</Link> </h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className='Spiritual-and-religious'>
          <h2>SPIRITUAL AND RELIGIOUS</h2>
          <div className="pooja-img-spiritual">
            <Swiper slidesPerView={4} spaceBetween={10} freeMode={true} loop={true} pagination={{ clickable: true, }} autoplay={{
              delay: 2500, disableOnInteraction: false,
            }} modules={[FreeMode, Pagination, Autoplay]} className="pooja-Swiper"
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
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={spiritual1} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Kungumam'>kungumam</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={spiritual2} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Kottaipakku'>kottai Pakku</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={spiritual3} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Cowdungcake'>Cow Dung Cake</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide' >
                <div className='card'>
                  <img className='pooja-slide-img' src={spiritual4} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Sival'>Sival Pakku</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={spiritual5} alt="" />
                  <h3 className='link2-namepooja' ><Link to='/Kopparathengai'>Koppara Thengai</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={spiritual6} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Vettiver'>Vetti Ver</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={spiritual7} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Viputhi'>Vibuthi</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={spiritual8} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Omkit'>Omam Kit 108</Link> </h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className='Medical-and-herbal'>
          <h2>MEDICINAL AND HERBAL</h2>
          <div className="pooja-img-Medical">
            <Swiper slidesPerView={4} spaceBetween={10} freeMode={true} loop={true} pagination={{ clickable: true, }} autoplay={{
              delay: 2500, disableOnInteraction: false,
            }} modules={[FreeMode, Pagination, Autoplay]} className="pooja-Swiper"
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
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={Medical1} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Panner'>paneer Water</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={Medical2} alt="" />
                  <h3 className='link2-namepooja' ><Link to='/Sambrani'>Sambrani powder</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={Medical3} alt="" />
                  <h3 className='link3-namepooja' ><Link to='/Santhanam'>Santhanam Powder </Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={Medical4} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Santhanakatti'>Santhanam Katti</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={Medical5} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Panchinool'>Panchi Nool</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={Medical6} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Sambranicup'>Sambrani Cup</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={Medical7} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Kalasanool'>Kalasa Nool</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={Medical8} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Karpuram'>Karpuram</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={Medical9} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Kattimanjal'>katti Manjal</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={Medical10} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Namakatti'>Naama katti</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={Medical11} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Kashthurimanjal'>kasthuri Manjal </Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={Medical12} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Navathaniyam'>Navathaniyam</Link> </h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className='Agricultural-and-natural'>
          <h2>AGRICULTURAL AND NATURAL</h2>
          <div className="pooja-img-Agricultural">
            <Swiper slidesPerView={4} spaceBetween={10} freeMode={true} loop={true} pagination={{ clickable: true, }} autoplay={{
              delay: 2500, disableOnInteraction: false,
            }} modules={[FreeMode, Pagination, Autoplay]} className="pooja-Swiper"
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
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={agricalture1} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Nel'>Nel </Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={agricalture2} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Mangostick'>Mango Stick</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={agricalture3} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Nelpoori'>Nel Pori</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={agricalture4} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Arasankattai'>Arasan Kattai</Link> </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pooja-swiper-slide'>
                <div className='card'>
                  <img className='pooja-slide-img' src={agricalture5} alt="" />
                  <h3 className='link1-namepooja' ><Link to='/Grass'>Grass</Link> </h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </div>
    </>
  );
}

export default Poojaproduct;

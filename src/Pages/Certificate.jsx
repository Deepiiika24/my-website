import React from 'react';
import logo from '../images/l.png';
import '../css/certificate.css'
import '../css/Responsive/CertificateResponsive.css'
import certificate1 from '../images/certificate/apeda.jpg';
import certificate2 from '../images/certificate/fssai.jpg';
import certificate3 from '../images/certificate/importe.jpg';
import certificate4 from '../images/certificate/CDB.jpg';
function Certificate() {
  return (
    <div className='certificate-container'>
      <section className='certificate-banner-section'>
        <div className='certificate-banner'>
        </div>
      </section>
      <section className='certificate-content'>
        <div className='certificate-logo-content'>
          <img src={logo}></img>
          <div>
            <h4>CERTIFICATIONS</h4>
            <p>When it comes to food handling and export, maintaining high levels of hygiene, quality and safety are crucial. This is why, at Koogul Industries, we meet international food safety and quality standards through various quality checks and following strict protocols throughout the process. This has allowed us to be accredited to a number of quality and food safety certifications.</p>
          </div>
        </div>
      </section>
      <section className='certificate-img'>
        <div className='certificate-row-img'>
          <div className='certificate'>
            <img src={certificate1} class="img-thumbnail" alt="..." />
            <h1 className='certificate-con-1'>apeda Licence</h1>
          </div>
          <div className='certificate'>
            <img src={certificate2} class="img-thumbnail" alt="..." />
            <h1 className='certificate-con-2'>fssai Licence</h1>
          </div>
          <div className='certificate'>
            <img src={certificate3} class="img-thumbnail" alt="..." />
            <h1 className='certificate-con-3'>IEC Certificate</h1>
          </div>
        </div>
      </section>
      <section className='certificate-img-2'>
        <div className='certificate-row-img-2'>
          <div className='certificate-2'>
            <img src={certificate4} class="img-thumbnail" alt="..." />
            <h1 className='certificate-con-4'>Coconut Licence</h1>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Certificate;


import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import banner from '../images/Contact-banner.png'
import '../css/ContactForm.css'
import '../css/Responsive/ContactFormResponsive.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '',
    mobileNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_brsjkmb', 'template_nmv78db', formData, 'v0IH5Ug-pmYE2Yy65')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your enquiry has been sent successfully.');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send your enquiry. Please try again.');
      });

    setFormData({
      fullName: '',
      email: '',
      countryCode: '',
      mobileNumber: '',
      message: '',
    });
  };

  return (
    <div className='contact-container'>
      <div className="contact-banner">
        <img src={banner} />
      </div>
      <div className="contact-form-body">
        <div className='contact-address'>
          <h3>REGISTERED ADDRESS</h3>
          <div className="reg-add">
            <div className="single-contact-info">
              <div className="contact-icon-info">
                <LocationOnIcon style={{color:"#ef5350"}}/>
              </div>
              <div className="contact-text-info">
                <p>No:11, M.R.K Nagar,<br /> 50feet Main Road, Kolapakkam, <br />Chennai-600128, Tamil Nadu, India</p>
              </div>
            </div>
            <div className="single-contact-info">
              <div className="contact-icon-info">
                <PhoneIcon style={{color:"#ef5350"}}/>
              </div>
              <div className="contact-text-info">
                <p>+91 6374980568</p>
              </div>
            </div>
            <div className="single-contact-info">
              <div className="contact-icon-info">
                <EmailIcon style={{color:"#ef5350"}}/>
              </div>
              <div className="contact-text-info">
                <p>koogulinfo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h3>CONTACT WITH US</h3>
          <form onSubmit={handleSubmit}>
            <div class="mb-3 row">
              <label class="col-sm-4 col-form-label">Name <span style={{color:"red"}}>*</span></label>
              <div class="col-sm-8">
                <input type="text" className='form-control' name="fullName" value={formData.fullName} onChange={handleChange} required />
              </div>
            </div>
            <div class="mb-3 row">
              <label class="col-sm-4 col-form-label">Email <span style={{color:"red"}}>*</span></label>
              <div class="col-sm-8">
                <input type="email" name="email" className='form-control' value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div class="mb-3 row">
              <label class="col-sm-4 col-form-label">Country Code <span style={{color:"red"}}>*</span></label>
              <div class="col-sm-8">
                <input type="text" name="countryCode" className='form-control' value={formData.countryCode} onChange={handleChange} required />
              </div>
            </div>
            <div class="mb-3 row">
              <label class="col-sm-4 col-form-label">Mobile Number <span style={{color:"red"}}>*</span></label>
              <div class="col-sm-8">
                <input type="text" name="mobileNumber" className='form-control' value={formData.mobileNumber} onChange={handleChange} required />
              </div>
            </div>
            <div class="mb-3 row">
              <label class="col-sm-4 col-form-label">Message <span style={{color:"red"}}>*</span></label>
              <div class="col-sm-8">
                <textarea name="message" value={formData.message} className='form-control' onChange={handleChange} required></textarea>
              </div>
            </div>
            <button type="submit" className='btn btn-primary'>Send Enquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

import React from 'react'
import '../css/Header.css'
import '../css/Responsive/HeaderResponsive.css'
import Logo from '../images/logo1.png'
import { Link } from 'react-router-dom'
import banner from '../images/Bg.png'
function Header() {
  return (
    <div className='header-container'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundImage: `url(${banner})` }}>
        <div class="container-fluid">
          <img className='logo-img' src={Logo} alt="Logo.png" />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page"><Link to='/'>Home</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to='/aboutus'>Aboutus</Link>  </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item"><Link to="/rice">Rice</Link></a></li>
                  <li><a class="dropdown-item"><Link to="/Poojaproduct">Pooja Products</Link></a></li>
                  <li><a class="dropdown-item"><Link to="/spices">Spices</Link></a></li>
                  <li><a class="dropdown-item"><Link to="/flower">Flower</Link></a></li>
                  <li><a class="dropdown-item"><Link to="/Leaves">Leaf</Link></a></li>
                  <li><a class="dropdown-item"><Link to="/Vegetables">Vegetables</Link></a></li>
                  <li><a class="dropdown-item"><Link to="/Snacks">Snacks</Link></a></li>
                  <li><a class="dropdown-item"><Link to="/Beeda">Paan Beeda</Link></a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to='/Certificate'>Certificate</Link>  </a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to='/ContactForm'>Contactus</Link> </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer id='footer' className='section_footer footer'>
        <div className='container_footer'>
          <div className='footer__top'>
            <div className='footer-top__box'>
              <h3>EXTRAS</h3>
              <a href='#'>Brands</a>
              <a href='#'>Gift Certificates</a>
              <a href='#'>Affiliate</a>
              <a href='#'>Specials</a>
              <a href='#'>Site Map</a>
            </div>
            <div className='footer-top__box'>
              <h3>INFORMATION</h3>
              <a href='#'>About Us</a>
              <a href='#'>Privacy Policy</a>
              <a href='#'>Terms &amp; Conditions</a>
              <a href='#'>Contact Us</a>
              <a href='#'>Site Map</a>
            </div>
            <div className='footer-top__box'>
              <h3>MY ACCOUNT</h3>
              <a href='#'>My Account</a>
              <a href='#'>Order History</a>
              <a href='#'>Wish List</a>
              <a href='#'>Newsletter</a>
              <a href='#'>Returns</a>
            </div>
            <div className='footer-top__box'>
              <h3>CONTACT US</h3>
              <div>
                <span>
                  <svg></svg>
                  <i className='fa fa-home' />
                </span>
                43 Dream House, Dreammy street
              </div>
              <div>
                <span>
                  <svg></svg>
                  <i className='fa fa-envelope-open' />
                </span>
                company@gmail.com
              </div>
              <div>
                <span>
                  <svg></svg>
                  <i className='fa fa-phone' />
                </span>
                456-456-4512
              </div>
              <div>
                <span>
                  <svg></svg>
                  <i className='fa fa-map-marker' />
                </span>
                Dream City, USA
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

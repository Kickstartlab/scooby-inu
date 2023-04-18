import React from 'react'
import logo from '../assets/logo.png';
import logo_2 from '../assets/logo_2.png';



export default function Footer() {
  return (
    <div className="font-poppins py-5 bg-yellow-50">
      <footer data-aos="zoom-in" className='container text-blue-200 mx-auto lg:px-20 font-russo px-5'>
        <div className="grid lg:grid-cols-4 grid-cols-1 items-center justify-between py-12">

          <div className="flex flex-col gap-y-6 items-center justify-center col-span-2">
            <div className="space-y-4">

              <img src={logo} alt=''></img>
              <img src={logo_2} alt=''></img>

              <div className='flex gap-6 items-center justify-center'>
                <a href='https://twitter.com/scoobyinu_bsc'>
                  <div className='w-14 h-14 pt-2 rounded-full bg-white-100 text-center'>
                    <i className="fa fa-twitter  fa-2x text-blue-100 pt-2" aria-hidden="true"></i>
                  </div>
                </a>

                <a href='https://t.me/scoobyinuofficiaI'>
                  <div className='pt-1 w-14 h-14 rounded-full bg-white-100 text-center'>
                    <i className="fa fa-telegram fa-2x text-blue-100 pt-2" aria-hidden="true"></i>
                  </div>
                </a>

                <a href='mailto:scoobyinu1@gmail.com'>
                  <div className='pt-1 w-14 h-14 rounded-full bg-white-100 text-center'>
                    <i className="fa fa-envelope fa-2x text-blue-100 pt-2" aria-hidden="true"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h5 className='font-slackey text-blue-100 text-2xl pb-6'>
              Useful links
            </h5>
            <ul className='space-y-5'>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms of Use </li>
              <li>Site Map</li>
            </ul>
          </div>

          <div>
            <h5 className='font-slackey text-blue-100 text-2xl pb-6'>
              Explore
            </h5>
            <ul className='space-y-5'>
              <li><a href='#about'>About Us</a></li>
              <li><a href='#tokenomics'>Tokenomics</a></li>
              <li><a href='/'>DAPP</a></li>
              <li><a href='#nft'>NFT</a></li>
            </ul>
          </div>

        </div>

        <p className='py-5 text-blue-50 text-lg text-center'> Copyright {new Date().getFullYear()} | Scooby Inu</p>

      </footer>
    </div>

  )
}

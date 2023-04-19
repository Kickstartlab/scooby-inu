import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import p_1 from '../assets/p_1.png';
import p_2 from '../assets/p_2.png';
import p_3 from '../assets/p_3.png';
import p_4 from '../assets/p_4.png';
import p_5 from '../assets/p_5.png';
import p_6 from '../assets/p_6.png';
import token_1 from '../assets/token_1.png';
import token_2 from '../assets/token_2.png';
import token_3 from '../assets/token_3.png';
import token_4 from '../assets/token_4.png';
import token_5 from '../assets/token_5.png';
import token_6 from '../assets/token_6.png';
import star from '../assets/star.png';
import curl from '../assets/curl.png';
import plus_1 from '../assets/plus_1.png';
import plus_2 from '../assets/plus_2.png';
import rings from '../assets/rings.png';
import dot from '../assets/dot.png';
import roadmap from '../assets/roadmap.png';
import foot from '../assets/foot.png';
import sd from '../assets/sd.png';
import nft from '../assets/nft.png';
import top_1 from '../assets/top_1.png';
import top_2 from '../assets/top_2.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 3000,
            once: false,
            easing: 'ease',
            delay: 350
        });
        Aos.refresh();
    }, [])

    return (
        <div className="bg-white-50 text-blue-50 font-poppins overflow-hidden">

            {/* top section */}

            <div className="lg:px-20 px-5 bg-top">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="lg:flex block justify-between items-center gap-x-12 py-12">

                        <div data-aos="zoom-in" data-aos-delay="350" className="">
                            <img data-aos="zoom-in" src={top_1} alt="Logo" className='' />
                            <img data-aos="fade-up" src={top_2} alt="Logo" className='lg:block hidden ml-52 -mt-24' />
                            <img src={foot} alt="Logo" className='absolute -mt-16 ml-12 lg:block hidden' />
                        </div>

                        <div data-aos="fade-right" data-aos-delay="350" className="lg:w-1/2 w-full md:mt-0 mt-12">
                            <img src={star} alt="Logo" className='absolute -ml-24 mt-8 lg:block hidden box' />

                            <h2 className='md:text-5xl text-3xl font-slackey font-bold text-blue-100'>
                                HOLD $KRYPTO AND EARN $DOGE 😍
                            </h2>
                            <p className='py-8 text-blue-200 font-poppins font-semibold text-lg'>
                                3% fee of each transaction is redistributed in DOGECOIN to holders of $KRYPTO
                            </p>

                            <a href="/" className=''>
                                <button className="text-white-100 bg-orange-100 py-4 px-6 rounded-lg font-semibold">
                                    Learn More
                                </button>
                            </a>
                            <img src={rings} alt="Logo" className='absolute right-0 -mt-12 lg:block hidden box' />
                            <img src={foot} alt="Logo" className='absolute -ml-12 w-12 mt-8 lg:block hidden box' />
                            <p className='mt-8 leading-loose lg:w-10/12'>
                                Holders of Krypto inu  token  will earn DOGECOIN by simply holding $KRYPTO tokens in their wallet. $KRYPTO holders automatically receive a 3% rewards from every transaction.
                            </p>

                        </div>

                    </div>

                </div>
            </div>

            {/* about us section */}

            <div id='about' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-between items-center gap-x-12 py-12">

                        <div data-aos="fade-left" className="lg:w-1/2">

                            <h2 className='md:text-5xl text-3xl font-slackey font-semibold text-blue-100 uppercase'>
                                What is Krypto inu?
                            </h2>

                            <div className='lg:flex items-center gap-x-10 my-6'>

                                <div className='flex gap-x-4 items-center'>
                                    <span className='w-6 h-6 text-center text-white-100 bg-orange-100 rounded-md'>
                                        ✓
                                    </span>
                                    <p className='text-blue-200 font-medium text-lg'>DeFi Token</p>
                                </div>

                                <div className='flex gap-x-4 items-center'>
                                    <span className='w-6 h-6 text-center text-white-100 bg-orange-100 rounded-md'>
                                        ✓
                                    </span>
                                    <p className='text-blue-200 font-medium text-lg'>Token Rewards on every transaction</p>
                                </div>

                            </div>

                            <p className='text-blue-200 font-semibold leading-loose'>
                                Krypto inu is a DeFi meme Token built on binance smart chain with a Token Rewards on every transaction. the token was inspired by krypto The SuperDog, the legendary cartoon dog one of the most-loved cartoon dogs to appear on movies or television shows as well as in comic books.
                            </p>

                            <p className='text-blue-200 font-semibold leading-loose pt-5'>
                                Meme season is back and krypto the super hero is here to make bsc great again, join krypto on his epic journey towards the fight on evil and get rewarded along the way.
                            </p>

                            <a href="/" className=''>
                                <button className="text-white-100 bg-orange-100 py-4 px-6 rounded-lg font-semibold mt-8">
                                    Go to Dapp
                                </button>
                            </a>
                        </div>

                        <div className="lg:w-1/2 md:mt-0 mt-12">
                            <img src={dot} alt="Logo" className='absolute -mt-16 ml-12 lg:block hidden box' />
                            <img src={plus_1} alt="Logo" className='absolute right-0 mt-8 mr-12 lg:block hidden box' />
                            <img data-aos="zoom-in" data-aos-delay="350" src={sd} alt="Logo" className='sm:flex mx-auto' />
                            <img src={plus_2} alt="Logo" className='absolute -mt-16 ml-12 lg:block hidden box' />
                        </div>

                    </div>
                    <img src={curl} alt="Logo" className='absolute right-0 mr-16 -mt-12 lg:block hidden box' />

                </div>
            </div>

            {/* nft section */}

            <div id='nft' className="">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div data-aos="fade-up" data-aos-delay="350" className='lg:flex items-center justify-center gap-x-24 lg:space-y-0 space-y-4'>

                        <h2 data-aos="slide-right" className='lg:w-1/4 md:text-4xl text-2xl font-slackey font-semibold text-blue-100 uppercase'>
                            NFT & NFT STAKING
                        </h2>

                        <p className='text-blue-200 font-semibold leading-loose lg:w-1/2'>
                            User-friendly dApp interface allows investors to easily stake their NFTS, track their rewards, and explore the broad range of staking options available to them. We believe that our platform is designed with a strong emphasis on security and reliability, with robust measures in place to protect user data and assets.
                        </p>
                    </div>

                    <div data-aos="zoom-in" className='lg:mt-16 mt-8'>
                        <img src={nft} alt="Logo" className='sm:flex mx-auto' />
                    </div>

                </div>

            </div>

            {/* tokenomics */}

            <div id='tokenomics' className="bg-token">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                    <h2 className='md:text-5xl text-3xl font-slackey text-center font-semibold text-blue-100 flex items-center justify-center'>
                        <span>
                            <img src={foot} alt='foot'></img>
                        </span>
                        Tokenomics
                    </h2>

                    <div className='lg:flex items-center justify-center gap-8 lg:-space-y-0 space-y-8'>

                        <div className='group bg-white-100 hover:bg-orange-200 p-8 rounded-3xl flex flex-col items-center justify-center gap-y-5 text-blue-50 lg:w-80'>
                            <div className='p-2 bg-white-100 rounded-xl'>
                                <img src={token_1} alt=''></img>
                            </div>

                            <div className='group-hover:text-white-100 text-center space-y-3'>
                                <p className='text-lg font-semibold font-slackey underline'>Token Name</p>
                                <p className='text-3xl font-semibold'>Krypto Inu</p>
                            </div>
                        </div>

                        <div className='group bg-white-100 hover:bg-orange-200 p-8 rounded-3xl flex flex-col items-center justify-center gap-y-5 text-blue-50 lg:w-80 mt-12'>
                            <div className='p-2 bg-green-100 rounded-xl'>
                                <img src={token_2} alt=''></img>
                            </div>

                            <div className='group-hover:text-white-100 text-center space-y-3'>
                                <p className='text-lg font-semibold font-slackey underline'>Symbol</p>
                                <p className='text-3xl font-semibold'>$KRYPTO</p>
                            </div>
                        </div>

                        <div className='group bg-white-100 hover:bg-orange-200 p-8 rounded-3xl flex flex-col items-center justify-center gap-y-5 text-blue-50 lg:w-80'>
                            <div className='p-2 bg-sky-100 rounded-xl'>
                                <img src={token_3} alt=''></img>
                            </div>

                            <div className='group-hover:text-white-100 text-center space-y-3'>
                                <p className='text-lg font-semibold font-slackey underline'>Token Supply</p>
                                <p className='text-3xl font-semibold'>100,000,000,000</p>
                            </div>
                        </div>

                    </div>

                    <div className='lg:mt-16 mt-8'>
                        <h2 className='md:text-5xl text-3xl font-slackey text-center font-semibold text-blue-100 flex items-center justify-center'>
                            <span>
                                <img src={foot} alt='foot'></img>
                            </span>
                            TAX 8/8
                        </h2>

                        <div className='lg:flex items-center justify-center gap-8  lg:-space-y-0 space-y-8'>

                            <div className='group bg-white-100 hover:bg-orange-200 p-8 rounded-3xl flex flex-col items-center justify-center gap-y-5 lg:w-80'>
                                <div className='p-2 bg-white-100 rounded-xl'>
                                    <img src={token_4} alt=''></img>
                                </div>

                                <div className='group-hover:text-white-100 text-center space-y-3'>
                                    <p className='text-lg font-semibold font-slackey underline'>MARKETING</p>
                                    <p className='text-3xl font-semibold'>4%</p>
                                </div>
                            </div>

                            <div className='group bg-white-100 hover:bg-orange-200 p-8 rounded-3xl flex flex-col items-center justify-center gap-y-5 lg:w-80 mt-12'>
                                <div className='p-2 bg-green-100 rounded-xl'>
                                    <img src={token_5} alt=''></img>
                                </div>

                                <div className='group-hover:text-white-100 text-blue-50 text-center space-y-3'>
                                    <p className='text-lg font-semibold font-slackey underline'>Rewards</p>
                                    <p className='text-3xl font-semibold'>3%</p>
                                </div>
                            </div>

                            <div className='group bg-white-100 hover:bg-orange-200 p-8 rounded-3xl flex flex-col items-center justify-center gap-y-5 lg:w-80'>
                                <div className='p-2 bg-sky-100 rounded-xl'>
                                    <img src={token_6} alt=''></img>
                                </div>

                                <div className='group-hover:text-white-100 text-blue-50 text-center space-y-3'>
                                    <p className='text-lg font-semibold font-slackey underline'>Buy Back</p>
                                    <p className='text-3xl font-semibold'>1%</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            {/* roadmap  */}

            <div id='roadmap' className="lg:px-20 px-5 lg:py-20 py-5">
                <div className='container mx-auto'>

                    <div data-aos="fade-up" data-aos-delay="350" className='lg:flex items-center justify-center gap-x-12  lg:-space-y-0 space-y-4'>

                        <h2 data-aos="slide-right" className='lg:w-1/2 md:text-4xl text-2xl font-slackey font-semibold text-blue-100'>
                            Our ROADMAP
                        </h2>

                        <p className='text-blue-200 leading-loose'>
                            Below is listed our Roadmap explained and distributed among 6 phases for a smooth and rich experience for our every user.
                        </p>
                    </div>

                    <div className='lg:flex items-start justify-between lg:pt-16 pt-6'>

                        <div className='lg:w-5/12 lg:space-y-0 space-y-6'>
                            <div>
                                <h5 className='font-slackey text-blue-100 text-xl pb-4'>
                                    Phase 1
                                </h5>
                                <ul className='space-y-1'>
                                    <li>Contract Audit</li>
                                    <li>100 unique NFTS release </li>
                                    <li>Whitelist Presale</li>
                                    <li>1k Telegram members</li>
                                    <li>NFT staking Dapp</li>
                                    <li>Whitepaper V.1</li>
                                </ul>
                            </div>

                            <div className='lg:flex hidden items-center lg:translate-x-4 z-20'>
                                <div className='w-full h-1 bg-yellow-100'>

                                </div>
                                <svg data-aos="zoom-in" data-aos-delay="350" className='border-4 border-yellow-100 rounded-full' width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="13" cy="12.5" rx="13" ry="12.5" fill="url(#paint0_linear_0_171)" fillOpacity="" />
                                    <defs>
                                        <linearGradient id="paint0_linear_0_171" x1="5.79518" y1="2.56024" x2="20.9302" y2="25.5535" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FF6031" />
                                            <stop offset="1" stopColor="#F9A80E" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                            </div>

                            <div>
                                <h5 className='font-slackey text-blue-100 text-xl pb-4'>
                                    Phase 2
                                </h5>
                                <ul className='space-y-1'>
                                    <li>Influencer marketing push</li>
                                    <li>5k Telegram members</li>
                                    <li>CMC Listing</li>
                                    <li>CG Listing</li>
                                    <li>1st CEX Listing</li>
                                </ul>
                            </div>

                            <div className='lg:flex hidden items-center lg:translate-x-4 z-20'>

                                <div className='w-full h-1 bg-yellow-100'>
                                </div>

                                <svg data-aos="zoom-in" data-aos-delay="350" className='border-4 border-yellow-100 rounded-full' width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="13" cy="12.5" rx="13" ry="12.5" fill="url(#paint0_linear_0_171)" fillOpacity="" />
                                    <defs>
                                        <linearGradient id="paint0_linear_0_171" x1="5.79518" y1="2.56024" x2="20.9302" y2="25.5535" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FF6031" />
                                            <stop offset="1" stopColor="#F9A80E" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <div>
                                <h5 className='font-slackey text-blue-100 text-xl pb-4'>
                                    Phase 3
                                </h5>
                                <ul className='space-y-1'>
                                    <li>Twitter Promos</li>
                                    <li>Telegram Calls</li>
                                    <li>Youtube influencers</li>
                                    <li>NFT marketplace</li>
                                </ul>
                            </div>
                        </div>

                        <div className='border-4 border-yellow-100 p-8 rounded-full mt-16 lg:block hidden'>
                            <img data-aos="zoom-in" data-aos-delay="350" src={roadmap} alt=''></img>
                        </div>

                        <div className='lg:w-5/12 space-y-8 lg:mt-0 mt-6'>

                            <div className='lg:flex flex-col items-end'>
                                <h5 className='font-slackey text-blue-100 text-xl pb-4'>
                                    Phase 4
                                </h5>
                                <ul className='space-y-2'>
                                    <li>New Exchanges Listing CEX</li>
                                    <li>Further community growth</li>
                                    <li>Certik Audit</li>
                                    <li>ADS Banners on Poocoin -<br></br> Dextool - BSCSCan</li>
                                </ul>
                            </div>

                            <div className='lg:flex hidden items-center lg:-translate-x-4 z-20'>
                                <svg data-aos="zoom-in" data-aos-delay="350" className='border-4 border-yellow-100 rounded-full' width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="13" cy="12.5" rx="13" ry="12.5" fill="url(#paint0_linear_0_171)" fillOpacity="" />
                                    <defs>
                                        <linearGradient id="paint0_linear_0_171" x1="5.79518" y1="2.56024" x2="20.9302" y2="25.5535" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FF6031" />
                                            <stop offset="1" stopColor="#F9A80E" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <div className='w-full h-1 bg-yellow-100'>

                                </div>
                            </div>

                            <div className='lg:flex flex-col items-end'>
                                <h5 className='font-slackey text-blue-100 text-xl pb-4'>
                                    Phase 5
                                </h5>
                                <ul className='space-y-2'>
                                    <li>Strategic Partnerships Large</li>
                                    <li>Marketing Campaigns</li>
                                </ul>
                            </div>

                            <div className='lg:flex hidden items-center -translate-x-4 z-20'>
                                <svg data-aos="zoom-in" data-aos-delay="350" className='border-4 border-yellow-100 rounded-full' width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="13" cy="12.5" rx="13" ry="12.5" fill="url(#paint0_linear_0_171)" fillOpacity="" />
                                    <defs>
                                        <linearGradient id="paint0_linear_0_171" x1="5.79518" y1="2.56024" x2="20.9302" y2="25.5535" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FF6031" />
                                            <stop offset="1" stopColor="#F9A80E" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <div className='w-full h-1 bg-yellow-100'>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* partners */}

            <div id='partners' className="bg-yellow-50">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div data-aos="fade-up" data-aos-delay="350" className='lg:w-8/12 text-center flex flex-col mx-auto'>

                        <h2 className='md:text-5xl text-3xl font-slackey text-center font-semibold text-blue-100 flex items-center justify-center'>
                            <span>
                                <img src={foot} alt='foot'></img>
                            </span>
                            Our Partners
                        </h2>
                    </div>

                    <img src={rings} alt="Logo" className='absolute right-0 mr-12 -mt-24 lg:block hidden' />

                    <div className='lg:flex items-center justify-center gap-8 pt-16 lg:mr-16 lg:space-y-0 space-y-6'>
                        <div className='bg-yellow-100 p-8 rounded-3xl lg:w-82 h-44 flex items-center justify-center'>
                            <img src={p_1} alt=''></img>
                        </div>

                        <div className='bg-yellow-100 p-8 rounded-3xl lg:w-82 h-44 flex items-center justify-center'>
                            <img src={p_2} alt=''></img>
                        </div>

                        <div className='bg-yellow-100 p-8 rounded-3xl lg:w-82 h-44 flex items-center justify-center'>
                            <img src={p_3} alt=''></img>
                        </div>
                    </div>

                    <div className='lg:flex items-center justify-center gap-8 pt-8 lg:ml-16 lg:space-y-0 space-y-6'>
                        <div className='bg-yellow-100 p-8 rounded-3xl lg:w-82 h-44 flex items-center justify-center'>
                            <img src={p_4} alt=''></img>
                        </div>

                        <div className='bg-yellow-100 p-8 rounded-3xl lg:w-82 h-44 flex items-center justify-center'>
                            <img src={p_5} alt=''></img>
                        </div>

                        <div className='bg-yellow-100 p-8 rounded-3xl lg:w-82 h-44 flex items-center justify-center'>
                            <img src={p_6} alt=''></img>
                        </div>
                    </div>
                </div>

            </div>

            <div className='container p-12 lg:px-20 px-5'>
                <hr className='h-1 bg-yellow-100 text-yellow-100'></hr>
            </div>

            <Footer />
        </div>
    )
}

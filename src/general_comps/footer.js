import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { FaRegCopyright } from "react-icons/fa";

export default function
    Footer() {
    return (
        <footer className="footerStyle text-white d-flex justify-content-center align-items-center g-2 flex-column ">
            <div className='container d-flex justify-content-center py-2'>
                <div className='col-md-2'>
                    <a className='text-warning' href="https://api.whatsapp.com/send/?         
                     phone=%2B972539313477&text&type=phone_number&app_absent=0"
                        rel='noreferrer' target="_blank">
                        Whatsapp
                        <IoLogoWhatsapp size={50} className='p-2' />
                    </a>
                </div>

                <div className='col-md-2'>
                    <a className='text-danger' href="https://www.instagram.com/"
                        target="_blank" rel='noreferrer'>
                        Instagram
                        <FaSquareInstagram size={50} className='p-2' />
                    </a>
                </div>
                <div className='col-md-2'>
                    <a className='text-info' href="https://www.linkedin.com/"
                        target="_blank" rel='noreferrer'>
                        Linkedin
                        <FaLinkedin size={50} className='p-2' />
                    </a>
                </div>
                <div className='col-md-2'>
                    <a className='text-white '
                        href="https://www.youtube.com/"
                        target="_blank" rel='noreferrer'>
                        Youtube
                        <TfiYoutube size={50} className='p-2' />
                    </a>
                </div>
            </div>

            <p className='text-center'>
                <FaRegCopyright size={20} />All right Reserved By kobi Shina contact email:
                <a className='text-warning '
                    href="https://www.gmail.com/"
                    target="_blank" rel='noreferrer'>
                    yshina100@gmail.com
                </a>

            </p>
        </footer>
    )
}


{/* <footer class="container-fluid bg-dark">
    <div class="container">
        <div class="row d-flex align-items-center justify-content-center text-center">

            <p class="d-flex m-0 p-0 text-center align-items-center justify-content-center">&copy All
                right
                Reserved By kobi shina
                contact email: yshina100@gmail.com
                <div class="icons" data-aos="flip-left">
                    <a href="https://api.whatsapp.com/send/?phone=%2B972539313477&text&type=phone_number&app_absent=0"
                        target="_blank">
                        <i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram"
                        aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank"><i class="fa fa-linkedin"
                        aria-hidden="true"></i></a>
                    <a href="https://www.youtube.com/" target="_blank"><i class="fa fa-youtube"
                        aria-hidden="true"></i></a>
                    <a href="https://myaccount.google.com/" target="_blank"><i class="fa fa-google-plus-official"
                        aria-hidden="true"></i></a>
                </div>
            </p>

        </div>
    </div>
</footer> */}
import React from 'react'
import africa from "../img/places/africaView.jpg";
import boat from "../img/places/boatView.jpg";
import haGiang from "../img/places/haGiangView.jpg";
import kremlin from "../img/places/kremlinView.jpg";
import london from "../img/places/londonView.jpg";
import mountain from "../img/places/mountainView.jpg";
import sanFarcisco from "../img/places/sanFarcisciView.jpg";
import umbrella from "../img/places/umbrellaView.jpg";
import GoogleMaps from '../general_comps/googleMaps';
import ReadMore from '../general_comps/readMore';
import LightBox from '../general_comps/lightBox';

export default function Contact() {
    return (
        <main className='container-fluid' style={{
            // backgroundColor: "#380835",
            marginBottom: "-100px"
        }}>
            <h4 className="text-center pt-4" id='h4_font'>Contact Us & Gallery</h4>
            <div className='container'>
                <div className="history">
                    <h3 className="text-center m-5">Our History & why Do You need Us</h3>
                    <p className="p_history rounded-1">Travel agent companies have a rich and storied history that spans centuries, evolving alongside the development of transportation, technology, and global tourism. Originating in the 19th century, travel agencies emerged as intermediaries between travelers and transportation providers, facilitating organized journeys and offering comprehensive travel services.

                        The roots of modern travel agencies can be traced back to the mid-1800s when pioneers like Thomas Cook and Cox & Kings pioneered the concept of organized group tours and package holidays. Thomas Cook's inaugural rail excursion in 1841 marked the beginning of mass tourism, laying the groundwork for the travel industry's expansion.

                        Throughout the late 19th and early 20th centuries, travel agencies flourished as railroads, steamships, and later, airlines, revolutionized global transportation. Travel agents played a crucial role in orchestrating complex travel itineraries, booking accommodations, and arranging guided tours, catering to the needs of affluent clientele and adventurous explorers.

                        The advent of commercial aviation in the 1920s revolutionized the travel landscape, making air travel accessible to a wider audience. Travel agencies adapted to this new mode of transportation, specializing in airline ticketing and promoting air travel as a convenient and glamorous way to explore the world.

                        The post-World War II era witnessed a surge in leisure travel,
                        driven by rising incomes, increased leisure time, and the allure of exotic destinations. Travel agents capitalized on this trend, offering packaged tours, cruises, and vacation packages to an expanding market of eager travelers.
                        <span ><ReadMore /></span>
                    </p>
                    <div className="images mt-5">
                        <h3 className="text-center mb-5">Gallery Of Traveling & video</h3>
                        <LightBox />
                        <img data-img className="col-lg-2" src={africa} alt="Africa"
                            data-aos="zoom-in" data-aos-delay="150" data-aos-duration="800" />
                        <img data-img className="col-lg-2" src={boat} alt="Boat HaLong Bay"
                            data-aos="zoom-in-down" />
                        <img data-img className="col-lg-2" src={haGiang} alt="ha Giang"
                            data-aos="flip-left" />
                        <img data-img className="col-lg-2" src={kremlin} alt="kremlin"
                            data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" />
                        <img data-img className="col-lg-2" src={london} alt="London"
                            data-aos="fade-up" data-aos-anchor-placement="top-center" />
                        <img data-img className="col-lg-2" src={mountain} alt="Mountain"
                            data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" />
                        <img data-img className="col-lg-2" src={sanFarcisco} alt="San Farcisco"
                            data-aos="zoom-out" />
                        <img data-img className="col-lg-2 " src={umbrella} alt="Umbrella Show"
                            data-aos="flip-left" />

                        <h3 className="text-center m-5">Video clips</h3>
                        <div className="youtube_video d-flex m-0 p-0">
                            <p><iframe width="400" height="300" src="https://www.youtube.com/embed/WLSnrXEtrT4?si=Lbguoh_P1YTbMw4o&amp;start=01"
                                title="YouTube video player" style={{ border: "none" }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                                <iframe width="400" height="300" src="https://www.youtube.com/embed/s3LZ1xXYTlI?si=t6bVydf4v41ELTjj&amp;start=1592"
                                    title="YouTube video player" style={{ border: "none" }}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                                <iframe width="400" height="300" src="https://www.youtube.com/embed/Au6LqK1UH8g?si=wt7Ye32o8QR4fCWt&amp;start=49"
                                    title="YouTube video player" style={{ border: "none" }}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <aside className="container">
                <h4>Our Location in Google maps</h4>
                <div className="contact_info">

                    <div className="">
                        <GoogleMaps/>
                        <p className='mt-5 mx-auto col-10 text-center'>We are located in the center of Tel Aviv Israel Contact phone: 03-5777777 Email: yshina100@gmail.com
                            You can also search on social networks available 24/7 if there is no answer please send your inquiry
                            and we will get
                            back to you as soon as possible thank you very much.</p>
                    </div>

                </div>
            </aside>
        </main >

        // info about the company
        // map location adress
        //gallery photos and video can open the photo and close
        //js read more
        //js press button big photo and close photo
    )
}

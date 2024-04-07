import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { doApiGet } from '../services/apiServices';
import { API_URL } from '../constant/urls';
import axios from 'axios';
import Select from "react-select";
import MyCarousel from '../general_comps/myCarousel';
import Footer from '../general_comps/footer';
import useAOS from '../hooks/useAOS';

import africa from "../img/africa.jpg";
import america from "../img/america.jpg";
import asia from "../img/asia.jpg";
import europe from "../img/europe.jpg";
import israel from "../img/israel.jpg";
import vietnam from "../img/vietnam.png";
import { MyContext } from '../context/myContext';



export default function HomePage() {

    const { user } = useContext(MyContext)

    const [options, setOptions] = useState([])
    const [loading, setLoadinbg] = useState(true)
    const [country, setCountry] = useState("")
    const nav = useNavigate()
    // useAOS({ duration: 800 })

    useEffect(() => {
        getOptions()
    }, [])

    const getOptions = async () => {
        try {
            const { data } = await axios.get("https://restcountries.com/v3.1/all");
            createSelectOptionFormat(data)
            setLoadinbg(false)
        }
        catch (error) {
            setLoadinbg(false)
            alert(error)
        }
    }
    const createSelectOptionFormat = (data) => {
        const optionsArray = []
        for (let country of data) {
            optionsArray.push({ label: country.name.common, value: country.name.common })
        }
        setOptions(optionsArray)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        nav("/myTrip?name=" + country)

    }
    return (

        <div onSubmit={onSubmit} className="container-fluid bg_home p-0">
            <div className="text-center pt-4 ">
                <h1 className="fs-1 fst-italic m-0 pt-2 py-2 h1Fount ">wellcome to your trip today </h1>
            </div>
            <MyCarousel />
            <div className='container pb-5 pt-5'>
                <div className='row py-3 '>

                    {/* box */}
                    <div className='col-md-4 col-12 mt-3 p-4'>
                        <div data-aos="fade-down-right">
                            <div className='p-3 border border-1 rounded box'>
                                <h4 className='text-center'>Israel</h4>
                                <div >
                                    <img className='w-100 py-2' src={israel} alt='israel' />
                                </div>
                                <p>Israel, a land of contrasts, offers travelers a rich tapestry of history, culture, and natural beauty. A land of tradition and faith,A country with a successful economy, Explore ancient sites like Jerusalem's Old City, the Dead Sea, and the fortress of Masada. Indulge in vibrant cuisine, from traditional hummus and falafel to modern fusion dishes. Experience the vibrant energy of Tel Aviv's beaches and nightlife scene. Discover the diverse landscapes, With its captivating mix of old and new.</p>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className='col-md-4 col-12 mt-3 p-4 '>
                        <div data-aos="fade-down">
                            <div className='p-3 border border-1 rounded box'>
                                <h4 className='text-center'>America</h4>
                                <div >
                                    <img className='w-100 py-2' src={america} alt='america' />
                                </div>
                                <p>America boasts a plethora of travel destinations, from the towering skyscrapers of New York City to the breathtaking natural wonders of the Grand Canyon and Yellowstone National Park. Explore the vibrant culture of cities like Los Angeles, San Francisco, and Chicago, or relax on the sun-soaked beaches of Miami and Hawaii. Delve into the rich history ,America promises an unforgettable experience for travelers of all interests enjoy the beautiful america is advanture and historical and a lot of bussiness..</p>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className='col-md-4 col-12 mt-3 p-4 '>
                        <div data-aos="fade-down">
                            <div className='p-3 border border-1 rounded box'>
                                <h4 className='text-center'>Asia</h4>
                                <div >
                                    <img className='w-100 py-2' src={asia} alt='asia' />
                                </div>
                                <p>Asia entices travelers with its remarkable diversity, from the bustling streets of Tokyo and Shanghai to the serene landscapes of Bali and the Himalayas. Discover ancient wonders like the Great Wall of China and Angkor Wat, or indulge in the vibrant street food scenes of Bangkok and Seoul. Immerse yourself in rich cultures, from the colorful festivals of India to the tranquil gardens of Japan, ensuring an unforgettable journey through this captivating continent enjoy the culture and kind pepole here beatufil view.</p>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className='col-md-4  col-12 mt-3 p-4'>
                        <div data-aos="fade-up-right">
                            <div className='p-3 border border-1 rounded box'>
                                <h4 className='text-center'>Europe</h4>
                                <div >
                                    <img className='w-100 py-2' src={europe} alt='europe' />
                                </div>
                                <p>Europe beckons travelers with its enchanting blend of history, culture, and scenic beauty. Explore iconic landmarks like the Eiffel Tower, Colosseum, and Big Ben. Indulge in culinary delights, from French pastries to Italian gelato. Wander through charming cobblestone streets in picturesque villages and bustling cities alike. With its diverse offerings, Europe promises unforgettable experiences at every turn With efficient public transportation networks and a myriad of cultural festivals and events.</p>
                            </div>
                        </div>
                    </div>

                    {/* box */}

                    <div className='col-md-4 col-12 mt-3 p-4'>
                        <div data-aos="fade-up">
                            <div className='p-3 border border-1 rounded box'>
                                <h4 className='text-center'>Africa</h4>
                                <div >
                                    <img className='w-100 py-2' src={africa} alt='africa' />
                                </div>
                                <p>Africa offers a rich tapestry of experiences for travelers, from the awe-inspiring wildlife of the Serengeti and Maasai Mara to the ancient wonders of Egypt's pyramids. Explore vibrant cultures, diverse landscapes, and bustling markets across the continent. Enjoy breathtaking safaris in Tanzania, Botswana, or South Africa, or unwind on the stunning beaches of Zanzibar or Mauritius. With its diverse offerings, Africa promises an unforgettable adventure for every traveler culture and many good food. </p>
                            </div>
                        </div>

                    </div>

                    {/* box */}
                    <div className='col-md-4  col-12 mt-3 p-4'>
                        <div data-aos="fade-down">
                            <div className='p-3 border border-1 rounded box'>
                                <h4 className='text-center'>Vietnam</h4>
                                <div >
                                    <img className='w-100 py-2' src={vietnam} alt='vietnam' />
                                </div>
                                <p>Vietnam enchants travelers with its stunning landscapes, rich culture, and delicious cuisine. Explore the bustling streets of Hanoi's Old Quarter and the vibrant markets of Ho Chi Minh City. Cruise through the iconic limestone karsts of Halong Bay or trek through the terraced rice fields of Sapa. Delve into the country's complex history at sites like the Cu Chi Tunnels and the Imperial City of Hue. With its warm hospitality and diverse offerings, Vietnam offers a diverse range of experiences for travelers.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* choose */}
                {user &&
                    <div data-aos="fade-down">

                        <form className='box_select h-50px col-md-6 m-0 p-2 border border-1 rounded col-12 mx-auto '>
                            <h3 className='text-danger text-center'>Choose Yor destination:</h3>
                            <Select onChange={(e) => setCountry(e.value)} options={options} />
                            <div className='text-center m-3'>
                                <button className='btn btn-primary  box-pill'>search</button>
                            </div>
                        </form>
                    </div>
                }

            </div>

        </div >


    );

}

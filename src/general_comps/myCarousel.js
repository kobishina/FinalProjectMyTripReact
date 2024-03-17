import React from 'react'
import { Carousel } from 'react-bootstrap';

export default function MyCarousel() {

    const asiaImg = require("../img/asia.jpg");
    const africaImg = require("../img/africa.jpg");
    const americaImg = require("../img/america.jpg");
    const europeImg = require("../img/europe.jpg");
    return (
        // <div style={{ width: '100vw', margin: 0, padding: 0 }}>

        <Carousel className='col-md-12'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={europeImg}
                    alt="Europ slide"
                    style={{ width: '100%', height: '600px' }}
                />
                <Carousel.Caption>
                    <h3>Travel Around Europ</h3>
                    <p>Discover the Charms of Europe with Us!</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={asiaImg}
                    alt="Asia slide"
                    style={{ width: '100%', height: '600px' }}
                />
                <Carousel.Caption>
                    <h3>Travel Around Asia</h3>
                    <p>Discover the Charms of Asia with Us!</p>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={americaImg}
                    alt="America slide"
                    style={{ width: '100%', height: '600px' }}
                />
                <Carousel.Caption>
                    <h3>Travel Around America</h3>
                    <p>Discover the Charms of America with Us!</p>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={africaImg}
                    alt="Africa slide"
                    style={{ width: '100%', height: '600px' }}
                />
                <Carousel.Caption>
                    <h3>Travel Around Africa</h3>
                    <p>Discover the Charms of Africa with Us!</p>
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>
        // </div>

    )
}



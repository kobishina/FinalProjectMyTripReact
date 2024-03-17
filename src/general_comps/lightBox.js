import React, { useState, useEffect } from 'react';

const LightBox = () => {
    const [lightBoxVisible, setLightBoxVisible] = useState(false);
    const [imageSrc, setImageSrc] = useState('');
    const [imageAlt, setImageAlt] = useState('');

    useEffect(() => {
        const imgList = document.querySelectorAll('img[data-img]');
        imgList.forEach((itemElem) => {
            itemElem.style.cursor = 'pointer';
            itemElem.addEventListener('click', handleClick);
        });

        return () => {
            imgList.forEach((itemElem) => {
                itemElem.removeEventListener('click', handleClick);
            });
        };
    }, []);

    const handleClick = (e) => {
        setLightBoxVisible(true);
        setImageSrc(e.target.src);
        setImageAlt(e.target.alt);
        document.body.style.overflow = 'hidden'; // Disable scrolling when lightbox is open
    };

    const closeLightBox = () => {
        setLightBoxVisible(false);
        document.body.style.overflow = 'auto'; // Enable scrolling when lightbox is closed
    };

    return (
        <div>
            {lightBoxVisible && (
                <div
                    id="light_box"
                    className="light_box"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(255, 192, 203, 0.8)', // Pink background color with transparency
                        zIndex: '9999',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden' // Prevent lateral scrolling
                    }}
                    onClick={closeLightBox}
                >
                    <div
                        style={{
                            maxWidth: '90%',
                            textAlign: 'center'
                        }}
                    >
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            style={{
                                width: '400px',
                                height: '500px',
                                maxWidth: '100vw', // Ensure image fits within viewport width
                                maxHeight: '100vh', // Ensure image fits within viewport height
                                objectFit: 'contain' // Ensure image maintains aspect ratio
                            }}
                        />
                        <p>{imageAlt}</p>
                        <button
                            style={{
                                borderRadius: '24px',
                                backgroundColor: 'red',
                                border: 'none',
                                padding: '8px 16px',
                                cursor: 'pointer'
                            }}
                            onClick={closeLightBox}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LightBox;

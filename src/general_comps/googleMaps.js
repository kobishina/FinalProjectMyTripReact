import React from 'react';

function GoogleMaps() {
    return (
        <div>

            <iframe
                className='rounded'
                title="Google Maps"
                width="100%"
                height="450"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0271719077447!2d-74.0062664845963!3d40.712752942367285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf41358e6d%3A0x94eaad6468b8ab4e!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1633580145659!5m2!1sen!2sus"
            ></iframe>
        </div>
    );
}

export default GoogleMaps;

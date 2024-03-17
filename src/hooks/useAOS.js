
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const useAOS = (osConfig = {}) => {
    useEffect(() => {
        AOS.init(osConfig);
    }, []);
}

export default useAOS

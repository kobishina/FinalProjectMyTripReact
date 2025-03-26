import React, { useEffect } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.min.css';

const FullPageScroll = ({ children }) => {
    useEffect(() => {
        new fullpage('#fullpage', {
            autoScrolling: true,  // גלילה חלקה בין עמודים
            scrollHorizontally: true, // מאפשר גלילה אופקית אם צריך
            navigation: true,  // מוסיף אינדיקציה ניווט (נקודות בצד ימין)
            anchors: ['index', 'home', 'about', 'contact', 'favorites', 'upload'], // שמות קבועים לניווט
            menu: '#menu', // מחבר את התפריט לגלילה
        });
    }, []);

    return <div id="fullpage">{children}</div>;
};

export default FullPageScroll;

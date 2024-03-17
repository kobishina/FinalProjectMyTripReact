import React, { useState } from 'react';

const ReadMore = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <p className="dots" style={{ display: isExpanded ? 'none' : 'inline' }}></p>
            <p className="more" style={{ display: isExpanded ? 'inline' : 'none' }}> The 1960s and 1970s marked a period of rapid growth and innovation for travel agent companies. The introduction of computerized reservation systems, such as SABRE and Apollo, revolutionized booking processes and enhanced efficiency, enabling travel agents to handle a greater volume of transactions and offer more diverse travel options.

                The rise of multinational travel corporations, including American Express Travel and Carlson Wagonlit Travel, further solidified the dominance of travel agent companies in the global travel industry. These companies leveraged their extensive networks, industry expertise, and marketing prowess to capture market share and expand their reach.

                In the late 20th century, the emergence of the internet and online booking platforms transformed the travel industry, posing both challenges and opportunities for traditional travel agents. While online travel agencies (OTAs) offered convenience and accessibility, travel agent companies differentiated themselves by providing personalized service, expert advice, and curated travel experiences.

                In the 21st century, travel agent companies continue to evolve in response to changing consumer preferences and technological advancements. Embracing digital tools, social media, and data analytics, travel agents enhance customer engagement, personalize recommendations, and create memorable travel experiences.

                Despite the rise of online booking platforms, travel agent companies remain integral to the travel ecosystem, catering to discerning travelers seeking expertise, convenience, and peace of mind. Whether planning luxury vacations, adventure tours, or corporate retreats, travel agents play a vital role in shaping the future of travel and hospitality.</p>
            <button className="readMore_btn rounded bg-danger" onClick={toggleReadMore}>
                {isExpanded ? 'Read less' : 'Read more...'}
            </button>
        </div>
    );
};

export default ReadMore;

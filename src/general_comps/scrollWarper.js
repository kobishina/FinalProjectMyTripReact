import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollWrapper({ children }) {
    const containerRef = useRef(null);
    const location = useLocation();
    const sections = useRef([]);

    useEffect(() => {
        sections.current = containerRef.current?.querySelectorAll(".section") || [];
    }, [children]);

    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault();

            let currentSection = sections.current.findIndex(
                (section) => section.getBoundingClientRect().top >= 0
            );

            if (event.deltaY > 0 && currentSection < sections.current.length - 1) {
                sections.current[currentSection + 1].scrollIntoView({ behavior: "smooth" });
            } else if (event.deltaY < 0 && currentSection > 0) {
                sections.current[currentSection - 1].scrollIntoView({ behavior: "smooth" });
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener("wheel", handleScroll, { passive: false });
        }

        return () => {
            if (container) {
                container.removeEventListener("wheel", handleScroll);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="scroll-container">
            {children}
        </div>
    );
}

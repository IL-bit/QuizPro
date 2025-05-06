"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const FAQ = () => {
    const router = useRouter();

    useEffect(() => {
        if (window.location.hash === "#FAQ") {
            const section = document.getElementById("thirth_section");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    return null; 
};

export default FAQ;

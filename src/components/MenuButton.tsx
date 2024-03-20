import React from "react";
import type { IconType } from "react-icons";
import { FaCode } from "react-icons/fa";

const getIconFromName = (title: string) => {
    switch (title) {
        case 'Music':
            return <FaCode></FaCode>
        case 'Programming':
            return <FaCode></FaCode>
    }
}



export default function MenuButton (title: string) {
    const icon = getIconFromName(title);
    
    return (
        <button className="w-11/12 relative flex items-center text-center justify-center mt-4 py-3 px-4 max-w-[400px] bg-white text-black rounded-full border-2 border-black shadow-box-black">
            {icon}
            <h2>{title}</h2>
        </button>
    )
}
"use client";

import { motion } from "framer-motion";

const animateText = {
    initial: {
        opacity: 0,
    },
    open: {
        opacity: 1,
        transiton: { duration: 0.3 }
    },
    closed: {
        opacity: 0,
        transition: { duration: 0.3 }
    }
}

function MenuButton({ isActive, setIsActive }) {
    return (
        <button className="menu-btn block lg:hidden" onClick={() => setIsActive(!isActive)}>
            <div className="flex items-center justify-center gap-2 cursor-pointer">
                <div className={`menu-btn__burger ${isActive ? "menu-btn__burger--active" : ""}`} />
                <div className="menu-btn__label flex items-center relative">
                    <motion.p variants={animateText} animate={!isActive ? "open" : "closed"} >Menu</motion.p>
                    <motion.p variants={animateText} animate={isActive ? "open" : "closed"}>Close</motion.p>
                </div>
            </div>
        </button>
    )
}

export default MenuButton;
"use client";

import { motion } from "framer-motion";

function MenuButton({ isActive, setIsActive }) {
    return (
        <button className="menu-btn" onClick={() => setIsActive(!isActive)}>
            <motion.div animate={{ top: isActive ? "-100%" : "0" }} className="menu-btn__slider">
                <div className="menu-btn__el">
                    <p>Menu</p>
                </div>
                <div className="menu-btn__el">
                    <p>Close</p>
                </div>
            </motion.div>
        </button>
    )
}

export default MenuButton;
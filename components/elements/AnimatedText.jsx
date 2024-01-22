"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const defaultAnimations = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.1
        }
    }
}

const AnimatedText = ({ tag, text, classNames }) => {

    console.log(text, tag);

    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.4, once: true });

    const animateText = (textToAnimate) => {
        return textToAnimate.split(" ").map((word, i) => (
            <span key={`animated-word-${i}`} className="inline-block">
                {word.split("").map((char, j) => (
                    <motion.span key={`animated-char-${j}`} className="inline-block" variants={defaultAnimations}>{char}</motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
            </span>
        ))
    }

    if (tag === "h1") {
        return <h1 className={classNames}>
            <span className="sr-only">{text}</span>
            {/* <motion.span aria-hidden initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ staggerChildren: 0.1 }}>{animateText(text)}</motion.span> */}
            <motion.span aria-hidden initial="hidden" animate={"visible"} transition={{ staggerChildren: 0.02 }}>{animateText(text)}</motion.span>
        </h1>
    }

    if (tag === "h2") {
        return <h2 className={classNames}>
            <span className="sr-only">{text}</span>
            <motion.span aria-hidden initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ staggerChildren: 0.1 }}>{animateText(text)}</motion.span>
        </h2>
    }
}

export default AnimatedText;
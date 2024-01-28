"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedText = ({ text = "" }) => {
    const [ref, inView] = useInView();
    const controls = useAnimation();
    const splitText = text.split(" ");

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <>
            <span className="sr-only">{text}</span>
            <span ref={ref}>
                {splitText?.map((word, i) => (
                    <span key={`${word + i}`} className="overflow-hidden inline-block m-[-.25em]">
                        <motion.span
                            className="inline-block p-[.2em]"
                            initial={{ y: "100%" }}
                            viewport={{ once: true }}
                            transition={{
                                y: {
                                    duration: 1.5,
                                    ease: [0.6, 0.01, -0.05, 1],
                                    delay: i / 10
                                }
                            }}
                            animate={controls}
                            variants={{ visible: { y: "0%" } }}
                        >
                            {`${word}`}
                            <motion.span className="inline-block translate-x-[100%] translate-y-[100%] p-[.2em]" />
                        </motion.span>
                    </span>
                ))}
            </span>
        </>
    )
}

export default AnimatedText;






























// const defaultAnimations = {
//     hidden: {
//         opacity: 0,
//         y: 10,
//     },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.1
//         }
//     }
// }

// const AnimatedText = ({ tag, text, classNames }) => {

//     const ref = useRef(null);
//     const isInView = useInView(ref, { amount: 0.4, once: true });

//     const animateText = (textToAnimate) => {
//         return textToAnimate.split(" ").map((word, i) => (
//             <span key={`animated-word-${i}`} className="inline-block">
//                 {word.split("").map((char, j) => (
//                     <motion.span key={`animated-char-${j}`} className="inline-block" variants={defaultAnimations}>{char}</motion.span>
//                 ))}
//                 <span className="inline-block">&nbsp;</span>
//             </span>
//         ))
//     }

//     if (tag === "h1") {
//         return <h1 className={classNames}>
//             <span className="sr-only">{text}</span>
//             {/* <motion.span aria-hidden initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ staggerChildren: 0.1 }}>{animateText(text)}</motion.span> */}
//             <motion.span aria-hidden initial="hidden" animate={"visible"} transition={{ staggerChildren: 0.02 }}>{animateText(text)}</motion.span>
//         </h1>
//     }

//     if (tag === "h2") {
//         return <h2 className={classNames}>
//             <span className="sr-only">{text}</span>
//             <motion.span aria-hidden initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ staggerChildren: 0.1 }}>{animateText(text)}</motion.span>
//         </h2>
//     }
// }

// export default AnimatedText;
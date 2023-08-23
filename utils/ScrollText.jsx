import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionTemplate
} from "framer-motion";
import "../styles/scrollText.css";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/series/scroll-animations-with-framer-motion/highlighting-text-on-scroll
 */
const ContentLine = ({ content }) => {
    const contentRef = useRef();

    const { scrollYProgress } = useScroll({
        target: contentRef,
        offset: ["end center", "start start"]
    });

    const scrollValue = useTransform(scrollYProgress, [0, 0.15], ["100%", "0%"]);
    const clipPathVal = useMotionTemplate`inset(0% ${scrollValue} 0% 0%)`;

    return (
        <span className="text-container" ref={contentRef}>
            <motion.span
                style={{ clipPath: clipPathVal }}
                className="highlighted-text"
                data-text={content}
            />
            <span className="static-text">{content}</span>
        </span>
    );
};

export const ScrollText = ({ content }) => {
    return (
        <div className="outer">
            <div className="inner">
                <p>
                    {content.map((item) => (
                        <ContentLine key={item} content={item} />
                    ))}
                </p>
            </div>
        </div>
    );
};

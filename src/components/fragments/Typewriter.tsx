import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DELAY_IN_MS = 5500;

export default function Typewriter({ texts }: { texts: string[] }) {
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % texts.length);
        setIsVisible(true);
      }, MAIN_FADE_DURATION * 1000);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <div className="text-subheadline text-secondaryE font-medium">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={textIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: MAIN_FADE_DURATION }}
            className="whitespace-pre"
          >
            {Array.from(texts[textIndex]).map((char, index) => (
              <motion.span
                key={`${textIndex}-${index}-${char}`}
                className="relative inline-block"
                style={{
                  width: char === " " ? "0.25em" : "auto",
                  marginRight: char === " " ? "0" : "0",
                }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: index * LETTER_DELAY,
                    duration: 0,
                  }}
                >
                  {char}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    delay: index * LETTER_DELAY,
                    times: [0, 0.1, 1],
                    duration: BOX_FADE_DURATION,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-secondaryE/20 backdrop-blur-3xl"
                />
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

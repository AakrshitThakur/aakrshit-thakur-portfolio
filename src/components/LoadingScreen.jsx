import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }) {
  const [text, setText] = useState("");
  const displayText = "Greetings from Aakrshit Thakur";

  // animate display text
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(displayText.substring(0, index));
      index++;

      // close set-interval & exec on-complete func when full text is displayed
      if (index > displayText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 75);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="color-base-100 color-base-content fixed inset-0 z-50 flex flex-col items-center justify-center gap-3">
      <p className="text-xl sm:text-2xl md:text-3xl text-center font-bold bg-gradient-to-r from-[#605dff] to-stone-300 bg-clip-text text-transparent">
        {text} <span className="animate-blink"> |</span>
      </p>

      <div className="w-[200px] h-[2px] bg-gray-700 relative overflow-hidden rounded-[50%]">
        <div className="animate-loading-bar w-[45%] h-full color-warning"></div>
      </div>
    </div>
  );
}

// defining props-types
LoadingScreen.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

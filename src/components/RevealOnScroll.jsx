import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export default function RevealOnScroll({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    // @params -> 1. A function that runs whenever the observed element’s visibility changes -> 2. Controls how/when the observer triggers
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When isIntersection is true, it means that the element is transitioning from non-intersecting to intersecting. But when it is false, it indicates that the element is transitioning from intersecting to non-intersecting.
        if (entry.isIntersecting) ref.current.classList.add("visible");
      },
      // The threshold property accepts a value between 0 and 1 that specifies the percentage of the element that must be visible within the viewport for the callback to be invoked.
      {
        threshold: 0.25,
      }
    );

    // We call the observe() method on the IntersectionObserver object to make the Observer start watching the element for an intersection.
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal shrink-0">
      {children}
    </div>
  );
}

RevealOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

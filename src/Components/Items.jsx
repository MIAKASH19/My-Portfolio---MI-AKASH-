import gsap from "gsap";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

// Utility function to handle both single string and array
const normalizeNavItems = (Item) => {
  if (typeof Item === "string") {
    return [Item];
  }
  return Item;
};

const Items = ({ Item }) => {
  const normalizedItems = normalizeNavItems(Item);
  const tagRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !tagRefs.current.includes(el)) {
      tagRefs.current.push(el);
    }
  };

  const handleMouseEnter = (index) => {
    gsap.to(tagRefs.current[index].querySelector(".line"), {
      width: "100%",
      duration: 0.4,
      right: 0,
      left: "auto",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(tagRefs.current[index].querySelector(".line"), {
      width: "0%",
      duration: 0.2,
      onComplete: () => {
        gsap.set(tagRefs.current[index].querySelector(".line"), {
          right: "auto",
          left: 0,
        });
      },
    });
  };

  return (
    <div className="relative flex justify-between mix-blend-difference gap-8 ">
      {normalizedItems.map((item, index) => (
        <NavLink
          ref={addToRefs}
          key={index}
          to={`/${item}`}
          target="_blank"
          className="capitalize tracking-wide relative font-plus text-white font-normal "
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          {item}
          <div className="line absolute bottom-0 left-0 w-0 h-[2px] bg-white rounded-full"></div>
        </NavLink>
      ))}
    </div>
  );
};

export default Items;

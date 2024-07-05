import React, { useRef, useEffect } from 'react';
import { gsap, Power4, Elastic } from 'gsap';

const MagnetoButton = () => {
  const magnetoRef = useRef(null);
  const magnetoTextRef = useRef(null);

  useEffect(() => {
    const magneto = magnetoRef.current;
    const magnetoText = magnetoTextRef.current;

    const activateMagneto = (event) => {
      let boundBox = magneto.getBoundingClientRect();
      let magnetoStr = 100;
      let magnetoTextStr = 60;
      const newX = (event.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
      const newY = (event.clientY - boundBox.top) / magneto.offsetHeight - 0.5;

      gsap.to(magneto, {
        duration: 1,
        x: newX * magnetoStr,
        y: newY * magnetoStr,
        ease: Power4.easeOut,
      });

      gsap.to(magnetoText, {
        duration: 1,
        x: newX * magnetoTextStr,
        y: newY * magnetoTextStr,
        ease: Power4.easeOut,
      });
    };

    const removeMagneto = () => {
      gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
      });

      gsap.to(magnetoText, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
      });
    };

    magneto.addEventListener('mousemove', activateMagneto);
    magneto.addEventListener('mouseleave', removeMagneto);

    return () => {
      magneto.removeEventListener('mousemove', activateMagneto);
      magneto.removeEventListener('mouseleave', removeMagneto);
    };
  }, []);

  return (
    <button
      ref={magnetoRef}
      className="
        rounded-full
        w-[10vw]
        min-w-[130px]
        min-h-[130px]
        max-w-[200px]
        max-h-[200px]
        h-[10vw]
        border-none
        bg-secondary
        cursor-pointer
        flex
        items-center
        justify-center
        hover:bg-white
        hover:text-secondary
      "
    >
      <div ref={magnetoTextRef} className='flex text-lg font-medium tracking-tight font-plus'>AKASH</div>
    </button>
  );
};

export default MagnetoButton;

import { useEffect } from "react";

export default function useScrollLock(locked){
        useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (locked) {
      document.body.style.overflow = "hidden"; // Lock scroll
    } 
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [locked]);
}

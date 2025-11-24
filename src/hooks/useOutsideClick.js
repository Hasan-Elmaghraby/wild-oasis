import { useEffect, useRef } from "react";

export const useOutSideClick = (handler, listenCaptring = true) => {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) handler();
    }
    document.addEventListener("click", handleClick, listenCaptring);
    return () =>
      document.removeEventListener("click", handleClick, listenCaptring);
  }, [handler, listenCaptring]);

  return ref;
};

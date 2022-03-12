import { useEffect, useRef } from "react";

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      func();
      return;
    }

    didMount.current = true;
  }, deps);
};

export default useDidMountEffect;

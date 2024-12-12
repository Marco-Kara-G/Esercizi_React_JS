import { useEffect } from "react";
import { useRef } from "react";

export function FocusableInput() {
  const inputRef = useRef(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("mounted component");
    } else {
      console.log("mounted it again");
    }

    inputRef.current?.focus();
  }, []);

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        name="input-box"
        placeholder="put name here..."
      />
    </>
  );
}

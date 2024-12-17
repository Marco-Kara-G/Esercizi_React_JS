import { useState } from "react";

export function Container({ children, title }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((x) => !x);
    console.log(toggle);
  };
  return (
    <div className="container-box">
      <div>{title}</div>
      <button onClick={handleToggle}>Toggle</button>
      {toggle && <div>{children}</div>}
    </div>
  );
}

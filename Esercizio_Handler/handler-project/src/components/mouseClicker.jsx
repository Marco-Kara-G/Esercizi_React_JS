export function MouseClicker() {
  const oneHandler = (event) => {
    console.log(event.target.name);
  };

  const twoHandler = (event) => {
    const url = event.target.src;
    if (event.target.tagName === "img") {
      console.log(url);
    } else {
      console.log(event.target.name);
    }
  };
  return (
    <div>
      <button onClick={oneHandler} name="One">
        click for "one"
      </button>
      <button onClick={twoHandler} name="Two">
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
      </button>
    </div>
  );
}

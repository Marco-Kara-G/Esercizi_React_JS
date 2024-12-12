export function UncontrolledForom() {
  const handleForm = (event) => {
    event.preventDefault();

    const userName = event.target.elements.namedItem("username").value;
    const passWord = event.target.elements.namedItem("password").value;
    const checkBox = event.target.elements.namedItem("checkbox").checked;

    const data = {
      userName,
      passWord,
      checkBox,
    };

    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <h1>My uncontrolled form</h1>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username..."
        />
        <input type="password" name="password" placeholder="Password..." />
        <label htmlFor="checkbox">Session:</label>
        <input type="checkbox" name="checkbox" />
        <button>Login</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

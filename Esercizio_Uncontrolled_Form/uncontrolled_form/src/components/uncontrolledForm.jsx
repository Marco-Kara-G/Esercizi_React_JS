export function UncontrolledLogin() {
  const onLogin = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      userName: formData.get("username"),
      passWord: formData.get("password"),
      checkBox: formData.get("checkbox") === "on" ? true : false,
    };

    console.log(data);
  };
  return (
    <div>
      <form onSubmit={onLogin}>
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

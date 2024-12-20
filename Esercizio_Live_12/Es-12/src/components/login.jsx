export function LogIn() {
  return (
    <>
      <form action="submit">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="loginEmail" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="loginPassword" />
        <button type="submit">Log In</button>
      </form>
    </>
  );
}

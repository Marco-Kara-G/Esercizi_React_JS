import "./App.css";
import { GithubUser } from "./components/GithubUser";
import { GithubUsers } from "./components/GithubUsers";

function App() {
  return (
    <>
      <div>
        <GithubUser username="Marco-Kara-G" />
        <GithubUsers />
      </div>
    </>
  );
}

export default App;

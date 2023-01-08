import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { GithubProvider } from "./context/context.jsx";

function App() {
  return (
    <>
      <GithubProvider>
        <Home />
        <Error />
      </GithubProvider>
    </>
  );
}

export default App;

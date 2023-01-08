import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import { GithubProvider } from "./context/context.jsx";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <GithubProvider>
        <div className="flex flex-col justify-between h-screen bg-blue-50 border">
          <Navbar />
          <main className="container mx-auto px-3 pb-12 mt-10">
            <Home />
          </main>
          <Footer />
        </div>
      </GithubProvider>
    </>
  );
}

export default App;

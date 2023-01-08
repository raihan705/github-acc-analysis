import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import { GithubProvider } from "./context/context.jsx";
import Footer from "./component/Footer";
import UserInfoDetails from "./pages/UserInfoDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <GithubProvider>
          <div className="flex flex-col justify-between h-screen bg-blue-50 border">
            <Navbar />
            <main className="container mx-auto px-3 pb-12 mt-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:login" element={<UserInfoDetails />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </GithubProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

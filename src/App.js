import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoutes } from "./properties/AppRoutes";
import React from "react";
import Navbar from "./components/Navbar";
import { ErrorPage } from "./components/Pages/ErrorPage";
import Home from "./components/Pages/Home";
import { Stats } from "./components/Pages/Stats";
import Menu from "./components/Menu";

function App() {
  let [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Router>
        <div>
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="h-full">
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} />

            <Routes>
              <Route path={AppRoutes.home} element={<Home />} />
              <Route path={AppRoutes.stats} element={<Stats />} />
              <Route path={AppRoutes.defoult} element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

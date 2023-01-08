import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import MyNavbar from "./components/MyNavbar";
import MyHero from "./components/MyHero";
import MyAbout from "./components/MyAbout";
import MySkills from "./components/MySkills";
import MyServices from "./components/MyServices";
import MyProjects from "./components/MyProjects";
import MyContact from "./components/MyContact";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div>
      <MyNavbar />
      <MyHero />
      <MyAbout />
      <MySkills />
      <MyServices />
      <MyProjects />
      <MyContact />
      <MyFooter />
    </div>
  );
}

export default App;

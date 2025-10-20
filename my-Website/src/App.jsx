import Navbar from "./components/Navbar.jsx";
import HomePage from "./routes/HomePage.jsx";
import AboutPage from "./routes/AboutPage.jsx";
import ProjectPage from "./routes/ProjectPage.jsx";
import ConnectPage from "./routes/ConnectPage.jsx";
import { Routes, Route } from 'react-router';


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/AboutPage" element={<AboutPage></AboutPage>}></Route>
        <Route path="/ProjectPage" element={<ProjectPage></ProjectPage>}></Route>
        <Route path="/ConnectPage" element={<ConnectPage></ConnectPage>}></Route>
      </Routes>
      
    </>
  );
}

export default App

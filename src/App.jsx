import "./App.css";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import {HomePage} from "./pages"
import {FilmsPage} from "./pages"


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<HomePage />}/>
      <Route path = "/films" element = {<FilmsPage />}/>
    </Routes>
  </BrowserRouter>
  <nav>
    <ul>
      <li>
        <NaveLink to = "/"></NaveLink>
      </li>
      <li>
        <NavLink to = "/films">Films</NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default App;

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects  from "./components/Projects";
import App from './components/App'
import Header from "./components/Header";


ReactDOM.render(
    <BrowserRouter>
    <Header/>
        <Routes >
            <Route exact path="/My-Portfolio" element={<App />} />
            <Route path="/Projects" element={<Projects />}/>
        </Routes>
    </BrowserRouter>
    , document.getElementById('root'))
import "./App.css";
//import HomePage from './pages/HomePage'
import AboutPage from "./pages/AboutPage";
import {BrowserRouter,Routes,Route} from "react-router-dom";
//import { Link } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
<>
<BrowserRouter>
    <Routes>

    <Route exact path='/' element={<HomePage/>}></Route>
    <Route exact path='/AboutPage' element={<AboutPage/>}></Route>
    <Route exact path='/SignupPage' element={<SignupPage/>}></Route>
    <Route exact path='/LoginPage' element={<LoginPage/>}></Route>
    </Routes>
    </BrowserRouter>

</>
);
}

export default App;

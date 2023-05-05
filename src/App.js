import "./App.css";
//import HomePage from './pages/HomePage'
import AboutPage from "./pages/AboutPage";
import {BrowserRouter,Routes,Route} from "react-router-dom";
//import { Link } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage"
import ProfilesettingPage from "./pages/ProfilesettingPage";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
<>
<BrowserRouter>
    <Routes>

    <Route exact path='/' element={<HomePage/>}></Route>
    <Route exact path='/AboutPage' element={<AboutPage/>}></Route>
    <Route exact path='/SignupPage' element={<SignupPage/>}></Route>
    <Route exact path='/LoginPage' element={<LoginPage/>}></Route>
    <Route exact path='/DashboardPage' element={<DashboardPage/>}></Route>
    <Route exact path='/ProfilesettingPage' element={<ProfilesettingPage/>}></Route>
    <Route exact path='/ContactForm' element={<ContactForm/>}></Route>
    </Routes>
    </BrowserRouter>

</>
);
}

export default App;

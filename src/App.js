import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Home from "./Components/Home/Home/Home";
import { Route, Routes } from "react-router-dom";
import Asia from "./Components/ExploreWorld/Asia/Asia";
import Europe from "./Components/ExploreWorld/Europe/Europe";
import USA from "./Components/ExploreWorld/USA/USA";
import Registration from "./Components/UserMenual/Registration/Registration";
import Login from "./Components/UserMenual/Login/Login";
import Booking from "./Components/ExploreWorld/Booking/Booking";
import RequireAuth from "./Components/UserMenual/RequireAuth/RequireAuth";
import PagenotFound from "./Components/PagenotFound/PagenotFound";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/asia" element={<Asia></Asia>}></Route>
        <Route path="/europe" element={<Europe></Europe>}></Route>
        <Route path="/usa" element={<USA></USA>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<PagenotFound></PagenotFound>}></Route>

        <Route
          path="/booking"
          element={
            <RequireAuth>
              <Booking></Booking>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;

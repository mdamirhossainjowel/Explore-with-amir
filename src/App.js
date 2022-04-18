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

        <Route path="/login" element={<Login></Login>}></Route>

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

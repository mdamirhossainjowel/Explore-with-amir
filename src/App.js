import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Home from "./Components/Home/Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Asia from "./Components/ExploreWorld/Asia/Asia";
import Europe from "./Components/ExploreWorld/Europe/Europe";
import USA from "./Components/ExploreWorld/USA/USA";
import Registration from "./Components/UserMenual/Registration/Registration";
import Login from "./Components/UserMenual/Login/Login";
import Booking from "./Components/ExploreWorld/Booking/Booking";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./_firebase.init";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/asia" element={<Asia></Asia>}></Route>
        <Route path="/europe" element={<Europe></Europe>}></Route>
        <Route path="/usa" element={<USA></USA>}></Route>

        {!user ? (
          <Route path="/login" element={<Login></Login>}></Route>
        ) : (
          <Route path="/login" element={<Navigate replace to="/" />}></Route>
        )}
        {user ? (
          <Route path="/booking" element={<Booking></Booking>}></Route>
        ) : (
          <Route path="/booking" element={<Navigate replace to="/login" />} />
        )}

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

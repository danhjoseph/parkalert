import Header from "./components/Header";
import Cards from "./components/Cards";
import Settings from "./pages/Settings";
import Alerts from "./pages/Alerts";
import Myparks from "./pages/Myparks";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import IconButton from "@mui/material/IconButton";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const alertIconStyle = {
    color: "red",
    fontSize: "40px",
    margin: "5px",
  };
  const addIconStyle = {
    color: "blue",
    fontSize: "40px",
    margin: "5px",
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/myparks/:id"
            element={
              <>
                <Header backButton="/" />
                <Myparks />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/settings"
            element={
              <>
                <Header backButton="/" />
                <Settings />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/alerts/:id"
            element={
              <>
                <Header backButton="/" />
                <Alerts />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <h1 className="text-center">National Park Alerts</h1>
                <h2 className="text-center">
                  Current as of {new Date().toDateString()}{" "}
                  {new Date().toLocaleTimeString()}
                </h2>
                <h3 class="text-center">
                  Click on the
                  <IconButton>
                    <AddLocationIcon style={addIconStyle}></AddLocationIcon>
                  </IconButton>
                  for Park Info or
                  <IconButton>
                    <NotificationImportantIcon
                      style={alertIconStyle}
                    ></NotificationImportantIcon>
                  </IconButton>
                  to see Active Park Alerts
                </h3>
                <Cards numberOfPosts={12} />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

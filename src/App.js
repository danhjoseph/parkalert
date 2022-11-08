import Header from "./components/Header";
import Cards from "./components/Cards";
import Settings from "./pages/Settings";
import Alerts from "./pages/Alerts";
import Myparks from "./pages/Myparks";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import AddLocationIcon from "@mui/icons-material/AddLocation";
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
            path="/myparks"
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
                <h1 class="text-center">
                  Click <AddLocationIcon style={addIconStyle}></AddLocationIcon>
                  to Save a Park or{" "}
                  <NotificationImportantIcon
                    style={alertIconStyle}
                  ></NotificationImportantIcon>
                  to see Alerts
                </h1>
                <Cards numberOfPosts={10} /> 
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

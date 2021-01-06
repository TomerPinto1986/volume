import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./cmps/Header/Header";
import Stations from "./pages/Stations/Stations";
import StationDetails from "./pages/StationDetails/StationDetails";
import "./assets/styles/global.scss";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route component={StationDetails} path="/station/:id" />
                    <Route component={Stations} path="/station" />
                    <Route component={Home} path="/" />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

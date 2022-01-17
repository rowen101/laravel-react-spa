require("./bootstrap");

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./components/routes";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to={"/superadmin"}>Dashboard</Link> |
                    <Link to={"/superadmin/item-list"}>Items</Link>
                    <Routes />
                </div>
            </Router>
        );
    }
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}

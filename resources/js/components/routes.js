import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ItemList from "./ItemList";

class Routess extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/item-list" component={ItemList} />
                </Routes>
            </Router>
        );
    }
}

export default Routess;

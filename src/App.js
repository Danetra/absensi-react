// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
// import { Routes, Route } from "react-router-dom";
// import { sidebar } from "Components/sidebar";
// import { render } from "@testing-library/react";
// import Navbar from "./Components/Navbar";
import axios from "axios";

import Table from "react-bootstrap/Table";
import { TableHeader, TableBody } from "./Users/View";

// function App() {
//   <Navbar />;
// }
// const api = axios.create({
//   baseURL: `http://localhost:4000/`,
// });

class App extends Component {
  // state = {
  //   users: [],
  // };

  // componentDidMount() {
  //   axios.get("http://localhost:4000/users").then((res) => {
  //     console.log(res.data);
  //     this.setState({ users: res.data });
  //   });
  // }

  render() {
    return (
      // <Navbar />
      <Table striped>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import axios from "axios";

// class View extends Component {
//   state = {
//     users: [],
//   };

//   componentDidMount() {
//     axios.get("http://localhost:4000/users").then((res) => {
//       console.log(res.data);
//       this.setState({ users: res.data });
//     });
//   }
// }

// function

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  );
};

export { TableHeader, TableBody };

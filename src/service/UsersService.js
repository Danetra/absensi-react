import axios from "axios";

const getUsers = () => {
  axios.get("http://localhost:4000/users").then((res) => {
    console.log(res.data);
  });
};

// export default new 0();
export { getUsers };

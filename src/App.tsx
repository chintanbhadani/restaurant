import { ToastContainer } from "react-toastify";
import Routes from "./Routes";
import "./assets/css/index.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes />
    </>
  );
};

export default App;

import {
  Route,
  Routes as ReactRoutes,
  BrowserRouter,
  Outlet,
  Navigate,
} from "react-router-dom";
import Auth from "./container/auth";
import { useSelector } from "react-redux";
import Login from "./components/login";
import { ReduxState } from "./helper/interface";

const ProtectedRoutes = () => {
  const token = useSelector((state: ReduxState) => state.base.token);
  return token ? <Outlet /> : <Navigate to="auth/login" />;
};

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="" element={<Auth />}>
          <Route path="/" element={<Login />} />
        </Route>
        {/* <Route path="/" element={<ProtectedRoutes />}></Route> */}
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;

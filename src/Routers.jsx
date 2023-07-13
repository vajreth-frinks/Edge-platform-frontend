

import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WithNavbar from "./components/layouts/withNavbar";
import WithSideBar from "./components/layouts/withSidebar";
import CreateInstance from "./pages/Instance/create/index";

const Login = lazy(() => import("./pages/login/index"));
const Register = lazy(() => import("./pages/register/index"));
const Home = lazy(() => import("./pages/home/index"));
const Project = lazy(() => import("./pages/Instance/index"));


function Routers() {
  return (
    <BrowserRouter>
      <Suspense fallback={"...Loading"}>
        <Routes>
          <Route path="" element={<WithNavbar />}>
            <Route path="/projects" element={<Project />} />
            <Route path="/create-instance" element={<CreateInstance />} />
            <Route element={<WithSideBar />}>
           
           
              
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Routers;

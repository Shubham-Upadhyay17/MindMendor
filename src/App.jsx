import UI from "./components/UI/UI";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Userlogin from "./components/authentication/User/Userlogin";
import Userregister from "./components/authentication/User/Userregister";
import Therapistregister from "./components/authentication/Therapist/Therapistregister";
import Therapistlogin from "./components/authentication/Therapist/Therapistlogin";

import Adminhome from "./admin/components/Adminhome";
import Login from "./admin/components/Login";
import Register from "./admin/components/Register"
import Adminui from "./admin/components/Adminui"
import Therapistlist from "./components/Therapistlist";


function App() {
  const router = createBrowserRouter([
    {
      path: "/MindMendor",
      element: <Home />,
    },
    {
      path: "/MindMendor/ui",
      element: <UI />,
    },
    {
      path: "/MindMendor/therapists",
      element: <Therapistlist />,
    },
    {
      path: "/MindMendor/userlogin",
      element: <Userlogin />,
    },
    {
      path: "/MindMendor/userregister",
      element: <Userregister />,
    },
    {
      path: "/MindMendor/therapistlogin",
      element: <Therapistlogin />,
    },
    {
      path: "/MindMendor/therapistregister",
      element: <Therapistregister />,
    },

    {
      path: "/MindMendor/admin/",
      element: <Adminhome />,
    },
    {
      path: "/MindMendor/admin/adminui",
      element: <Adminui />,
    },
    {
      path: "/MindMendor/admin/login",
      element: <Login />,
    },
    {
      path: "/MindMendor/admin/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

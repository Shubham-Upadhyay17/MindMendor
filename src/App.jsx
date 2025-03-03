import UI from "./components/UI/UI";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Userlogin from "./components/authentication/User/Userlogin";
import Userregister from "./components/authentication/User/Userregister";
import Therapistregister from "./components/authentication/Therapist/Therapistregister";
import Therapistlogin from "./components/authentication/Therapist/Therapistlogin";

import Adminhome from "./admin/components/Adminhome";
import Login from "./admin/components/Login";
import Register from "./admin/components/Register";
import Adminui from "./admin/components/Adminui";
import Therapistlist from "./components/Therapistlist";

import { ToastContainer } from "react-toastify";
import TherapistDashboardLayout from "./Therapist/_components/TherapistDashboardLayout";
import TherapistDashboard from "./Therapist/_components/Dashboard/TherapistDashboard";
import Account from "./Therapist/_components/Dashboard/Account";
import Notification from "./Therapist/_components/Dashboard/Notification";
import Appointments from "./Therapist/_components/Dashboard/Appointments";
import Earnings from "./Therapist/_components/Dashboard/Earnings";
import Patients from "./Therapist/_components/Dashboard/Patients";
import Help from "./Therapist/_components/Dashboard/Help";
import TherapistAbout from "./Therapist/_components/TherapistAbout/TherapistAbout";

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
    // {
    //   path: "/MindMendor/therapist/Home",
    //   element: <TherapistDashboardLayout />,
    // },

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
    {
      path: "/MindMendor/Therapist/about",
      element: <TherapistAbout />,
    },
    {
      path: "/MindMendor/therapist/",
      element: <TherapistDashboardLayout />,
      children: [
        {
          index: true,
          element: <TherapistDashboard />
        },
        {
          path: "account",
          element: <Account />
        },
        {
          path: "appointments",
          element: <Appointments />
        },
        {
          path: "earnings",
          element: <Earnings />
        },
        {
          path: "alerts",
          element: <Notification />
        },
        {
          path: "patients",
          element: <Patients />
        },
        {
          path: "help",
          element: <Help />
        },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;

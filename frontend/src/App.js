import Application from "./Pages/Application";
import Register from "./Pages/Register";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import VerifyPin from "./Pages/VerifyPin";
import ApplicationStatus from "./Pages/ApplicationStatus";
import AcademicHistory from "./Pages/AcademicHistory";
import EnrollmentPlans from "./Pages/EnrollmentPlans";
import PersonalInformation from "./Pages/PersonalInformation";
import SetPassword from "./Pages/SetPassword";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStudentProfile } from "./redux/Student/Action";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import { logout } from "./redux/Auth/Action";
import Home from "./Home";
import MedicalGenetics from "./MedicalGenetics";
import AiInGenomics from "./AiInGenomics";
import Neurogenetics from "./Neurogenetics";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth, student } = useSelector((store) => store);

  useEffect(() => {
    (auth?.jwt || localStorage.getItem("jwt")) &&
      dispatch(getStudentProfile(auth.jwt || localStorage.getItem("jwt")));
  }, [auth?.jwt, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/apply");
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-between w-full h-screen bg-gray-100">
      <header className="flex justify-between text-[35px] text-red-400 p-5 bg-blue-800 w-full">
        <span>CALGENETICS</span>
        <div className=" flex justify-end items-center text-[16px] font-semibold text-gray-400">
          <a href="./" className="hover:text-red-300 no-underline text-inherit">
            HOME
          </a>
          <a href="./medical-genetics" className="hover:text-red-300 pl-4 no-underline text-inherit">
            MEDICAL GENETICS
          </a>
          <a href="./ai-in-genomics" className="hover:text-red-300 pl-4 no-underline text-inherit">
            AI IN GENOMICS
          </a>
          <a href="./neurogenetics" className="hover:text-red-300 pl-4 no-underline text-inherit">
            NEUROGENETICS
          </a>
          <a href="./apply" className="hover:text-red-300 pl-4 no-underline text-inherit">
            APPLY
          </a>
        </div>
      </header>
      <>
        {(auth?.jwt || localStorage.getItem("jwt")) && student?.student ? (
          <div className="flex justify-center">
            <div className="flex flex-col p-4 gap-2 bg-white">
              <a href="/apply">Home</a>
              <a href="/apply/personal-information">Personal Information</a>
              <a href="/apply/enrollment-plan">Enrollment Plan</a>
              <a href="/apply/academic-history">Academic History</a>
              <button
                onClick={handleLogout}
                className="mt-auto border-none bg-transparent text-[#5D4DC9] font-bold underline w-1/2 cursor-pointer"
              >
                Logout
              </button>
            </div>
            <Routes>
              <Route path="/apply" element={<ApplicationStatus />} />
              <Route
                path="/apply/academic-history"
                element={<AcademicHistory />}
              />
              <Route
                path="/apply/enrollment-plan"
                element={<EnrollmentPlans />}
              />
              <Route
                path="/apply/personal-information"
                element={<PersonalInformation />}
              />
            </Routes>
          </div>
        ) : (
          <Routes>
            <Route path="/apply" element={<Application />} />
            <Route path="/apply/register" element={<Register />} />
            <Route path="/apply/login" element={<Login />} />
            <Route path="/apply/verify-pin" element={<VerifyPin />} />
            <Route path="/apply/set-password" element={<SetPassword />} />
            <Route path="/apply/forgot-password" element={<ForgotPassword />} />
            <Route path="/apply/reset-password" element={<ResetPassword />} />
          </Routes>
        )}
      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medical-genetics" element={<MedicalGenetics />} />
        <Route path="/ai-in-genomics" element={<AiInGenomics />} />
        <Route path="/neurogenetics" element={<Neurogenetics />} />
      </Routes>
      <footer className="flex flex-col w-full bg-blue-800 text-center p-8">
        <p className="text-gray-400 text-[20px]">
          Copyright © 2024 California Institute of Genetics LLC- BPPE Exempt
          Status - Registered under California Secretary of State. All Rights
          Reserved.
        </p>
        <div className="mt-10 flex justify-evenly text-[25px] text-gray-400">
          <a href="" className="hover:text-red-300 no-underline text-inherit">
            Home
          </a>
          <a href="" className="hover:text-red-300 no-underline text-inherit">
            Medical Genetics
          </a>
          <a href="" className="hover:text-red-300 no-underline text-inherit">
            AI in Genomics
          </a>
          <a href="" className="hover:text-red-300 no-underline text-inherit">
            Neurogenetics
          </a>
          <a href="" className="hover:text-red-300 no-underline text-inherit">
            Contact Us
          </a>
          <a href="" className="hover:text-red-300 no-underline text-inherit">
            Privacy Policy
          </a>
          <a href="" className="hover:text-red-300 no-underline text-inherit">
            Terms and Conditions
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

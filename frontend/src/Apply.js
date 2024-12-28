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

export default function Apply() {
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
    <div className="bg-white px-4 py-8 shadow-lg w-[70%] flex justify-center rounded-sm">
      {(auth?.jwt || localStorage.getItem("jwt")) && student?.student ? (
        <>
          <div className="flex flex-col p-4 gap-2 min-w-fit">
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
            <Route path="/" element={<ApplicationStatus />} />
            <Route
              path="/academic-history"
              element={<AcademicHistory />}
            />
            <Route
              path="/enrollment-plan"
              element={<EnrollmentPlans />}
            />
            <Route
              path="/personal-information"
              element={<PersonalInformation />}
            />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Application />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-pin" element={<VerifyPin />} />
          <Route path="/set-password" element={<SetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      )}
    </div>
  );
}

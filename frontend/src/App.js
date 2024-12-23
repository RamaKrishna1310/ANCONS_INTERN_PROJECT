import Application from "./Pages/Application";
import Register from "./Pages/Register";
import { Route, Routes } from "react-router-dom";
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

function App() {
  const dispatch = useDispatch();
  const { auth, student } = useSelector((store) => store);

  useEffect(() => {
    (auth.jwt || localStorage.getItem("jwt")) &&
      dispatch(getStudentProfile(auth.jwt || localStorage.getItem("jwt")));
  }, [auth.jwt, dispatch]);

  return (
    <div className="flex flex-col gap-3 items-center justify-start w-full h-auto bg-gray-100">
      <header className="text-[35px] text-red-400 p-5 bg-blue-800 w-full">
        CALGENETICS
      </header>
      <div className="bg-white px-4 py-8 shadow-lg w-[70%] flex rounded-sm">
        {student?.student ? (
          <>
            <div className="flex flex-col w-[25%] p-4 gap-2 mr-4">
              <a href="/">Home</a>
              <a href="/personal-information">Personal Information</a>
              <a href="/enrollment-plan">Enrollment Plan</a>
              <a href="/academic-history">Academic History</a>
            </div>
            <Routes>
              <Route path="/" element={<ApplicationStatus />} />
              <Route path="/academic-history" element={<AcademicHistory />} />
              <Route path="/enrollment-plan" element={<EnrollmentPlans />} />
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
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;

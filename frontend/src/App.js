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

function App() {
  return (
    <div className="flex flex-col gap-3 items-center justify-start w-full h-screen bg-gray-100">
      <header className="text-[60px] text-red-400 p-5 bg-blue-800 w-full">CAL-GENETICS</header>
      <div className="bg-white px-4 py-8 shadow-lg w-[60%]">
      <Routes>
        <Route path="/" element={<Application />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-pin" element={<VerifyPin />} />
        <Route path="/application-status" element={<ApplicationStatus />} />
        <Route path="/academic-history" element={<AcademicHistory />} />
        <Route path="/enrollment-plans" element={<EnrollmentPlans />} />
        <Route path="/personal-information" element={<PersonalInformation />} />
        <Route path="/set-password" element={<SetPassword />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;

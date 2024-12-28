import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MedicalGenetics from "./MedicalGenetics";
import AiInGenomics from "./AiInGenomics";
import Neurogenetics from "./Neurogenetics";
import Apply from "./Apply";

function App() {
  
  return (
    <div className="flex flex-col gap-3 items-center justify-between w-full h-screen bg-gray-100">
      <header className="flex justify-between text-[35px] text-red-400 p-5 bg-blue-800 w-full">
        <span>CALGENETICS</span>
        <div className=" flex justify-end items-center text-[16px] font-semibold text-gray-400">
          <a href="/" className="hover:text-red-300 no-underline text-inherit">
            HOME
          </a>
          <a href="/medical-genetics" className="hover:text-red-300 pl-4 no-underline text-inherit">
            MEDICAL GENETICS
          </a>
          <a href="/ai-in-genomics" className="hover:text-red-300 pl-4 no-underline text-inherit">
            AI IN GENOMICS
          </a>
          <a href="/neurogenetics" className="hover:text-red-300 pl-4 no-underline text-inherit">
            NEUROGENETICS
          </a>
          <a href="/apply" className="hover:text-red-300 pl-4 no-underline text-inherit">
            APPLY
          </a>
        </div>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medical-genetics" element={<MedicalGenetics />} />
        <Route path="/ai-in-genomics" element={<AiInGenomics />} />
        <Route path="/neurogenetics" element={<Neurogenetics />} />
        <Route path="/apply/*" element={<Apply />} />
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

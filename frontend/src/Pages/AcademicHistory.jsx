import { useEffect, useState } from "react";
import InstituteDialog from "./InstituteDialog";
import SchoolDialog from "./SchoolDialog";
import { useDispatch, useSelector } from "react-redux";
import { getAcademicHistory } from "../redux/Student/Action";


export default function AcademicHistory() {
    const [openInstituteDialog, setOpenInstituteDialog] = useState(false);
    const [openSchoolDialog, setOpenSchoolDialog] = useState(false);
    const [instituteData, setInstituteData] = useState({});
    const [schoolData, setSchoolData] = useState({});
    const [update, setUpdate] = useState(false);

    const { student } = useSelector((store) => store);

    const dispatch = useDispatch();

    function handleInstituteClose() {
        setOpenInstituteDialog(false);
    }
    function handleInstituteOpen() {
        setOpenInstituteDialog(true);
    }
    function handleSchoolClose() {
        setOpenSchoolDialog(false);
    }
    function handleSchoolOpen() {
        setOpenSchoolDialog(true);
    }

    useEffect(() => {
        student?.student?.id && dispatch(getAcademicHistory(student.student.id));
    }, [dispatch, student?.student?.id, update]);

    return (
        <>
            <div className="w-[75%] p-4 mt-[-28px]">
                <h1>Academic History</h1>
                <table>
                    <thead>
                        <tr className="bg-gray-400 w-[100%] font-bold text-base">
                            <th>Instituition</th>
                            <th>Degree</th>
                            <th>Dates Attended</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            student?.academicHistory.length > 0 && student?.academicHistory?.filter((item) => item.type === "institute").map((history, index) => (
                                <tr key={index}>
                                    <td className="text-center">
                                        <p onClick={() => {
                                            setInstituteData(history);
                                            handleInstituteOpen(true);
                                        }} className="cursor-pointer text-blue-600 my-2">{history.institutionName}</p>
                                    </td>
                                    <td className="text-center">{history.levelOfStudy}</td>
                                    <td className="text-center">{history.startMonthYear} to {history.endMonthYear}</td>
                                </tr>
                            ))
                        }
                        <tr >
                            <td className="w-[45%]">
                                <p onClick={handleInstituteOpen} className="cursor-pointer underline text-blue-600">Add Institution</p>
                            </td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr className="bg-gray-400 w-[100%] font-bold text-base">
                            <th>School Official</th>
                            <th>School</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            student?.academicHistory.length > 0 ? (
                                <>
                                    {
                                        student?.academicHistory?.filter((item) => item.type === "school").map((history, index) => (
                                            <tr key={index}>
                                                <td className="text-center">
                                                    <p onClick={() => {
                                                        setSchoolData(history);
                                                        handleSchoolOpen(true);
                                                    }} className="cursor-pointer text-blue-600 my-2">{history.institutionName}</p>
                                                </td>
                                                <td className="text-center">{history.levelOfStudy}</td>
                                                <td className="text-center">{history.startMonthYear} to {history.endMonthYear}</td>
                                            </tr>
                                        ))
                                    }
                                    <tr >
                                        <td>
                                            <p onClick={handleSchoolOpen} className="cursor-pointer underline text-blue-600">Add School</p>
                                        </td>
                                    </tr>
                                </>
                            ) : (
                                <td className="w-[45%]">
                                    <p>You must add your instituition before you may add your school official</p>
                                </td>
                            )
                        }
                    </tbody>
                </table>
                <button className="border-none bg-[#5D4DC9] text-white py-1 px-4 rounded-sm cursor-pointer font-bold" type="submit" disabled>Continue</button>
            </div>
            <InstituteDialog open={openInstituteDialog} onClose={handleInstituteClose} update={setUpdate} instituteData={instituteData} />
            <SchoolDialog open={openSchoolDialog} onClose={handleSchoolClose} update={setUpdate} schoolData={schoolData} />
        </>
    );
}
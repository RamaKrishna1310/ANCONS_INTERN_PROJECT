import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createApplication,
  getStudentApplication,
  getStudentApplications,
} from "../redux/Student/Action";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";

const formSchema = z.object({
  type: z.string(),
});

export default function ApplicationStatus() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { student } = useSelector((store) => store);
  const [openFirstDialog, setOpenFirstDialog] = useState(false);
  const [openSecondDialog, setOpenSecondDialog] = useState(false);
  const applicationTypes = [
    { type: "Fall 2025" },
    { type: "Summer 2025" },
    { type: "Spring 2025" },
  ];
  function handleFirstClose() {
    setOpenFirstDialog(false);
  }
  function handleFirstOpen() {
    setOpenFirstDialog(true);
  }
  function handleSecondClose() {
    setOpenSecondDialog(false);
  }
  function handleSecondOpen() {
    setOpenSecondDialog(true);
  }

  const { form, handleSubmit, register } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "",
    },
  });

  const handleCreateApplication = (data) => {
    handleFirstClose();
    console.log(data);
    dispatch(createApplication(student?.student?.id, data));
    setTimeout(() => {
      !student?.error && handleSecondOpen();
    }, 100);
  };

  const handleOpenApplication = () => {
    navigate("/personal-information");
  };

  useEffect(() => {
    if (student?.student?.id) {
      dispatch(getStudentApplications(student?.student?.id));
    }
    if (student?.student?.id && student?.createdResponse?.data) {
      dispatch(
        getStudentApplication(
          student?.student?.id,
          student?.createdResponse?.data
        )
      );
    }
  }, [student?.student?.id, dispatch, student?.createdResponse?.data]);

  return (
    <>
      <div className="w-[75%] p-4 mt-[-28px]">
        <h1>Welcome to our application!</h1>
        <p>
          Thank you for your interest in the California Institute of Genetics!
          We re excited to recieve your application. If you are filling out the
          application, please contact us at.
        </p>
        <p className="font-bold text-base">
          If you are an international student please do not complete the
          visiting student application. Select the year you plan to enroll here
          and either Fall or Spring.
        </p>
        <p className="bg-gray-400 w-[100%] font-bold text-base">
          Your Applications
        </p>
        <table>
          <thead>
            <tr className="bg-gray-200 w-[100%] font-bold text-base">
              <th>Type</th>
              <th>Status</th>
              <th>Started</th>
              <th>Submitted</th>
            </tr>
          </thead>
          <tbody>
            {student?.studentApplications ? (
              student?.studentApplications?.map((item, index) => (
                <tr key={index}>
                  <td className="text-center">
                    <a href="/personal-information">{item?.type}</a>
                  </td>
                  <td className="text-center">{item?.status}</td>
                  <td className="text-center">{item?.startedAt}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  You have not yet started an application using this account.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <hr />
        <button className="cursor-pointer p-1 mx-auto border-none bg-transparent text-[#5D4DC9] text-base font-semibold underline w-full" onClick={handleFirstOpen}>Start New Application</button>
        <Dialog onClose={handleFirstClose} open={openFirstDialog}>
          <DialogTitle style={{ fontWeight: 600, fontSize: 28, color: "#5D4DC9" }}> Start new Application </DialogTitle>
          <div className="pb-6 px-6 text-sm">
            <p className="my-0 text-base font-semibold">Please select the year and term you plan to start</p>
            <p>
              (Some programs have a specific start term, such as fall only. if you
              are unsure what term your program starts, please contact the Office
              of Admissions. International students are unable to start in the
              summer term. Please select either fall or spring.)
            </p>
            <h3>Select an application type: </h3>
            <span className="font-semibold">2025</span>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleCreateApplication)}>
              <select className="w-[20%] ml-8 mt-6 p-1" name="type" {...register("type")}>
                {student?.studentApplications.length > 0
                  ? applicationTypes
                    .filter((item) =>
                      student?.studentApplications?.every(
                        (el) => el.type !== item.type
                      )
                    )
                    .map((value, index) => (
                      <option key={index} value={value.type}>{value.type}</option>
                    ))
                  : applicationTypes.map((item, index) => (
                    <option key={index} value={item.type}>{item.type}</option>
                  ))}
              </select>
              <button className="w-[26%] p-2 border-none bg-[#5D4DC9] text-white rounded-sm cursor-pointer" type="submit">Create Application</button>
            </form>
            <button className="border-none bg-transparent text-[#5D4DC9] absolute left-48 bottom-7 cursor-pointer" onClick={handleFirstClose}>Cancel</button>
          </div>
        </Dialog>
        <Dialog onClose={handleSecondClose} open={openSecondDialog}>
          <div className="p-4 w-[400px] flex flex-col text-base">
            <DialogTitle style={{ fontWeight: 600, fontSize: 28, color: "#5D4DC9", paddingTop: "0" }}>Application Details</DialogTitle>
            <div className="px-5 flex flex-col gap-5">
              <table>
                <tr>
                  <td className="font-semibold">Started</td>
                  <td className="text-sm">{student?.studentApplication?.startedAt}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Status</td>
                  <td className="text-sm">{student?.studentApplication?.status}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Type</td>
                  <td className="text-sm">{student?.studentApplication?.type}</td>
                </tr>
              </table>
              <div className="flex gap-5">
                <button
                  className="border-none rounded-sm px-3 py-1 bg-[#5D4DC9] text-white cursor-pointer"
                  type="submit"
                  onClick={handleOpenApplication}
                >Open Application</button>
                <button className="border-none p-1 bg-transparent text-[#5D4DC9]" onClick={handleSecondClose}>Cancel</button>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}

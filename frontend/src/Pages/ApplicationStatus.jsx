import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createApplication, getStudentApplication, getStudentApplications } from "../redux/Student/Action";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  type: z.string()
})

export default function ApplicationStatus() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { student } = useSelector((store) => store);
  const [openFirstDialog, setOpenFirstDialog] = useState(false);
  const [openSecondDialog, setOpenSecondDialog] = useState(false);
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

  const {form, handleSubmit, register} = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: ""
    }
  })

  const handleCreateApplication = (data) => {
    console.log(data);
    dispatch(createApplication(student?.student?.id, data));
    handleSecondOpen();
  }

  const handleOpenApplication = () => {
    navigate("/personal-information")
  }

  useEffect(() => {
    if (student?.student?.id) {
      dispatch(getStudentApplication(student?.student?.id));
      dispatch(getStudentApplications(student?.student?.id));
    }
  }, [])

  return (
    <>
      <div class="application-status-main">
        <h1>Welcome to our application!</h1>
        <p>
          Thank you for your interest in the California Institute of Genetics! We re
          excited to recieve your application. If you are filling out the
          application, please contact us at.
        </p>
        <p className="font-bold text-base">
          If you are an international student please do not complete the
          visiting student application. Select the year you plan to enroll here
          and either Fall or Spring.
        </p>
        <p className="bg-gray-400 w-[100%] font-bold text-base">Your Applications</p>
        <table>
          <tr className="bg-gray-200 w-[100%] font-bold text-base">
            <th>Type</th>
            <th>Status</th>
            <th>Started</th>
            <th>Submitted</th>
          </tr>
          <tr>
            <td>You have not yet started an application using this account.</td>
          </tr>
        </table>
        <hr />
        <button onClick={handleFirstOpen}>Start New Application</button>
        <Dialog onClose={handleFirstClose} open={openFirstDialog}>
          <DialogTitle> Start new Application </DialogTitle>
          <h3>Please select the year and term you plan to start</h3>
          <p>
            (Some programs have a specific start term, such as fall only. if you are unsure what term your program starts,
            please contact the Office of Admissions. International students are unable to start in the summer term. Please select either fall or spring.)
          </p>
          <h3>Select an application type: </h3>
          <span>2025</span>
          <form onSubmit={handleSubmit(handleCreateApplication)}>
            <select name="type" {...register("type")}>
              <option>select</option>
              <option value="Fall2025">Fall 2025</option>
              <option value="Summer2025">Summer 2025</option>
              <option value="Spring2025">Spring 2025</option>
            </select>
            <input type="submit" value="Create Application" />
          </form>
          <button onClick={handleFirstClose}>Cancel</button>
        </Dialog>
        <Dialog onClose={handleSecondClose} open={openSecondDialog}>
          <DialogTitle>Application Details</DialogTitle>
          <table>
            <tr>
              <td>Started</td>
              <td></td>
            </tr>
            <tr>
              <td>Status</td>
              <td></td>
            </tr>
          </table>
          <input type="submit" value="Open Application" onClick={handleOpenApplication} />
          <button onClick={handleSecondClose}>Cancel</button>
        </Dialog>
      </div>
    </>
  );
}

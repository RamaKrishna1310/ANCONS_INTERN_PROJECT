import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";

export default function ApplicationStatus() {
  const [openDialog, setOpenDialog] = useState(false);
  function handleClose() {
    setOpenDialog(false);
  }
  function handleOpen() {
    setOpenDialog(true);
  }

  return (
    <>
      <div class="application-status-main">
        <h1>Welcome to our application!</h1>
        <p>
          Thank you for your interest in the University of Bridgeport! We re
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
        <button onClick={handleOpen}>Start New Application</button>
        <Dialog onClose={handleClose} open={openDialog}>
          <DialogTitle> Start new Application </DialogTitle>
          <h3>Please select the year and term you plan to start</h3>
          <p>
            (Some programs have a specific start term, such as fall only. if you are unsure what term your program starts,
            please contact the Office of Admissions. International students are unable to start in the summer term. Please select either fall or spring.)
          </p>
          <h3>Select an application type: </h3>
          <span>2025</span>
          <select>
            <option>select</option>
            <option>Fall 2025</option>
            <option>Summer 2025</option>
            <option></option>
          </select>
          <input type="submit" value="Create Application"/>
          <button>Cancel</button>
        </Dialog>
        <Dialog>
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
            <input type="submit" value="Open Application" />
            <button>Cancel</button>
        </Dialog>
      </div>
    </>
  );
}

import { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";


export default function AcademicHistory() {
    const [openDialog, setOpenDialog] = useState(false);
    function handleClose() {
        setOpenDialog(false);
    }
    function handleOpen() {
        setOpenDialog(true);
    }
    return (
        <>
            <div>
                <form>
                    <h1>Academic History</h1>
                    <table>
                        <tr className="bg-gray-400 w-[100%] font-bold text-base">
                            <th>Instituition</th>
                            <th>Degree</th>
                            <th>Dates Attended</th>
                        </tr>
                        <tr >
                            <td><a href="">Add Institution</a></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="bg-gray-400 w-[100%] font-bold text-base">
                            <th>School Official</th>
                            <th>School</th>
                            <th>Status</th>
                        </tr>
                        <p>You must add your instituition before you may add your school official</p>
                    </table>
                    <input type="submit" value="Continue" />
                </form>
            </div>
            <Dialog onClose={handleClose} open={openDialog}>
                <form>
                <DialogTitle>Add Institution</DialogTitle>
                <table>
                    <tr>
                        <td>Instituition</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td><select name="" id="">
                            <option value=""></option>
                            <option value=""></option>
                        </select></td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td><select name="" id="">
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Dates Attended</td>
                        <td><input type="date" /> to <input type="date" /></td>
                    </tr>
                    <tr>
                        <td>Level of Study</td>
                        <td><select name="" id="">
                            <option value=""></option>
                            <option value=""></option>
                        </select></td>
                    </tr>
                </table>
                <h5 className="bg-gray-400 w-[100%] font-bold text-base">Submit Transcript</h5>
                <p>
                    Please upload a scanned copy or digital facsimile of your transcript from this instituition. You may upload those Pages
                    now as a single-or multi-page PDF, or each page as an image file. Your scanned document may be large and may take several
                     minutes to upload depending upon the speed of your connection.
                </p>
                <p>PDF of Scanneede Pages</p><span><input type="file" /></span>
                <input type="submit" value="Save"/>
                <button>Cancel</button>
                </form>
            </Dialog>
        </>
    );
}
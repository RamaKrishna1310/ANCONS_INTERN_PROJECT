import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { createEnrollmentPlan, getEnrollmentPlan } from "../redux/Student/Action";



const formSchema = z.object({
    selectedGraduationType: z.string().nonempty("Please select a graduation type"),
    studentType: z.string().nonempty("Please select a student type"),
    applicationType: z.string().nonempty("Please select an application type"),
    intendedMajor: z.string().nonempty("Please select an intended major"),
    isCaapApplication: z.string(),
    optionalTest: z.string(),
    honorsProgram: z.string(),
    onCampusHousing: z.string(),
    financialAid: z.string(),
});

export default function EnrollmentPlans() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { student } = useSelector((store) => store);

    const [showDiv, setShowDiv] = useState(false);

    const { form, reset, handleSubmit, register } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            selectedGraduationType: "",
            studentType: "",
            applicationType: "",
            intendedMajor: "",
            isCaapApplication: "",
            optionalTest: "",
            honorsProgram: "",
            onCampusHousing: "",
            financialAid: "",
        }
    });

    const handleSubmitEnrollmentPlan = (data) => {
        console.log(data);
        dispatch(createEnrollmentPlan(student.student.id, data));
    }

    useEffect(() => {
        student?.createdEnrollmentPlanResponse && navigate("/academic-history");
    }, [student?.createdEnrollmentPlanResponse, navigate])

    useEffect(() => {
        if (student?.student?.id) {
            dispatch(getEnrollmentPlan(student.student.id));
        }
    }, [dispatch, student?.student?.id]);

    useEffect(() => {
        student?.enrollmentPlan && reset({
            selectedGraduationType: student?.enrollmentPlan?.selectedGraduationType || "",
            studentType: student?.enrollmentPlan?.studentType || "",
            applicationType: student?.enrollmentPlan?.applicationType || "",
            intendedMajor: student?.enrollmentPlan?.intendedMajor || "",
            isCaapApplication: student?.enrollmentPlan?.isCaapApplication !== null ? student?.enrollmentPlan?.isCaapApplication ? "TRUE" : "FALSE" : "",
            optionalTest: student?.enrollmentPlan?.optionalTest !== null ? student?.enrollmentPlan?.optionalTest ? "TRUE" : "FALSE" : "",
            honorsProgram: student?.enrollmentPlan?.honorsProgram !== null ? student?.enrollmentPlan?.honorsProgram ? "TRUE" : "FALSE" : "",
            onCampusHousing: student?.enrollmentPlan?.onCampusHousing !== null ? student?.enrollmentPlan?.onCampusHousing ? "TRUE" : "FALSE" : "",
            financialAid: student?.enrollmentPlan?.financialAid !== null ? student?.enrollmentPlan?.financialAid ? "TRUE" : "FALSE" : "",
        });
    }, [student?.enrollmentPlan, reset]);

    return (
        <>
            <div className="w-[75%] p-4 mt-[-28px]">
                <h1>Enrollment Plans</h1>
                {
                    student?.error && (<p className="text-red-500">Error while processing data, please try again</p>)
                }
                <p>Thank you for your interest in Calgenetics. Please complete all required fields on the application. We look forward to working with you.
                </p>
                <form onSubmit={handleSubmit(handleSubmitEnrollmentPlan)}>
                    <p className="mt-10">What are you applying as?*</p>
                    <select name="selectedGraduationType" {...register("selectedGraduationType")} onChange={(event) => {
                        if (event.target.value !== "") {
                            setShowDiv(true);
                        } else {
                            setShowDiv(false);
                        }
                    }} required>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Graduate">Graduate</option>
                    </select>
                    {
                        (showDiv || student?.enrollmentPlan) && (
                            <div>
                                <p className="mt-8">What type of student are you?</p>
                                <select name="studentType" {...register("studentType")} required>
                                    <option value="Freshman">Freshman</option>
                                    <option value="Experienced">Experienced</option>
                                </select>
                                <p className="mt-8">Application Type*</p>
                                <ul>
                                    <li>Early Action I Deadline - December 1</li>
                                    <li>Early Action II Deadline - February 1</li>
                                </ul>
                                <select name="applicationType" {...register("applicationType")} required>
                                    <option value="Rolling Admission">Rolling Admission</option>
                                    <option value="Early1">Early1</option>
                                    <option value="Early2">Early2</option>
                                </select>
                                <p className="mt-8">What is your intended major?*</p>
                                <select name="intendedMajor" {...register("intendedMajor")} required>
                                    <option value="Computer Science">Computer Science</option>
                                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                                </select>
                                <p className="mt-8">
                                    About you applying through the <span className="font-bold text-base"> Connecticut Automatic Admissions Program (CAAP)? </span>
                                    This program is available to graduating high school seniors in Connecticut who have already been identified by their counclers as meeting admission criteria for California Institute of Genetics.
                                </p>
                                <select name="isCaapApplication" {...register("isCaapApplication")}>
                                    <option value="TRUE">Yes</option>
                                    <option value="FALSE">No</option>
                                </select>
                                <p className="mt-8">
                                    This California Institute of Genetics is a test-optional university. This means you are not required to submit test scores to be considered for admission and scholarships. Do you want us to consider your test scores as part of your admissions materials?
                                </p>
                                <p><input type="radio" name="optionalTest" value="TRUE" {...register("optionalTest")} />Yes</p>
                                <p><input type="radio" name="optionalTest" value="FALSE"
                                    {...register("optionalTest")} />No</p>
                                <p className="mt-8">Do you wish to be considered for the honors program?</p>
                                <p><input type="radio" name="honorsProgram" value="TRUE"
                                    {...register("honorsProgram")} />Yes</p>
                                <p><input type="radio" name="honorsProgram" value="FALSE"
                                    {...register("honorsProgram")} />No</p>
                                <p className="mt-8">Are you interested in on-campus housing? The California Institute of Genetics has a vibrant on-campus community. We are excited to have you be a part of that. All students who live more than 30 miles away reside on-campus.
                                </p>
                                <p><input type="radio" name="onCampusHousing" value="TRUE" {...register("onCampusHousing")} />Yes</p>
                                <p><input type="radio" name="onCampusHousing" value="FALSE" {...register("onCampusHousing")} />No</p>
                            </div>
                        )
                    }

                    <p className="mt-8">Do you plan on applying for Financial Act?</p>
                    <p><input type="radio" name="financialAid" value="TRUE" {...register("financialAid")} />I intend to apply for financial aid</p>
                    <p><input type="radio" name="financialAid" value="FALSE" {...register("financialAid")} />I do NOT intend to apply for financial aid</p>
                    <button className="border-none rounded-sm bg-[#5D4DC9] text-white py-1 px-4 font-bold mt-8" type="submit">Continue</button>
                </form>
            </div>
        </>
    );
}
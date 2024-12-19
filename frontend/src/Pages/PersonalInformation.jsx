import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { createPersonalInformation } from "../redux/Student/Action";

const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    middleName: z.string(),
    otherFirstName: z.string(),
    otherLastName: z.string(),
    prefix: z.string(),
    suffix: z.string(),
    country1: z.string(),
    streetAddress1: z.string(),
    city1: z.string(),
    state1: z.string(),
    postalCode1: z.string(),
    country2: z.string(),
    streetAddress2: z.string(),
    city2: z.string(),
    state2: z.string(),
    postalCode2: z.string(),
    dayTimeNo: z.string(),
    homePhone: z.string(),
    cellPhone: z.string(),
    gender: z.string(),
    dateOfBirth: z.string().date(),
    primaryCitizenship: z.string(),
    dualCitizenship: z.string(),
    socialSecurityNumber: z.string(),
    hispanicOrLatino: z.string(),
    memberGroups: z.string().array(),
})

export default function PersonalInformation() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { student } = useSelector((store) => store);

    const { form, handleSubmit, register } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            middleName: "",
            otherFirstName: "",
            otherLastName: "",
            prefix: "",
            suffix: "",
            country1: "",
            streetAddress1: "",
            city1: "",
            state1: "",
            postalCode1: "",
            country2: "",
            streetAddress2: "",
            city2: "",
            state2: "",
            postalCode2: "",
            dayTimeNo: "",
            homePhone: "",
            cellPhone: "",
            gender: "",
            dateOfBirth: null,
            primaryCitizenship: "",
            dualCitizenship: "",
            socialSecurityNumber: "",
            hispanicOrLatino: "",
            memberGroups: []
        }
    })

    const handleCreatePersonalInformation = (data) => {
        const studentDto = {
            firstName: data.firstName,
            lastName: data.lastName,
            dateOfBirth: data.dateOfBirth,
            personalInformation: {
                middleName: data.middleName,
                otherFirstName: data.otherFirstName,
                otherLastName: data.otherLastName,
                prefix: data.prefix,
                suffix: data.suffix,
                dayTimeNo: data.dayTimeNo,
                homePhone: data.homePhone,
                cellPhone: data.cellPhone,
                gender: data.gender,
                primaryCitizenship: data.primaryCitizenship,
                dualCitizenship: data.dualCitizenship,
                socialSecurityNumber: data.socialSecurityNumber,
                hispanicOrLatino: data.hispanicOrLatino,
                memberGroups: [...data.memberGroups]
            },
            addresses: [
                {
                    country1: data.country1,
                    streetAddress1: data.streetAddress1,
                    city1: data.city1,
                    state1: data.state1,
                    postalCode1: data.postalCode1,
                },
                {
                    country2: data.country2,
                    streetAddress2: data.streetAddress2,
                    city2: data.city2,
                    state2: data.state2,
                    postalCode2: data.postalCode2,
                }
            ],
        }
        console.log("personalInformationFormData ", data);
        dispatch(createPersonalInformation(student?.student?.id, studentDto))
        navigate("/enrollment-plans")
    }

    return (
        <>
            <div>
                <div>
                    <a href="#">Home</a>
                    <a href="#">Personal Background</a>
                </div>
                <div>
                    <form onSubmit={handleSubmit(handleCreatePersonalInformation)}>
                        <h1>Personal Information</h1>
                        <p>
                            Please enter your information in each of the following sections. Fields with an asterik(*) are required and must be
                            completed before you can submit your application. Additional questions may become required based on your answers to a
                            previous question. <span className="font-bold text-base"> You will be able to continue to the rest of the application once this section has been completed in full.</span>
                        </p>
                        <p className="bg-gray-400 w-[100%] font-bold text-base">Name</p>
                        <table>
                            <tr>
                                <td>Prefix</td>
                                <td><select name="prefix" {...register("prefix")}>
                                    <option value="Mr.">Mr.</option>
                                    <option value="Ms.">Ms.</option>
                                </select>
                                </td>
                            </tr>
                            <tr>
                                <td>*First Name</td>
                                <td><input type="text" placeholder="Enter your Name"
                                    name="firstName"
                                    {...register("firstName")}
                                    required
                                /></td>
                            </tr>
                            <tr>
                                <td>Middle Name</td>
                                <td><input type="text"
                                    name="middleName"
                                    {...register("middleName")}
                                /></td>
                            </tr>
                            <tr>
                                <td>*Last Name</td>
                                <td><input type="text"
                                    name="lastName"
                                    {...register("lastName")}
                                    required
                                /></td>
                            </tr>
                            <tr>
                                <td>Suffix</td>
                                <td>
                                    <select name="suffix"
                                        {...register("suffix")}
                                    >
                                        <option value="Sir">Sir</option>
                                        <option value="Madam">Madam</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Other First Name</td>
                                <td><input type="text"
                                    name="otherFirstName"
                                    {...register("otherFirstName")}
                                /></td>
                            </tr>
                            <tr>
                                <td>Other Last Name</td>
                                <td><input type="text"
                                    name="otherLastName"
                                    {...register("otherLastName")}
                                /></td>
                            </tr>
                        </table>
                        <p className="bg-gray-400 w-[100%] font-bold text-base">*Address</p>
                        <table>
                            <tr>Permanent Address</tr>
                            <tr>
                                <td>Country</td>
                                <td><select name="country1"
                                    {...register("country1")}
                                    required
                                >
                                    <option value="India">India</option>
                                </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Street Address</td>
                                <td>
                                    <textarea name="streetAddress1"
                                        {...register("streetAddress1")}
                                        required
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td><input type="text"
                                    name="city1"
                                    {...register("city1")}
                                    required
                                /></td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>
                                    <select name="state1"
                                        {...register("state1")}
                                        required
                                    >
                                        <option value="Telangana">Telangana</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Postal Code</td>
                                <td><input type="tel"
                                    name="postalCode1"
                                    {...register("postalCode1")}
                                    required
                                /></td>
                            </tr>
                        </table>
                        <p className="bg-gray-400 w-[100%] font-bold text-base">Mailing Address</p>
                        <table>
                            <tr>
                                <td></td>
                                <td>Same as Permanent Address</td>
                            </tr>
                            <tr>
                                <td>Country</td>
                                <td><select name="country2"
                                    {...register("country2")}
                                >
                                    <option value="India">India</option>
                                </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Street Address</td>
                                <td>
                                    <textarea name="streetAddress2"
                                        {...register("streetAddress2")}
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td><input type="text"
                                    name="city2"
                                    {...register("city2")}
                                /></td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>
                                    <select name="state2"
                                        {...register("state2")}
                                    >
                                        <option value="Telangana">Telangana</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Postal Code</td>
                                <td><input type="tel"
                                    name="postalCode2"
                                    {...register("postalCode2")}
                                /></td>
                            </tr>
                            <tr>
                                <td><a href="">Insert Address</a></td>
                            </tr>
                        </table>
                        <p className="bg-gray-400 w-[100%] font-bold text-base">Email Address</p>
                        <table>
                            <tr>
                                <td>Current Email</td>
                                <td></td>
                                <td><a href="">Change Email</a></td>
                            </tr>
                        </table>
                        <p className="bg-gray-400 w-[100%] font-bold text-base">Telephone Numbers <span>(include + country code)</span></p>
                        <table>
                            <tr>
                                <td>Daytime</td>
                                <td><input type="text"
                                    name="dayTimeNo"
                                    {...register("dayTimeNo")}
                                /></td>
                            </tr>
                            <tr>
                                <td>Home Phone</td>
                                <td><input type="text"
                                    name="homePhone"
                                    {...register("homePhone")}
                                /></td>
                            </tr>
                            <tr>
                                <td>Cell Phone</td>
                                <td><input type="text"
                                    name="cellPhone"
                                    {...register("cellPhone")}
                                /></td>
                            </tr>
                        </table>
                        <p className="bg-gray-400 w-[100%] font-bold text-base">Biological Information</p>
                        <table>
                            <tr>
                                <td>Legal Sex* we define legal sex as the current marker on your government identification documents.
                                    This includes things like your birth certificate, passport, state ID, or driver's license.
                                </td>
                                <td>
                                    <select name="gender"
                                        {...register("gender")}
                                    >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Birthdate</td>
                                <td><input type="date"
                                    name="dateOfBirth"
                                    {...register("dateOfBirth")}
                                /></td>
                            </tr>
                        </table>
                        <p className="bg-gray-400 w-[100%] font-bold text-base">Citizenship Information</p>
                        <table>
                            <tr>
                                <td>*Primary Citizenship</td>
                                <td>
                                    <select name="primaryCitizenship"
                                        {...register("primaryCitizenship")}
                                        required
                                    >
                                        <option value="India">India</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Dual Citizenship</td>
                                <td>
                                    <select name="dualCitizenship"
                                        {...register("dualCitizenship")}
                                    >
                                        <option value="United States">United States</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Social Security Number</td>
                                <td><input type="text"
                                    name="socialSecurityNumber"
                                    {...register("socialSecurityNumber")}
                                />(omit dashes)<span>   <a href="">Privacy Protection Policy</a></span></td>
                            </tr>
                            <tr>
                                <td>Race/Ethinicity</td>
                                <td>
                                    Colleges and universities are asked by many groups, Including the federal government accrediting associations,
                                    college guides, and newspapers, to describe the ethnic/racial backgrounds of their students and employees.
                                    In order to respond to these requests, we ask you to answer the following two questions.<span>   <a href="">View Definitions</a></span>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Are you Hispanic or Latino?</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><p><input type="radio" name="hispanicOrLatino" {...register("hispanicOrLatino")}
                                    value="Yes" />Yes</p>
                                    <p><input type="radio"
                                        name="hispanicOrLatino" {
                                        ...register("hispanicOrLatino")
                                        }
                                        value="No"
                                    />No</p></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Regardless of ypur answer to the prior question. please check one or more of the
                                    following groups in which you consider yourself to be a member.</td>
                                <p><input type="checkbox"
                                    name="memberGroups"
                                    {...register("memberGroups")}
                                    value="American Indian or Alaska Native"
                                />American Indian or Alaska Native</p>
                                <p><input type="checkbox"
                                    name="memberGroups"
                                    {...register("memberGroups")}
                                    value="Asian"
                                />Asian</p>
                                <p><input type="checkbox"
                                    name="memberGroups"
                                    {...register("memberGroups")}
                                    value="Black or African America"
                                />Black or African America</p>
                                <p><input type="checkbox"
                                    name="memberGroups"
                                    {...register("memberGroups")}
                                    value="Native Hawaiian or Other Pacific"
                                />Native Hawaiian or Other Pacific</p>
                                <p><input type="checkbox"
                                    name="memberGroups"
                                    {...register("memberGroups")}
                                    value="Other"
                                />Other</p>
                                <p><input type="checkbox"
                                    name="memberGroups"
                                    {...register("memberGroups")}
                                    value="White"
                                />White</p>
                            </tr>
                        </table>
                        <button type="submit">Continue</button>
                    </form>
                </div>
            </div>
        </>
    );
}
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import {
    createPersonalInformation,
    getAddresses,
    getPersonalInformation,
} from "../redux/Student/Action";
import { useEffect, useState } from "react";
import { Country, City, State } from 'country-state-city'

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
    postalCode1: z.string().refine((num) => Number(num)),
    country2: z.string(),
    streetAddress2: z.string(),
    city2: z.string(),
    state2: z.string(),
    postalCode2: z.string().refine((num) => Number(num)),
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
});

export default function PersonalInformation() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { student } = useSelector((store) => store);

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const { form, reset, handleSubmit, register } = useForm({
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
            memberGroups: [],
        },
    });

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
                memberGroups: [...data.memberGroups],
            },
            addresses: [
                {
                    type: "Permanent",
                    country: data.country1,
                    streetAddress: data.streetAddress1,
                    city: data.city1,
                    state: data.state1,
                    postalCode: data.postalCode1,
                },
                {
                    type: "Mailing",
                    country: data.country2,
                    streetAddress: data.streetAddress2,
                    city: data.city2,
                    state: data.state2,
                    postalCode: data.postalCode2,
                },
            ],
        };
        console.log("personalInformationFormData ", data);
        dispatch(createPersonalInformation(student?.student?.id, studentDto));
        setTimeout(() => {
            !student?.error && navigate("/enrollment-plan");
        }, 0);
    };

    useEffect(() => {
        if (student?.student?.id) {
            dispatch(getPersonalInformation(student?.student?.id));
            dispatch(getAddresses(student?.student?.id));
        }
    }, [student?.student?.id, dispatch]);

    useEffect(() => {
        if (student?.student?.id) {
            reset({
                firstName: student?.student?.firstName || "",
                lastName: student?.student?.lastName || "",
                middleName: student?.personalInformation?.middleName || "",
                otherFirstName: student?.personalInformation?.otherFirstName || "",
                otherLastName: student?.personalInformation?.otherLastName || "",
                prefix: student?.personalInformation?.prefix || "",
                suffix: student?.personalInformation?.suffix || "",
                country1: student?.addresses[0]?.country || "",
                streetAddress1: student?.addresses[0]?.streetAddress || "",
                city1: student?.addresses[0]?.city || "",
                state1: student?.addresses[0]?.state || "",
                postalCode1: String(student?.addresses[0]?.postalCode) || "",
                country2: student?.addresses[1]?.country || "",
                streetAddress2: student?.addresses[1]?.streetAddress || "",
                city2: student?.addresses[1]?.city || "",
                state2: student?.addresses[1]?.state || "",
                postalCode2: String(student?.addresses[1]?.postalCode) || "",
                dayTimeNo: student?.personalInformation?.dayTimeNo || "",
                homePhone: student?.personalInformation?.homePhone || "",
                cellPhone: student?.personalInformation?.cellPhone || "",
                gender: student?.personalInformation?.gender || "",
                dateOfBirth: student?.student?.dateOfBirth || null,
                primaryCitizenship: student?.personalInformation?.primaryCitizenship || "",
                dualCitizenship: student?.personalInformation?.dualCitizenship || "",
                socialSecurityNumber: student?.personalInformation?.socialSecurityNumber || "",
                hispanicOrLatino: student?.personalInformation?.hispanicOrLatino ? "TRUE" : "FALSE",
                memberGroups: student?.personalInformation?.memberGroups,
            })
        }
    }, [student?.personalInformation, student?.addresses, student?.student, reset])

    useEffect(() => {
        const getCountries = async () => {
            try {
                const result = await Country.getAllCountries();
                let allCountries = [];
                allCountries = result?.map(({ isoCode, name }) => ({
                    isoCode,
                    name
                }));
                const [{ isoCode: firstCountry } = {}] = allCountries;
                setCountries(allCountries);
                setSelectedCountry(firstCountry);
            } catch (error) {
                setCountries([]);
            }
        };

        getCountries();
    }, []);

    useEffect(() => {
        const getStates = async () => {
            try {
                const result = await State.getStatesOfCountry(selectedCountry);
                let allStates = [];
                allStates = result?.map(({ isoCode, name }) => ({
                    isoCode,
                    name
                }));
                const [{ isoCode: firstState = '' } = {}] = allStates;
                setCities([]);
                setSelectedCity('');
                setStates(allStates);
                setSelectedState(firstState);
            } catch (error) {
                setStates([]);
                setCities([]);
                setSelectedCity('');
            }
        };

        getStates();
    }, [selectedCountry]);

    useEffect(() => {
        const getCities = async () => {
            try {
                const result = await City.getCitiesOfState(
                    selectedCountry,
                    selectedState
                );
                let allCities = [];
                allCities = result?.map(({ name }) => ({
                    name
                }));
                const [{ name: firstCity = '' } = {}] = allCities;
                setCities(allCities);
                setSelectedCity(firstCity);
            } catch (error) {
                setCities([]);
            }
        };

        getCities();
    }, [selectedState]);

    return (
        <>
            <div className="w-[75%] p-4 mt-[-28px]">
                <form onSubmit={handleSubmit(handleCreatePersonalInformation)}>
                    <h1>Personal Information</h1>
                    <p>
                        Please enter your information in each of the following sections. Fields with an asterik(*) are required and must be completed before you can submit your application. Additional questions may become required based on your answers to a previous question.{" "}
                        <span className="font-bold text-base">
                            {" "}
                            You will be able to continue to the rest of the application once
                            this section has been completed in full.
                        </span>
                    </p>
                    <p className="bg-gray-400 w-[100%] font-bold text-base">Name</p>
                    <table cellPadding={4}>
                        <tbody>
                            <tr>
                                <td className="w-[35%]">Prefix</td>
                                <td>
                                    <select name="prefix" {...register("prefix")}>
                                        <option value="Mr.">Mr.</option>
                                        <option value="Ms.">Ms.</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>*First Name</td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Enter your Name"
                                        name="firstName"
                                        {...register("firstName")}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Middle Name</td>
                                <td>
                                    <input
                                        type="text"
                                        name="middleName"
                                        {...register("middleName")}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>*Last Name</td>
                                <td>
                                    <input
                                        type="text"
                                        name="lastName"
                                        {...register("lastName")}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Suffix</td>
                                <td>
                                    <select name="suffix" {...register("suffix")}>
                                        <option value="Sir">Sir</option>
                                        <option value="Madam">Madam</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Other First Name</td>
                                <td>
                                    <input
                                        type="text"
                                        name="otherFirstName"
                                        {...register("otherFirstName")}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Other Last Name</td>
                                <td>
                                    <input
                                        type="text"
                                        name="otherLastName"
                                        {...register("otherLastName")}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="bg-gray-400 w-[100%] font-bold text-base">*Address</p>
                    <p className="mt-0 bg-gray-300 font-semibold p-1">Permanent Address</p>
                    <table cellPadding={4}>
                        <tbody>
                            <tr>
                                <td className="w-[35%]">Country</td>
                                <td>
                                    <select name="country1" {...register("country1")} value={selectedCountry}
                                        onChange={(event) => setSelectedCountry(event.target.value)} required>
                                        {countries.map(({ isoCode, name }) => (
                                            <option value={isoCode} key={isoCode}>
                                                {name}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Street Address</td>
                                <td>
                                    <textarea
                                        name="streetAddress1"
                                        {...register("streetAddress1")}
                                        required
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>
                                    <select name="city1" {...register("city1")} value={selectedCity}
                                        onChange={(event) => setSelectedCity(event.target.value)} required>
                                        {cities.length > 0 ? (
                                            cities.map(({ name }) => (
                                                <option value={name} key={name}>
                                                    {name}
                                                </option>
                                            ))
                                        ) : (
                                            <option value="">No cities found</option>
                                        )}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>
                                    <select name="state1" {...register("state1")} value={selectedState}
                                        onChange={(event) => setSelectedState(event.target.value)} required>
                                        {states.length > 0 ? (
                                            states.map(({ isoCode, name }) => (
                                                <option value={isoCode} key={isoCode}>
                                                    {name}
                                                </option>
                                            ))
                                        ) : (
                                            <option value="" key="">
                                                No state found
                                            </option>
                                        )}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Postal Code</td>
                                <td>
                                    <input
                                        type="number"
                                        name="postalCode1"
                                        {...register("postalCode1")}
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="mt-0 bg-gray-300 font-semibold p-1">
                        Mailing Address
                    </p>
                    <table cellPadding={4}>
                        <tbody>
                            <tr>
                                <td className="w-[35%]">Country</td>
                                <td>
                                    <select name="country2" {...register("country2")}>
                                        <option value="India">India</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Street Address</td>
                                <td>
                                    <textarea
                                        name="streetAddress2"
                                        {...register("streetAddress2")}
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>
                                    <input type="text" name="city2" {...register("city2")} />
                                </td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>
                                    <select name="state2" {...register("state2")}>
                                        <option value="Telangana">Telangana</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Postal Code</td>
                                <td>
                                    <input
                                        type="number"
                                        name="postalCode2"
                                        {...register("postalCode2")}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="bg-gray-400 w-[100%] font-bold text-base">
                        Email Address
                    </p>
                    <table cellPadding={4}>
                        <tbody>
                            <tr>
                                <td className="w-[35%]">Current Email</td>
                                <td>{student?.student?.email}</td>
                                <td>
                                    <a href="">Change Email</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="bg-gray-400 w-[100%] font-bold text-base">
                        Telephone Numbers <span className="font-normal">(include + country code)</span>
                    </p>
                    <table cellPadding={4}>
                        <tbody>
                            <tr>
                                <td className="w-[35%]">Daytime</td>
                                <td>
                                    <input
                                        type="text"
                                        name="dayTimeNo"
                                        {...register("dayTimeNo")}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Home Phone</td>
                                <td>
                                    <input
                                        type="text"
                                        name="homePhone"
                                        {...register("homePhone")}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Cell Phone</td>
                                <td>
                                    <input
                                        type="text"
                                        name="cellPhone"
                                        {...register("cellPhone")}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="bg-gray-400 w-[100%] font-bold text-base">
                        Biological Information
                    </p>
                    <table cellPadding={4}>
                        <tbody>
                            <tr>
                                <td className="w-[35%]">
                                    Legal Sex* we define legal sex as the current marker on your government identification documents. This includes things like your birth certificate, passport, state ID, or driver's license.
                                </td>
                                <td>
                                    <select name="gender" {...register("gender")}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Birthdate</td>
                                <td>
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        {...register("dateOfBirth")}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="bg-gray-400 w-[100%] font-bold text-base">
                        Citizenship Information
                    </p>
                    <table cellPadding={4}>
                        <tbody>
                            <tr>
                                <td className="w-[35%]">*Primary Citizenship</td>
                                <td>
                                    <select
                                        name="primaryCitizenship"
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
                                    <select
                                        name="dualCitizenship"
                                        {...register("dualCitizenship")}
                                    >
                                        <option value="United States">United States</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Social Security<br />Number</td>
                                <td>
                                    <input
                                        type="text"
                                        name="socialSecurityNumber"
                                        {...register("socialSecurityNumber")}
                                    />
                                    (omit dashes)<a href=""> Privacy Protection Policy</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Race/Ethinicity</td>
                                <td>
                                    Colleges and universities are asked by many groups, Including the federal government accrediting associations, college guides, and newspapers, to describe the ethnic/racial  backgrounds of their students and employees. In order to respond to these requests, we ask you to answer the following two questions.
                                    <span>
                                        {" "}
                                        <a href="">View Definitions</a>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Are you Hispanic or Latino?</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <p className="pl-6 m-0">
                                        <input
                                            type="radio"
                                            name="hispanicOrLatino"
                                            {...register("hispanicOrLatino")}
                                            value="TRUE"
                                        />
                                        Yes
                                    </p>
                                    <p className="pl-6 m-0">
                                        <input
                                            type="radio"
                                            name="hispanicOrLatino"
                                            {...register("hispanicOrLatino")}
                                            value="FALSE"
                                        />
                                        No
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <p className="mb-2">
                                    Regardless of your answer to the prior question. please check one or more of the following groups in which you consider yourself to be a member.
                                </p>
                            </tr>
                            <tr>
                                <td></td>
                                <p className="pl-6 m-0">
                                    <input
                                        type="checkbox"
                                        name="memberGroups"
                                        {...register("memberGroups")}
                                        value="American Indian or Alaska Native"
                                    />
                                    American Indian or Alaska Native
                                </p>
                                <p className="pl-6 m-0">
                                    <input
                                        type="checkbox"
                                        name="memberGroups"
                                        {...register("memberGroups")}
                                        value="Asian"
                                    />
                                    Asian
                                </p>
                                <p className="pl-6 m-0">
                                    <input
                                        type="checkbox"
                                        name="memberGroups"
                                        {...register("memberGroups")}
                                        value="Black or African America"
                                    />
                                    Black or African America
                                </p>
                                <p className="pl-6 m-0">
                                    <input
                                        type="checkbox"
                                        name="memberGroups"
                                        {...register("memberGroups")}
                                        value="Native Hawaiian or Other Pacific"
                                    />
                                    Native Hawaiian or Other Pacific
                                </p>
                                <p className="pl-6 m-0">
                                    <input
                                        type="checkbox"
                                        name="memberGroups"
                                        {...register("memberGroups")}
                                        value="Other"
                                    />
                                    Other
                                </p>
                                <p className="pl-6 m-0">
                                    <input
                                        type="checkbox"
                                        name="memberGroups"
                                        {...register("memberGroups")}
                                        value="White"
                                    />
                                    White
                                </p>
                            </tr>
                        </tbody>
                    </table>
                    <button className="border-none bg-[#5D4DC9] text-white py-1 px-6 rounded-sm font-bold" type="submit">Continue</button>
                </form>
            </div>
        </>
    );
}

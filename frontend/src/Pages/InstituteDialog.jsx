import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogTitle } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { createAcademicHistory } from "../redux/Student/Action";
import { useEffect, useState } from "react";
import { Country, State, City } from 'country-state-city';


const formSchema = z.object({
    institutionName: z.string().nonempty("Please enter the instituition name"),
    country: z.string().nonempty("Please select a country"),
    city: z.string().nonempty("Please enter the city"),
    state: z.string().nonempty("Please select a state"),
    startMonthYear: z.string().nonempty("Please select the start month and year"),
    endMonthYear: z.string().nonempty("Please select the end month and year"),
    levelOfStudy: z.string().nonempty("Please select the level of study"),
});

export default function InstituteDialog({ open, onClose, instituteData, update }) {

    const dispatch = useDispatch();
    const { student } = useSelector((store) => store);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

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
                setSelectedCountry(instituteData?.country || firstCountry);
            } catch (error) {
                setCountries([]);
            }
        };

        getCountries();
    }, [instituteData]);

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
                setSelectedState(instituteData?.state || firstState);
            } catch (error) {
                setStates([]);
                setCities([]);
                setSelectedCity('');
            }
        };

        getStates();
    }, [selectedCountry, instituteData]);

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
                setSelectedCity(instituteData?.city || firstCity);
            } catch (error) {
                setCities([]);
            }
        };

        getCities();
    }, [selectedState, instituteData]);

    const { form, reset, handleSubmit, register } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            institutionName: "",
            country: "",
            city: "",
            state: "",
            startMonthYear: "",
            endMonthYear: "",
            levelOfStudy: "",
        }
    });

    const handleSubmitInstitute = (data) => {
        const historyId = instituteData?.id || 0;
        const historyData = {
            type : "institute",
            institutionName: data.institutionName,
            country: data.country,
            city: data.city,
            state: data.state,
            startMonthYear: data.startMonthYear,
            endMonthYear: data.endMonthYear,
            levelOfStudy: data.levelOfStudy,
        };
        console.log("historyData", historyData);
        dispatch(createAcademicHistory(student?.student?.id, historyId, historyData));
        onClose();
    }

    useEffect(() => {
        student?.createdAcademicHistoryResponse && update(Math.floor((Math.random() * 100) + 1));
    }, [student?.createdAcademicHistoryResponse, update])

    useEffect(() => {
        instituteData && reset({
            institutionName: instituteData?.institutionName || "",
            country: instituteData?.country || "",
            city: instituteData?.city || "",
            state: instituteData?.state || "",
            startMonthYear: instituteData?.startMonthYear || "",
            endMonthYear: instituteData?.endMonthYear || "",
            levelOfStudy: instituteData?.levelOfStudy || "",
        });
    }, [instituteData, reset]);

    return (
        <Dialog onClose={onClose} open={open}>
            <form className="flex flex-col pb-4 px-8 gap-4" onSubmit={handleSubmit(handleSubmitInstitute)}>
                <DialogTitle style={{ fontWeight: 600, fontSize: 28, color: "#5D4DC9", paddingLeft: "0", paddingBottom: "0" }}>Add Institution</DialogTitle>
                <table cellPadding={4}>
                    <tbody>
                        <tr>
                            <td>Instituition</td>
                            <td>
                                <input type="text" name="institutionName" {...register("institutionName")} required />
                            </td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>
                                <select name="country" {...register("country")} value={selectedCountry}
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
                            <td>City</td>
                            <td>
                                <select name="city" {...register("city")} value={selectedCity}
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
                                <select name="state" {...register("state")} value={selectedState}
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
                            <td>Dates Attended</td>
                            <td>
                                <input type="month" name="startMonthYear" {...register("startMonthYear")} /> to <input type="month" name="endMonthYear" {...register("endMonthYear")} />
                            </td>
                        </tr>
                        <tr>
                            <td>Level of Study</td>
                            <td>
                                <select name="levelOfStudy" {...register("levelOfStudy")} required>
                                    <option value="High school">Hign school</option>
                                    <option value="College">College</option>
                                    <option value="Diploma">Diploma</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* <h5 className="bg-gray-400 w-[100%] font-bold text-base">Submit Transcript</h5>
                <p>
                    Please upload a scanned copy or digital facsimile of your transcript from this instituition. You may upload those Pages now as a single-or multi-page PDF, or each page as an image file. Your scanned document may be large and may take several minutes to upload depending upon the speed of your connection.
                </p>
                <p>PDF of Scanneede Pages</p><span><input type="file" /></span> */}
                <div className="flex gap-10 px-1">
                    <button className="border-none bg-[#5D4DC9] text-white rounded-sm py-1 px-5" type="submit">Save</button>
                    <button className="border-none bg-transparent text-[#5D4DC9]" onClick={onClose}>Cancel</button>
                </div>
            </form>
        </Dialog>
    )
}
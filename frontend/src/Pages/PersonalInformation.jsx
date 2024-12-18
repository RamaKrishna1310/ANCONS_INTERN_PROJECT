export default function PersonalInformation(){
    return(
        <>
            <div>
                <div>
                    <a href="#">Home</a>
                    <a href="#">Personal Background</a>
                </div>
                <div>
                    <form>
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
                                    <td><select>
                                            <option>Mr.</option>
                                            <option>Ms.</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>*First Name</td>
                                    <td><input type="text" placeholder="Enter your Name"/></td>
                                </tr>
                                <tr>
                                    <td>Middle Name</td>
                                    <td><input type="text" /></td>
                                </tr>
                                <tr>
                                    <td>*Last Name</td>
                                    <td><input type="text" /></td>
                                </tr>
                                <tr>
                                    <td>Suffix</td>
                                    <td>
                                        <select>
                                            <option>Sir</option>
                                            <option>Madam</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Other First Name</td>
                                    <td><input type="text" /></td>
                                </tr>
                                <tr>
                                    <td>Other Last Name</td>
                                    <td><input type="text" /></td>
                                </tr>
                            </table>
                            <p className="bg-gray-400 w-[100%] font-bold text-base">*Address</p>
                            <table>
                            <tr>Permanent Address</tr>
                            <tr>
                                <td>Country</td>
                                <td><select>

                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Street Address</td>
                                <td>
                                    <textarea name="" id=""></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>
                                    <select name="" id=""></select>
                                </td>
                            </tr>
                            <tr>
                                <td>Postal Code</td>
                                <td><input type="text" /></td>
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
                                <td><select>

                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Street Address</td>
                                <td>
                                    <textarea name="" id=""></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>
                                    <select name="" id=""></select>
                                </td>
                            </tr>
                            <tr>
                                <td>Postal Code</td>
                                <td><input type="text" /></td>
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
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Home Phone</td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Cell Phone</td>
                                <td><input type="text" /></td>
                            </tr>
                            </table>
                            <p className="bg-gray-400 w-[100%] font-bold text-base">Biological Information</p>
                            <table>
                            <tr>
                                <td>Legal Sex* we define legal sex as the current marker on your government identification documents.
                                    This includes things like your birth certificate, passport, state ID, or driver's license.
                                </td>
                                <td>
                                    <select name="" id=""></select>
                                </td>
                            </tr>
                            <tr>
                                <td>Birthdate</td>
                                <td><input type="date" /></td>
                            </tr>
                            </table>
                            <p className="bg-gray-400 w-[100%] font-bold text-base">Citizenship Information</p>
                            <table>
                            <tr>
                                <td>*Primary Citizenship</td>
                                <td>
                                    <select name="" id=""></select>
                                </td>
                            </tr>
                            <tr>
                                <td>Dual Citizenship</td>
                                <td>
                                    <select name="" id=""></select>
                                </td>
                            </tr>
                            <tr>
                                <td>Social Security Number</td>
                                <td><input type="text" />(omit dashes)<span>   <a href="">Privacy Protection Policy</a></span></td>
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
                                <td><p><input type="radio" />Yes</p><p><input type="radio" />No</p></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Regardless of ypur answer to the prior question. please check one or more of the 
                                    following groups in which you consider yourself to be a member.</td>
                                    <p><input type="radio" />American Indian or Alaska Native</p>
                                    <p><input type="radio" />Asian</p>
                                    <p><input type="radio" />Black or African America</p>
                                    <p><input type="radio" />Native Hawaiian or Other Pacific</p>
                                    <p><input type="radio" />Other</p>
                                    <p><input type="radio" />White</p>
                            </tr>
                        </table>
                        <input type="submit" value="Continue"/>
                    </form>
                </div>
            </div>
        </>
    );
}
export default function EnrollmentPlans(){
    return(
        <>
            <div>
                <h1>Enrollment Plans</h1>
                <p>Thank you for your interest in Calgenetics. Please complete all required fields
                    on the application. We look forward to working with you.
                </p>
                <br />
                <br />
                <p>What are you applying as?*</p>
                <select name="" id="">
                    <option value=""></option>
                </select>
                <div>
                    <p>What type of student are you?</p>
                    <select name="" id="">
                        <option value=""></option>
                        <option value=""></option>
                    </select>

                    <p>Application Type*</p>
                    <ul>
                        <li>Early Action I Deadline - December 1</li>
                        <li>Early Action II Deadline - February 1</li>
                    </ul>

                    <select name="" id="">
                        <optgroup>
                            <option value="">Rolling Admission</option>
                            <option value=""></option>
                        </optgroup>
                    </select>
                    <p>What is your intended major?*</p>
                    <select name="" id="">
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    <p>
                        About you applying through the <span className="font-bold text-base"> Connecticut Automatic Admissions Program (CAAP)? </span>
                        This program is available to graduating high school seniors in Connecticut who have already been identified by their
                        counclers as meeting admission criteria for California Institute of Genetics. 
                    </p>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                    <p>
                        This California Institute of Genetics is a test-optional university. This means you are not required to submit test scores
                        to be considered for admission and scholarships. Do you want us to consider your test scores as part of your admissions materials?
                    </p>
                    <p><input type="radio" />Yes</p>
                    <p><input type="radio" />No</p>
                    <p>Do you wish to be considered for the honors program?</p>
                    <p><input type="radio" />Yes</p>
                    <p><input type="radio" />No</p>
                    <p>Are you interested in on-campus housing? The California Institute of Genetics has a vibrant on-campus community. We are excited to 
                        have you be a part of that. All students who live more than 30 miles away reside on-campus.
                    </p>
                    <p><input type="radio" />Yes</p>
                    <p><input type="radio" />No</p>
                </div>
                <p>Do you plan on applying for Financial Act?</p>
                <p><input type="radio" />I intend to apply for financial aid</p>
                <p><input type="radio" />I do NOT intend to apply for financial aid</p>
                <input type="submit" value="Continue"/>
            </div>
        </>
    );
}
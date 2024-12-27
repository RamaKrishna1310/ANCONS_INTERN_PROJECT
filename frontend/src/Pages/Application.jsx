export default function Application() {
    return (
        <div className="bg-white px-4 py-8 shadow-lg w-[70%] flex rounded-sm">
            <div className="p-4">
                <h1 className="mt-0 mb-10">Welcome to our Application.</h1>
                <p>
                    Thank you for your interest in the California Institute of Genetics! We are excited to recieve your application. If you have any questions as you are filling out the application, please contact us at 9874563210 or by <a href="#">email.</a>
                </p>
                <p className="font-bold">
                    If you are an international student please do not complete the visiting student application. Select the year you plan to enroll here and either Fall or Spring.
                </p>
                <div className="flex gap-4">
                    <div>
                        <h5 className="font-bold text-base mb-4 mt-5">Returning user:</h5>
                        <span>
                            If you have already started your application please login below!
                        </span>
                        <a href="./apply/login"> Log in</a>
                    </div>
                    <div>
                        <h5 className="font-bold text-base mb-4 mt-5">First-time user:</h5>
                        <span>
                            If you are a new applicant please create an account first!
                        </span>
                        <a href="./apply/register"> Create an account.</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
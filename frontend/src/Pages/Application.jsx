export default function Application() {
    return (
        <>
            <div>
                <h1>Welcome to our Application.</h1>
                <p>
                    Thank you for your interest in the California Institute of Genetics! We are excited to recieve your application.
                     If you have any questions as you are filling out the application,
                      please contact us at 9874563210 or by <a href="#">email.</a>
                </p>
                <p className="font-bold">
                    If you are an international student please do not complete the visiting student application.
                     Select the year you plan to enroll here and either Fall or Spring. 
                </p>
                <div>
                    <h5 className="font-bold text-base">Returning user:</h5>
                    <span>If you have already started your application please login below!</span>
                    <a href="./login">Log in</a>
                </div>
                <div>
                    <h5 className="font-bold text-base">First-time user:</h5>
                    <span>If you are a new applicant please create an account first!</span>
                    <a href="./register">Create an account.</a>
                </div>
            </div>



        </>
    );
}
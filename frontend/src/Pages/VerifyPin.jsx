export default function VerifyPin(){
    return(
        <>
            <div>
                <h1>Login</h1>
                <p className="verify-p"
                >A temporary PIN has been sent to your email address. if you do not recieve
                     this message in the next few minutes. please check your junk mail folder.</p>
                <form>
                    <table>
                        <tr>
                            <td>Email</td>
                            <td>your mail <a href="#">switch</a></td>
                        </tr>
                        <tr>
                            <td>Account</td>
                            <td>Account Name</td>
                        </tr>
                        <tr>
                            <td>Temporary PIN</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Birthdate</td>
                            <td><input type="date" /></td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="Login"/></td>
                        </tr>
                    </table>
                </form>
                <p><span className="font-bold text-base">First-time users: </span><a href="#">Cilck Here</a> to create an account.</p>
            </div>
        </>
    );
}
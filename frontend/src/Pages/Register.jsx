export default function Register(){
    return(
        <>
            <div class="register-main">
            <h1>Register</h1>
            <span>To register for an account, please enter the information requested below.</span>
            <form>
                <table>
                    <tr>
                        <td>Email Address</td>
                        <td><input type="email"/></td>
                    </tr>
                    <tr>
                        <td>First Name</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Birthdate</td>
                        <td><input type="date"/></td>
                    </tr>
                    <tr><input type="submit" value="Continue"/></tr>
                </table>
            </form>
            </div>
        </>
    );
}
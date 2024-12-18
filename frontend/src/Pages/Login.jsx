export default function Login(){
    return(
        <>
            <div class="login-main">
                <h1>Login</h1>
                <form>
                    <table>
                        <tr>
                            <td>Email </td>
                            <td><input type="email" required/></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type="password"/></td>
                        </tr>
                        <tr><input type="submit" value="Login"/></tr>
                    </table>
                </form>
            </div>
        </>
    );
}
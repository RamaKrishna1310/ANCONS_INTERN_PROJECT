export default function SetPassword(){
    return(
        <>
            <div class="set-password-main">
                <h1>Set Password</h1>
                <p>To protect the security of your account, please specify a new password must meet complexity requirements.</p>
                <table>
                    <tr>
                        <td>New Password</td>
                        <td><input type="password"/></td>
                    </tr>
                    <tr>
                        <td>New Password</td>
                        <td><input type="password"/></td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="Set Password"/></td>
                    </tr>
                </table>
            </div>
        </>
    );
}
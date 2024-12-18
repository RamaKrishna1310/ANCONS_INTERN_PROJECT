import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/Auth/Action";


const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
})

export default function Login(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {form, handleSubmit, register} = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = (data) => {
        console.log(data);
        dispatch(login(data));
        navigate("/");
    }

    return(
        <>
            <div>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <table>
                        <tbody>
                        <tr>
                            <td>Email </td>
                            <td><input type="email" 
                            name="email"
                            {...register("email")}
                            placeholder="Enter your email" required/></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type="password" 
                            name="password"
                            {...register("password")}
                            placeholder="Enter your password" required/></td>
                        </tr>
                        <tr><button type="submit">Login</button></tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );
}
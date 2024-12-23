import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/Auth/Action";


const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
})

export default function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { auth } = useSelector((store) => store);

    const { form, handleSubmit, register } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = (data) => {
        console.log(data);
        dispatch(login(data));
        setTimeout(() => {
            !auth?.error && navigate("/");
        }, 0);
    }

    return (
        <>
            <div className="mx-auto flex flex-col gap-2">
                <h1 className="pl-1">Login</h1>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
                    <table cellPadding={4}>
                        <tbody>
                            <tr>
                                <td>Email </td>
                                <td><input type="email"
                                    name="email"
                                    {...register("email")}
                                    placeholder="Enter your email" required /></td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td><input type="password"
                                    name="password"
                                    {...register("password")}
                                    placeholder="Enter your password" required /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="pl-1 pb-5">
                        <button className="border-none bg-[#5D4DC9] text-white rounded-sm py-1 px-4 font-bold" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </>
    );
}
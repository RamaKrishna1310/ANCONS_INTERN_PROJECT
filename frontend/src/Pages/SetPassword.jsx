import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { createPassword } from "../redux/Auth/Action";



const formSchema = z.object({
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters long" }),
}).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords does not match'
})

export default function SetPassword() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { auth } = useSelector((store) => store);

    const { formState: { errors }, handleSubmit, register } = useForm({
        resolver: zodResolver(formSchema),
    })

    const handleSetPassword = (data) => {
        console.log("Set Password data", data);
        dispatch(createPassword(auth?.student?.email, {
            password: data.password
        }));
        setTimeout(() => {
            !auth?.error && navigate("/");
        }, 100);
    }

    return (
        !auth?.error ? (
            <>
                <div className="mx-auto flex flex-col gap-2">
                    <h1 className="pl-1">Set Password</h1>
                    <p className="pl-1">To protect the security of your account, please specify a new password must meet complexity requirements.</p>
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit(handleSetPassword)}>
                        <table cellPadding={4}>
                            <tbody>
                                <tr>
                                    <td className="w-[25%]">New Password</td>
                                    <td><input type="password"
                                        name="password"
                                        {...register("password")}
                                        placeholder="Enter your password" required
                                    /></td>
                                    {errors?.password && <td>{errors.password.message}</td>}
                                </tr>
                                <tr>
                                    <td>Confirm Password</td>
                                    <td><input type="password"
                                        name="confirmPassword"
                                        {...register("confirmPassword")}
                                        placeholder="Re-enter your password" required
                                    /></td>
                                    {errors?.confirmPassword && <td>{errors.confirmPassword.message}</td>}
                                </tr>
                            </tbody>
                        </table>
                        <div className="pl-1 pb-5">
                            <button className="border-none bg-[#5D4DC9] text-white rounded-sm py-1 px-4 font-bold text-sm" type="submit">Set Password</button>
                        </div>
                    </form>
                </div>
            </>
        ) : (
            <p>{auth?.error?.response?.data?.message}</p>
        )
    );
}
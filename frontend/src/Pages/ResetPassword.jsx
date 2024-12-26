import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import { resetPassword } from "../redux/Auth/Action";
import { useEffect } from "react";


const formSchema = z.object({
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters long" }),
}).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords does not match'
})

export default function ResetPassword() {

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const { auth } = useSelector((store) => store);

    const token = new URLSearchParams(location.search).get("token");

    const { formState: { errors }, handleSubmit, register } = useForm({
        resolver: zodResolver(formSchema),
    })

    const handleResetPassword = (data) => {
        console.log("Reset Password data", data);
        dispatch(resetPassword({
            token,
            password: data.password
        }));
    }

    useEffect(() => {
        auth?.jwt && navigate("/");
    }, [auth?.jwt]);

    return (
        <div className="flex flex-col gap-4 w-full h-auto">
            <h1 className="text-2xl font-semibold text-center">Reset Password</h1>
            {
                auth?.error && (<p className="text-red-500">Something went wrong, please try again</p>)
            }
            <form onSubmit={handleSubmit(handleResetPassword)} className="flex flex-col gap-4 w-1/3 mx-auto">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    {...register("password")}
                    required
                    className="p-2 border border-gray-300 rounded-md"
                />
                {errors?.password && <p className="text-red-500">{errors.password.message}</p>}
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirmPassword"
                    {...register("confirmPassword")}
                    required
                    className="p-2 border border-gray-300 rounded-md"
                />
                {errors?.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                <button type="submit" className="bg-[#5D4DC9] border-none font-bold text-white p-2 rounded-md">
                    Reset Password
                </button>
            </form>
        </div>
    );
}
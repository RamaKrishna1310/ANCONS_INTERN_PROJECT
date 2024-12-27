import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { forgotPassword } from "../redux/Auth/Action";



const formSchema = z.object({
    email: z.string().email("Invalid email address"),
})

export default function ForgotPassword() {

    const dispatch = useDispatch();
    const { auth } = useSelector((store) => store);

    const { formState: { errors }, handleSubmit, register } = useForm({
        resolver: zodResolver(formSchema),
    })

    const handleForgotPassword = (data) => {
        console.log("Forgot Password data", data);
        dispatch(forgotPassword(data));
    }

    return (
        <div className="bg-white px-4 py-8 shadow-lg w-[70%] flex rounded-sm">
            <div className="flex flex-col gap-4 w-full h-auto">
                <h1 className="text-2xl font-semibold text-center">Forgot Password</h1>
                {auth?.loading && <p className="text-center text-orange-500">Please wait while we are sending Reset Link to your registered email</p>}
                {auth?.forgotPasswordMessage && <p className="text-center text-green-500">{auth.forgotPasswordMessage}</p>}
                <form onSubmit={handleSubmit(handleForgotPassword)} className="flex flex-col gap-4 w-1/3 mx-auto">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        {...register("email")}
                        className="p-2 border border-gray-300 rounded-md"
                        required
                    />
                    {errors?.email && <p className="text-red-500">{errors.email.message}</p>}
                    <button type="submit" className="bg-[#5D4DC9] border-none text-white p-2 rounded-md font-bold">
                        Send Reset Link
                    </button>
                </form>
            </div>
        </div>

    );
}
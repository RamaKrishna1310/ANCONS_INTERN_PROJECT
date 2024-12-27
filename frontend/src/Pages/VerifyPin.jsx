import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyPin } from "../redux/Auth/Action";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    pin: z.string().length(6, "Pin must be 6 digits long").transform(data => Number(data)),
    dateOfBirth: z.string().date(),
})

export default function VerifyPin() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { auth } = useSelector((store) => store);

    const { form, reset, handleSubmit, register } = useForm({
        resolver: zodResolver(formSchema),
    })

    const handleVerifyPin = (data) => {
        console.log("Verify Pin data", data);
        dispatch(verifyPin(auth?.student?.email, data));
    }

    useEffect(() => {
        reset({
            email: auth?.student?.email,
            dateOfBirth: auth?.student?.dateOfBirth,
        })
    }, [auth?.student, reset]);

    useEffect(() => {
        auth?.isVerified && navigate("/apply/set-password");
    }, [auth?.isVerified])

    return (
        <div className="bg-white px-4 py-8 shadow-lg w-[70%] flex rounded-sm">
            {!auth?.error ? (
                <div className="mx-auto flex flex-col gap-2">
                    <h1 className="pl-1">Login</h1>
                    <p className="verify-pin">
                        A temporary PIN has been sent to your email address. if you do not recieve this message in the next few minutes. please check your junk mail folder.
                    </p>
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit(handleVerifyPin)}>
                        <table cellPadding={4}>
                            <tbody>
                                <tr>
                                    <td className="w-[25%]">Email</td>
                                    <td>{auth?.student?.email}<a href="#"> switch</a></td>
                                </tr>
                                <tr>
                                    <td>Account</td>
                                    <td>{auth?.student?.lastName + " " + auth?.student?.firstName}</td>
                                </tr>
                                <tr>
                                    <td>Temporary PIN</td>
                                    <td><input type="text"
                                        name="pin"
                                        {...register("pin")}
                                        required
                                    /></td>
                                </tr>
                                <tr>
                                    <td>Birthdate</td>
                                    <td><input type="date"
                                        name="dateOfBirth"
                                        {...register("dateOfBirth")}
                                        required
                                    /></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="pl-1 pb-5">
                            <button className="border-none bg-[#5D4DC9] text-white rounded-sm py-1 px-4 font-bold" type="submit">Login</button>
                        </div>
                    </form>
                    <p><span className="font-bold text-base">First-time users: </span><a href="/apply/register">Cilck Here</a> to create an account.</p>
                </div>
            ) : (
                <p>{auth?.error?.response?.data?.message}</p>
            )}
        </div>
    );
}
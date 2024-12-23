import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { registerAndGeneratePin } from "../redux/Auth/Action";



const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    firstName: z.string().min(2, "First name must be at least 2 characters long"),
    lastName: z.string().min(2, "Last name must be at least 2 characters long"),
    dateOfBirth: z.string().date(),
})

export default function Register() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { auth } = useSelector((store) => store);

    const { form, handleSubmit, register } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            firstName: "",
            lastName: "",
            dateOfBirth: "",
        }
    })

    const handleRegister = (data) => {
        console.log("Register data", data);
        dispatch(registerAndGeneratePin(data));
        setTimeout(() => {
            !auth?.error && navigate("/verify-pin");
        }, 0);
    }

    return (
        <>
            <div className="mx-auto flex flex-col gap-2">
                <h1 className="pl-1">Register</h1>
                <span className="pl-1">
                    To register for an account, please enter the information requested
                    below.
                </span>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit(handleRegister)}>
                    <table cellPadding={4}>
                        <tbody>
                            <tr>
                                <td>Email Address</td>
                                <td>
                                    <input type="email" 
                                    name="email"
                                    {...register("email")}
                                    placeholder="Enter your email" required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>First Name</td>
                                <td>
                                    <input type="text" 
                                    name="firstName"
                                    {...register("firstName")}
                                    placeholder="Enter your first name" required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>
                                    <input type="text" 
                                    name="lastName"
                                    {...register("lastName")}
                                    placeholder="Enter your last name" required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Birthdate</td>
                                <td>
                                    <input type="date" 
                                    name="dateOfBirth"
                                    {...register("dateOfBirth")}
                                    required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="pl-1 pb-5">
                        <button className="border-none bg-[#5D4DC9] text-white rounded-sm py-1 px-4 font-bold" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </>
    );
}

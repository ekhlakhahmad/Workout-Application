import React from "react";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import { Link ,useNavigate} from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/goal");
	};
	return (
		<div className="w-[375px] flex flex-col shadow-sm p-4 rounded-b-xl bg-white gap-4">
			<h1 className="text-xl font-semibold">Welcome Back</h1>
			<form className="flex flex-col" onSubmit={handleSubmit}>
				<input
					className="p-2 my-4 border rounded-[12px] bg-[#F1F1F1] h-[50px] outline-none"
					type="email"
					placeholder="Email"
				/>
				<input
					className="px-2 pt-2 border rounded-[12px] bg-[#F1F1F1] h-[50px] outline-none"
					type="password"
					placeholder="Password"
				/>
				<p className="underline text-gray-500 cursor-pointer py-2">
					Forgot your password?
				</p>

				<input
					className="bg-[#7f97ff] py-2 mt-64 rounded-[12px] text-white h-[50px] outline-none text-[16px] font-semibold cursor-pointer"
					type="submit"
					value="Sign In"
				/>
			</form>
			<div className="flex justify-evenly">
				<div className="w-[155px]">_______________________</div>
				<p>Or</p>
				<div className="w-[155px]">_______________________</div>
			</div>
			<div className="flex justify-center gap-5">
				<button className="rounded-[8px] p-2 border w-[44px] h-[44px] items-center flex justify-center">
					<img src={google} alt="google" />
				</button>
				<button className="rounded-[8px] p-2 border w-[44px] h-[44px] items-center flex justify-center">
					<img src={facebook} alt="facebook" />
				</button>
			</div>
			<div className="flex justify-center">
				<p>Don’t have an account yet? </p>
				<Link to={"/signup"} className="text-[#93A9FF] underline">
					Create an account
				</Link>
			</div>
		</div>
	);
};

export default Login;
